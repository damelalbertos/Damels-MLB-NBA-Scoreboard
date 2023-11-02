import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import './App.css';
const CONFIG = require('./config.js');


function Scoreboard({data}) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Matchup</TableCell>
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
                                <span className="me-2">
                                    <img className="team-logo me-1"
                                        src={`${CONFIG.teamLogoBaseUrl}${CONFIG.teamLogoMap[item.away]}.svg`}
                                        alt={item.away}
                                        title={item.away}/>
                                </span>
                                <span> @ </span>
                                <span className="ms-2">
                                    <img className="team-logo me-1"
                                        src={`${CONFIG.teamLogoBaseUrl}${CONFIG.teamLogoMap[item.home]}.svg`}
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
