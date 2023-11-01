import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import './App.css';


function Scoreboard({data}) {
    const teamLogoBaseUrl = 'https://www.mlbstatic.com/team-logos/';
    const teamLogoMap = {
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
        'FLA': '146',
        'HOU': '117',
        'KAN': '118',
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
        'WAS ': '120'
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Matchup</TableCell>
                        <TableCell align="center">Game Time</TableCell>
                        <TableCell align="center">Projected Winner</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">Actual Winner</TableCell>
                        <TableCell align="center">Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow
                            key={item.away}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                <span class="me-2">
                                    <img class="team-logo me-1"
                                        src={`${teamLogoBaseUrl}${teamLogoMap[item.away]}.svg`}
                                        alt={item.away}
                                        title={item.away}/>
                                </span>
                                <span> @ </span>
                                <span class="ms-2">
                                    <img class="team-logo me-1"
                                        src={`${teamLogoBaseUrl}${teamLogoMap[item.home]}.svg`}
                                        alt={item.home}
                                        title={item.home}/>
                                </span>
                            </TableCell>
                            <TableCell align="center">{item.gameTime}</TableCell>
                            <TableCell align="center">{item.projWinner}</TableCell>
                            <TableCell align="center">{item.status}</TableCell>
                            <TableCell align="center">{item.winner}</TableCell>
                            <TableCell align="center">{`${item.awayTeamScore} - ${item.homeTeamScore}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default function App({data}) {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Welcome to Damel's MLB Scoreboard!
                </p>
                <div><Scoreboard data={data}/></div>
            </header>
        </div>
    );
}
