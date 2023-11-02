const config = {
    endpoint: {
        schedule: "getMLBGamesForDate",
        odds: "getMLBBettingOdds",
        scores: "getMLBScoresOnly"
    },
    apiKey: 'e2c07a0e32mshadbae2353ed1158p11c17bjsn44ad7796f9f6',
    hostname: 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com',
    teamLogoBaseUrl: 'https://www.mlbstatic.com/team-logos/',
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
};

module.exports = config;