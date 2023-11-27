import React, { useState, useEffect } from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
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
        <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
            <Table  className='table' sx={{minWidth: 650}} aria-label="simple table">
                <TableHead className='table-head'>
                    <TableRow className='header-row'>
                        <TableCell className="header-cell" align="center">Matchup</TableCell>
                        <TableCell className="header-cell" align="center">Game Time</TableCell>
                        <TableCell className="header-cell" align="center">Projected Winner</TableCell>
                        <TableCell className="header-cell" align="center">Status</TableCell>
                        <TableCell className="header-cell" align="center">Actual Winner</TableCell>
                        <TableCell className="header-cell" align="center">Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className='table-body'>
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
                            <TableCell className="body-cell" align="center">{item.gameTime}</TableCell>
                            <TableCell className="body-cell" align="center">
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
                            <TableCell className="body-cell" align="center">{item.status}</TableCell>
                            <TableCell className="body-cell" align="center">
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
                            <TableCell  className="body-cell" align="center">{`${item.awayTeamScore} - ${item.homeTeamScore}`}</TableCell>
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
                <div className='logo'>
                    <SportsBaseballIcon fontSize='large'/>
                </div>
                <div className='DatePicker-Scoreboard'>
                    <div className='ScoreBoard'>
                        <div className="Date-Picker"><BasicDatePicker value={date} onChange={(newDate)=>{handleDateChange(newDate)}}/></div>
                        {
                            data.length ? (
                                    <Scoreboard data={data}/>
                            ) 
                            : 
                            <p>No Games Today, Select Different Date</p>
                        }
                    </div>
                </div>
            </header>
        </div>
    );
}
