import React, { useState, useEffect } from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createGameRows } from './process.js';
import dayjs from 'dayjs';
import './App.css';
const CONFIG = require('./config.js');

function BasicDatePicker({ value, onChange }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker 
            label="Game Date"
            value={value}
            onChange={onChange} 
            />
          </DemoContainer>
        </LocalizationProvider>
      );
}

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
                            <TableCell align="center">
                                {
                                    item.projWinner === 'No Projection' ?
                                    (item.projWinner)
                                    : (
                                    <img className="team-logo me-1"
                                        src={`${CONFIG.teamLogoBaseUrl}${CONFIG.teamLogoMap[item.projWinner]}.svg`}
                                        alt={item.projWinner}
                                        title={item.projWinner}/>
                                    )
                                }
                                </TableCell>
                            <TableCell align="center">{item.status}</TableCell>
                            <TableCell align="center">
                            {
                                    item.winner === "No Winner Yet" ?
                                    (item.winner)
                                    : (
                                    <img className="team-logo me-1"
                                        src={`${CONFIG.teamLogoBaseUrl}${CONFIG.teamLogoMap[item.winner]}.svg`}
                                        alt={item.winner}
                                        title={item.winner}/>
                                    )
                                }
                                </TableCell>
                            <TableCell align="center">{`${item.awayTeamScore} - ${item.homeTeamScore}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default function App() {
    const [date, setDate] = useState(dayjs());

    function handleDateChange(newDate) {
        setDate(newDate);
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async (date) => {
            try {
                const data = await createGameRows(date);
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData(date);
      }, [date]);
    

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Welcome to Damel's MLB Scoreboard!
                </p>
                <div className="Date-Picker"><BasicDatePicker value={date} onChange={(newDate)=>{handleDateChange(newDate)}}/></div>
                {
                    data.length ? (
                        <div className='ScoreBoard'><Scoreboard data={data}/></div>
                    ) 
                    : <p>No Games Today, Select Different Date</p>
                }
            </header>
        </div>
    );
}
