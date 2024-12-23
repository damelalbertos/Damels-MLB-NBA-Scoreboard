import axios from "axios";
import * as constants from "./constants";

const CONFIG = require("./config.js");
const mlbData = require("./mlb_test.json");
const nbaData = require("./nba_test.json");

/**
 * This function preps and makes a GET call to the MLB Stats API. This is needed to gather the data that will be
 * later displayed
 * @param sport
 * @param {Object} params - parameters to make GET request more specific
 * @param {String} endpoint - endpoint to specify which endpoint to make request to
 * @returns {Object} Get Response data is returned
 */
async function getGameData(sport, params, endpoint) {
  const options = {
    method: "GET",
    url: `https://${CONFIG.hostname[sport]}/${endpoint}`,
    params,
    headers: {
      "X-RapidAPI-Key": CONFIG.apiKey,
      "X-RapidAPI-Host": CONFIG.hostname[sport]
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    await console.error(error);
  }
}

/**
 * This function takes the current game's betting odds and which ever of
 * the two teams has a smaller run line is the projected winner
 * @param {Object} gameOdds - Object with sports betting data
 * @param {Object} game - Object with general information about game
 * @returns {String} Projected winning team based on sports betting data OR No Projection if data is not available
 */
function calculateProjection(gameOdds, game) {
  if (!gameOdds.error && hasBettingOdds(gameOdds)) {
    const {
      bet365: { awayTeamRunLine, homeTeamRunLine }
    } = gameOdds.body[Object.keys(gameOdds.body)[0]];
    const { away, home } = game;

    if (awayTeamRunLine < homeTeamRunLine) {
      return away;
    } else if (homeTeamRunLine > awayTeamRunLine) {
      return home;
    }
  }

  return "No Projection";
}

/**
 * This function checks to see that the current games betting odds are present to actually
 * make the projection calculation
 * @param {Object} gameOddsData - Object with the game's betting odds information
 * @returns {Boolean} true if bet365 object is present OR false
 */
function hasBettingOdds(gameOddsData) {
  if (gameOddsData.bet365) {
    return true;
  }

  return false;
}

/**
 * This function checks to see that final game results are present in the game score data
 * These fields are not present if the game is in progress or hasnt started so we need to
 * check before trying to access
 * @param sport
 * @param {Object} gameScoreData - Object with the game's score information
 * @returns {Boolean} true if Win or Loss information is present OR false
 */
function hasWinner(sport, gameScoreData) {
  if (sport === constants.MLB) {
    if (gameScoreData.homeResult && gameScoreData.awayResult) {
      return true;
    }
  } else if (sport === constants.NBA) {
    if (gameScoreData.gameClock.includes("Final")) {
      return true;
    }
  }

  return false;
}

/**
 * This function calls hasWinner to confirm that homeResult and awayResult exist before using
 * those values to determine who won the current game. If those fields don't exist "No Winner Yet"
 * @param sport
 * @param {Object} gameScoreData - Object with the game's score information
 * @returns {String} calculated winning teams abbreviation or "No Winner Yet" if still live
 */
function calculateWinner(sport, gameScoreData) {
  if (hasWinner(sport, gameScoreData)) {
    if (sport === constants.MLB) {
      const { home, away, homeResult, awayResult } = gameScoreData;

      if (homeResult.includes("W")) {
        return home;
      } else if (awayResult.includes("W")) {
        return away;
      }
    } else if (sport === constants.NBA) {
      console.log(gameScoreData);
      const { home, away } = gameScoreData;
      const homePoints = parseInt(gameScoreData.homePts);
      const awayPoints = parseInt(gameScoreData.awayPts);

      if (homePoints > awayPoints) {
        return home;
      } else if (awayPoints > homePoints) {
        return away;
      }
    }
  }

  return "No Winner Yet";
}

/**
 * This function takes the gameScoreObj and returns a new object with score, status,
 * and winner if there is one. This is needed to grab the data we need and prep it for the ui
 * @param sport
 * @param {Object} gameScoreObj - Object with the game's score information
 * @returns {Object} Object with game score, game status, and the calculated winner
 */
function getScore(sport, gameScoreObj) {
  const gameScoreData = gameScoreObj.body[Object.keys(gameScoreObj.body)[0]];

  return {
    awayTeamScore:
      sport === constants.MLB
        ? gameScoreData.lineScore.away.R
        : sport === constants.NBA
          ? gameScoreData.awayPts
          : "0",
    homeTeamScore:
      sport === constants.MLB
        ? gameScoreData.lineScore.home.R
        : sport === constants.NBA
          ? gameScoreData.homePts
          : "0",
    gameTime: gameScoreData.gameTime,
    status:
      sport === constants.MLB
        ? gameScoreData.currentInning
        : sport === constants.NBA
          ? gameScoreData.gameClock
          : "",
    winner: calculateWinner(sport, gameScoreData)
  };
}

/**
 * This function makes calls to fetch, format, and prep the data
 * for each game for the chosen date. This function gets all the data ready for the UI
 * @returns {Array} List of game Objects for the chosen date
 */
export async function createGameRows(date, selectedSport) {
  // if (selectedSport === constants.MLB) {
  //     return mlbData;
  // } else if (selectedSport === constants.NBA) {
  //     return nbaData;
  // }
  let rows = [];
  let gamesForDate = await getGameData(selectedSport, { gameDate: date.format("YYYYMMDD") }, CONFIG.endpoint[selectedSport].schedule);

  if (typeof gamesForDate.body[0] !== "string") {
    await Promise.all(gamesForDate.body.map(async (game) => {
      const { gameID, away, home } = game;
      const score = getScore(selectedSport, await getGameData(selectedSport, { gameID }, CONFIG.endpoint[selectedSport].scores));
      const { awayTeamScore, homeTeamScore, status, winner, gameTime } = score;

      const gameData = {
        away,
        awayTeamScore,
        home,
        homeTeamScore,
        gameTime,
        //projWinner: calculateProjection(await getGameData({gameID}, CONFIG.endpoint.odds), game),
        status,
        winner

      };

      rows.push(gameData);
    }));
  }

  return rows;
}
