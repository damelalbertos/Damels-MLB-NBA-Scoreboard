const config = {
    endpoint: {
        mlb: {
            schedule: "getMLBGamesForDate",
            odds: "getMLBBettingOdds",
            scores: "getMLBScoresOnly"
        },
        nba: {
            schedule: "getNBAGamesForDate",
            scores: "getNBAScoresOnly"
        }
    },
    apiKey: 'e2c07a0e32mshadbae2353ed1158p11c17bjsn44ad7796f9f6',
    hostname: {
        mlb: 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com',
        nba: 'tank01-fantasy-stats.p.rapidapi.com'
    },
    logos: {
        mlb: {
            logoBaseUrl: 'https://www.mlbstatic.com/team-logos/',
            leagueLogoEndpoint: 'league-on-dark/1',
            teamLogoMap: {
                'ARI': '109',
                'ATL': '144',
                'BAL': '110',
                'BOS': '111',
                'CHC': '112',
                'CHW': '145',
                'CIN': '113',
                'CLE': '114',
                'COL': '115',
                'DET': '116',
                'MIA': '146',
                'HOU': '117',
                'KC': '118',
                'LAA': '108',
                'LAD': '119',
                'MIL': '158',
                'MIN': '142',
                'NYM': '121',
                'NYY': '147',
                'OAK': '133',
                'PHI': '143',
                'PIT': '134',
                'SD': '135',
                'SF': '137',
                'SEA': '136',
                'STL': '138',
                'TB': '139',
                'TEX': '140',
                'TOR': '141',
                'WAS': '120'
            }
        },
        nba: {
            logoBaseUrl: 'https://cdn.nba.com/logos/',
            leagueLogoEndpoint: 'leagues/logo-nba',
            teamLogoMap: {
                'BOS': 'nba/1610612738/primary/L/logo',
                'NY': 'nba/1610612752/primary/L/logo',
                'ATL': 'nba/1610612737/primary/L/logo',
                'GS': 'nba/1610612744/primary/L/logo',
                'TOR': 'nba/1610612761/primary/L/logo',
                'DET': 'nba/1610612765/primary/L/logo',
                'MIA': 'nba/1610612748/primary/L/logo',
                'NO': 'nba/1610612740/primary/L/logo',
                'WAS': 'nba/1610612764/primary/L/logo',
                'PHI': 'nba/1610612755/primary/L/logo',
                'IND': 'nba/1610612754/primary/L/logo',
                'CHA': 'nba/1610612766/primary/L/logo',
                'BKN': 'nba/1610612751/primary/L/logo',
                'MEM': 'nba/1610612763/primary/L/logo',
                'LAL': 'nba/1610612747/primary/L/logo',
                'CLE': 'nba/1610612739/primary/L/logo',
                'ORL': 'nba/1610612753/primary/L/logo',
                'CHI': 'nba/1610612741/primary/L/logo',
                'SA': 'nba/1610612759/primary/L/logo',
                'OKC': 'nba/1610612760/primary/L/logo',
                'POR': 'nba/1610612757/primary/L/logo',
                'LAC': 'nba/1610612746/primary/L/logo',
                'MIL': 'nba/1610612749/primary/L/logo',
                'PHO': 'nba/1610612756/primary/L/logo',
                'HOU': 'nba/1610612745/primary/L/logo',
                'DAL': 'nba/1610612742/primary/L/logo',
                'UTA': 'nba/1610612762/primary/L/logo',
                'SAC': 'nba/1610612758/primary/L/logo',
                'DEN': 'nba/1610612743/primary/L/logo',
                'MIN': 'nba/1610612750/primary/L/logo'
            }
        }
    }

};

module.exports = config;
