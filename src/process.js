import axios from 'axios';
const CONFIG = require('./config.js');

/**
 * This function preps and makes a GET call to the MLB Stats API. This is needed to gather the data that will be 
 * later displayed
 * @param {Object} params - parameters to make GET request more specific
 * @param {String} endpoint - endpoint to specify which endpoint to make request to
 * @returns {Object} Get Response data is returned
 */
async function getGameData(params, endpoint) {
    const options = {
        method: 'GET',
        url: `https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/${endpoint}`,
        params,
        headers: {
            'X-RapidAPI-Key': CONFIG.apiKey,
            'X-RapidAPI-Host': CONFIG.hostname
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
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
    if (!gameOdds.error) {
        const { bet365: { awayTeamRunLine, homeTeamRunLine } } = gameOdds.body[Object.keys(gameOdds.body)[0]];
        const { away, home }  = game;
        
        if (awayTeamRunLine < homeTeamRunLine) {
            return away;
        } else if (homeTeamRunLine > awayTeamRunLine) {
            return home;
        }

        return 'No Projection';
    }
}

/**
 * This function checks to see that final game results are present in the game score data
 * These fields are not present if the game is in progress or hasnt started so we need to 
 * check before trying to access
 * @param {Object} gameScoreData - Object with the game's score information
 * @returns {Boolean} true if Win or Loss information is present OR false
 */
function hasWinner(gameScoreData) {
    if (gameScoreData.homeResult && gameScoreData.awayResult) {
        return true;
    }

    return false;
}

/**
 * This function calls hasWinner to confirm that homeResult and awayResult exist before using
 * those values to determine who won the current game. If those fields don't exist "No Winner Yet"
 * @param {Object} gameScoreData - Object with the game's score information
 * @returns {String} calculated winning teams abbreviation or "No Winner Yet" if still live
 */
function calculateWinner(gameScoreData) {
    if (hasWinner(gameScoreData)) {
        const {home, away, homeResult, awayResult} = gameScoreData;

        if (homeResult.includes("W")) {
            return home;
        } else if (awayResult.includes("W")) {
            return away;
        }  
    }

    return "No Winner Yet";
}

/**
 * This function takes the gameScoreObj and returns a new object with score, status, 
 * and winner if there is one. This is needed to grab the data we need and prep it for the ui
 * @param {Object} gameScoreObj - Object with the game's score information
 * @returns {Object} Object with game score, game status, and the calculated winner
 */
function getScore(gameScoreObj) {
    const gameScoreData = gameScoreObj.body[Object.keys(gameScoreObj.body)[0]];

    return {
        awayTeamScore: gameScoreData.lineScore ? gameScoreData.lineScore.away.R : "0",
        homeTeamScore: gameScoreData.lineScore ? gameScoreData.lineScore.home.R : "0",
        status: gameScoreData.gameStatus,
        winner: calculateWinner(gameScoreData)
    }
}

/**
 * This function makes calls to fetch, format, and prep the data 
 * for each game for the chosen date. This function gets all the data ready for the UI
 * @returns {Array} List of game Objects for the chosen date
 */
export async function createGameRows(date) {
    let rows = [];
    let gamesForDate = await getGameData({gameDate: date.format("YYYYMMDD")}, CONFIG.endpoint.schedule);

    if (typeof gamesForDate.body[0] !== "string") {
        await Promise.all(gamesForDate.body.map(async (game) => {
            const {gameID, away, home, gameTime} = game;
            const { awayTeamScore, homeTeamScore, status, winner } = getScore(await getGameData({gameID}, CONFIG.endpoint.scores));
            
            const gameData = {
                away,
                awayTeamScore,
                home,
                homeTeamScore,
                gameTime,
                projWinner: calculateProjection(await getGameData({gameID}, CONFIG.endpoint.odds), game), 
                status,
                winner
    
            }
    
            rows.push(gameData);
        }))
    }

    return rows;
}