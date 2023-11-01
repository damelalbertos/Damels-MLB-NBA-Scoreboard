import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import './App.css';
import axios from 'axios';
import moment from "moment/moment";

    async function getTodaysGames() {
        const options = {
            method: 'GET',
            url: 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBGamesForDate',
            params: {
                gameDate: moment().format("YYYYMMDD")
            },
            headers: {
                'X-RapidAPI-Key': 'e2c07a0e32mshadbae2353ed1158p11c17bjsn44ad7796f9f6',
                'X-RapidAPI-Host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            // let response = {
            //     data: {
            //         "statusCode": 200,
            //         "body": [
            //             {
            //                 "gameID": "20230510_BOS@ATL",
            //                 "seasonType": "REGULAR_SEASON",
            //                 "away": "BOS",
            //                 "gameTime": "7:20p",
            //                 "gameDate": "20230510",
            //                 "teamIDHome": "2",
            //                 "teamIDAway": "4",
            //                 "home": "ATL"
            //             },
            //             {
            //                 "gameID": "20230510_NYM@CIN",
            //                 "seasonType": "REGULAR_SEASON",
            //                 "away": "NYM",
            //                 "gameTime": "6:40p",
            //                 "gameDate": "20230510",
            //                 "teamIDHome": "7",
            //                 "teamIDAway": "18",
            //                 "home": "CIN"
            //             },
            //             {
            //                 "gameID": "20230510_TOR@PHI",
            //                 "seasonType": "REGULAR_SEASON",
            //                 "away": "TOR",
            //                 "gameTime": "4:05p",
            //                 "gameDate": "20230510",
            //                 "teamIDHome": "21",
            //                 "teamIDAway": "29",
            //                 "home": "PHI"
            //             },
            //             {
            //                 "gameID": "20230510_MIA@ARI",
            //                 "seasonType": "REGULAR_SEASON",
            //                 "away": "MIA",
            //                 "gameTime": "3:40p",
            //                 "gameDate": "20230510",
            //                 "teamIDHome": "1",
            //                 "teamIDAway": "15",
            //                 "home": "ARI"
            //             },
            //             {
            //                 "gameID": "20230510_LAD@MIL",
            //                 "seasonType": "REGULAR_SEASON",
            //                 "away": "LAD",
            //                 "gameTime": "1:40p",
            //                 "gameDate": "20230510",
            //                 "teamIDHome": "16",
            //                 "teamIDAway": "14",
            //                 "home": "MIL"
            //             },
            //             {
            //                 "gameID": "20230510_TB@BAL",
            //                 "seasonType": "REGULAR_SEASON",
            //                 "away": "TB",
            //                 "gameTime": "6:35p",
            //                 "gameDate": "20230510",
            //                 "teamIDHome": "3",
            //                 "teamIDAway": "27",
            //                 "home": "BAL"
            //             },
            //             {
            //                 "gameID": "20230510_TEX@SEA",
            //                 "seasonType": "REGULAR_SEASON",
            //                 "away": "TEX",
            //                 "gameTime": "3:40p",
            //                 "gameDate": "20230510",
            //                 "teamIDHome": "25",
            //                 "teamIDAway": "28",
            //                 "home": "SEA"
            //             },
            //             {
            //                 "gameID": "20230510_CHW@KC",
            //                 "seasonType": "REGULAR_SEASON",
            //                 "away": "CHW",
            //                 "gameTime": "7:40p",
            //                 "gameDate": "20230510",
            //                 "teamIDHome": "12",
            //                 "teamIDAway": "6",
            //                 "home": "KC"
            //             },
            //             {
            //                 "gameID": "20230510_OAK@NYY",
            //                 "seasonType": "REGULAR_SEASON",
            //                 "away": "OAK",
            //                 "gameTime": "12:35p",
            //                 "gameDate": "20230510",
            //                 "teamIDHome": "19",
            //                 "teamIDAway": "20",
            //                 "home": "NYY"
            //             },
            //             {
            //                 "gameID": "20230510_WAS@SF",
            //                 "seasonType": "REGULAR_SEASON",
            //                 "away": "WAS",
            //                 "gameTime": "3:45p",
            //                 "gameDate": "20230510",
            //                 "teamIDHome": "24",
            //                 "teamIDAway": "30",
            //                 "home": "SF"
            //             },
            //             {
            //                 "gameID": "20230510_COL@PIT",
            //                 "seasonType": "REGULAR_SEASON",
            //                 "away": "COL",
            //                 "gameTime": "12:35p",
            //                 "gameDate": "20230510",
            //                 "teamIDHome": "22",
            //                 "teamIDAway": "9",
            //                 "home": "PIT"
            //             },
            //             {
            //                 "gameID": "20230510_STL@CHC",
            //                 "seasonType": "REGULAR_SEASON",
            //                 "away": "STL",
            //                 "gameTime": "7:40p",
            //                 "gameDate": "20230510",
            //                 "teamIDHome": "5",
            //                 "teamIDAway": "26",
            //                 "home": "CHC"
            //             },
            //             {
            //                 "gameID": "20230510_HOU@LAA",
            //                 "seasonType": "REGULAR_SEASON",
            //                 "away": "HOU",
            //                 "gameTime": "4:07p",
            //                 "gameDate": "20230510",
            //                 "teamIDHome": "13",
            //                 "teamIDAway": "11",
            //                 "home": "LAA"
            //             },
            //             {
            //                 "gameID": "20230510_SD@MIN",
            //                 "seasonType": "REGULAR_SEASON",
            //                 "away": "SD",
            //                 "gameTime": "7:40p",
            //                 "gameDate": "20230510",
            //                 "teamIDHome": "17",
            //                 "teamIDAway": "23",
            //                 "home": "MIN"
            //             },
            //             {
            //                 "gameID": "20230510_DET@CLE",
            //                 "seasonType": "REGULAR_SEASON",
            //                 "away": "DET",
            //                 "gameTime": "1:10p",
            //                 "gameDate": "20230510",
            //                 "teamIDHome": "8",
            //                 "teamIDAway": "10",
            //                 "home": "CLE"
            //             }
            //         ]
            //     }
            // };
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async function getGameOdds(gameId) {
        const options = {
            method: 'GET',
            url: 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBBettingOdds',
            params: {
                gameID: gameId,
            },
            headers: {
                'X-RapidAPI-Key': 'e2c07a0e32mshadbae2353ed1158p11c17bjsn44ad7796f9f6',
                'X-RapidAPI-Host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            // let response = {
            //     data: {
            //         "statusCode": 200,
            //         "body": {
            //             "20230703_ATL@CLE": {
            //                 "last_updated_e_time": "1688434690.05963",
            //                 "betmgm": {
            //                     "awayTeamRunLineOdds": "-1.5",
            //                     "homeTeamRunLine": "N/A",
            //                     "homeTeamRunLineOdds": "+1.5",
            //                     "awayTeamRunLine": "N/A"
            //                 },
            //                 "bet365": {
            //                     "totalUnder": "8.5",
            //                     "totalUnderOdds": "-105",
            //                     "awayTeamMLOdds": "-150",
            //                     "homeTeamMLOdds": "+130",
            //                     "totalOver": "8.5",
            //                     "totalOverOdds": "-115"
            //                 },
            //                 "gameDate": "20230703",
            //                 "wynnbet": {
            //                     "totalUnder": "9",
            //                     "totalOverOdds": "-105",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-115",
            //                     "awayTeamRunLineOdds": "-105",
            //                     "awayTeamMLOdds": "-149",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-115",
            //                     "homeTeamMLOdds": "+137",
            //                     "totalOver": "9"
            //                 },
            //                 "unibet": {
            //                     "totalUnder": "9",
            //                     "totalOverOdds": "-103",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-118",
            //                     "awayTeamRunLineOdds": "+107",
            //                     "awayTeamMLOdds": "-150",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-129",
            //                     "homeTeamMLOdds": "+128",
            //                     "totalOver": "9"
            //                 },
            //                 "teamIDHome": "8",
            //                 "teamIDAway": "2",
            //                 "homeTeam": "CLE",
            //                 "pointsbet": {
            //                     "totalUnder": "9",
            //                     "totalOverOdds": "-110",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-110",
            //                     "awayTeamRunLineOdds": "+110",
            //                     "awayTeamMLOdds": "-160",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-130",
            //                     "homeTeamMLOdds": "+130",
            //                     "totalOver": "9"
            //                 },
            //                 "betrivers": {
            //                     "totalUnder": "9",
            //                     "totalOverOdds": "-103",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-118",
            //                     "awayTeamRunLineOdds": "+107",
            //                     "awayTeamMLOdds": "-150",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-129",
            //                     "homeTeamMLOdds": "+128",
            //                     "totalOver": "9"
            //                 },
            //                 "caesars_sportsbook": {
            //                     "totalUnder": "9",
            //                     "totalOverOdds": "-105",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-115",
            //                     "awayTeamRunLineOdds": "-105",
            //                     "awayTeamMLOdds": "-165",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-115",
            //                     "homeTeamMLOdds": "+140",
            //                     "totalOver": "9"
            //                 },
            //                 "gameID": "20230703_ATL@CLE",
            //                 "awayTeam": "ATL",
            //                 "draftkings": {
            //                     "totalUnder": "9",
            //                     "totalOverOdds": "-105",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-115",
            //                     "awayTeamRunLineOdds": "even",
            //                     "awayTeamMLOdds": "-165",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-120",
            //                     "homeTeamMLOdds": "+140",
            //                     "totalOver": "9"
            //                 },
            //                 "playerProps": [
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+440",
            //                                 "one": "-130"
            //                             },
            //                             "bases": {
            //                                 "under": "+100",
            //                                 "over": "-130",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+550"
            //                             },
            //                             "runs": {
            //                                 "under": "-215",
            //                                 "over": "+160",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+215"
            //                             }
            //                         },
            //                         "playerID": "666310"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+320",
            //                                 "one": "-195"
            //                             },
            //                             "bases": {
            //                                 "under": "-180",
            //                                 "over": "+135",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+450"
            //                             },
            //                             "sbs": {
            //                                 "one": "+880"
            //                             },
            //                             "runs": {
            //                                 "under": "-165",
            //                                 "over": "+125",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+180"
            //                             }
            //                         },
            //                         "playerID": "592696"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+320",
            //                                 "one": "-215"
            //                             },
            //                             "bases": {
            //                                 "under": "-180",
            //                                 "over": "+135",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+550"
            //                             },
            //                             "runs": {
            //                                 "under": "-175",
            //                                 "over": "+130",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+170"
            //                             }
            //                         },
            //                         "playerID": "605137"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+310",
            //                                 "one": "-185"
            //                             },
            //                             "bases": {
            //                                 "under": "+135",
            //                                 "over": "-185",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+1350"
            //                             },
            //                             "sbs": {
            //                                 "one": "+470"
            //                             },
            //                             "runs": {
            //                                 "under": "-255",
            //                                 "over": "+185",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+230"
            //                             }
            //                         },
            //                         "playerID": "664702"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+290",
            //                                 "one": "-200"
            //                             },
            //                             "bases": {
            //                                 "under": "+155",
            //                                 "over": "-210",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+750"
            //                             },
            //                             "sbs": {
            //                                 "one": "+980"
            //                             },
            //                             "runs": {
            //                                 "under": "-170",
            //                                 "over": "+130",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+210"
            //                             }
            //                         },
            //                         "playerID": "606115"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+290",
            //                                 "one": "-220"
            //                             },
            //                             "bases": {
            //                                 "under": "-145",
            //                                 "over": "+110",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+310"
            //                             },
            //                             "runs": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+145"
            //                             }
            //                         },
            //                         "playerID": "542303"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+270",
            //                                 "one": "-240"
            //                             },
            //                             "bases": {
            //                                 "under": "-175",
            //                                 "over": "+130",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+1000"
            //                             },
            //                             "sbs": {
            //                                 "one": "+710"
            //                             },
            //                             "runs": {
            //                                 "under": "-220",
            //                                 "over": "+165",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+175"
            //                             }
            //                         },
            //                         "playerID": "686823"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+270",
            //                                 "one": "-230"
            //                             },
            //                             "bases": {
            //                                 "under": "-170",
            //                                 "over": "+130",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+550"
            //                             },
            //                             "sbs": {
            //                                 "one": "+260"
            //                             },
            //                             "runs": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+185"
            //                             }
            //                         },
            //                         "playerID": "671739"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+250",
            //                                 "one": "-230"
            //                             },
            //                             "bases": {
            //                                 "under": "-195",
            //                                 "over": "+145",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+850"
            //                             },
            //                             "sbs": {
            //                                 "one": "+450"
            //                             },
            //                             "runs": {
            //                                 "under": "-160",
            //                                 "over": "+120",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+195"
            //                             }
            //                         },
            //                         "playerID": "665926"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+250",
            //                                 "one": "-235"
            //                             },
            //                             "bases": {
            //                                 "under": "-155",
            //                                 "over": "+115",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+400"
            //                             },
            //                             "runs": {
            //                                 "under": "-145",
            //                                 "over": "+110",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+155"
            //                             }
            //                         },
            //                         "playerID": "669221"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+195",
            //                                 "one": "-230"
            //                             },
            //                             "bases": {
            //                                 "under": "-135",
            //                                 "over": "+100",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+370"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1250"
            //                             },
            //                             "runs": {
            //                                 "under": "-120",
            //                                 "over": "-110",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+125"
            //                             }
            //                         },
            //                         "playerID": "663586"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+230",
            //                                 "one": "-245"
            //                             },
            //                             "bases": {
            //                                 "under": "-115",
            //                                 "over": "-115",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+220"
            //                             },
            //                             "runs": {
            //                                 "under": "-105",
            //                                 "over": "-130",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+105"
            //                             }
            //                         },
            //                         "playerID": "621566"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+240",
            //                                 "one": "-270"
            //                             },
            //                             "bases": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+425"
            //                             },
            //                             "sbs": {
            //                                 "one": "+470"
            //                             },
            //                             "runs": {
            //                                 "under": "-135",
            //                                 "over": "+100",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+155"
            //                             }
            //                         },
            //                         "playerID": "608070"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+185",
            //                                 "one": "-250"
            //                             },
            //                             "bases": {
            //                                 "under": "-125",
            //                                 "over": "-105",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+450"
            //                             },
            //                             "sbs": {
            //                                 "one": "+415"
            //                             },
            //                             "runs": {
            //                                 "under": "-115",
            //                                 "over": "-115",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+130"
            //                             }
            //                         },
            //                         "playerID": "645277"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+185",
            //                                 "one": "-250"
            //                             },
            //                             "bases": {
            //                                 "under": "-125",
            //                                 "over": "-105",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+450"
            //                             },
            //                             "sbs": {
            //                                 "one": "+980"
            //                             },
            //                             "runs": {
            //                                 "under": "-145",
            //                                 "over": "+110",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+125"
            //                             }
            //                         },
            //                         "playerID": "647304"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+205",
            //                                 "one": "-270"
            //                             },
            //                             "bases": {
            //                                 "under": "-165",
            //                                 "over": "+125",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+800"
            //                             },
            //                             "sbs": {
            //                                 "one": "+600"
            //                             },
            //                             "runs": {
            //                                 "under": "-160",
            //                                 "over": "+120",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+175"
            //                             }
            //                         },
            //                         "playerID": "642708"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+185",
            //                                 "one": "-280"
            //                             },
            //                             "bases": {
            //                                 "under": "-155",
            //                                 "over": "+120",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+1100"
            //                             },
            //                             "sbs": {
            //                                 "one": "+675"
            //                             },
            //                             "runs": {
            //                                 "under": "-145",
            //                                 "over": "+110",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+230"
            //                             }
            //                         },
            //                         "playerID": "680757"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+150",
            //                                 "one": "-300"
            //                             },
            //                             "bases": {
            //                                 "under": "-105",
            //                                 "over": "-130",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+310"
            //                             },
            //                             "sbs": {
            //                                 "one": "+116"
            //                             },
            //                             "runs": {
            //                                 "under": "+130",
            //                                 "over": "-170",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+130"
            //                             }
            //                         },
            //                         "playerID": "660670"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hitsAllowed": {
            //                                 "under": "+600",
            //                                 "total": "6.5"
            //                             },
            //                             "strikeouts": {
            //                                 "under": "-105",
            //                                 "over": "-120",
            //                                 "total": "3.5"
            //                             },
            //                             "er": {
            //                                 "under": "-110",
            //                                 "over": "-125",
            //                                 "total": "2.5"
            //                             }
            //                         },
            //                         "playerID": "693821"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hitsAllowed": {
            //                                 "under": "+1000",
            //                                 "total": "5.5"
            //                             },
            //                             "strikeouts": {
            //                                 "under": "+100",
            //                                 "over": "-130",
            //                                 "total": "4.5"
            //                             },
            //                             "er": {
            //                                 "under": "-165",
            //                                 "over": "+115",
            //                                 "total": "3.5"
            //                             }
            //                         },
            //                         "playerID": "668909"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "bases": {
            //                                 "total": "0.5"
            //                             },
            //                             "runs": {
            //                                 "total": "0.5"
            //                             }
            //                         },
            //                         "playerID": "595956"
            //                     }
            //                 ]
            //             },
            //             "20230703_BAL@NYY": {
            //                 "last_updated_e_time": "1688435881.6013556",
            //                 "bet365": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-115",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-105",
            //                     "awayTeamRunLineOdds": "+145",
            //                     "awayTeamMLOdds": "-115",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-165",
            //                     "homeTeamMLOdds": "-105",
            //                     "totalOver": "8.5"
            //                 },
            //                 "gameDate": "20230703",
            //                 "wynnbet": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-120",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-110",
            //                     "awayTeamRunLineOdds": "+135",
            //                     "awayTeamMLOdds": "-120",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-179",
            //                     "homeTeamMLOdds": "-110",
            //                     "totalOver": "8.5"
            //                 },
            //                 "unibet": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-117",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-104",
            //                     "awayTeamRunLineOdds": "+150",
            //                     "awayTeamMLOdds": "-109",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-186",
            //                     "homeTeamMLOdds": "-107",
            //                     "totalOver": "8.5"
            //                 },
            //                 "teamIDHome": "19",
            //                 "teamIDAway": "3",
            //                 "homeTeam": "NYY",
            //                 "pointsbet": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-110",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-110",
            //                     "awayTeamRunLineOdds": "+150",
            //                     "awayTeamMLOdds": "-115",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-180",
            //                     "homeTeamMLOdds": "-105",
            //                     "totalOver": "8.5"
            //                 },
            //                 "betrivers": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-117",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-104",
            //                     "awayTeamRunLineOdds": "+150",
            //                     "awayTeamMLOdds": "-109",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-186",
            //                     "homeTeamMLOdds": "-107",
            //                     "totalOver": "8.5"
            //                 },
            //                 "caesars_sportsbook": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-120",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "even",
            //                     "awayTeamRunLineOdds": "+143",
            //                     "awayTeamMLOdds": "-115",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-170",
            //                     "homeTeamMLOdds": "-105",
            //                     "totalOver": "8.5"
            //                 },
            //                 "gameID": "20230703_BAL@NYY",
            //                 "awayTeam": "BAL",
            //                 "draftkings": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-110",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-110",
            //                     "awayTeamRunLineOdds": "+155",
            //                     "awayTeamMLOdds": "-115",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-180",
            //                     "homeTeamMLOdds": "-105",
            //                     "totalOver": "8.5"
            //                 },
            //                 "playerProps": [
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+320",
            //                                 "one": "-135"
            //                             },
            //                             "bases": {
            //                                 "under": "+100",
            //                                 "over": "-135",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+600"
            //                             },
            //                             "sbs": {
            //                                 "one": "+775"
            //                             },
            //                             "runs": {
            //                                 "under": "-225",
            //                                 "over": "+165",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+225"
            //                             }
            //                         },
            //                         "playerID": "543305"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+390",
            //                                 "one": "-145"
            //                             },
            //                             "bases": {
            //                                 "under": "+110",
            //                                 "over": "-145",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+450"
            //                             },
            //                             "runs": {
            //                                 "under": "-225",
            //                                 "over": "+165",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+195"
            //                             }
            //                         },
            //                         "playerID": "543309"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+370",
            //                                 "one": "-145"
            //                             },
            //                             "bases": {
            //                                 "under": "+110",
            //                                 "over": "-145",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+425"
            //                             },
            //                             "runs": {
            //                                 "under": "-185",
            //                                 "over": "+135",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+180"
            //                             }
            //                         },
            //                         "playerID": "519203"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+350",
            //                                 "one": "-155"
            //                             },
            //                             "bases": {
            //                                 "under": "+115",
            //                                 "over": "-155",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+650"
            //                             },
            //                             "sbs": {
            //                                 "one": "+260"
            //                             },
            //                             "runs": {
            //                                 "under": "-225",
            //                                 "over": "+165",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+230"
            //                             }
            //                         },
            //                         "playerID": "622761"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+360",
            //                                 "one": "-170"
            //                             },
            //                             "bases": {
            //                                 "under": "+125",
            //                                 "over": "-170",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+330"
            //                             },
            //                             "runs": {
            //                                 "under": "-165",
            //                                 "over": "+125",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+175"
            //                             }
            //                         },
            //                         "playerID": "518626"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+360",
            //                                 "one": "-170"
            //                             },
            //                             "bases": {
            //                                 "under": "+130",
            //                                 "over": "-170",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+475"
            //                             },
            //                             "sbs": {
            //                                 "one": "+470"
            //                             },
            //                             "runs": {
            //                                 "under": "-190",
            //                                 "over": "+140",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+200"
            //                             }
            //                         },
            //                         "playerID": "683011"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+270",
            //                                 "one": "-185"
            //                             },
            //                             "bases": {
            //                                 "under": "+125",
            //                                 "over": "-170",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+950"
            //                             },
            //                             "sbs": {
            //                                 "one": "+550"
            //                             },
            //                             "runs": {
            //                                 "under": "-255",
            //                                 "over": "+185",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+215"
            //                             }
            //                         },
            //                         "playerID": "624428"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+300",
            //                                 "one": "-190"
            //                             },
            //                             "bases": {
            //                                 "under": "-180",
            //                                 "over": "+135",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+475"
            //                             },
            //                             "sbs": {
            //                                 "one": "+350"
            //                             },
            //                             "runs": {
            //                                 "under": "-185",
            //                                 "over": "+140",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+185"
            //                             }
            //                         },
            //                         "playerID": "656775"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+290",
            //                                 "one": "-210"
            //                             },
            //                             "bases": {
            //                                 "under": "-150",
            //                                 "over": "+115",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+250"
            //                             },
            //                             "runs": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+135"
            //                             }
            //                         },
            //                         "playerID": "519317"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+300",
            //                                 "one": "-235"
            //                             },
            //                             "bases": {
            //                                 "under": "-205",
            //                                 "over": "+150",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+800"
            //                             },
            //                             "sbs": {
            //                                 "one": "+360"
            //                             },
            //                             "runs": {
            //                                 "under": "-215",
            //                                 "over": "+160",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+230"
            //                             }
            //                         },
            //                         "playerID": "643396"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+250",
            //                                 "one": "-215"
            //                             },
            //                             "bases": {
            //                                 "under": "-175",
            //                                 "over": "+130",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+450"
            //                             },
            //                             "sbs": {
            //                                 "one": "+500"
            //                             },
            //                             "runs": {
            //                                 "under": "-165",
            //                                 "over": "+125",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+185"
            //                             }
            //                         },
            //                         "playerID": "664056"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+210",
            //                                 "one": "-210"
            //                             },
            //                             "bases": {
            //                                 "under": "-165",
            //                                 "over": "+125",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+370"
            //                             },
            //                             "sbs": {
            //                                 "one": "+680"
            //                             },
            //                             "runs": {
            //                                 "under": "-135",
            //                                 "over": "+105",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+180"
            //                             }
            //                         },
            //                         "playerID": "683002"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+250",
            //                                 "one": "-240"
            //                             },
            //                             "bases": {
            //                                 "under": "-130",
            //                                 "over": "+100",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+245"
            //                             },
            //                             "runs": {
            //                                 "under": "-125",
            //                                 "over": "-110",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+120"
            //                             }
            //                         },
            //                         "playerID": "623993"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+230",
            //                                 "one": "-210"
            //                             },
            //                             "bases": {
            //                                 "under": "-205",
            //                                 "over": "+150",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+600"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1300"
            //                             },
            //                             "runs": {
            //                                 "under": "-185",
            //                                 "over": "+135",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+235"
            //                             }
            //                         },
            //                         "playerID": "602104"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+260",
            //                                 "one": "-220"
            //                             },
            //                             "bases": {
            //                                 "under": "-155",
            //                                 "over": "+115",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+310"
            //                             },
            //                             "runs": {
            //                                 "under": "-150",
            //                                 "over": "+115",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+160"
            //                             }
            //                         },
            //                         "playerID": "656811"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+240",
            //                                 "one": "-235"
            //                             },
            //                             "bases": {
            //                                 "under": "-165",
            //                                 "over": "+125",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+500"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1350"
            //                             },
            //                             "runs": {
            //                                 "under": "-145",
            //                                 "over": "+110",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+195"
            //                             }
            //                         },
            //                         "playerID": "668939"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+240",
            //                                 "one": "-240"
            //                             },
            //                             "bases": {
            //                                 "under": "-165",
            //                                 "over": "+125",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+390"
            //                             },
            //                             "sbs": {
            //                                 "one": "+790"
            //                             },
            //                             "runs": {
            //                                 "under": "-130",
            //                                 "over": "-105",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+190"
            //                             }
            //                         },
            //                         "playerID": "650402"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+210",
            //                                 "one": "-270"
            //                             },
            //                             "bases": {
            //                                 "under": "-180",
            //                                 "over": "+135",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+600"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1200"
            //                             },
            //                             "runs": {
            //                                 "under": "-135",
            //                                 "over": "+100",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+230"
            //                             }
            //                         },
            //                         "playerID": "518934"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "strikeouts": {
            //                                 "under": "-160",
            //                                 "over": "+120",
            //                                 "total": "5.5"
            //                             },
            //                             "er": {
            //                                 "under": "-125",
            //                                 "over": "-115",
            //                                 "total": "2.5"
            //                             }
            //                         },
            //                         "playerID": "593334"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "strikeouts": {
            //                                 "under": "-130",
            //                                 "over": "+100",
            //                                 "total": "5.5"
            //                             },
            //                             "er": {
            //                                 "under": "-105",
            //                                 "over": "-135",
            //                                 "total": "2.5"
            //                             }
            //                         },
            //                         "playerID": "669330"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "bases": {
            //                                 "total": "1.5"
            //                             },
            //                             "runs": {
            //                                 "total": "0.5"
            //                             }
            //                         },
            //                         "playerID": "669720"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "bases": {
            //                                 "total": "0.5"
            //                             },
            //                             "runs": {
            //                                 "total": "0.5"
            //                             }
            //                         },
            //                         "playerID": "641343"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "bases": {
            //                                 "total": "0.5"
            //                             },
            //                             "runs": {
            //                                 "total": "0.5"
            //                             }
            //                         },
            //                         "playerID": "641856"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "bases": {
            //                                 "total": "0.5"
            //                             },
            //                             "runs": {
            //                                 "total": "0.5"
            //                             }
            //                         },
            //                         "playerID": "624431"
            //                     }
            //                 ]
            //             },
            //             "20230703_CHC@MIL": {
            //                 "last_updated_e_time": "1688418486.4598048",
            //                 "bet365": {
            //                     "totalUnder": "9",
            //                     "totalOverOdds": "-105",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-115",
            //                     "awayTeamRunLineOdds": "+155",
            //                     "awayTeamMLOdds": "-105",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-175",
            //                     "homeTeamMLOdds": "-115",
            //                     "totalOver": "9"
            //                 },
            //                 "gameDate": "20230703",
            //                 "wynnbet": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-135",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "+105",
            //                     "awayTeamRunLineOdds": "-233",
            //                     "awayTeamMLOdds": "-106",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+175",
            //                     "homeTeamMLOdds": "-104",
            //                     "totalOver": "8.5"
            //                 },
            //                 "unibet": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-122",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "even",
            //                     "awayTeamRunLineOdds": "+150",
            //                     "awayTeamMLOdds": "-108",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-182",
            //                     "homeTeamMLOdds": "-109",
            //                     "totalOver": "8.5"
            //                 },
            //                 "teamIDHome": "16",
            //                 "teamIDAway": "5",
            //                 "homeTeam": "MIL",
            //                 "pointsbet": {
            //                     "totalUnder": "9",
            //                     "totalOverOdds": "-105",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-115",
            //                     "awayTeamRunLineOdds": "+140",
            //                     "awayTeamMLOdds": "-110",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-170",
            //                     "homeTeamMLOdds": "-110",
            //                     "totalOver": "9"
            //                 },
            //                 "betrivers": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-121",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "+102",
            //                     "awayTeamRunLineOdds": "+150",
            //                     "awayTeamMLOdds": "-108",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-182",
            //                     "homeTeamMLOdds": "-109",
            //                     "totalOver": "8.5"
            //                 },
            //                 "caesars_sportsbook": {
            //                     "totalUnder": "9",
            //                     "totalOverOdds": "-110",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-110",
            //                     "awayTeamRunLineOdds": "+143",
            //                     "awayTeamMLOdds": "-110",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-170",
            //                     "homeTeamMLOdds": "-110",
            //                     "totalOver": "9"
            //                 },
            //                 "gameID": "20230703_CHC@MIL",
            //                 "awayTeam": "CHC",
            //                 "draftkings": {
            //                     "totalUnder": "9",
            //                     "totalOverOdds": "-105",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-115",
            //                     "awayTeamRunLineOdds": "+145",
            //                     "awayTeamMLOdds": "-115",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-170",
            //                     "homeTeamMLOdds": "-105",
            //                     "totalOver": "9"
            //                 },
            //                 "playerProps": [
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+340",
            //                                 "one": "-115"
            //                             },
            //                             "bases": {
            //                                 "under": "-115",
            //                                 "over": "-115",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+950"
            //                             },
            //                             "runs": {
            //                                 "under": "-320",
            //                                 "over": "+225",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+275"
            //                             }
            //                         },
            //                         "playerID": "571466"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "one": "-145"
            //                             },
            //                             "bases": {
            //                                 "under": "+110",
            //                                 "over": "-145",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+550"
            //                             },
            //                             "runs": {
            //                                 "under": "-200",
            //                                 "over": "+150",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+220"
            //                             }
            //                         },
            //                         "playerID": "605119"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+400",
            //                                 "one": "-140"
            //                             },
            //                             "bases": {
            //                                 "under": "+105",
            //                                 "over": "-140",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+425"
            //                             },
            //                             "sbs": {
            //                                 "one": "+500"
            //                             },
            //                             "runs": {
            //                                 "under": "-180",
            //                                 "over": "+135",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+195"
            //                             }
            //                         },
            //                         "playerID": "686894"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+330",
            //                                 "one": "-155"
            //                             },
            //                             "bases": {
            //                                 "under": "+120",
            //                                 "over": "-155",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+650"
            //                             },
            //                             "runs": {
            //                                 "under": "-225",
            //                                 "over": "+165",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+225"
            //                             }
            //                         },
            //                         "playerID": "605170"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+390",
            //                                 "one": "-165"
            //                             },
            //                             "bases": {
            //                                 "under": "+120",
            //                                 "over": "-165",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+850"
            //                             },
            //                             "sbs": {
            //                                 "one": "+290"
            //                             },
            //                             "runs": {
            //                                 "under": "-195",
            //                                 "over": "+145",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+250"
            //                             }
            //                         },
            //                         "playerID": "668930"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+220",
            //                                 "one": "-160"
            //                             },
            //                             "bases": {
            //                                 "under": "+120",
            //                                 "over": "-160",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+650"
            //                             },
            //                             "sbs": {
            //                                 "one": "+670"
            //                             },
            //                             "runs": {
            //                                 "under": "-225",
            //                                 "over": "+160",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+245"
            //                             }
            //                         },
            //                         "playerID": "655316"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+160",
            //                                 "one": "-180"
            //                             },
            //                             "bases": {
            //                                 "under": "+125",
            //                                 "over": "-165",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+600"
            //                             },
            //                             "sbs": {
            //                                 "one": "+670"
            //                             },
            //                             "runs": {
            //                                 "under": "-210",
            //                                 "over": "+155",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+210"
            //                             }
            //                         },
            //                         "playerID": "663368"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+290",
            //                                 "one": "-165"
            //                             },
            //                             "bases": {
            //                                 "under": "+125",
            //                                 "over": "-165",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+350"
            //                             },
            //                             "sbs": {
            //                                 "one": "+980"
            //                             },
            //                             "runs": {
            //                                 "under": "-170",
            //                                 "over": "+125",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+160"
            //                             }
            //                         },
            //                         "playerID": "642715"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+350",
            //                                 "one": "-165"
            //                             },
            //                             "bases": {
            //                                 "under": "+120",
            //                                 "over": "-165",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+475"
            //                             },
            //                             "sbs": {
            //                                 "one": "+375"
            //                             },
            //                             "runs": {
            //                                 "under": "-180",
            //                                 "over": "+135",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+180"
            //                             }
            //                         },
            //                         "playerID": "641355"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+200",
            //                                 "one": "-175"
            //                             },
            //                             "bases": {
            //                                 "under": "+130",
            //                                 "over": "-175",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+390"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1020"
            //                             },
            //                             "runs": {
            //                                 "under": "-160",
            //                                 "over": "+120",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+145"
            //                             }
            //                         },
            //                         "playerID": "676724"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+270",
            //                                 "one": "-190"
            //                             },
            //                             "bases": {
            //                                 "under": "+140",
            //                                 "over": "-190",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+450"
            //                             },
            //                             "sbs": {
            //                                 "one": "+550"
            //                             },
            //                             "runs": {
            //                                 "under": "-185",
            //                                 "over": "+135",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+185"
            //                             }
            //                         },
            //                         "playerID": "666624"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+270",
            //                                 "one": "-210"
            //                             },
            //                             "bases": {
            //                                 "under": "-200",
            //                                 "over": "+150",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+600"
            //                             },
            //                             "sbs": {
            //                                 "one": "+500"
            //                             },
            //                             "runs": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+220"
            //                             }
            //                         },
            //                         "playerID": "643565"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+240",
            //                                 "one": "-200"
            //                             },
            //                             "bases": {
            //                                 "under": "-175",
            //                                 "over": "+135",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+390"
            //                             },
            //                             "sbs": {
            //                                 "one": "+575"
            //                             },
            //                             "runs": {
            //                                 "under": "-145",
            //                                 "over": "+110",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+145"
            //                             }
            //                         },
            //                         "playerID": "664023"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+210",
            //                                 "one": "-210"
            //                             },
            //                             "bases": {
            //                                 "under": "-205",
            //                                 "over": "+155",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+650"
            //                             },
            //                             "sbs": {
            //                                 "one": "+670"
            //                             },
            //                             "runs": {
            //                                 "under": "-205",
            //                                 "over": "+155",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+170"
            //                             }
            //                         },
            //                         "playerID": "680911"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+230",
            //                                 "one": "-240"
            //                             },
            //                             "bases": {
            //                                 "under": "-230",
            //                                 "over": "+170",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+1300"
            //                             },
            //                             "sbs": {
            //                                 "one": "+250"
            //                             },
            //                             "runs": {
            //                                 "under": "-215",
            //                                 "over": "+160",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+255"
            //                             }
            //                         },
            //                         "playerID": "663611"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+220",
            //                                 "one": "-240"
            //                             },
            //                             "bases": {
            //                                 "under": "-170",
            //                                 "over": "+125",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+475"
            //                             },
            //                             "sbs": {
            //                                 "one": "+710"
            //                             },
            //                             "runs": {
            //                                 "under": "-160",
            //                                 "over": "+120",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+175"
            //                             }
            //                         },
            //                         "playerID": "621020"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+200",
            //                                 "one": "-255"
            //                             },
            //                             "bases": {
            //                                 "under": "-155",
            //                                 "over": "+115",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+330"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1400"
            //                             },
            //                             "runs": {
            //                                 "under": "-115",
            //                                 "over": "-115",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+165"
            //                             }
            //                         },
            //                         "playerID": "661388"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+170",
            //                                 "one": "-310"
            //                             },
            //                             "bases": {
            //                                 "under": "-145",
            //                                 "over": "+110",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+900"
            //                             },
            //                             "sbs": {
            //                                 "one": "+188"
            //                             },
            //                             "runs": {
            //                                 "under": "-135",
            //                                 "over": "+105",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+200"
            //                             }
            //                         },
            //                         "playerID": "663538"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+205",
            //                                 "one": "-320"
            //                             },
            //                             "bases": {
            //                                 "under": "-155",
            //                                 "over": "+115",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+475"
            //                             },
            //                             "sbs": {
            //                                 "one": "+270"
            //                             },
            //                             "runs": {
            //                                 "under": "-145",
            //                                 "over": "+105",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+185"
            //                             }
            //                         },
            //                         "playerID": "592885"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "strikeouts": {
            //                                 "under": "+120",
            //                                 "over": "-160",
            //                                 "total": "4.5"
            //                             }
            //                         },
            //                         "playerID": "592767"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "bases": {
            //                                 "total": "1.5"
            //                             },
            //                             "sbs": {
            //                                 "one": "+710"
            //                             },
            //                             "runs": {
            //                                 "total": "0.5"
            //                             }
            //                         },
            //                         "playerID": "673548"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "strikeouts": {
            //                                 "under": "-160",
            //                                 "over": "+120",
            //                                 "total": "4.5"
            //                             },
            //                             "er": {
            //                                 "under": "-130",
            //                                 "over": "-110",
            //                                 "total": "2.5"
            //                             }
            //                         },
            //                         "playerID": "527054"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "bases": {
            //                                 "total": "0.5"
            //                             },
            //                             "runs": {
            //                                 "total": "0.5"
            //                             }
            //                         },
            //                         "playerID": "543228"
            //                     }
            //                 ]
            //             },
            //             "20230703_CIN@WAS": {
            //                 "last_updated_e_time": "1688432884.7557857",
            //                 "bet365": {
            //                     "totalUnder": "10.5",
            //                     "totalOverOdds": "-115",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-105",
            //                     "awayTeamRunLineOdds": "+140",
            //                     "awayTeamMLOdds": "-115",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-160",
            //                     "homeTeamMLOdds": "-105",
            //                     "totalOver": "10.5"
            //                 },
            //                 "gameDate": "20230703",
            //                 "wynnbet": {
            //                     "totalUnder": "10.5",
            //                     "totalOverOdds": "-115",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-115",
            //                     "awayTeamRunLineOdds": "+135",
            //                     "awayTeamMLOdds": "-115",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-179",
            //                     "homeTeamMLOdds": "+105",
            //                     "totalOver": "10.5"
            //                 },
            //                 "unibet": {
            //                     "totalUnder": "10.5",
            //                     "totalOverOdds": "-110",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-109",
            //                     "awayTeamRunLineOdds": "+130",
            //                     "awayTeamMLOdds": "-117",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-157",
            //                     "homeTeamMLOdds": "even",
            //                     "totalOver": "10.5"
            //                 },
            //                 "teamIDHome": "30",
            //                 "teamIDAway": "7",
            //                 "homeTeam": "WAS",
            //                 "pointsbet": {
            //                     "totalUnder": "10.5",
            //                     "totalOverOdds": "-110",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-110",
            //                     "awayTeamRunLineOdds": "+130",
            //                     "awayTeamMLOdds": "-115",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-160",
            //                     "homeTeamMLOdds": "-105",
            //                     "totalOver": "10.5"
            //                 },
            //                 "betrivers": {
            //                     "totalUnder": "10.5",
            //                     "totalOverOdds": "-110",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-109",
            //                     "awayTeamRunLineOdds": "+130",
            //                     "awayTeamMLOdds": "-117",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-157",
            //                     "homeTeamMLOdds": "even",
            //                     "totalOver": "10.5"
            //                 },
            //                 "caesars_sportsbook": {
            //                     "totalUnder": "10.5",
            //                     "totalOverOdds": "-115",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-105",
            //                     "awayTeamRunLineOdds": "+135",
            //                     "awayTeamMLOdds": "-115",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-160",
            //                     "homeTeamMLOdds": "-105",
            //                     "totalOver": "10.5"
            //                 },
            //                 "gameID": "20230703_CIN@WAS",
            //                 "awayTeam": "CIN",
            //                 "draftkings": {
            //                     "totalUnder": "10.5",
            //                     "totalOverOdds": "-110",
            //                     "awayTeamRunLine": "-1.5",
            //                     "totalUnderOdds": "-110",
            //                     "awayTeamRunLineOdds": "+135",
            //                     "awayTeamMLOdds": "-125",
            //                     "homeTeamRunLine": "+1.5",
            //                     "homeTeamRunLineOdds": "-155",
            //                     "homeTeamMLOdds": "+105",
            //                     "totalOver": "10.5"
            //                 },
            //                 "playerProps": [
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+400",
            //                                 "one": "-150"
            //                             },
            //                             "bases": {
            //                                 "under": "+115",
            //                                 "over": "-150",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+550"
            //                             },
            //                             "sbs": {
            //                                 "one": "+470"
            //                             },
            //                             "runs": {
            //                                 "under": "-160",
            //                                 "over": "+120",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+180"
            //                             }
            //                         },
            //                         "playerID": "666181"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+310",
            //                                 "one": "-165"
            //                             },
            //                             "bases": {
            //                                 "under": "+125",
            //                                 "over": "-165",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+700"
            //                             },
            //                             "sbs": {
            //                                 "one": "+680"
            //                             },
            //                             "runs": {
            //                                 "under": "-185",
            //                                 "over": "+135",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+215"
            //                             }
            //                         },
            //                         "playerID": "656537"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+300",
            //                                 "one": "-235"
            //                             },
            //                             "bases": {
            //                                 "under": "-165",
            //                                 "over": "+125",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+500"
            //                             },
            //                             "sbs": {
            //                                 "one": "+580"
            //                             },
            //                             "runs": {
            //                                 "under": "-130",
            //                                 "over": "+100",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+155"
            //                             }
            //                         },
            //                         "playerID": "668715"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+280",
            //                                 "one": "-230"
            //                             },
            //                             "bases": {
            //                                 "under": "-130",
            //                                 "over": "+100",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+360"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1450"
            //                             },
            //                             "runs": {
            //                                 "under": "-110",
            //                                 "over": "-125",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+105"
            //                             }
            //                         },
            //                         "playerID": "458015"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+250",
            //                                 "one": "-225"
            //                             },
            //                             "bases": {
            //                                 "under": "-200",
            //                                 "over": "+150",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+650"
            //                             },
            //                             "runs": {
            //                                 "under": "-165",
            //                                 "over": "+125",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+175"
            //                             }
            //                         },
            //                         "playerID": "663886"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+260",
            //                                 "one": "-260"
            //                             },
            //                             "bases": {
            //                                 "under": "-150",
            //                                 "over": "+115",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+400"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1400"
            //                             },
            //                             "runs": {
            //                                 "under": "-130",
            //                                 "over": "+100",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+150"
            //                             }
            //                         },
            //                         "playerID": "600869"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+240",
            //                                 "one": "-220"
            //                             },
            //                             "bases": {
            //                                 "under": "-190",
            //                                 "over": "+140",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+700"
            //                             },
            //                             "runs": {
            //                                 "under": "-190",
            //                                 "over": "+140",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+185"
            //                             }
            //                         },
            //                         "playerID": "572816"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+260",
            //                                 "one": "-265"
            //                             },
            //                             "bases": {
            //                                 "under": "-155",
            //                                 "over": "+115",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+500"
            //                             },
            //                             "sbs": {
            //                                 "one": "+350"
            //                             },
            //                             "runs": {
            //                                 "under": "-110",
            //                                 "over": "-120",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+125"
            //                             }
            //                         },
            //                         "playerID": "641584"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+240",
            //                                 "one": "-280"
            //                             },
            //                             "bases": {
            //                                 "under": "-150",
            //                                 "over": "+115",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+500"
            //                             },
            //                             "sbs": {
            //                                 "one": "+550"
            //                             },
            //                             "runs": {
            //                                 "under": "-105",
            //                                 "over": "-125",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+145"
            //                             }
            //                         },
            //                         "playerID": "663697"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+240",
            //                                 "one": "-270"
            //                             },
            //                             "bases": {
            //                                 "under": "-165",
            //                                 "over": "+125",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+600"
            //                             },
            //                             "sbs": {
            //                                 "one": "+580"
            //                             },
            //                             "runs": {
            //                                 "under": "-175",
            //                                 "over": "+130",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+190"
            //                             }
            //                         },
            //                         "playerID": "682928"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+170",
            //                                 "one": "-265"
            //                             },
            //                             "bases": {
            //                                 "under": "-155",
            //                                 "over": "+115",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+600"
            //                             },
            //                             "sbs": {
            //                                 "one": "+285"
            //                             },
            //                             "runs": {
            //                                 "under": "-120",
            //                                 "over": "-110",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+190"
            //                             }
            //                         },
            //                         "playerID": "670770"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+185",
            //                                 "one": "-250"
            //                             },
            //                             "bases": {
            //                                 "under": "-135",
            //                                 "over": "+105",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+500"
            //                             },
            //                             "runs": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+125"
            //                             }
            //                         },
            //                         "playerID": "642086"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+185",
            //                                 "one": "-265"
            //                             },
            //                             "bases": {
            //                                 "under": "-160",
            //                                 "over": "+120",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+500"
            //                             },
            //                             "runs": {
            //                                 "under": "-155",
            //                                 "over": "+115",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+155"
            //                             }
            //                         },
            //                         "playerID": "660688"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+145",
            //                                 "one": "-300"
            //                             },
            //                             "bases": {
            //                                 "under": "-130",
            //                                 "over": "-105",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+425"
            //                             },
            //                             "sbs": {
            //                                 "one": "+450"
            //                             },
            //                             "runs": {
            //                                 "under": "-105",
            //                                 "over": "-125",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+145"
            //                             }
            //                         },
            //                         "playerID": "680574"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+170",
            //                                 "one": "-280"
            //                             },
            //                             "bases": {
            //                                 "under": "-120",
            //                                 "over": "-115",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+370"
            //                             },
            //                             "sbs": {
            //                                 "one": "+126"
            //                             },
            //                             "runs": {
            //                                 "under": "-105",
            //                                 "over": "-130",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+100"
            //                             }
            //                         },
            //                         "playerID": "682829"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+160",
            //                                 "one": "-280"
            //                             },
            //                             "bases": {
            //                                 "under": "-135",
            //                                 "over": "+100",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+500"
            //                             },
            //                             "runs": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+135"
            //                             }
            //                         },
            //                         "playerID": "608841"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+155",
            //                                 "one": "-290"
            //                             },
            //                             "bases": {
            //                                 "under": "-110",
            //                                 "over": "-125",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+360"
            //                             },
            //                             "sbs": {
            //                                 "one": "+750"
            //                             },
            //                             "runs": {
            //                                 "under": "+100",
            //                                 "over": "-130",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+150"
            //                             }
            //                         },
            //                         "playerID": "657041"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+125",
            //                                 "one": "-350"
            //                             },
            //                             "bases": {
            //                                 "under": "-105",
            //                                 "over": "-125",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+600"
            //                             },
            //                             "sbs": {
            //                                 "one": "+900"
            //                             },
            //                             "runs": {
            //                                 "under": "-110",
            //                                 "over": "-120",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+160"
            //                             }
            //                         },
            //                         "playerID": "671277"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "strikeouts": {
            //                                 "under": "-165",
            //                                 "over": "+120",
            //                                 "total": "4.5"
            //                             },
            //                             "er": {
            //                                 "under": "+115",
            //                                 "over": "-160",
            //                                 "total": "2.5"
            //                             }
            //                         },
            //                         "playerID": "663623"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "strikeouts": {
            //                                 "under": "-145",
            //                                 "over": "+110",
            //                                 "total": "3.5"
            //                             },
            //                             "er": {
            //                                 "under": "-160",
            //                                 "over": "+115",
            //                                 "total": "3.5"
            //                             }
            //                         },
            //                         "playerID": "596133"
            //                     }
            //                 ]
            //             },
            //             "20230703_HOU@TEX": {
            //                 "last_updated_e_time": "1688418842.6414769",
            //                 "bet365": {
            //                     "totalUnder": "9",
            //                     "totalOverOdds": "-125",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "+105",
            //                     "awayTeamRunLineOdds": "-160",
            //                     "awayTeamMLOdds": "+120",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+140",
            //                     "homeTeamMLOdds": "-140",
            //                     "totalOver": "9"
            //                 },
            //                 "gameDate": "20230703",
            //                 "wynnbet": {
            //                     "totalUnder": "9.5",
            //                     "totalOverOdds": "-105",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-125",
            //                     "awayTeamRunLineOdds": "-196",
            //                     "awayTeamMLOdds": "+122",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+145",
            //                     "homeTeamMLOdds": "-133",
            //                     "totalOver": "9.5"
            //                 },
            //                 "unibet": {
            //                     "totalUnder": "9.5",
            //                     "totalOverOdds": "even",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-121",
            //                     "awayTeamRunLineOdds": "-155",
            //                     "awayTeamMLOdds": "+125",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+125",
            //                     "homeTeamMLOdds": "-150",
            //                     "totalOver": "9.5"
            //                 },
            //                 "teamIDHome": "28",
            //                 "teamIDAway": "11",
            //                 "homeTeam": "TEX",
            //                 "pointsbet": {
            //                     "totalUnder": "9",
            //                     "totalOverOdds": "-120",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-100",
            //                     "awayTeamRunLineOdds": "-160",
            //                     "awayTeamMLOdds": "+125",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+130",
            //                     "homeTeamMLOdds": "-150",
            //                     "totalOver": "9"
            //                 },
            //                 "betrivers": {
            //                     "totalUnder": "9.5",
            //                     "totalOverOdds": "even",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-121",
            //                     "awayTeamRunLineOdds": "-155",
            //                     "awayTeamMLOdds": "+125",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+125",
            //                     "homeTeamMLOdds": "-150",
            //                     "totalOver": "9.5"
            //                 },
            //                 "caesars_sportsbook": {
            //                     "totalUnder": "9",
            //                     "totalOverOdds": "-130",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "+110",
            //                     "awayTeamRunLineOdds": "-178",
            //                     "awayTeamMLOdds": "+122",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+150",
            //                     "homeTeamMLOdds": "-145",
            //                     "totalOver": "9"
            //                 },
            //                 "gameID": "20230703_HOU@TEX",
            //                 "awayTeam": "HOU",
            //                 "draftkings": {
            //                     "totalUnder": "9",
            //                     "totalOverOdds": "-120",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "even",
            //                     "awayTeamRunLineOdds": "-155",
            //                     "awayTeamMLOdds": "+125",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+135",
            //                     "homeTeamMLOdds": "-145",
            //                     "totalOver": "9"
            //                 },
            //                 "playerProps": [
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+500",
            //                                 "one": "-120"
            //                             },
            //                             "bases": {
            //                                 "under": "-110",
            //                                 "over": "-120",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+650"
            //                             },
            //                             "runs": {
            //                                 "under": "-245",
            //                                 "over": "+180",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+250"
            //                             }
            //                         },
            //                         "playerID": "455117"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+460",
            //                                 "one": "-135"
            //                             },
            //                             "bases": {
            //                                 "under": "-105",
            //                                 "over": "-125",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+750"
            //                             },
            //                             "sbs": {
            //                                 "one": "+670"
            //                             },
            //                             "runs": {
            //                                 "under": "-190",
            //                                 "over": "+140",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+215"
            //                             }
            //                         },
            //                         "playerID": ""
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+360",
            //                                 "one": "-185"
            //                             },
            //                             "bases": {
            //                                 "under": "-175",
            //                                 "over": "+130",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+350"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1200"
            //                             },
            //                             "runs": {
            //                                 "under": "-155",
            //                                 "over": "+115",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+155"
            //                             }
            //                         },
            //                         "playerID": "673962"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+330",
            //                                 "one": "-190"
            //                             },
            //                             "bases": {
            //                                 "under": "+140",
            //                                 "over": "-190",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+1250"
            //                             },
            //                             "sbs": {
            //                                 "one": "+210"
            //                             },
            //                             "runs": {
            //                                 "under": "-170",
            //                                 "over": "+130",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+280"
            //                             }
            //                         },
            //                         "playerID": "608671"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+260",
            //                                 "one": "-180"
            //                             },
            //                             "bases": {
            //                                 "under": "+135",
            //                                 "over": "-180",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+380"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1250"
            //                             },
            //                             "runs": {
            //                                 "under": "-155",
            //                                 "over": "+115",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+170"
            //                             }
            //                         },
            //                         "playerID": "641680"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+300",
            //                                 "one": "-215"
            //                             },
            //                             "bases": {
            //                                 "under": "-150",
            //                                 "over": "+115",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+285"
            //                             },
            //                             "sbs": {
            //                                 "one": "+550"
            //                             },
            //                             "runs": {
            //                                 "under": "-115",
            //                                 "over": "-115",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+110"
            //                             }
            //                         },
            //                         "playerID": "666969"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+270",
            //                                 "one": "-210"
            //                             },
            //                             "bases": {
            //                                 "under": "-195",
            //                                 "over": "+145",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+500"
            //                             },
            //                             "sbs": {
            //                                 "one": "+550"
            //                             },
            //                             "runs": {
            //                                 "under": "-185",
            //                                 "over": "+140",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+180"
            //                             }
            //                         },
            //                         "playerID": "667452"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+270",
            //                                 "one": "-215"
            //                             },
            //                             "bases": {
            //                                 "under": "-185",
            //                                 "over": "+140",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+475"
            //                             },
            //                             "sbs": {
            //                                 "one": "+710"
            //                             },
            //                             "runs": {
            //                                 "under": "-160",
            //                                 "over": "+120",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+180"
            //                             }
            //                         },
            //                         "playerID": "676801"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+280",
            //                                 "one": "-215"
            //                             },
            //                             "bases": {
            //                                 "under": "-200",
            //                                 "over": "+150",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+650"
            //                             },
            //                             "sbs": {
            //                                 "one": "+240"
            //                             },
            //                             "runs": {
            //                                 "under": "-165",
            //                                 "over": "+125",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+175"
            //                             }
            //                         },
            //                         "playerID": "665750"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+240",
            //                                 "one": "-230"
            //                             },
            //                             "bases": {
            //                                 "under": "-165",
            //                                 "over": "+125",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+475"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1350"
            //                             },
            //                             "runs": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+140"
            //                             }
            //                         },
            //                         "playerID": "608324"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+240",
            //                                 "one": "-235"
            //                             },
            //                             "bases": {
            //                                 "under": "-170",
            //                                 "over": "+125",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+500"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1100"
            //                             },
            //                             "runs": {
            //                                 "under": "-135",
            //                                 "over": "+100",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+170"
            //                             }
            //                         },
            //                         "playerID": "663993"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+205",
            //                                 "one": "-240"
            //                             },
            //                             "bases": {
            //                                 "under": "-160",
            //                                 "over": "+120",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+450"
            //                             },
            //                             "runs": {
            //                                 "under": "-155",
            //                                 "over": "+115",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+145"
            //                             }
            //                         },
            //                         "playerID": "547989"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+230",
            //                                 "one": "-250"
            //                             },
            //                             "bases": {
            //                                 "under": "-170",
            //                                 "over": "+130",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+550"
            //                             },
            //                             "runs": {
            //                                 "under": "-200",
            //                                 "over": "+145",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+170"
            //                             }
            //                         },
            //                         "playerID": "673237"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+230",
            //                                 "one": "-255"
            //                             },
            //                             "bases": {
            //                                 "under": "-130",
            //                                 "over": "+100",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+350"
            //                             },
            //                             "sbs": {
            //                                 "one": "+550"
            //                             },
            //                             "runs": {
            //                                 "under": "+100",
            //                                 "over": "-135",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+130"
            //                             }
            //                         },
            //                         "playerID": "543760"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+185",
            //                                 "one": "-280"
            //                             },
            //                             "bases": {
            //                                 "under": "-135",
            //                                 "over": "+100",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+400"
            //                             },
            //                             "sbs": {
            //                                 "one": "+670"
            //                             },
            //                             "runs": {
            //                                 "under": "-110",
            //                                 "over": "-120",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+175"
            //                             }
            //                         },
            //                         "playerID": "514888"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+175",
            //                                 "one": "-280"
            //                             },
            //                             "bases": {
            //                                 "under": "-130",
            //                                 "over": "-105",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+400"
            //                             },
            //                             "sbs": {
            //                                 "one": "+500"
            //                             },
            //                             "runs": {
            //                                 "under": "-130",
            //                                 "over": "-105",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+130"
            //                             }
            //                         },
            //                         "playerID": "663656"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+170",
            //                                 "one": "-290"
            //                             },
            //                             "bases": {
            //                                 "under": "-110",
            //                                 "over": "-120",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+310"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1250"
            //                             },
            //                             "runs": {
            //                                 "under": "-105",
            //                                 "over": "-130",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+130"
            //                             }
            //                         },
            //                         "playerID": "608369"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+150",
            //                                 "one": "-320"
            //                             },
            //                             "bases": {
            //                                 "under": "-130",
            //                                 "over": "-105",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+700"
            //                             },
            //                             "sbs": {
            //                                 "one": "+900"
            //                             },
            //                             "runs": {
            //                                 "under": "-130",
            //                                 "over": "+100",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+200"
            //                             }
            //                         },
            //                         "playerID": "643289"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "bases": {
            //                                 "total": "0.5"
            //                             },
            //                             "sbs": {
            //                                 "one": "+580"
            //                             },
            //                             "runs": {
            //                                 "total": "0.5"
            //                             }
            //                         },
            //                         "playerID": "677649"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "strikeouts": {
            //                                 "under": "-115",
            //                                 "over": "-115",
            //                                 "total": "4.5"
            //                             },
            //                             "er": {
            //                                 "under": "+115",
            //                                 "over": "-160",
            //                                 "total": "2.5"
            //                             }
            //                         },
            //                         "playerID": "664299"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "strikeouts": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "3.5"
            //                             },
            //                             "er": {
            //                                 "under": "+105",
            //                                 "over": "-150",
            //                                 "total": "2.5"
            //                             }
            //                         },
            //                         "playerID": "527048"
            //                     }
            //                 ]
            //             },
            //             "20230703_KC@MIN": {
            //                 "last_updated_e_time": "1688437683.1977317",
            //                 "bet365": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-115",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-105",
            //                     "awayTeamRunLineOdds": "-105",
            //                     "awayTeamMLOdds": "+185",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "-115",
            //                     "homeTeamMLOdds": "-225",
            //                     "totalOver": "8.5"
            //                 },
            //                 "gameDate": "20230703",
            //                 "wynnbet": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-130",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-100",
            //                     "awayTeamRunLineOdds": "-115",
            //                     "awayTeamMLOdds": "+200",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "-115",
            //                     "homeTeamMLOdds": "-222",
            //                     "totalOver": "8.5"
            //                 },
            //                 "unibet": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-115",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-105",
            //                     "awayTeamRunLineOdds": "-114",
            //                     "awayTeamMLOdds": "+200",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "-107",
            //                     "homeTeamMLOdds": "-240",
            //                     "totalOver": "8.5"
            //                 },
            //                 "teamIDHome": "17",
            //                 "teamIDAway": "12",
            //                 "homeTeam": "MIN",
            //                 "pointsbet": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-120",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-100",
            //                     "awayTeamRunLineOdds": "-110",
            //                     "awayTeamMLOdds": "+190",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "-110",
            //                     "homeTeamMLOdds": "-240",
            //                     "totalOver": "8.5"
            //                 },
            //                 "betrivers": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-115",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-105",
            //                     "awayTeamRunLineOdds": "-114",
            //                     "awayTeamMLOdds": "+200",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "-107",
            //                     "homeTeamMLOdds": "-240",
            //                     "totalOver": "8.5"
            //                 },
            //                 "caesars_sportsbook": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-115",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-105",
            //                     "awayTeamRunLineOdds": "-105",
            //                     "awayTeamMLOdds": "+192",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "-115",
            //                     "homeTeamMLOdds": "-235",
            //                     "totalOver": "8.5"
            //                 },
            //                 "gameID": "20230703_KC@MIN",
            //                 "awayTeam": "KC",
            //                 "draftkings": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-115",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-105",
            //                     "awayTeamRunLineOdds": "-110",
            //                     "awayTeamMLOdds": "+190",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "-110",
            //                     "homeTeamMLOdds": "-225",
            //                     "totalOver": "8.5"
            //                 },
            //                 "playerProps": [
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+420",
            //                                 "one": "-155"
            //                             },
            //                             "bases": {
            //                                 "under": "+115",
            //                                 "over": "-155",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+550"
            //                             },
            //                             "runs": {
            //                                 "under": "-215",
            //                                 "over": "+160",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+175"
            //                             }
            //                         },
            //                         "playerID": "668472"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+420",
            //                                 "one": "-180"
            //                             },
            //                             "bases": {
            //                                 "under": "-205",
            //                                 "over": "+150",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+550"
            //                             },
            //                             "sbs": {
            //                                 "one": "+510"
            //                             },
            //                             "runs": {
            //                                 "under": "-195",
            //                                 "over": "+145",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+200"
            //                             }
            //                         },
            //                         "playerID": "664728"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+410",
            //                                 "one": "-165"
            //                             },
            //                             "bases": {
            //                                 "under": "+125",
            //                                 "over": "-165",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+1250"
            //                             },
            //                             "sbs": {
            //                                 "one": "+670"
            //                             },
            //                             "runs": {
            //                                 "under": "-270",
            //                                 "over": "+195",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+300"
            //                             }
            //                         },
            //                         "playerID": "670032"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+390",
            //                                 "one": "-175"
            //                             },
            //                             "bases": {
            //                                 "under": "-170",
            //                                 "over": "+125",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+340"
            //                             },
            //                             "sbs": {
            //                                 "one": "+940"
            //                             },
            //                             "runs": {
            //                                 "under": "-160",
            //                                 "over": "+120",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+175"
            //                             }
            //                         },
            //                         "playerID": "669004"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+400",
            //                                 "one": "-185"
            //                             },
            //                             "bases": {
            //                                 "under": "+140",
            //                                 "over": "-185",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+550"
            //                             },
            //                             "sbs": {
            //                                 "one": "+710"
            //                             },
            //                             "runs": {
            //                                 "under": "-195",
            //                                 "over": "+145",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+220"
            //                             }
            //                         },
            //                         "playerID": "671221"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+380",
            //                                 "one": "-180"
            //                             },
            //                             "bases": {
            //                                 "under": "+135",
            //                                 "over": "-180",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+500"
            //                             },
            //                             "sbs": {
            //                                 "one": "+680"
            //                             },
            //                             "runs": {
            //                                 "under": "-160",
            //                                 "over": "+120",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+195"
            //                             }
            //                         },
            //                         "playerID": ""
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+290",
            //                                 "one": "-175"
            //                             },
            //                             "bases": {
            //                                 "under": "+130",
            //                                 "over": "-175",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+600"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1350"
            //                             },
            //                             "runs": {
            //                                 "under": "-160",
            //                                 "over": "+120",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+190"
            //                             }
            //                         },
            //                         "playerID": "596146"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+270",
            //                                 "one": "-220"
            //                             },
            //                             "bases": {
            //                                 "under": "-200",
            //                                 "over": "+145",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+700"
            //                             },
            //                             "runs": {
            //                                 "under": "-180",
            //                                 "over": "+135",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+165"
            //                             }
            //                         },
            //                         "playerID": "543877"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+270",
            //                                 "one": "-235"
            //                             },
            //                             "bases": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+275"
            //                             },
            //                             "sbs": {
            //                                 "one": "+710"
            //                             },
            //                             "runs": {
            //                                 "under": "-110",
            //                                 "over": "-125",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+125"
            //                             }
            //                         },
            //                         "playerID": "621439"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+260",
            //                                 "one": "-225"
            //                             },
            //                             "bases": {
            //                                 "under": "-170",
            //                                 "over": "+130",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+475"
            //                             },
            //                             "runs": {
            //                                 "under": "-180",
            //                                 "over": "+135",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+185"
            //                             }
            //                         },
            //                         "playerID": "666023"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+230",
            //                                 "one": "-230"
            //                             },
            //                             "bases": {
            //                                 "under": "-175",
            //                                 "over": "+130",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+700"
            //                             },
            //                             "sbs": {
            //                                 "one": "+470"
            //                             },
            //                             "runs": {
            //                                 "under": "-145",
            //                                 "over": "+110",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+175"
            //                             }
            //                         },
            //                         "playerID": "650489"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+230",
            //                                 "one": "-240"
            //                             },
            //                             "bases": {
            //                                 "under": "-175",
            //                                 "over": "+130",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+600"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1350"
            //                             },
            //                             "runs": {
            //                                 "under": "-150",
            //                                 "over": "+115",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+160"
            //                             }
            //                         },
            //                         "playerID": "571657"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+250",
            //                                 "one": "-260"
            //                             },
            //                             "bases": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+390"
            //                             },
            //                             "runs": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+130"
            //                             }
            //                         },
            //                         "playerID": "669304"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+200",
            //                                 "one": "-240"
            //                             },
            //                             "bases": {
            //                                 "under": "-150",
            //                                 "over": "+110",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+600"
            //                             },
            //                             "runs": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+185"
            //                             }
            //                         },
            //                         "playerID": "456781"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+200",
            //                                 "one": "-240"
            //                             },
            //                             "bases": {
            //                                 "under": "-145",
            //                                 "over": "+110",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+425"
            //                             },
            //                             "sbs": {
            //                                 "one": "+260"
            //                             },
            //                             "runs": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+150"
            //                             }
            //                         },
            //                         "playerID": "677951"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+220",
            //                                 "one": "-250"
            //                             },
            //                             "bases": {
            //                                 "under": "-160",
            //                                 "over": "+120",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+475"
            //                             },
            //                             "sbs": {
            //                                 "one": "+575"
            //                             },
            //                             "runs": {
            //                                 "under": "-160",
            //                                 "over": "+120",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+155"
            //                             }
            //                         },
            //                         "playerID": "658668"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+175",
            //                                 "one": "-260"
            //                             },
            //                             "bases": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+650"
            //                             },
            //                             "sbs": {
            //                                 "one": "+310"
            //                             },
            //                             "runs": {
            //                                 "under": "-160",
            //                                 "over": "+120",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+195"
            //                             }
            //                         },
            //                         "playerID": "672580"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+170",
            //                                 "one": "-270"
            //                             },
            //                             "bases": {
            //                                 "under": "-115",
            //                                 "over": "-115",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+350"
            //                             },
            //                             "runs": {
            //                                 "under": "+105",
            //                                 "over": "-140",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+150"
            //                             }
            //                         },
            //                         "playerID": "621043"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "strikeouts": {
            //                                 "under": "-115",
            //                                 "over": "-110",
            //                                 "total": "6.5"
            //                             },
            //                             "er": {
            //                                 "under": "-125",
            //                                 "over": "-105",
            //                                 "total": "2.5"
            //                             }
            //                         },
            //                         "playerID": "657746"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "strikeouts": {
            //                                 "under": "-145",
            //                                 "over": "+110",
            //                                 "total": "3.5"
            //                             },
            //                             "er": {
            //                                 "under": "+100",
            //                                 "over": "-145",
            //                                 "total": "2.5"
            //                             }
            //                         },
            //                         "playerID": "680735"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "bases": {
            //                                 "total": "1.5"
            //                             },
            //                             "runs": {
            //                                 "total": "0.5"
            //                             }
            //                         },
            //                         "playerID": "666135"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "bases": {
            //                                 "total": "1.5"
            //                             },
            //                             "runs": {
            //                                 "total": "0.5"
            //                             }
            //                         },
            //                         "playerID": "521692"
            //                     }
            //                 ]
            //             },
            //             "20230703_LAA@SD": {
            //                 "last_updated_e_time": "1688437683.1977324",
            //                 "bet365": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "even",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-120",
            //                     "awayTeamRunLineOdds": "-125",
            //                     "awayTeamMLOdds": "+165",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+105",
            //                     "homeTeamMLOdds": "-185",
            //                     "totalOver": "8.5"
            //                 },
            //                 "gameDate": "20230703",
            //                 "wynnbet": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-110",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-120",
            //                     "awayTeamRunLineOdds": "-130",
            //                     "awayTeamMLOdds": "+175",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "-100",
            //                     "homeTeamMLOdds": "-192",
            //                     "totalOver": "8.5"
            //                 },
            //                 "unibet": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-108",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-112",
            //                     "awayTeamRunLineOdds": "-127",
            //                     "awayTeamMLOdds": "+165",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+104",
            //                     "homeTeamMLOdds": "-200",
            //                     "totalOver": "8.5"
            //                 },
            //                 "teamIDHome": "23",
            //                 "teamIDAway": "13",
            //                 "homeTeam": "SD",
            //                 "pointsbet": {
            //                     "totalUnder": "8",
            //                     "totalOverOdds": "-115",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-105",
            //                     "awayTeamRunLineOdds": "-125",
            //                     "awayTeamMLOdds": "+165",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+105",
            //                     "homeTeamMLOdds": "-200",
            //                     "totalOver": "8"
            //                 },
            //                 "betrivers": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-108",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-112",
            //                     "awayTeamRunLineOdds": "-127",
            //                     "awayTeamMLOdds": "+165",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+104",
            //                     "homeTeamMLOdds": "-200",
            //                     "totalOver": "8.5"
            //                 },
            //                 "caesars_sportsbook": {
            //                     "totalUnder": "8",
            //                     "totalOverOdds": "-125",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "+105",
            //                     "awayTeamRunLineOdds": "-125",
            //                     "awayTeamMLOdds": "+162",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+105",
            //                     "homeTeamMLOdds": "-195",
            //                     "totalOver": "8"
            //                 },
            //                 "gameID": "20230703_LAA@SD",
            //                 "awayTeam": "LAA",
            //                 "draftkings": {
            //                     "totalUnder": "8",
            //                     "totalOverOdds": "-120",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "even",
            //                     "awayTeamRunLineOdds": "-125",
            //                     "awayTeamMLOdds": "+160",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+105",
            //                     "homeTeamMLOdds": "-190",
            //                     "totalOver": "8"
            //                 },
            //                 "playerProps": [
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+700",
            //                                 "one": "+110"
            //                             },
            //                             "bases": {
            //                                 "under": "-145",
            //                                 "over": "+110",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+850"
            //                             },
            //                             "runs": {
            //                                 "under": "-390",
            //                                 "over": "+270",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+330"
            //                             }
            //                         },
            //                         "playerID": "595453"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+500",
            //                                 "one": "-125"
            //                             },
            //                             "bases": {
            //                                 "under": "-105",
            //                                 "over": "-125",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+425"
            //                             },
            //                             "runs": {
            //                                 "under": "-180",
            //                                 "over": "+135",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+200"
            //                             }
            //                         },
            //                         "playerID": "572761"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+460",
            //                                 "one": "-120"
            //                             },
            //                             "bases": {
            //                                 "under": "+105",
            //                                 "over": "-140",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+550"
            //                             },
            //                             "sbs": {
            //                                 "one": "+670"
            //                             },
            //                             "runs": {
            //                                 "under": "-195",
            //                                 "over": "+145",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+230"
            //                             }
            //                         },
            //                         "playerID": "663757"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+490",
            //                                 "one": "-140"
            //                             },
            //                             "bases": {
            //                                 "under": "+105",
            //                                 "over": "-140",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+650"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1050"
            //                             },
            //                             "runs": {
            //                                 "under": "-270",
            //                                 "over": "+195",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+235"
            //                             }
            //                         },
            //                         "playerID": "500871"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+460",
            //                                 "one": "-145"
            //                             },
            //                             "bases": {
            //                                 "under": "+110",
            //                                 "over": "-145",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+1450"
            //                             },
            //                             "sbs": {
            //                                 "one": "+790"
            //                             },
            //                             "runs": {
            //                                 "under": "-350",
            //                                 "over": "+240",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+340"
            //                             }
            //                         },
            //                         "playerID": "664058"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+380",
            //                                 "one": "-140"
            //                             },
            //                             "bases": {
            //                                 "under": "+105",
            //                                 "over": "-140",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+600"
            //                             },
            //                             "sbs": {
            //                                 "one": "+980"
            //                             },
            //                             "runs": {
            //                                 "under": "-195",
            //                                 "over": "+145",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+195"
            //                             }
            //                         },
            //                         "playerID": "543685"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+370",
            //                                 "one": "-140"
            //                             },
            //                             "bases": {
            //                                 "under": "+110",
            //                                 "over": "-150",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+800"
            //                             },
            //                             "sbs": {
            //                                 "one": "+525"
            //                             },
            //                             "runs": {
            //                                 "under": "-285",
            //                                 "over": "+205",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+260"
            //                             }
            //                         },
            //                         "playerID": "650859"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+370",
            //                                 "one": "-150"
            //                             },
            //                             "bases": {
            //                                 "under": "+115",
            //                                 "over": "-150",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+450"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1500"
            //                             },
            //                             "runs": {
            //                                 "under": "-210",
            //                                 "over": "+155",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+175"
            //                             }
            //                         },
            //                         "playerID": "592669"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+420",
            //                                 "one": "-150"
            //                             },
            //                             "bases": {
            //                                 "under": "+115",
            //                                 "over": "-150",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+450"
            //                             },
            //                             "runs": {
            //                                 "under": "-185",
            //                                 "over": "+140",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+190"
            //                             }
            //                         },
            //                         "playerID": "596142"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+370",
            //                                 "one": "-150"
            //                             },
            //                             "bases": {
            //                                 "under": "+115",
            //                                 "over": "-150",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+475"
            //                             },
            //                             "sbs": {
            //                                 "one": "+880"
            //                             },
            //                             "runs": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+210"
            //                             }
            //                         },
            //                         "playerID": "545361"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+320",
            //                                 "one": "-190"
            //                             },
            //                             "bases": {
            //                                 "under": "+135",
            //                                 "over": "-180",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+390"
            //                             },
            //                             "sbs": {
            //                                 "one": "+365"
            //                             },
            //                             "runs": {
            //                                 "under": "-165",
            //                                 "over": "+125",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+175"
            //                             }
            //                         },
            //                         "playerID": "660271"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+310",
            //                                 "one": "-180"
            //                             },
            //                             "bases": {
            //                                 "under": "+135",
            //                                 "over": "-180",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+750"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1050"
            //                             },
            //                             "runs": {
            //                                 "under": "-180",
            //                                 "over": "+135",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+210"
            //                             }
            //                         },
            //                         "playerID": "630105"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+250",
            //                                 "one": "-190"
            //                             },
            //                             "bases": {
            //                                 "under": "+140",
            //                                 "over": "-190",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+650"
            //                             },
            //                             "sbs": {
            //                                 "one": "+790"
            //                             },
            //                             "runs": {
            //                                 "under": "-150",
            //                                 "over": "+110",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+265"
            //                             }
            //                         },
            //                         "playerID": "621493"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+200",
            //                                 "one": "-210"
            //                             },
            //                             "bases": {
            //                                 "under": "-195",
            //                                 "over": "+145",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+750"
            //                             },
            //                             "sbs": {
            //                                 "one": "+525"
            //                             },
            //                             "runs": {
            //                                 "under": "-130",
            //                                 "over": "-105",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+220"
            //                             }
            //                         },
            //                         "playerID": "673490"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+220",
            //                                 "one": "-220"
            //                             },
            //                             "bases": {
            //                                 "under": "-160",
            //                                 "over": "+120",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+310"
            //                             },
            //                             "sbs": {
            //                                 "one": "+880"
            //                             },
            //                             "runs": {
            //                                 "under": "+115",
            //                                 "over": "-155",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+160"
            //                             }
            //                         },
            //                         "playerID": "665742"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+230",
            //                                 "one": "-220"
            //                             },
            //                             "bases": {
            //                                 "under": "-200",
            //                                 "over": "+150",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+800"
            //                             },
            //                             "sbs": {
            //                                 "one": "+830"
            //                             },
            //                             "runs": {
            //                                 "under": "-195",
            //                                 "over": "+145",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+185"
            //                             }
            //                         },
            //                         "playerID": "593428"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+210",
            //                                 "one": "-270"
            //                             },
            //                             "bases": {
            //                                 "under": "-145",
            //                                 "over": "+110",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+370"
            //                             },
            //                             "sbs": {
            //                                 "one": "+940"
            //                             },
            //                             "runs": {
            //                                 "under": "-150",
            //                                 "over": "+115",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+110"
            //                             }
            //                         },
            //                         "playerID": "592518"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+210",
            //                                 "one": "-290"
            //                             },
            //                             "bases": {
            //                                 "under": "-115",
            //                                 "over": "-115",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+275"
            //                             },
            //                             "sbs": {
            //                                 "one": "+390"
            //                             },
            //                             "runs": {
            //                                 "under": "-115",
            //                                 "over": "-115",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+115"
            //                             }
            //                         },
            //                         "playerID": "665487"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "strikeouts": {
            //                                 "under": "-135",
            //                                 "over": "+100",
            //                                 "total": "3.5"
            //                             },
            //                             "er": {
            //                                 "under": "-110",
            //                                 "over": "-130",
            //                                 "total": "2.5"
            //                             }
            //                         },
            //                         "playerID": "642545"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "bases": {
            //                                 "total": "0.5"
            //                             },
            //                             "sbs": {
            //                                 "one": "+980"
            //                             },
            //                             "runs": {
            //                                 "total": "0.5"
            //                             }
            //                         },
            //                         "playerID": "596059"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "strikeouts": {
            //                                 "under": "-145",
            //                                 "over": "+110",
            //                                 "total": "7.5"
            //                             },
            //                             "er": {
            //                                 "under": "+105",
            //                                 "over": "-150",
            //                                 "total": "1.5"
            //                             }
            //                         },
            //                         "playerID": "605483"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "bases": {
            //                                 "total": "0.5"
            //                             },
            //                             "runs": {
            //                                 "total": "0.5"
            //                             }
            //                         },
            //                         "playerID": "666160"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "bases": {
            //                                 "total": "0.5"
            //                             },
            //                             "runs": {
            //                                 "total": "0.5"
            //                             }
            //                         },
            //                         "playerID": "642136"
            //                     }
            //                 ]
            //             },
            //             "20230703_PIT@LAD": {
            //                 "last_updated_e_time": "1688437683.1977327",
            //                 "bet365": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "+105",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-125",
            //                     "awayTeamRunLineOdds": "-135",
            //                     "awayTeamMLOdds": "+150",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+115",
            //                     "homeTeamMLOdds": "-170",
            //                     "totalOver": "8.5"
            //                 },
            //                 "gameDate": "20230703",
            //                 "wynnbet": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-100",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-120",
            //                     "awayTeamRunLineOdds": "-135",
            //                     "awayTeamMLOdds": "+150",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+115",
            //                     "homeTeamMLOdds": "-164",
            //                     "totalOver": "8.5"
            //                 },
            //                 "unibet": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-107",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-113",
            //                     "awayTeamRunLineOdds": "-141",
            //                     "awayTeamMLOdds": "+150",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+117",
            //                     "homeTeamMLOdds": "-180",
            //                     "totalOver": "8.5"
            //                 },
            //                 "teamIDHome": "14",
            //                 "teamIDAway": "22",
            //                 "homeTeam": "LAD",
            //                 "pointsbet": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-110",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-110",
            //                     "awayTeamRunLineOdds": "-140",
            //                     "awayTeamMLOdds": "+145",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+115",
            //                     "homeTeamMLOdds": "-175",
            //                     "totalOver": "8.5"
            //                 },
            //                 "betrivers": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-107",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-113",
            //                     "awayTeamRunLineOdds": "-141",
            //                     "awayTeamMLOdds": "+150",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+117",
            //                     "homeTeamMLOdds": "-180",
            //                     "totalOver": "8.5"
            //                 },
            //                 "caesars_sportsbook": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "even",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-120",
            //                     "awayTeamRunLineOdds": "-140",
            //                     "awayTeamMLOdds": "+150",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+118",
            //                     "homeTeamMLOdds": "-178",
            //                     "totalOver": "8.5"
            //                 },
            //                 "gameID": "20230703_PIT@LAD",
            //                 "awayTeam": "PIT",
            //                 "draftkings": {
            //                     "totalUnder": "8.5",
            //                     "totalOverOdds": "-105",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-115",
            //                     "awayTeamRunLineOdds": "-140",
            //                     "awayTeamMLOdds": "+150",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+120",
            //                     "homeTeamMLOdds": "-175",
            //                     "totalOver": "8.5"
            //                 },
            //                 "playerProps": [
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+600",
            //                                 "one": "+105"
            //                             },
            //                             "bases": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+1100"
            //                             },
            //                             "runs": {
            //                                 "under": "-425",
            //                                 "over": "+280",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+400"
            //                             }
            //                         },
            //                         "playerID": "595978"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+310",
            //                                 "one": "-120"
            //                             },
            //                             "bases": {
            //                                 "under": "-110",
            //                                 "over": "-120",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+600"
            //                             },
            //                             "sbs": {
            //                                 "one": "+940"
            //                             },
            //                             "runs": {
            //                                 "under": "-295",
            //                                 "over": "+210",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+275"
            //                             }
            //                         },
            //                         "playerID": "666801"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+390",
            //                                 "one": "-130"
            //                             },
            //                             "bases": {
            //                                 "under": "+100",
            //                                 "over": "-130",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+360"
            //                             },
            //                             "runs": {
            //                                 "under": "-165",
            //                                 "over": "+125",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+160"
            //                             }
            //                         },
            //                         "playerID": "571970"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+290",
            //                                 "one": "-140"
            //                             },
            //                             "bases": {
            //                                 "under": "+105",
            //                                 "over": "-140",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+650"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1200"
            //                             },
            //                             "runs": {
            //                                 "under": "-240",
            //                                 "over": "+175",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+245"
            //                             }
            //                         },
            //                         "playerID": "518792"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+320",
            //                                 "one": "-160"
            //                             },
            //                             "bases": {
            //                                 "under": "+120",
            //                                 "over": "-160",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+950"
            //                             },
            //                             "sbs": {
            //                                 "one": "+790"
            //                             },
            //                             "runs": {
            //                                 "under": "-230",
            //                                 "over": "+170",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+290"
            //                             }
            //                         },
            //                         "playerID": "678246"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+370",
            //                                 "one": "-160"
            //                             },
            //                             "bases": {
            //                                 "under": "+120",
            //                                 "over": "-160",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+800"
            //                             },
            //                             "runs": {
            //                                 "under": "-295",
            //                                 "over": "+210",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+240"
            //                             }
            //                         },
            //                         "playerID": "693304"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+370",
            //                                 "one": "-170"
            //                             },
            //                             "bases": {
            //                                 "under": "+130",
            //                                 "over": "-170",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+850"
            //                             },
            //                             "sbs": {
            //                                 "one": "+790"
            //                             },
            //                             "runs": {
            //                                 "under": "-280",
            //                                 "over": "+200",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+290"
            //                             }
            //                         },
            //                         "playerID": "669707"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+340",
            //                                 "one": "-175"
            //                             },
            //                             "bases": {
            //                                 "under": "-170",
            //                                 "over": "+125",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+310"
            //                             },
            //                             "sbs": {
            //                                 "one": "+710"
            //                             },
            //                             "runs": {
            //                                 "under": "-125",
            //                                 "over": "-105",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+150"
            //                             }
            //                         },
            //                         "playerID": "669261"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+260",
            //                                 "one": "-200"
            //                             },
            //                             "bases": {
            //                                 "under": "+150",
            //                                 "over": "-200",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+650"
            //                             },
            //                             "sbs": {
            //                                 "one": "+560"
            //                             },
            //                             "runs": {
            //                                 "under": "-235",
            //                                 "over": "+170",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+195"
            //                             }
            //                         },
            //                         "playerID": "680779"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+290",
            //                                 "one": "-200"
            //                             },
            //                             "bases": {
            //                                 "under": "+150",
            //                                 "over": "-200",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+700"
            //                             },
            //                             "runs": {
            //                                 "under": "-250",
            //                                 "over": "+180",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+215"
            //                             }
            //                         },
            //                         "playerID": "444482"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+300",
            //                                 "one": "-195"
            //                             },
            //                             "bases": {
            //                                 "under": "+145",
            //                                 "over": "-195",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+450"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1000"
            //                             },
            //                             "runs": {
            //                                 "under": "-190",
            //                                 "over": "+140",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+150"
            //                             }
            //                         },
            //                         "playerID": "467793"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+270",
            //                                 "one": "-200"
            //                             },
            //                             "bases": {
            //                                 "under": "+150",
            //                                 "over": "-200",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+475"
            //                             },
            //                             "runs": {
            //                                 "under": "-195",
            //                                 "over": "+145",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+170"
            //                             }
            //                         },
            //                         "playerID": "502110"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+280",
            //                                 "one": "-200"
            //                             },
            //                             "bases": {
            //                                 "under": "+150",
            //                                 "over": "-200",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+1150"
            //                             },
            //                             "sbs": {
            //                                 "one": "+775"
            //                             },
            //                             "runs": {
            //                                 "under": "-240",
            //                                 "over": "+175",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+255"
            //                             }
            //                         },
            //                         "playerID": "500743"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+190",
            //                                 "one": "-240"
            //                             },
            //                             "bases": {
            //                                 "under": "-150",
            //                                 "over": "+110",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+360"
            //                             },
            //                             "sbs": {
            //                                 "one": "+500"
            //                             },
            //                             "runs": {
            //                                 "under": "-115",
            //                                 "over": "-115",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+170"
            //                             }
            //                         },
            //                         "playerID": "668804"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+200",
            //                                 "one": "-265"
            //                             },
            //                             "bases": {
            //                                 "under": "-160",
            //                                 "over": "+120",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+500"
            //                             },
            //                             "sbs": {
            //                                 "one": "+600"
            //                             },
            //                             "runs": {
            //                                 "under": "-135",
            //                                 "over": "+100",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+175"
            //                             }
            //                         },
            //                         "playerID": "518692"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+200",
            //                                 "one": "-250"
            //                             },
            //                             "bases": {
            //                                 "under": "-170",
            //                                 "over": "+125",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+650"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1350"
            //                             },
            //                             "runs": {
            //                                 "under": "-165",
            //                                 "over": "+125",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+155"
            //                             }
            //                         },
            //                         "playerID": "669257"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+185",
            //                                 "one": "-260"
            //                             },
            //                             "bases": {
            //                                 "under": "-175",
            //                                 "over": "+130",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+650"
            //                             },
            //                             "runs": {
            //                                 "under": "-145",
            //                                 "over": "+110",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+250"
            //                             }
            //                         },
            //                         "playerID": "641943"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+200",
            //                                 "one": "-280"
            //                             },
            //                             "bases": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+400"
            //                             },
            //                             "sbs": {
            //                                 "one": "+510"
            //                             },
            //                             "runs": {
            //                                 "under": "-110",
            //                                 "over": "-120",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+185"
            //                             }
            //                         },
            //                         "playerID": "605141"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "bases": {
            //                                 "total": "0.5"
            //                             },
            //                             "sbs": {
            //                                 "one": "+490"
            //                             },
            //                             "runs": {
            //                                 "total": "0.5"
            //                             }
            //                         },
            //                         "playerID": "681546"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "strikeouts": {
            //                                 "under": "-110",
            //                                 "over": "-120",
            //                                 "total": "5.5"
            //                             }
            //                         },
            //                         "playerID": "656605"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "bases": {
            //                                 "total": "0.5"
            //                             },
            //                             "sbs": {
            //                                 "one": "+670"
            //                             }
            //                         },
            //                         "playerID": "457705"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "strikeouts": {
            //                                 "under": "+120",
            //                                 "over": "-165",
            //                                 "total": "4.5"
            //                             },
            //                             "er": {
            //                                 "under": "-150",
            //                                 "over": "+105",
            //                                 "total": "2.5"
            //                             }
            //                         },
            //                         "playerID": "675627"
            //                     }
            //                 ]
            //             },
            //             "20230703_SEA@SF": {
            //                 "last_updated_e_time": "1688437683.1977327",
            //                 "bet365": {
            //                     "totalUnder": "6.5",
            //                     "totalOverOdds": "-120",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "even",
            //                     "awayTeamRunLineOdds": "-180",
            //                     "awayTeamMLOdds": "+110",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+160",
            //                     "homeTeamMLOdds": "-130",
            //                     "totalOver": "6.5"
            //                 },
            //                 "gameDate": "20230703",
            //                 "wynnbet": {
            //                     "totalUnder": "7.5",
            //                     "totalOverOdds": "+110",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-145",
            //                     "awayTeamRunLineOdds": "-204",
            //                     "awayTeamMLOdds": "+118",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+155",
            //                     "homeTeamMLOdds": "-130",
            //                     "totalOver": "7.5"
            //                 },
            //                 "unibet": {
            //                     "totalUnder": "7",
            //                     "totalOverOdds": "-107",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-114",
            //                     "awayTeamRunLineOdds": "-215",
            //                     "awayTeamMLOdds": "+114",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+170",
            //                     "homeTeamMLOdds": "-134",
            //                     "totalOver": "7"
            //                 },
            //                 "teamIDHome": "24",
            //                 "teamIDAway": "25",
            //                 "homeTeam": "SF",
            //                 "pointsbet": {
            //                     "totalUnder": "7",
            //                     "totalOverOdds": "-105",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-115",
            //                     "awayTeamRunLineOdds": "-190",
            //                     "awayTeamMLOdds": "+115",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+160",
            //                     "homeTeamMLOdds": "-140",
            //                     "totalOver": "7"
            //                 },
            //                 "betrivers": {
            //                     "totalUnder": "7",
            //                     "totalOverOdds": "-106",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-113",
            //                     "awayTeamRunLineOdds": "-215",
            //                     "awayTeamMLOdds": "+114",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+170",
            //                     "homeTeamMLOdds": "-134",
            //                     "totalOver": "7"
            //                 },
            //                 "caesars_sportsbook": {
            //                     "totalUnder": "7",
            //                     "totalOverOdds": "even",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-120",
            //                     "awayTeamRunLineOdds": "-190",
            //                     "awayTeamMLOdds": "+110",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+158",
            //                     "homeTeamMLOdds": "-130",
            //                     "totalOver": "7"
            //                 },
            //                 "gameID": "20230703_SEA@SF",
            //                 "awayTeam": "SEA",
            //                 "draftkings": {
            //                     "totalUnder": "7",
            //                     "totalOverOdds": "even",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-120",
            //                     "awayTeamRunLineOdds": "-180",
            //                     "awayTeamMLOdds": "+115",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+155",
            //                     "homeTeamMLOdds": "-135",
            //                     "totalOver": "7"
            //                 },
            //                 "playerProps": [
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+470",
            //                                 "one": "-120"
            //                             },
            //                             "bases": {
            //                                 "under": "-110",
            //                                 "over": "-120",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+1100"
            //                             },
            //                             "sbs": {
            //                                 "one": "+333"
            //                             },
            //                             "runs": {
            //                                 "under": "-260",
            //                                 "over": "+190",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+310"
            //                             }
            //                         },
            //                         "playerID": "664238"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+490",
            //                                 "one": "-145"
            //                             },
            //                             "bases": {
            //                                 "under": "+110",
            //                                 "over": "-145",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+750"
            //                             },
            //                             "runs": {
            //                                 "under": "-265",
            //                                 "over": "+190",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+230"
            //                             }
            //                         },
            //                         "playerID": "645801"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+340",
            //                                 "one": "-150"
            //                             },
            //                             "bases": {
            //                                 "under": "+110",
            //                                 "over": "-150",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+1150"
            //                             },
            //                             "sbs": {
            //                                 "one": "+800"
            //                             },
            //                             "runs": {
            //                                 "under": "-270",
            //                                 "over": "+195",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+250"
            //                             }
            //                         },
            //                         "playerID": "543939"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+420",
            //                                 "one": "-175"
            //                             },
            //                             "bases": {
            //                                 "under": "+130",
            //                                 "over": "-175",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+750"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1250"
            //                             },
            //                             "runs": {
            //                                 "under": "-215",
            //                                 "over": "+160",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+195"
            //                             }
            //                         },
            //                         "playerID": "543063"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+410",
            //                                 "one": "-165"
            //                             },
            //                             "bases": {
            //                                 "under": "+125",
            //                                 "over": "-165",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+1000"
            //                             },
            //                             "sbs": {
            //                                 "one": "+415"
            //                             },
            //                             "runs": {
            //                                 "under": "-230",
            //                                 "over": "+170",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+245"
            //                             }
            //                         },
            //                         "playerID": "596103"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+380",
            //                                 "one": "-180"
            //                             },
            //                             "bases": {
            //                                 "under": "-200",
            //                                 "over": "+150",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+600"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1000"
            //                             },
            //                             "runs": {
            //                                 "under": "-185",
            //                                 "over": "+140",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+180"
            //                             }
            //                         },
            //                         "playerID": "666165"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+350",
            //                                 "one": "-185"
            //                             },
            //                             "bases": {
            //                                 "under": "+135",
            //                                 "over": "-185",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+1000"
            //                             },
            //                             "sbs": {
            //                                 "one": "+710"
            //                             },
            //                             "runs": {
            //                                 "under": "-215",
            //                                 "over": "+160",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+230"
            //                             }
            //                         },
            //                         "playerID": "682641"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+320",
            //                                 "one": "-175"
            //                             },
            //                             "bases": {
            //                                 "under": "+145",
            //                                 "over": "-195",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+750"
            //                             },
            //                             "runs": {
            //                                 "under": "-230",
            //                                 "over": "+170",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+230"
            //                             }
            //                         },
            //                         "playerID": "553993"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+320",
            //                                 "one": "-200"
            //                             },
            //                             "bases": {
            //                                 "under": "+150",
            //                                 "over": "-205",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+650"
            //                             },
            //                             "runs": {
            //                                 "under": "-195",
            //                                 "over": "+145",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+210"
            //                             }
            //                         },
            //                         "playerID": "605204"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+310",
            //                                 "one": "-195"
            //                             },
            //                             "bases": {
            //                                 "under": "-185",
            //                                 "over": "+140",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+550"
            //                             },
            //                             "runs": {
            //                                 "under": "-195",
            //                                 "over": "+145",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+180"
            //                             }
            //                         },
            //                         "playerID": "663728"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+300",
            //                                 "one": "-215"
            //                             },
            //                             "bases": {
            //                                 "under": "-165",
            //                                 "over": "+125",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+650"
            //                             },
            //                             "runs": {
            //                                 "under": "-175",
            //                                 "over": "+130",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+175"
            //                             }
            //                         },
            //                         "playerID": "672275"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+300",
            //                                 "one": "-205"
            //                             },
            //                             "bases": {
            //                                 "under": "-195",
            //                                 "over": "+145",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+700"
            //                             },
            //                             "runs": {
            //                                 "under": "-180",
            //                                 "over": "+135",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+215"
            //                             }
            //                         },
            //                         "playerID": "527038"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+300",
            //                                 "one": "-190"
            //                             },
            //                             "bases": {
            //                                 "under": "+140",
            //                                 "over": "-190",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+700"
            //                             },
            //                             "sbs": {
            //                                 "one": "+470"
            //                             },
            //                             "runs": {
            //                                 "under": "-195",
            //                                 "over": "+145",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+190"
            //                             }
            //                         },
            //                         "playerID": "672284"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+290",
            //                                 "one": "-210"
            //                             },
            //                             "bases": {
            //                                 "under": "-205",
            //                                 "over": "+150",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+850"
            //                             },
            //                             "sbs": {
            //                                 "one": "+350"
            //                             },
            //                             "runs": {
            //                                 "under": "-185",
            //                                 "over": "+135",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+205"
            //                             }
            //                         },
            //                         "playerID": "642731"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+270",
            //                                 "one": "-255"
            //                             },
            //                             "bases": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+360"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1300"
            //                             },
            //                             "runs": {
            //                                 "under": "-125",
            //                                 "over": "-105",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+155"
            //                             }
            //                         },
            //                         "playerID": "592626"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+270",
            //                                 "one": "-235"
            //                             },
            //                             "bases": {
            //                                 "under": "-180",
            //                                 "over": "+135",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+700"
            //                             },
            //                             "sbs": {
            //                                 "one": "+790"
            //                             },
            //                             "runs": {
            //                                 "under": "-190",
            //                                 "over": "+140",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+165"
            //                             }
            //                         },
            //                         "playerID": "606192"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+210",
            //                                 "one": "-230"
            //                             },
            //                             "bases": {
            //                                 "under": "-195",
            //                                 "over": "+145",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+1200"
            //                             },
            //                             "sbs": {
            //                                 "one": "+980"
            //                             },
            //                             "runs": {
            //                                 "under": "-155",
            //                                 "over": "+120",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+245"
            //                             }
            //                         },
            //                         "playerID": "641487"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+175",
            //                                 "one": "-260"
            //                             },
            //                             "bases": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+700"
            //                             },
            //                             "sbs": {
            //                                 "one": "+320"
            //                             },
            //                             "runs": {
            //                                 "under": "-150",
            //                                 "over": "+110",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+190"
            //                             }
            //                         },
            //                         "playerID": "677594"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "bases": {
            //                                 "total": "0.5"
            //                             },
            //                             "sbs": {
            //                                 "one": "+390"
            //                             },
            //                             "runs": {
            //                                 "total": "0.5"
            //                             }
            //                         },
            //                         "playerID": "676609"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "strikeouts": {
            //                                 "under": "-110",
            //                                 "over": "-120",
            //                                 "total": "5.5"
            //                             },
            //                             "er": {
            //                                 "under": "-150",
            //                                 "over": "+105",
            //                                 "total": "2.5"
            //                             },
            //                             "outsRecorded": {
            //                                 "under": "",
            //                                 "total": "16.5"
            //                             }
            //                         },
            //                         "playerID": "693433"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hitsAllowed": {
            //                                 "under": "-190",
            //                                 "total": "5.5"
            //                             },
            //                             "strikeouts": {
            //                                 "under": "-170",
            //                                 "over": "+130",
            //                                 "total": "6.5"
            //                             },
            //                             "er": {
            //                                 "under": "-155",
            //                                 "over": "+110",
            //                                 "total": "2.5"
            //                             }
            //                         },
            //                         "playerID": "657277"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "bases": {
            //                                 "total": "1.5"
            //                             },
            //                             "runs": {
            //                                 "total": "0.5"
            //                             }
            //                         },
            //                         "playerID": "664034"
            //                     }
            //                 ]
            //             },
            //             "20230703_STL@MIA": {
            //                 "last_updated_e_time": "1688433489.6625116",
            //                 "bet365": {
            //                     "totalUnder": "8",
            //                     "totalOverOdds": "-105",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-115",
            //                     "awayTeamRunLineOdds": "-175",
            //                     "awayTeamMLOdds": "+120",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+155",
            //                     "homeTeamMLOdds": "-140",
            //                     "totalOver": "8"
            //                 },
            //                 "gameDate": "20230703",
            //                 "wynnbet": {
            //                     "totalUnder": "8",
            //                     "totalOverOdds": "-105",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-115",
            //                     "awayTeamRunLineOdds": "-179",
            //                     "awayTeamMLOdds": "+127",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+150",
            //                     "homeTeamMLOdds": "-139",
            //                     "totalOver": "8"
            //                 },
            //                 "unibet": {
            //                     "totalUnder": "8",
            //                     "totalOverOdds": "-103",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-118",
            //                     "awayTeamRunLineOdds": "-195",
            //                     "awayTeamMLOdds": "+123",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+155",
            //                     "homeTeamMLOdds": "-143",
            //                     "totalOver": "8"
            //                 },
            //                 "teamIDHome": "15",
            //                 "teamIDAway": "26",
            //                 "homeTeam": "MIA",
            //                 "pointsbet": {
            //                     "totalUnder": "8",
            //                     "totalOverOdds": "-105",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-115",
            //                     "awayTeamRunLineOdds": "-175",
            //                     "awayTeamMLOdds": "+120",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+145",
            //                     "homeTeamMLOdds": "-145",
            //                     "totalOver": "8"
            //                 },
            //                 "betrivers": {
            //                     "totalUnder": "8",
            //                     "totalOverOdds": "-103",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-118",
            //                     "awayTeamRunLineOdds": "-186",
            //                     "awayTeamMLOdds": "+123",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+155",
            //                     "homeTeamMLOdds": "-143",
            //                     "totalOver": "8"
            //                 },
            //                 "caesars_sportsbook": {
            //                     "totalUnder": "8",
            //                     "totalOverOdds": "-105",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-115",
            //                     "awayTeamRunLineOdds": "-178",
            //                     "awayTeamMLOdds": "+122",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+150",
            //                     "homeTeamMLOdds": "-145",
            //                     "totalOver": "8"
            //                 },
            //                 "gameID": "20230703_STL@MIA",
            //                 "awayTeam": "STL",
            //                 "draftkings": {
            //                     "totalUnder": "8",
            //                     "totalOverOdds": "-105",
            //                     "awayTeamRunLine": "+1.5",
            //                     "totalUnderOdds": "-115",
            //                     "awayTeamRunLineOdds": "-175",
            //                     "awayTeamMLOdds": "+125",
            //                     "homeTeamRunLine": "-1.5",
            //                     "homeTeamRunLineOdds": "+150",
            //                     "homeTeamMLOdds": "-145",
            //                     "totalOver": "8"
            //                 },
            //                 "playerProps": [
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+500",
            //                                 "one": "-125"
            //                             },
            //                             "bases": {
            //                                 "under": "-115",
            //                                 "over": "-115",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+600"
            //                             },
            //                             "sbs": {
            //                                 "one": "+940"
            //                             },
            //                             "runs": {
            //                                 "under": "-270",
            //                                 "over": "+195",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+265"
            //                             }
            //                         },
            //                         "playerID": "657557"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+370",
            //                                 "one": "-140"
            //                             },
            //                             "bases": {
            //                                 "under": "+110",
            //                                 "over": "-145",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+1100"
            //                             },
            //                             "sbs": {
            //                                 "one": "+775"
            //                             },
            //                             "runs": {
            //                                 "under": "-245",
            //                                 "over": "+180",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+310"
            //                             }
            //                         },
            //                         "playerID": "663457"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+300",
            //                                 "one": "-125"
            //                             },
            //                             "bases": {
            //                                 "under": "-105",
            //                                 "over": "-125",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+650"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1500"
            //                             },
            //                             "runs": {
            //                                 "under": "-285",
            //                                 "over": "+205",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+255"
            //                             }
            //                         },
            //                         "playerID": "663609"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+480",
            //                                 "one": "-135"
            //                             },
            //                             "bases": {
            //                                 "under": "+100",
            //                                 "over": "-135",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+1100"
            //                             },
            //                             "sbs": {
            //                                 "one": "+830"
            //                             },
            //                             "runs": {
            //                                 "under": "-235",
            //                                 "over": "+175",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+290"
            //                             }
            //                         },
            //                         "playerID": "641505"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+350",
            //                                 "one": "-165"
            //                             },
            //                             "bases": {
            //                                 "under": "+125",
            //                                 "over": "-165",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+900"
            //                             },
            //                             "sbs": {
            //                                 "one": "+850"
            //                             },
            //                             "runs": {
            //                                 "under": "-235",
            //                                 "over": "+175",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+280"
            //                             }
            //                         },
            //                         "playerID": "666185"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+340",
            //                                 "one": "-175"
            //                             },
            //                             "bases": {
            //                                 "under": "+130",
            //                                 "over": "-175",
            //                                 "total": "0.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+850"
            //                             },
            //                             "sbs": {
            //                                 "one": "+900"
            //                             },
            //                             "runs": {
            //                                 "under": "-220",
            //                                 "over": "+160",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+200"
            //                             }
            //                         },
            //                         "playerID": "663743"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+300",
            //                                 "one": "-200"
            //                             },
            //                             "bases": {
            //                                 "under": "-180",
            //                                 "over": "+135",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+475"
            //                             },
            //                             "sbs": {
            //                                 "one": "+790"
            //                             },
            //                             "runs": {
            //                                 "under": "-180",
            //                                 "over": "+135",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+170"
            //                             }
            //                         },
            //                         "playerID": "575929"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+310",
            //                                 "one": "-205"
            //                             },
            //                             "bases": {
            //                                 "under": "-195",
            //                                 "over": "+145",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+600"
            //                             },
            //                             "sbs": {
            //                                 "one": "+630"
            //                             },
            //                             "runs": {
            //                                 "under": "-205",
            //                                 "over": "+150",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+200"
            //                             }
            //                         },
            //                         "playerID": "691023"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+240",
            //                                 "one": "-205"
            //                             },
            //                             "bases": {
            //                                 "under": "-185",
            //                                 "over": "+135",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+550"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1350"
            //                             },
            //                             "runs": {
            //                                 "under": "-170",
            //                                 "over": "+125",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+175"
            //                             }
            //                         },
            //                         "playerID": "660821"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+290",
            //                                 "one": "-240"
            //                             },
            //                             "bases": {
            //                                 "under": "-200",
            //                                 "over": "+150",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+1200"
            //                             },
            //                             "sbs": {
            //                                 "one": "+710"
            //                             },
            //                             "runs": {
            //                                 "under": "-220",
            //                                 "over": "+160",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+210"
            //                             }
            //                         },
            //                         "playerID": "621563"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+240",
            //                                 "one": "-220"
            //                             },
            //                             "bases": {
            //                                 "under": "-175",
            //                                 "over": "+130",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+380"
            //                             },
            //                             "runs": {
            //                                 "under": "-130",
            //                                 "over": "+100",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+165"
            //                             }
            //                         },
            //                         "playerID": "624585"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+230",
            //                                 "one": "-230"
            //                             },
            //                             "bases": {
            //                                 "under": "-150",
            //                                 "over": "+115",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+650"
            //                             },
            //                             "sbs": {
            //                                 "one": "+270"
            //                             },
            //                             "runs": {
            //                                 "under": "-145",
            //                                 "over": "+110",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+215"
            //                             }
            //                         },
            //                         "playerID": "669242"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+200",
            //                                 "one": "-240"
            //                             },
            //                             "bases": {
            //                                 "under": "-160",
            //                                 "over": "+120",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+340"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1150"
            //                             },
            //                             "runs": {
            //                                 "under": "-150",
            //                                 "over": "+115",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+135"
            //                             }
            //                         },
            //                         "playerID": "571448"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+230",
            //                                 "one": "-250"
            //                             },
            //                             "bases": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+425"
            //                             },
            //                             "sbs": {
            //                                 "one": "+880"
            //                             },
            //                             "runs": {
            //                                 "under": "-140",
            //                                 "over": "+105",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+170"
            //                             }
            //                         },
            //                         "playerID": "502671"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+220",
            //                                 "one": "-250"
            //                             },
            //                             "bases": {
            //                                 "under": "-185",
            //                                 "over": "+135",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+650"
            //                             },
            //                             "runs": {
            //                                 "under": "-175",
            //                                 "over": "+130",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+175"
            //                             }
            //                         },
            //                         "playerID": "643265"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+220",
            //                                 "one": "-265"
            //                             },
            //                             "bases": {
            //                                 "under": "-195",
            //                                 "over": "+145",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+1100"
            //                             },
            //                             "sbs": {
            //                                 "one": "+790"
            //                             },
            //                             "runs": {
            //                                 "under": "-205",
            //                                 "over": "+150",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+210"
            //                             }
            //                         },
            //                         "playerID": "516416"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+180",
            //                                 "one": "-330"
            //                             },
            //                             "bases": {
            //                                 "under": "-145",
            //                                 "over": "+110",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+600"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1050"
            //                             },
            //                             "runs": {
            //                                 "under": "-150",
            //                                 "over": "+115",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+160"
            //                             }
            //                         },
            //                         "playerID": "650559"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hits": {
            //                                 "two": "+135",
            //                                 "one": "-410"
            //                             },
            //                             "bases": {
            //                                 "under": "-125",
            //                                 "over": "-105",
            //                                 "total": "1.5"
            //                             },
            //                             "homeruns": {
            //                                 "one": "+1100"
            //                             },
            //                             "sbs": {
            //                                 "one": "+1500"
            //                             },
            //                             "runs": {
            //                                 "under": "-150",
            //                                 "over": "+110",
            //                                 "total": "0.5"
            //                             },
            //                             "rbis": {
            //                                 "one": "+195"
            //                             }
            //                         },
            //                         "playerID": "650333"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "hitsAllowed": {
            //                                 "under": "-185",
            //                                 "total": "4.5"
            //                             },
            //                             "strikeouts": {
            //                                 "under": "-110",
            //                                 "over": "-120",
            //                                 "total": "5.5"
            //                             },
            //                             "er": {
            //                                 "under": "-185",
            //                                 "over": "+130",
            //                                 "total": "2.5"
            //                             }
            //                         },
            //                         "playerID": "666129"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "strikeouts": {
            //                                 "under": "-170",
            //                                 "over": "+125",
            //                                 "total": "4.5"
            //                             },
            //                             "er": {
            //                                 "under": "-110",
            //                                 "over": "-130",
            //                                 "total": "2.5"
            //                             }
            //                         },
            //                         "playerID": "571945"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "bases": {
            //                                 "total": "0.5"
            //                             },
            //                             "runs": {
            //                                 "total": "0.5"
            //                             }
            //                         },
            //                         "playerID": "680977"
            //                     },
            //                     {
            //                         "propBets": {
            //                             "bases": {
            //                                 "total": "0.5"
            //                             },
            //                             "runs": {
            //                                 "total": "0.5"
            //                             }
            //                         },
            //                         "playerID": "669357"
            //                     }
            //                 ]
            //             }
            //         }
            //     }
            // };
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async function getGameScore(gameId) {
        const options = {
            method: 'GET',
            url: 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBScoresOnly',
            params: {
                gameID: gameId
            },
            headers: {
                'X-RapidAPI-Key': 'e2c07a0e32mshadbae2353ed1158p11c17bjsn44ad7796f9f6',
                'X-RapidAPI-Host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            // let response = {
            //     data: {
            //         "statusCode": 200,
            //         "body": {
            //             "20230410_NYY@CLE": {
            //                 "away": "NYY",
            //                 "home": "CLE",
            //                 "teamIDAway": "19",
            //                 "teamIDHome": "8",
            //                 "gameTime": "6:10p",
            //                 "gameTime_epoch": "1681164600.0",
            //                 "lineScore": {
            //                     "away": {
            //                         "H": "6",
            //                         "R": "2",
            //                         "team": "NYY",
            //                         "scoresByInning": {
            //                             "1": "2",
            //                             "2": "0",
            //                             "3": "0",
            //                             "4": "0",
            //                             "5": "0",
            //                             "6": "0",
            //                             "7": "0",
            //                             "8": "0",
            //                             "9": "0"
            //                         },
            //                         "E": "1"
            //                     },
            //                     "home": {
            //                         "H": "4",
            //                         "R": "3",
            //                         "team": "CLE",
            //                         "scoresByInning": {
            //                             "1": "0",
            //                             "2": "1",
            //                             "3": "0",
            //                             "4": "1",
            //                             "5": "0",
            //                             "6": "0",
            //                             "7": "1",
            //                             "8": "0",
            //                             "9": "x"
            //                         },
            //                         "E": "0"
            //                     }
            //                 },
            //                 "currentInning": "Final",
            //                 "currentCount": "",
            //                 "currentOuts": "",
            //                 "awayResult": "L",
            //                 "homeResult": "W",
            //                 "topPerformers": {
            //                     "NYY": {
            //                         "Hitting": {
            //                             "2B": {
            //                                 "playerID": [
            //                                     "641432",
            //                                     "650402",
            //                                     "519317"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "3B": {
            //                                 "playerID": [
            //                                     "650402"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "519203",
            //                                     "641432",
            //                                     "519317"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "650402",
            //                                     "614173",
            //                                     "592450"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "GIDP": {
            //                                 "playerID": [
            //                                     "643396"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "650402"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "650402",
            //                                     "592450"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "519317"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "614173",
            //                                     "592450"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "650402"
            //                                 ],
            //                                 "total": "5"
            //                             }
            //                         },
            //                         "Fielding": {
            //                             "E": {
            //                                 "playerID": [
            //                                     "593334"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         },
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "593334"
            //                                 ],
            //                                 "total": "17"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "593334"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "593334",
            //                                     "641656"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "593334"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "605155"
            //                                 ],
            //                                 "total": "7"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "593334"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "593334"
            //                                 ],
            //                                 "total": "87"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "593334"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "641656"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "593334"
            //                                 ],
            //                                 "total": "49"
            //                             }
            //                         },
            //                         "BaseRunning": {
            //                             "SB": {
            //                                 "playerID": [
            //                                     "643396"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         }
            //                     },
            //                     "CLE": {
            //                         "Hitting": {
            //                             "2B": {
            //                                 "playerID": [
            //                                     "572287"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "665926",
            //                                     "608070"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "642708",
            //                                     "686823",
            //                                     "680757"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "GIDP": {
            //                                 "playerID": [
            //                                     "642708"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "572287"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "605137",
            //                                     "665926",
            //                                     "680757"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "647304",
            //                                     "686823",
            //                                     "572287"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SF": {
            //                                 "playerID": [
            //                                     "647304",
            //                                     "686823"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "665926"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "572287"
            //                                 ],
            //                                 "total": "6"
            //                             }
            //                         },
            //                         "Fielding": {},
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "669456"
            //                                 ],
            //                                 "total": "27"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "669456"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "669456"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "669456"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "669456"
            //                                 ],
            //                                 "total": "8"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "669456"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "669456"
            //                                 ],
            //                                 "total": "99"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "669456"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "669456"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "669456"
            //                                 ],
            //                                 "total": "56"
            //                             }
            //                         },
            //                         "BaseRunning": {
            //                             "SB": {
            //                                 "playerID": [
            //                                     "642708",
            //                                     "665926",
            //                                     "608070",
            //                                     "680757"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         }
            //                     }
            //                 },
            //                 "gameID": "20230410_NYY@CLE",
            //                 "gameStatus": "Completed"
            //             },
            //             "20230410_STL@COL": {
            //                 "away": "STL",
            //                 "home": "COL",
            //                 "teamIDAway": "26",
            //                 "teamIDHome": "9",
            //                 "gameTime": "6:41p",
            //                 "gameTime_epoch": "1681166460.0",
            //                 "lineScore": {
            //                     "away": {
            //                         "H": "6",
            //                         "R": "4",
            //                         "team": "STL",
            //                         "scoresByInning": {
            //                             "1": "0",
            //                             "2": "0",
            //                             "3": "0",
            //                             "4": "2",
            //                             "5": "0",
            //                             "6": "1",
            //                             "7": "0",
            //                             "8": "0",
            //                             "9": "1"
            //                         },
            //                         "E": "2"
            //                     },
            //                     "home": {
            //                         "H": "13",
            //                         "R": "7",
            //                         "team": "COL",
            //                         "scoresByInning": {
            //                             "1": "0",
            //                             "2": "0",
            //                             "3": "2",
            //                             "4": "2",
            //                             "5": "0",
            //                             "6": "2",
            //                             "7": "1",
            //                             "8": "0",
            //                             "9": "x"
            //                         },
            //                         "E": "1"
            //                     }
            //                 },
            //                 "currentInning": "Final",
            //                 "currentCount": "",
            //                 "currentOuts": "",
            //                 "awayResult": "L",
            //                 "homeResult": "W",
            //                 "topPerformers": {
            //                     "STL": {
            //                         "Hitting": {
            //                             "2B": {
            //                                 "playerID": [
            //                                     "669357"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "3B": {
            //                                 "playerID": [
            //                                     "676475"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "669357",
            //                                     "571448",
            //                                     "676475",
            //                                     "575929",
            //                                     "680977",
            //                                     "691023"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "502671",
            //                                     "669242"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "GIDP": {
            //                                 "playerID": [
            //                                     "571448",
            //                                     "676475"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "502671"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "680977"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "502671"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "575929"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "676475"
            //                                 ],
            //                                 "total": "3"
            //                             }
            //                         },
            //                         "Fielding": {
            //                             "E": {
            //                                 "playerID": [
            //                                     "669357",
            //                                     "669242"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         },
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "571927"
            //                                 ],
            //                                 "total": "26"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "571927"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "571927"
            //                                 ],
            //                                 "total": "6"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "571927"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "571927"
            //                                 ],
            //                                 "total": "6"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "571927"
            //                                 ],
            //                                 "total": "9"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "571927"
            //                                 ],
            //                                 "total": "92"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "571927"
            //                                 ],
            //                                 "total": "6"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "571927"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "571927"
            //                                 ],
            //                                 "total": "60"
            //                             }
            //                         },
            //                         "BaseRunning": {}
            //                     },
            //                     "COL": {
            //                         "Hitting": {
            //                             "2B": {
            //                                 "playerID": [
            //                                     "678662"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "676701",
            //                                     "595777",
            //                                     "453568",
            //                                     "543068",
            //                                     "592178",
            //                                     "602074",
            //                                     "660707",
            //                                     "678662"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "453568",
            //                                     "553869"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "GIDP": {
            //                                 "playerID": [
            //                                     "453568",
            //                                     "553869"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "676701"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "553869",
            //                                     "660707"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "676701"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "SF": {
            //                                 "playerID": [
            //                                     "595777"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "543068"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "678662"
            //                                 ],
            //                                 "total": "4"
            //                             }
            //                         },
            //                         "Fielding": {
            //                             "E": {
            //                                 "playerID": [
            //                                     "595777"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         },
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "608566"
            //                                 ],
            //                                 "total": "18"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "664875"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "608566"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "608718",
            //                                     "664875"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "608566"
            //                                 ],
            //                                 "total": "9"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "608566"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "608566"
            //                                 ],
            //                                 "total": "62"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "608566"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "608566"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "608566"
            //                                 ],
            //                                 "total": "42"
            //                             }
            //                         },
            //                         "BaseRunning": {
            //                             "CS": {
            //                                 "playerID": [
            //                                     "453568"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         }
            //                     }
            //                 },
            //                 "gameID": "20230410_STL@COL",
            //                 "gameStatus": "Completed"
            //             },
            //             "20230410_WAS@LAA": {
            //                 "away": "WAS",
            //                 "home": "LAA",
            //                 "teamIDAway": "30",
            //                 "teamIDHome": "13",
            //                 "gameTime": "6:38p",
            //                 "gameTime_epoch": "1681166280.0",
            //                 "lineScore": {
            //                     "away": {
            //                         "H": "14",
            //                         "R": "6",
            //                         "team": "WAS",
            //                         "scoresByInning": {
            //                             "1": "0",
            //                             "2": "1",
            //                             "3": "0",
            //                             "4": "3",
            //                             "5": "1",
            //                             "6": "0",
            //                             "7": "1",
            //                             "8": "0",
            //                             "9": "0"
            //                         },
            //                         "E": "0"
            //                     },
            //                     "home": {
            //                         "H": "7",
            //                         "R": "4",
            //                         "team": "LAA",
            //                         "scoresByInning": {
            //                             "1": "2",
            //                             "2": "0",
            //                             "3": "2",
            //                             "4": "0",
            //                             "5": "0",
            //                             "6": "0",
            //                             "7": "0",
            //                             "8": "0",
            //                             "9": "0"
            //                         },
            //                         "E": "1"
            //                     }
            //                 },
            //                 "currentInning": "Final",
            //                 "currentCount": "",
            //                 "currentOuts": "",
            //                 "awayResult": "W",
            //                 "homeResult": "L",
            //                 "topPerformers": {
            //                     "WAS": {
            //                         "Hitting": {
            //                             "2B": {
            //                                 "playerID": [
            //                                     "608841",
            //                                     "660688"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "608841",
            //                                     "669743",
            //                                     "600869",
            //                                     "660688",
            //                                     "657041"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "642086",
            //                                     "656308"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "645302",
            //                                     "608841",
            //                                     "642086",
            //                                     "669743",
            //                                     "600869"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "642086"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "682928",
            //                                     "600869"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "SAC": {
            //                                 "playerID": [
            //                                     "645302"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "656308",
            //                                     "657041"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "608841"
            //                                 ],
            //                                 "total": "3"
            //                             }
            //                         },
            //                         "Fielding": {},
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "571578"
            //                                 ],
            //                                 "total": "25"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "571578"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "571578"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "666168",
            //                                     "605218",
            //                                     "640448",
            //                                     "571578"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "571578"
            //                                 ],
            //                                 "total": "9"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "571578"
            //                                 ],
            //                                 "total": "7"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "571578"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "571578"
            //                                 ],
            //                                 "total": "86"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "571578"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "571578"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "571578"
            //                                 ],
            //                                 "total": "53"
            //                             }
            //                         },
            //                         "BaseRunning": {
            //                             "SB": {
            //                                 "playerID": [
            //                                     "645302",
            //                                     "682928"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         }
            //                     },
            //                     "LAA": {
            //                         "Hitting": {
            //                             "2B": {
            //                                 "playerID": [
            //                                     "570482"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "545361"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "592669",
            //                                     "621493",
            //                                     "660271",
            //                                     "592273"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "GIDP": {
            //                                 "playerID": [
            //                                     "592273"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "592669",
            //                                     "650859"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "HBP": {
            //                                 "playerID": [
            //                                     "681351"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "592669"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "592669"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "650859"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "545361"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "592669"
            //                                 ],
            //                                 "total": "5"
            //                             }
            //                         },
            //                         "Fielding": {
            //                             "E": {
            //                                 "playerID": [
            //                                     "650859"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         },
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "660761"
            //                                 ],
            //                                 "total": "23"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "519043",
            //                                     "660761"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "660761"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "660761"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "656353"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "660761"
            //                                 ],
            //                                 "total": "10"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "660761"
            //                                 ],
            //                                 "total": "80"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "660761"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "656353"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "660761"
            //                                 ],
            //                                 "total": "52"
            //                             }
            //                         },
            //                         "BaseRunning": {}
            //                     }
            //                 },
            //                 "gameID": "20230410_WAS@LAA",
            //                 "gameStatus": "Completed"
            //             },
            //             "20230410_SD@NYM": {
            //                 "away": "SD",
            //                 "home": "NYM",
            //                 "teamIDAway": "23",
            //                 "teamIDHome": "18",
            //                 "gameTime": "7:10p",
            //                 "gameTime_epoch": "1681168200.0",
            //                 "lineScore": {
            //                     "away": {
            //                         "H": "2",
            //                         "R": "0",
            //                         "team": "SD",
            //                         "scoresByInning": {
            //                             "1": "0",
            //                             "2": "0",
            //                             "3": "0",
            //                             "4": "0",
            //                             "5": "0",
            //                             "6": "0",
            //                             "7": "0",
            //                             "8": "0",
            //                             "9": "0"
            //                         },
            //                         "E": "0"
            //                     },
            //                     "home": {
            //                         "H": "7",
            //                         "R": "5",
            //                         "team": "NYM",
            //                         "scoresByInning": {
            //                             "1": "0",
            //                             "2": "0",
            //                             "3": "2",
            //                             "4": "0",
            //                             "5": "0",
            //                             "6": "0",
            //                             "7": "3",
            //                             "8": "0",
            //                             "9": "x"
            //                         },
            //                         "E": "1"
            //                     }
            //                 },
            //                 "currentInning": "Final",
            //                 "currentCount": "",
            //                 "currentOuts": "",
            //                 "awayResult": "L",
            //                 "homeResult": "W",
            //                 "topPerformers": {
            //                     "SD": {
            //                         "Hitting": {
            //                             "AB": {
            //                                 "playerID": [
            //                                     "630105",
            //                                     "592518",
            //                                     "572761"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "665742"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "GIDP": {
            //                                 "playerID": [
            //                                     "593428"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "593428",
            //                                     "673490"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "572761"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "593428",
            //                                     "673490"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         },
            //                         "Fielding": {},
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "506433"
            //                                 ],
            //                                 "total": "27"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "506433"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "506433"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "506433"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "506433"
            //                                 ],
            //                                 "total": "6"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "506433"
            //                                 ],
            //                                 "total": "6"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "506433"
            //                                 ],
            //                                 "total": "104"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "506433"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "506433"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "506433"
            //                                 ],
            //                                 "total": "67"
            //                             }
            //                         },
            //                         "BaseRunning": {
            //                             "SB": {
            //                                 "playerID": [
            //                                     "593428"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         }
            //                     },
            //                     "NYM": {
            //                         "Hitting": {
            //                             "2B": {
            //                                 "playerID": [
            //                                     "592192",
            //                                     "596019",
            //                                     "643446"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "592192",
            //                                     "624413",
            //                                     "607043",
            //                                     "643446"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "596129"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "596129",
            //                                     "592192",
            //                                     "596019",
            //                                     "607043",
            //                                     "643446",
            //                                     "621512",
            //                                     "641645"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "HBP": {
            //                                 "playerID": [
            //                                     "596019"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "607043"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "596019",
            //                                     "643446"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "SF": {
            //                                 "playerID": [
            //                                     "500871"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "596019"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "592192",
            //                                     "596019",
            //                                     "643446"
            //                                 ],
            //                                 "total": "2"
            //                             }
            //                         },
            //                         "Fielding": {
            //                             "E": {
            //                                 "playerID": [
            //                                     "621512"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         },
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "453286"
            //                                 ],
            //                                 "total": "18"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "453286"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "453286"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "453286",
            //                                     "595928"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "493603",
            //                                     "453286"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "453286"
            //                                 ],
            //                                 "total": "97"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "453286"
            //                                 ],
            //                                 "total": "6"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "453286"
            //                                 ],
            //                                 "total": "61"
            //                             }
            //                         },
            //                         "BaseRunning": {
            //                             "SB": {
            //                                 "playerID": [
            //                                     "607043"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         }
            //                     }
            //                 },
            //                 "gameID": "20230410_SD@NYM",
            //                 "gameStatus": "Completed"
            //             },
            //             "20230410_MIL@ARI": {
            //                 "away": "MIL",
            //                 "home": "ARI",
            //                 "teamIDAway": "16",
            //                 "teamIDHome": "1",
            //                 "gameTime": "6:41p",
            //                 "gameTime_epoch": "1681166460.0",
            //                 "lineScore": {
            //                     "away": {
            //                         "H": "3",
            //                         "R": "0",
            //                         "team": "MIL",
            //                         "scoresByInning": {
            //                             "1": "0",
            //                             "2": "0",
            //                             "3": "0",
            //                             "4": "0",
            //                             "5": "0",
            //                             "6": "0",
            //                             "7": "0",
            //                             "8": "0",
            //                             "9": "0"
            //                         },
            //                         "E": "1"
            //                     },
            //                     "home": {
            //                         "H": "8",
            //                         "R": "3",
            //                         "team": "ARI",
            //                         "scoresByInning": {
            //                             "1": "1",
            //                             "2": "0",
            //                             "3": "0",
            //                             "4": "0",
            //                             "5": "2",
            //                             "6": "0",
            //                             "7": "0",
            //                             "8": "0",
            //                             "9": "x"
            //                         },
            //                         "E": "0"
            //                     }
            //                 },
            //                 "currentInning": "Final",
            //                 "currentCount": "",
            //                 "currentOuts": "",
            //                 "awayResult": "L",
            //                 "homeResult": "W",
            //                 "topPerformers": {
            //                     "MIL": {
            //                         "Hitting": {
            //                             "AB": {
            //                                 "playerID": [
            //                                     "592885",
            //                                     "642715"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "669003"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "GIDP": {
            //                                 "playerID": [
            //                                     "572228"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "661388",
            //                                     "669003",
            //                                     "668930"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "686894",
            //                                     "592885"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "661388",
            //                                     "669003",
            //                                     "668930"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         },
            //                         "Fielding": {
            //                             "E": {
            //                                 "playerID": [
            //                                     "642715"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         },
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "489119"
            //                                 ],
            //                                 "total": "23"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "489119"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "489119"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "489119"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "489119"
            //                                 ],
            //                                 "total": "8"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "489119"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "489119"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "489119"
            //                                 ],
            //                                 "total": "90"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "489119"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "669060",
            //                                     "489119"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "489119"
            //                                 ],
            //                                 "total": "58"
            //                             }
            //                         },
            //                         "BaseRunning": {
            //                             "CS": {
            //                                 "playerID": [
            //                                     "668930"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         }
            //                     },
            //                     "ARI": {
            //                         "Hitting": {
            //                             "2B": {
            //                                 "playerID": [
            //                                     "605113",
            //                                     "606466"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "572233",
            //                                     "605113",
            //                                     "666971",
            //                                     "672515",
            //                                     "664983"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "668942",
            //                                     "606466",
            //                                     "446334"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "GIDP": {
            //                                 "playerID": [
            //                                     "572233"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "605113"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "572233"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "606466"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "572233"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "668942",
            //                                     "664983"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "572233",
            //                                     "605113"
            //                                 ],
            //                                 "total": "4"
            //                             }
            //                         },
            //                         "Fielding": {},
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "668678"
            //                                 ],
            //                                 "total": "23"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "668678"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "668678"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "668678"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "668678"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "668678"
            //                                 ],
            //                                 "total": "96"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "668678"
            //                                 ],
            //                                 "total": "11"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "668678"
            //                                 ],
            //                                 "total": "62"
            //                             }
            //                         },
            //                         "BaseRunning": {}
            //                     }
            //                 },
            //                 "gameID": "20230410_MIL@ARI",
            //                 "gameStatus": "Completed"
            //             },
            //             "20230410_SEA@CHC": {
            //                 "away": "SEA",
            //                 "home": "CHC",
            //                 "teamIDAway": "25",
            //                 "teamIDHome": "5",
            //                 "gameTime": "6:39p",
            //                 "gameTime_epoch": "1681166340.0",
            //                 "lineScore": {
            //                     "away": {
            //                         "H": "6",
            //                         "R": "2",
            //                         "team": "SEA",
            //                         "scoresByInning": {
            //                             "1": "0",
            //                             "2": "0",
            //                             "3": "0",
            //                             "4": "1",
            //                             "5": "0",
            //                             "6": "0",
            //                             "7": "0",
            //                             "8": "0",
            //                             "9": "1",
            //                             "10": "0"
            //                         },
            //                         "E": "1"
            //                     },
            //                     "home": {
            //                         "H": "8",
            //                         "R": "3",
            //                         "team": "CHC",
            //                         "scoresByInning": {
            //                             "1": "0",
            //                             "2": "0",
            //                             "3": "0",
            //                             "4": "2",
            //                             "5": "0",
            //                             "6": "0",
            //                             "7": "0",
            //                             "8": "0",
            //                             "9": "0",
            //                             "10": "1"
            //                         },
            //                         "E": "0"
            //                     }
            //                 },
            //                 "currentInning": "Final/10",
            //                 "currentCount": "",
            //                 "currentOuts": "",
            //                 "awayResult": "L",
            //                 "homeResult": "W",
            //                 "topPerformers": {
            //                     "SEA": {
            //                         "Hitting": {
            //                             "2B": {
            //                                 "playerID": [
            //                                     "669450",
            //                                     "664034"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "664034"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "669450",
            //                                     "553993",
            //                                     "677594"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "543939"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "HBP": {
            //                                 "playerID": [
            //                                     "677594"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "672284"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "664034",
            //                                     "672284"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "572041",
            //                                     "672284"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SF": {
            //                                 "playerID": [
            //                                     "572041"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "664034",
            //                                     "677594"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "672284"
            //                                 ],
            //                                 "total": "4"
            //                             }
            //                         },
            //                         "Fielding": {
            //                             "E": {
            //                                 "playerID": [
            //                                     "608596"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         },
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "622491"
            //                                 ],
            //                                 "total": "25"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "622491"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "622491"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "622491"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "622491"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "622491"
            //                                 ],
            //                                 "total": "6"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "622491"
            //                                 ],
            //                                 "total": "93"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "622491"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "622491"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "622491"
            //                                 ],
            //                                 "total": "61"
            //                             }
            //                         },
            //                         "BaseRunning": {
            //                             "CS": {
            //                                 "playerID": [
            //                                     "543939"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         }
            //                     },
            //                     "CHC": {
            //                         "Hitting": {
            //                             "2B": {
            //                                 "playerID": [
            //                                     "641355",
            //                                     "670156"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "663538"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "664023",
            //                                     "543333"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "663538"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "664023",
            //                                     "641355",
            //                                     "663611"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "641355",
            //                                     "663538",
            //                                     "543333"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "621020"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "663538"
            //                                 ],
            //                                 "total": "3"
            //                             }
            //                         },
            //                         "Fielding": {},
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "592767"
            //                                 ],
            //                                 "total": "18"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "624522"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "592767",
            //                                     "605242"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "592767"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "592767",
            //                                     "640470",
            //                                     "502202"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "592767",
            //                                     "605242"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "605242"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "592767"
            //                                 ],
            //                                 "total": "76"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "592767",
            //                                     "605242"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "592767"
            //                                 ],
            //                                 "total": "7"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "592767"
            //                                 ],
            //                                 "total": "45"
            //                             }
            //                         },
            //                         "BaseRunning": {
            //                             "SB": {
            //                                 "playerID": [
            //                                     "664023",
            //                                     "663538",
            //                                     "663611"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         }
            //                     }
            //                 },
            //                 "gameID": "20230410_SEA@CHC",
            //                 "gameStatus": "Completed"
            //             },
            //             "20230410_CHW@MIN": {
            //                 "away": "CHW",
            //                 "home": "MIN",
            //                 "teamIDAway": "6",
            //                 "teamIDHome": "17",
            //                 "gameTime": "1:12p",
            //                 "gameTime_epoch": "1681146720.0",
            //                 "lineScore": {
            //                     "away": {
            //                         "H": "8",
            //                         "R": "4",
            //                         "team": "CHW",
            //                         "scoresByInning": {
            //                             "1": "0",
            //                             "2": "0",
            //                             "3": "0",
            //                             "4": "4",
            //                             "5": "0",
            //                             "6": "0",
            //                             "7": "0",
            //                             "8": "0",
            //                             "9": "0"
            //                         },
            //                         "E": "3"
            //                     },
            //                     "home": {
            //                         "H": "4",
            //                         "R": "3",
            //                         "team": "MIN",
            //                         "scoresByInning": {
            //                             "1": "0",
            //                             "2": "0",
            //                             "3": "1",
            //                             "4": "1",
            //                             "5": "1",
            //                             "6": "0",
            //                             "7": "0",
            //                             "8": "0",
            //                             "9": "0"
            //                         },
            //                         "E": "0"
            //                     }
            //                 },
            //                 "currentInning": "Final",
            //                 "currentCount": "",
            //                 "currentOuts": "",
            //                 "awayResult": "W",
            //                 "homeResult": "L",
            //                 "topPerformers": {
            //                     "CHW": {
            //                         "Hitting": {
            //                             "2B": {
            //                                 "playerID": [
            //                                     "518735",
            //                                     "683734"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "518735",
            //                                     "673357",
            //                                     "462101",
            //                                     "683734",
            //                                     "643217",
            //                                     "593643"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "693049",
            //                                     "669394"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "518735"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "593643"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "518735",
            //                                     "643217",
            //                                     "593643",
            //                                     "657757"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "593643"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "663853"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "593643"
            //                                 ],
            //                                 "total": "4"
            //                             }
            //                         },
            //                         "Fielding": {
            //                             "E": {
            //                                 "playerID": [
            //                                     "462101",
            //                                     "593643",
            //                                     "657757"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         },
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "656302"
            //                                 ],
            //                                 "total": "25"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "656302"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "656302"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "656302"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "656302"
            //                                 ],
            //                                 "total": "9"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "656302"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "656302"
            //                                 ],
            //                                 "total": "98"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "656302"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "656302"
            //                                 ],
            //                                 "total": "6"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "656302"
            //                                 ],
            //                                 "total": "62"
            //                             }
            //                         },
            //                         "BaseRunning": {}
            //                     },
            //                     "MIN": {
            //                         "Hitting": {
            //                             "AB": {
            //                                 "playerID": [
            //                                     "669304",
            //                                     "663616"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "543877",
            //                                     "670242"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "543877",
            //                                     "669304",
            //                                     "456781",
            //                                     "663616"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "HBP": {
            //                                 "playerID": [
            //                                     "670242",
            //                                     "650489",
            //                                     "456781"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "670242",
            //                                     "572191",
            //                                     "624503"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "663616"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "571657",
            //                                     "663616"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "543877",
            //                                     "669304",
            //                                     "456781",
            //                                     "663616"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         },
            //                         "Fielding": {},
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "628317"
            //                                 ],
            //                                 "total": "26"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "663558"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "628317"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "628317"
            //                                 ],
            //                                 "total": "7"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "628317"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "628317"
            //                                 ],
            //                                 "total": "8"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "628317"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "628317"
            //                                 ],
            //                                 "total": "83"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "628317"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "628317"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "628317"
            //                                 ],
            //                                 "total": "55"
            //                             }
            //                         },
            //                         "BaseRunning": {}
            //                     }
            //                 },
            //                 "gameID": "20230410_CHW@MIN",
            //                 "gameStatus": "Completed"
            //             },
            //             "20230410_OAK@BAL": {
            //                 "away": "OAK",
            //                 "home": "BAL",
            //                 "teamIDAway": "20",
            //                 "teamIDHome": "3",
            //                 "gameTime": "6:36p",
            //                 "gameTime_epoch": "1681166160.0",
            //                 "lineScore": {
            //                     "away": {
            //                         "H": "8",
            //                         "R": "1",
            //                         "team": "OAK",
            //                         "scoresByInning": {
            //                             "1": "1",
            //                             "2": "0",
            //                             "3": "0",
            //                             "4": "0",
            //                             "5": "0",
            //                             "6": "0",
            //                             "7": "0",
            //                             "8": "0",
            //                             "9": "0"
            //                         },
            //                         "E": "1"
            //                     },
            //                     "home": {
            //                         "H": "6",
            //                         "R": "5",
            //                         "team": "BAL",
            //                         "scoresByInning": {
            //                             "1": "2",
            //                             "2": "0",
            //                             "3": "1",
            //                             "4": "0",
            //                             "5": "0",
            //                             "6": "1",
            //                             "7": "0",
            //                             "8": "1",
            //                             "9": "x"
            //                         },
            //                         "E": "0"
            //                     }
            //                 },
            //                 "currentInning": "Final",
            //                 "currentCount": "",
            //                 "currentOuts": "",
            //                 "awayResult": "L",
            //                 "homeResult": "W",
            //                 "topPerformers": {
            //                     "OAK": {
            //                         "Hitting": {
            //                             "2B": {
            //                                 "playerID": [
            //                                     "668843",
            //                                     "607054"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "3B": {
            //                                 "playerID": [
            //                                     "657656"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "675656",
            //                                     "668843",
            //                                     "607054",
            //                                     "657656",
            //                                     "643393",
            //                                     "669127"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "676116"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "GIDP": {
            //                                 "playerID": [
            //                                     "649557",
            //                                     "643393"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "607054"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "649557"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "657656"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "675656",
            //                                     "668843"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "607054",
            //                                     "657656"
            //                                 ],
            //                                 "total": "3"
            //                             }
            //                         },
            //                         "Fielding": {
            //                             "E": {
            //                                 "playerID": [
            //                                     "669127"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         },
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "676664"
            //                                 ],
            //                                 "total": "20"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "544727",
            //                                     "594580",
            //                                     "676664"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "676664"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "676664"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "676664"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "676664"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "676664"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "676664"
            //                                 ],
            //                                 "total": "90"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "676664"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "676664"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "676664"
            //                                 ],
            //                                 "total": "55"
            //                             }
            //                         },
            //                         "BaseRunning": {
            //                             "PO": {
            //                                 "playerID": [
            //                                     "676116"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         }
            //                     },
            //                     "BAL": {
            //                         "Hitting": {
            //                             "2B": {
            //                                 "playerID": [
            //                                     "669720"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "623993",
            //                                     "663624",
            //                                     "668939",
            //                                     "669720"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "602104",
            //                                     "656775",
            //                                     "624428"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "669720"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "HBP": {
            //                                 "playerID": [
            //                                     "602104"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "663624",
            //                                     "668939",
            //                                     "669720"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "669720"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "663624"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "668939",
            //                                     "663630"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "669720"
            //                                 ],
            //                                 "total": "6"
            //                             }
            //                         },
            //                         "Fielding": {
            //                             "Pickoffs": {
            //                                 "playerID": [
            //                                     "502043"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         },
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "502043"
            //                                 ],
            //                                 "total": "24"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "502043"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "502043"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "502043"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "502043"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "502043"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "502043"
            //                                 ],
            //                                 "total": "92"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "502043"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "502043"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "502043"
            //                                 ],
            //                                 "total": "57"
            //                             }
            //                         },
            //                         "BaseRunning": {
            //                             "SB": {
            //                                 "playerID": [
            //                                     "656775"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         }
            //                     }
            //                 },
            //                 "gameID": "20230410_OAK@BAL",
            //                 "gameStatus": "Completed"
            //             },
            //             "20230410_HOU@PIT": {
            //                 "away": "HOU",
            //                 "home": "PIT",
            //                 "teamIDAway": "11",
            //                 "teamIDHome": "22",
            //                 "gameTime": "6:40p",
            //                 "gameTime_epoch": "1681166400.0",
            //                 "lineScore": {
            //                     "away": {
            //                         "H": "13",
            //                         "R": "8",
            //                         "team": "HOU",
            //                         "scoresByInning": {
            //                             "1": "1",
            //                             "2": "3",
            //                             "3": "1",
            //                             "4": "2",
            //                             "5": "0",
            //                             "6": "0",
            //                             "7": "1",
            //                             "8": "0",
            //                             "9": "0"
            //                         },
            //                         "E": "0"
            //                     },
            //                     "home": {
            //                         "H": "3",
            //                         "R": "2",
            //                         "team": "PIT",
            //                         "scoresByInning": {
            //                             "1": "0",
            //                             "2": "1",
            //                             "3": "0",
            //                             "4": "1",
            //                             "5": "0",
            //                             "6": "0",
            //                             "7": "0",
            //                             "8": "0",
            //                             "9": "0"
            //                         },
            //                         "E": "1"
            //                     }
            //                 },
            //                 "currentInning": "Final",
            //                 "currentCount": "",
            //                 "currentOuts": "",
            //                 "awayResult": "W",
            //                 "homeResult": "L",
            //                 "topPerformers": {
            //                     "HOU": {
            //                         "Hitting": {
            //                             "2B": {
            //                                 "playerID": [
            //                                     "670541",
            //                                     "676801",
            //                                     "665161"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "667452",
            //                                     "643289",
            //                                     "665161"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "608324"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "670541",
            //                                     "643289"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "HBP": {
            //                                 "playerID": [
            //                                     "670541"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "IBB": {
            //                                 "playerID": [
            //                                     "547989"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "608324"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "663656"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "SAC": {
            //                                 "playerID": [
            //                                     "676801"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "676801",
            //                                     "455117"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "670541"
            //                                 ],
            //                                 "total": "4"
            //                             }
            //                         },
            //                         "Fielding": {},
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "664285"
            //                                 ],
            //                                 "total": "27"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "664285"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "664285"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "664285",
            //                                     "661527"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "664285"
            //                                 ],
            //                                 "total": "11"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "664285"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "664285"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "664285"
            //                                 ],
            //                                 "total": "107"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "664285"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "664285"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "664285"
            //                                 ],
            //                                 "total": "64"
            //                             }
            //                         },
            //                         "BaseRunning": {}
            //                     },
            //                     "PIT": {
            //                         "Hitting": {
            //                             "2B": {
            //                                 "playerID": [
            //                                     "467793"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "596847",
            //                                     "663647",
            //                                     "467793",
            //                                     "668804"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "656582"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "GIDP": {
            //                                 "playerID": [
            //                                     "596847",
            //                                     "641511"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "596847",
            //                                     "467793",
            //                                     "666801"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "HBP": {
            //                                 "playerID": [
            //                                     "666801"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "596847"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "596847",
            //                                     "467793"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "596847",
            //                                     "666801"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "596847"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "596847"
            //                                 ],
            //                                 "total": "4"
            //                             }
            //                         },
            //                         "Fielding": {
            //                             "E": {
            //                                 "playerID": [
            //                                     "666801"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         },
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "672710"
            //                                 ],
            //                                 "total": "23"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "672710"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "672710"
            //                                 ],
            //                                 "total": "7"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "672710"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "640444"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "672710"
            //                                 ],
            //                                 "total": "9"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "672710"
            //                                 ],
            //                                 "total": "83"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "672710"
            //                                 ],
            //                                 "total": "7"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "640444",
            //                                     "672710"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "672710"
            //                                 ],
            //                                 "total": "44"
            //                             }
            //                         },
            //                         "BaseRunning": {}
            //                     }
            //                 },
            //                 "gameID": "20230410_HOU@PIT",
            //                 "gameStatus": "Completed"
            //             },
            //             "20230410_CIN@ATL": {
            //                 "away": "CIN",
            //                 "home": "ATL",
            //                 "teamIDAway": "7",
            //                 "teamIDHome": "2",
            //                 "gameTime": "7:20p",
            //                 "gameTime_epoch": "1681168800.0",
            //                 "lineScore": {
            //                     "away": {
            //                         "H": "12",
            //                         "R": "4",
            //                         "team": "CIN",
            //                         "scoresByInning": {
            //                             "1": "0",
            //                             "2": "0",
            //                             "3": "0",
            //                             "4": "0",
            //                             "5": "0",
            //                             "6": "0",
            //                             "7": "0",
            //                             "8": "1",
            //                             "9": "2",
            //                             "10": "1"
            //                         },
            //                         "E": "0"
            //                     },
            //                     "home": {
            //                         "H": "10",
            //                         "R": "5",
            //                         "team": "ATL",
            //                         "scoresByInning": {
            //                             "1": "0",
            //                             "2": "0",
            //                             "3": "0",
            //                             "4": "0",
            //                             "5": "0",
            //                             "6": "1",
            //                             "7": "1",
            //                             "8": "1",
            //                             "9": "0",
            //                             "10": "2"
            //                         },
            //                         "E": "0"
            //                     }
            //                 },
            //                 "currentInning": "Final/10",
            //                 "currentCount": "",
            //                 "currentOuts": "",
            //                 "awayResult": "L",
            //                 "homeResult": "W",
            //                 "topPerformers": {
            //                     "CIN": {
            //                         "Hitting": {
            //                             "2B": {
            //                                 "playerID": [
            //                                     "668715",
            //                                     "663697"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "3B": {
            //                                 "playerID": [
            //                                     "656413"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "641584",
            //                                     "663886",
            //                                     "663697"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "670770"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "GIDP": {
            //                                 "playerID": [
            //                                     "641584",
            //                                     "621028",
            //                                     "663697"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "663697"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "571976",
            //                                     "676480",
            //                                     "656413",
            //                                     "663697"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "641584",
            //                                     "668715",
            //                                     "656413",
            //                                     "663697"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SAC": {
            //                                 "playerID": [
            //                                     "670770"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "663886"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "663697"
            //                                 ],
            //                                 "total": "4"
            //                             }
            //                         },
            //                         "Fielding": {},
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "668933"
            //                                 ],
            //                                 "total": "25"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "668933"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "668933"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "668933"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "668933"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "668933"
            //                                 ],
            //                                 "total": "6"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "571882"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "668933"
            //                                 ],
            //                                 "total": "97"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "571882",
            //                                     "668933"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "668933"
            //                                 ],
            //                                 "total": "7"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "668933"
            //                                 ],
            //                                 "total": "63"
            //                             }
            //                         },
            //                         "BaseRunning": {}
            //                     },
            //                     "ATL": {
            //                         "Hitting": {
            //                             "2B": {
            //                                 "playerID": [
            //                                     "669221"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "663586",
            //                                     "669221",
            //                                     "660670"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "621566"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "GIDP": {
            //                                 "playerID": [
            //                                     "663586",
            //                                     "621566"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "669221",
            //                                     "660670"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "669221"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "663586"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "669221"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "663586",
            //                                     "645277",
            //                                     "669221",
            //                                     "642201"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "669221"
            //                                 ],
            //                                 "total": "8"
            //                             }
            //                         },
            //                         "Fielding": {},
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "693821"
            //                                 ],
            //                                 "total": "24"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "693821"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "621345"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "693821"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "693821"
            //                                 ],
            //                                 "total": "6"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "693821"
            //                                 ],
            //                                 "total": "6"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "693821"
            //                                 ],
            //                                 "total": "103"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "621345"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "693821"
            //                                 ],
            //                                 "total": "7"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "693821"
            //                                 ],
            //                                 "total": "70"
            //                             }
            //                         },
            //                         "BaseRunning": {}
            //                     }
            //                 },
            //                 "gameID": "20230410_CIN@ATL",
            //                 "gameStatus": "Completed"
            //             },
            //             "20230410_BOS@TB": {
            //                 "away": "BOS",
            //                 "home": "TB",
            //                 "teamIDAway": "4",
            //                 "teamIDHome": "27",
            //                 "gameTime": "6:40p",
            //                 "gameTime_epoch": "1681166400.0",
            //                 "lineScore": {
            //                     "away": {
            //                         "H": "3",
            //                         "R": "0",
            //                         "team": "BOS",
            //                         "scoresByInning": {
            //                             "1": "0",
            //                             "2": "0",
            //                             "3": "0",
            //                             "4": "0",
            //                             "5": "0",
            //                             "6": "0",
            //                             "7": "0",
            //                             "8": "0",
            //                             "9": "0"
            //                         },
            //                         "E": "0"
            //                     },
            //                     "home": {
            //                         "H": "5",
            //                         "R": "1",
            //                         "team": "TB",
            //                         "scoresByInning": {
            //                             "1": "0",
            //                             "2": "0",
            //                             "3": "0",
            //                             "4": "0",
            //                             "5": "0",
            //                             "6": "0",
            //                             "7": "0",
            //                             "8": "1",
            //                             "9": "x"
            //                         },
            //                         "E": "0"
            //                     }
            //                 },
            //                 "currentInning": "Final",
            //                 "currentCount": "",
            //                 "currentOuts": "",
            //                 "awayResult": "L",
            //                 "homeResult": "W",
            //                 "topPerformers": {
            //                     "BOS": {
            //                         "Hitting": {
            //                             "AB": {
            //                                 "playerID": [
            //                                     "457759",
            //                                     "646240",
            //                                     "807799"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "657077",
            //                                     "571771"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "666915",
            //                                     "624414",
            //                                     "807799"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "646240"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "666915",
            //                                     "624414",
            //                                     "807799"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         },
            //                         "Fielding": {},
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "601713"
            //                                 ],
            //                                 "total": "20"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "601713"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "455119"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "601713"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "670174"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "601713"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "455119"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "601713"
            //                                 ],
            //                                 "total": "83"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "455119"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "601713"
            //                                 ],
            //                                 "total": "6"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "601713"
            //                                 ],
            //                                 "total": "53"
            //                             }
            //                         },
            //                         "BaseRunning": {}
            //                     },
            //                     "TB": {
            //                         "Hitting": {
            //                             "2B": {
            //                                 "playerID": [
            //                                     "670042"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "668227",
            //                                     "677551"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "664040",
            //                                     "650490"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "668227",
            //                                     "670623",
            //                                     "664040",
            //                                     "670042",
            //                                     "650490"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "664040"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "664040"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "664040"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "670042"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "664040"
            //                                 ],
            //                                 "total": "4"
            //                             }
            //                         },
            //                         "Fielding": {},
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "676596"
            //                                 ],
            //                                 "total": "13"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "621363"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "656222"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "676596"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "656222",
            //                                     "676596",
            //                                     "621363"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "676596"
            //                                 ],
            //                                 "total": "47"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "676596"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "676596"
            //                                 ],
            //                                 "total": "31"
            //                             }
            //                         },
            //                         "BaseRunning": {
            //                             "SB": {
            //                                 "playerID": [
            //                                     "668227"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         }
            //                     }
            //                 },
            //                 "gameID": "20230410_BOS@TB",
            //                 "gameStatus": "Completed"
            //             },
            //             "20230410_MIA@PHI": {
            //                 "away": "MIA",
            //                 "home": "PHI",
            //                 "teamIDAway": "15",
            //                 "teamIDHome": "21",
            //                 "gameTime": "6:42p",
            //                 "gameTime_epoch": "1681166520.0",
            //                 "lineScore": {
            //                     "away": {
            //                         "H": "9",
            //                         "R": "3",
            //                         "team": "MIA",
            //                         "scoresByInning": {
            //                             "1": "0",
            //                             "2": "0",
            //                             "3": "0",
            //                             "4": "0",
            //                             "5": "0",
            //                             "6": "0",
            //                             "7": "3",
            //                             "8": "0",
            //                             "9": "0"
            //                         },
            //                         "E": "0"
            //                     },
            //                     "home": {
            //                         "H": "20",
            //                         "R": "15",
            //                         "team": "PHI",
            //                         "scoresByInning": {
            //                             "1": "0",
            //                             "2": "0",
            //                             "3": "5",
            //                             "4": "0",
            //                             "5": "4",
            //                             "6": "4",
            //                             "7": "1",
            //                             "8": "1",
            //                             "9": "x"
            //                         },
            //                         "E": "0"
            //                     }
            //                 },
            //                 "currentInning": "Final",
            //                 "currentCount": "",
            //                 "currentOuts": "",
            //                 "awayResult": "L",
            //                 "homeResult": "W",
            //                 "topPerformers": {
            //                     "MIA": {
            //                         "Hitting": {
            //                             "AB": {
            //                                 "playerID": [
            //                                     "665862"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "516416",
            //                                     "650333",
            //                                     "643265",
            //                                     "607732"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "GIDP": {
            //                                 "playerID": [
            //                                     "624585"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "643265"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "HBP": {
            //                                 "playerID": [
            //                                     "624585"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "493329"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "516416",
            //                                     "493329",
            //                                     "542932"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "643265",
            //                                     "493329"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "516416",
            //                                     "643265",
            //                                     "650559",
            //                                     "607732",
            //                                     "641658",
            //                                     "542932",
            //                                     "665862"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "493329"
            //                                 ],
            //                                 "total": "5"
            //                             }
            //                         },
            //                         "Fielding": {
            //                             "Passed Ball": {
            //                                 "playerID": [
            //                                     "607732"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         },
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "645261",
            //                                     "656970"
            //                                 ],
            //                                 "total": "23"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "645261",
            //                                     "656970"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "645261"
            //                                 ],
            //                                 "total": "9"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "645261",
            //                                     "656970"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "656970"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "645261",
            //                                     "656970"
            //                                 ],
            //                                 "total": "10"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "656970"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "645261"
            //                                 ],
            //                                 "total": "77"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "645261"
            //                                 ],
            //                                 "total": "9"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "645261"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "645261"
            //                                 ],
            //                                 "total": "50"
            //                             }
            //                         },
            //                         "BaseRunning": {}
            //                     },
            //                     "PHI": {
            //                         "Hitting": {
            //                             "2B": {
            //                                 "playerID": [
            //                                     "669016"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "681082"
            //                                 ],
            //                                 "total": "6"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "656941",
            //                                     "596117"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "592206",
            //                                     "669016",
            //                                     "664761",
            //                                     "607208"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "669016",
            //                                     "664761",
            //                                     "595909"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "592206",
            //                                     "656941",
            //                                     "607208"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "664761"
            //                                 ],
            //                                 "total": "6"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "592206",
            //                                     "664761",
            //                                     "681082",
            //                                     "656941",
            //                                     "596117",
            //                                     "665019"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "669016"
            //                                 ],
            //                                 "total": "8"
            //                             }
            //                         },
            //                         "Fielding": {},
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "621381"
            //                                 ],
            //                                 "total": "20"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "686842"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "686842"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "621381"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "607755"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "607755",
            //                                     "621381"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "686842"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "621381"
            //                                 ],
            //                                 "total": "59"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "686842"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "621381"
            //                                 ],
            //                                 "total": "6"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "621381"
            //                                 ],
            //                                 "total": "42"
            //                             }
            //                         },
            //                         "BaseRunning": {
            //                             "SB": {
            //                                 "playerID": [
            //                                     "681082",
            //                                     "607208"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         }
            //                     }
            //                 },
            //                 "gameID": "20230410_MIA@PHI",
            //                 "gameStatus": "Completed"
            //             },
            //             "20230410_KC@TEX": {
            //                 "away": "KC",
            //                 "home": "TEX",
            //                 "teamIDAway": "12",
            //                 "teamIDHome": "28",
            //                 "gameTime": "7:07p",
            //                 "gameTime_epoch": "1681168020.0",
            //                 "lineScore": {
            //                     "away": {
            //                         "H": "4",
            //                         "R": "2",
            //                         "team": "KC",
            //                         "scoresByInning": {
            //                             "1": "1",
            //                             "2": "0",
            //                             "3": "0",
            //                             "4": "0",
            //                             "5": "0",
            //                             "6": "0",
            //                             "7": "1",
            //                             "8": "0",
            //                             "9": "0"
            //                         },
            //                         "E": "1"
            //                     },
            //                     "home": {
            //                         "H": "11",
            //                         "R": "11",
            //                         "team": "TEX",
            //                         "scoresByInning": {
            //                             "1": "1",
            //                             "2": "0",
            //                             "3": "2",
            //                             "4": "1",
            //                             "5": "0",
            //                             "6": "7",
            //                             "7": "0",
            //                             "8": "0",
            //                             "9": "x"
            //                         },
            //                         "E": "1"
            //                     }
            //                 },
            //                 "currentInning": "Final",
            //                 "currentCount": "",
            //                 "currentOuts": "",
            //                 "awayResult": "L",
            //                 "homeResult": "W",
            //                 "topPerformers": {
            //                     "KC": {
            //                         "Hitting": {
            //                             "AB": {
            //                                 "playerID": [
            //                                     "521692",
            //                                     "658668",
            //                                     "641531",
            //                                     "670032"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "686469",
            //                                     "677951"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "658668",
            //                                     "641531",
            //                                     "681987",
            //                                     "677951"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "641531"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "641531",
            //                                     "677951"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "641531"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "658668",
            //                                     "686469",
            //                                     "670032",
            //                                     "681987"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "641531"
            //                                 ],
            //                                 "total": "4"
            //                             }
            //                         },
            //                         "Fielding": {
            //                             "E": {
            //                                 "playerID": [
            //                                     "677951"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Outfield assists": {
            //                                 "playerID": [
            //                                     "598265",
            //                                     "681987"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         },
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "425844"
            //                                 ],
            //                                 "total": "22"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "669395"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "669395"
            //                                 ],
            //                                 "total": "6"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "425844"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "425844"
            //                                 ],
            //                                 "total": "8"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "425844"
            //                                 ],
            //                                 "total": "6"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "425844"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "425844"
            //                                 ],
            //                                 "total": "89"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "669395"
            //                                 ],
            //                                 "total": "6"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "425844"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "425844"
            //                                 ],
            //                                 "total": "59"
            //                             }
            //                         },
            //                         "BaseRunning": {
            //                             "SB": {
            //                                 "playerID": [
            //                                     "677951"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         }
            //                     },
            //                     "TEX": {
            //                         "Hitting": {
            //                             "2B": {
            //                                 "playerID": [
            //                                     "669352",
            //                                     "663993",
            //                                     "608671"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "666969"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "641680",
            //                                     "543257",
            //                                     "608369",
            //                                     "663993",
            //                                     "608671"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "608369"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "641680",
            //                                     "608369",
            //                                     "666969"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "641680",
            //                                     "608369",
            //                                     "608671"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "666969"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "543257",
            //                                     "666969"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "608369"
            //                                 ],
            //                                 "total": "6"
            //                             }
            //                         },
            //                         "Fielding": {
            //                             "E": {
            //                                 "playerID": [
            //                                     "666969"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         },
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "571760"
            //                                 ],
            //                                 "total": "20"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "571760"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "656271"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "641540"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "656271"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "571760"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "656271"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "571760"
            //                                 ],
            //                                 "total": "93"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "571760",
            //                                     "656271"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "571760"
            //                                 ],
            //                                 "total": "10"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "571760"
            //                                 ],
            //                                 "total": "56"
            //                             }
            //                         },
            //                         "BaseRunning": {
            //                             "SB": {
            //                                 "playerID": [
            //                                     "608671"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         }
            //                     }
            //                 },
            //                 "gameID": "20230410_KC@TEX",
            //                 "gameStatus": "Completed"
            //             },
            //             "20230410_LAD@SF": {
            //                 "away": "LAD",
            //                 "home": "SF",
            //                 "teamIDAway": "14",
            //                 "teamIDHome": "24",
            //                 "gameTime": "6:45p",
            //                 "gameTime_epoch": "1681166700.0",
            //                 "lineScore": {
            //                     "away": {
            //                         "H": "9",
            //                         "R": "9",
            //                         "team": "LAD",
            //                         "scoresByInning": {
            //                             "1": "1",
            //                             "2": "0",
            //                             "3": "3",
            //                             "4": "0",
            //                             "5": "0",
            //                             "6": "0",
            //                             "7": "5",
            //                             "8": "0",
            //                             "9": "0"
            //                         },
            //                         "E": "0"
            //                     },
            //                     "home": {
            //                         "H": "7",
            //                         "R": "1",
            //                         "team": "SF",
            //                         "scoresByInning": {
            //                             "1": "0",
            //                             "2": "0",
            //                             "3": "0",
            //                             "4": "1",
            //                             "5": "0",
            //                             "6": "0",
            //                             "7": "0",
            //                             "8": "0",
            //                             "9": "0"
            //                         },
            //                         "E": "2"
            //                     }
            //                 },
            //                 "currentInning": "Final",
            //                 "currentCount": "",
            //                 "currentOuts": "",
            //                 "awayResult": "W",
            //                 "homeResult": "L",
            //                 "topPerformers": {
            //                     "LAD": {
            //                         "Hitting": {
            //                             "3B": {
            //                                 "playerID": [
            //                                     "681546"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "AB": {
            //                                 "playerID": [
            //                                     "518692",
            //                                     "605141"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "571970",
            //                                     "681546"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "GIDP": {
            //                                 "playerID": [
            //                                     "518792"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "571970",
            //                                     "605141"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "571970"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "605141"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "571970"
            //                                 ],
            //                                 "total": "7"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "502110"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "571970"
            //                                 ],
            //                                 "total": "9"
            //                             }
            //                         },
            //                         "Fielding": {
            //                             "Pickoffs": {
            //                                 "playerID": [
            //                                     "628711"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         },
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "628711"
            //                                 ],
            //                                 "total": "23"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "628711"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "628711"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "628711"
            //                                 ],
            //                                 "total": "6"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "628711"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "628711"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "628711"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "628711"
            //                                 ],
            //                                 "total": "96"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "628711"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "628711"
            //                                 ],
            //                                 "total": "8"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "628711"
            //                                 ],
            //                                 "total": "62"
            //                             }
            //                         },
            //                         "BaseRunning": {
            //                             "SB": {
            //                                 "playerID": [
            //                                     "681546"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         }
            //                     },
            //                     "SF": {
            //                         "Hitting": {
            //                             "AB": {
            //                                 "playerID": [
            //                                     "671218",
            //                                     "527038",
            //                                     "669369",
            //                                     "573262",
            //                                     "663698",
            //                                     "605204",
            //                                     "642731"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "543063",
            //                                     "681584"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "605204"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "HBP": {
            //                                 "playerID": [
            //                                     "681584"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "527038"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "527038"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "RBI": {
            //                                 "playerID": [
            //                                     "527038"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "669369"
            //                                 ],
            //                                 "total": "3"
            //                             },
            //                             "TB": {
            //                                 "playerID": [
            //                                     "527038"
            //                                 ],
            //                                 "total": "4"
            //                             }
            //                         },
            //                         "Fielding": {
            //                             "E": {
            //                                 "playerID": [
            //                                     "657277",
            //                                     "543063"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         },
            //                         "Pitching": {
            //                             "Batters Faced": {
            //                                 "playerID": [
            //                                     "657277"
            //                                 ],
            //                                 "total": "24"
            //                             },
            //                             "BB": {
            //                                 "playerID": [
            //                                     "573124",
            //                                     "657277"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "ER": {
            //                                 "playerID": [
            //                                     "663546"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "Flyouts": {
            //                                 "playerID": [
            //                                     "657277"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "Groundouts": {
            //                                 "playerID": [
            //                                     "657277"
            //                                 ],
            //                                 "total": "9"
            //                             },
            //                             "H": {
            //                                 "playerID": [
            //                                     "657277"
            //                                 ],
            //                                 "total": "5"
            //                             },
            //                             "HR": {
            //                                 "playerID": [
            //                                     "657277"
            //                                 ],
            //                                 "total": "2"
            //                             },
            //                             "Pitches": {
            //                                 "playerID": [
            //                                     "657277"
            //                                 ],
            //                                 "total": "94"
            //                             },
            //                             "R": {
            //                                 "playerID": [
            //                                     "657277",
            //                                     "663546"
            //                                 ],
            //                                 "total": "4"
            //                             },
            //                             "SO": {
            //                                 "playerID": [
            //                                     "657277"
            //                                 ],
            //                                 "total": "6"
            //                             },
            //                             "Strikes": {
            //                                 "playerID": [
            //                                     "657277"
            //                                 ],
            //                                 "total": "56"
            //                             }
            //                         },
            //                         "BaseRunning": {
            //                             "CS": {
            //                                 "playerID": [
            //                                     "573262"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "PO": {
            //                                 "playerID": [
            //                                     "573262"
            //                                 ],
            //                                 "total": "1"
            //                             },
            //                             "SB": {
            //                                 "playerID": [
            //                                     "681584"
            //                                 ],
            //                                 "total": "1"
            //                             }
            //                         }
            //                     }
            //                 },
            //                 "gameID": "20230410_LAD@SF",
            //                 "gameStatus": "Completed"
            //             }
            //         }
            //     }
            // };
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    function calculateProjection(gameOdds) {
        if (!gameOdds.error) {
            const keys = Object.keys(gameOdds.body);
            const awayTeamRL = gameOdds.body[keys[0]].bet365.awayTeamRunLine;
            const homeTeamRL = gameOdds.body[keys[0]].bet365.homeTeamRunLine;
            if (awayTeamRL < homeTeamRL) {
                return "away";
            }

            return "home";
        }
    }

    function getScore(gameScoreObj) {
        const keys = Object.keys(gameScoreObj.body);
        console.log(gameScoreObj);
        return {
            awayTeamScore: gameScoreObj.body[keys[0]].lineScore ? gameScoreObj.body[keys[0]].lineScore.away.R : "",
            homeTeamScore: gameScoreObj.body[keys[0]].lineScore ? gameScoreObj.body[keys[0]].lineScore.home.R : "",
            status: gameScoreObj.body[keys[0]].gameStatus,
            winner: calculateWinner(gameScoreObj.body[keys[0]])
        }
    }

    function calculateWinner(gameScore) {
        if (gameScore.homeResult && gameScore.homeResult.includes("W")) {
            return gameScore.home;
        } else if (gameScore.awayResult && gameScore.awayResult.includes("W")) {
            return gameScore.away;
        } else {
            return "No Winner"
        }
    }

    let rows = [];

    async function createGameRows() {
        let todaysGamesData = await getTodaysGames();
        await Promise.all(todaysGamesData.body.map(async (game) => {
            const projectedWinner = calculateProjection(await getGameOdds(game.gameID));
            let gameScore = getScore(await getGameScore(game.gameID));
            const gameData = {
                away: game.away,
                awayScore: gameScore.awayTeamScore ? gameScore.awayTeamScore : "0",
                home: game.home,
                homeScore: gameScore.homeTeamScore ? gameScore.homeTeamScore : "0",
                gametime: game.gameTime,
                projWinner: projectedWinner === "away" ? game.away : projectedWinner === "away" ? game.home : "No Projection",
                status: gameScore.status,
                winner: gameScore.status.includes("Live") ? "No Winner Yet" : gameScore.status.includes("Not Started") ? "No Winner Yet" : gameScore.winner

            }
            rows.push(gameData);
        }))
    }

    await createGameRows();

    export function renderTodaysGames() {
        return (
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Matchup</TableCell>
                            <TableCell align="right">Game Time</TableCell>
                            <TableCell align="right">Projected Winner</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Actual Winner</TableCell>
                            <TableCell align="right">Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.away}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {`${row.away} @ ${row.home}`}
                                </TableCell>
                                <TableCell align="right">{row.gametime}</TableCell>
                                <TableCell align="right">{row.projWinner}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">{row.winner}</TableCell>
                                <TableCell align="right">{`${row.awayScore} - ${row.homeScore}`}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

function App() {

    return (
        <div className="App">
            <header className="App-header">
                {/*<img src={logo} alt="logo" />*/}
                <p>
                    Welcome to Damel's MLB Scoreboard!
                </p>
                <div>{renderTodaysGames()}</div>
            </header>
        </div>
    );
}

export default App;
