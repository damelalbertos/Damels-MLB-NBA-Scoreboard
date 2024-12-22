import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import CONFIG from "../config";
import React from "react";

export default function Scoreboard(props) {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="bg-slate-950">
            <TableCell align="center">
              <p className="text-white font-BlackOpsOne text-lg">Matchup</p>
            </TableCell>
            <TableCell align="center">
              <p className="text-white font-BlackOpsOne text-lg">Game Time</p>
            </TableCell>
            <TableCell align="center">
              <p className="text-white font-BlackOpsOne text-lg">Status</p>
            </TableCell>
            <TableCell align="center">
              <p className="text-white font-BlackOpsOne text-lg">Winner</p>
            </TableCell>
            <TableCell align="center">
              <p className="text-white font-BlackOpsOne text-lg">Score</p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="bg-slate-600">
          {props.data.map((item) => (
            <TableRow
              key={item.away}
            >
              <TableCell component="th" scope="row">
                <div className="inline-flex">
                  <img
                    src={`${CONFIG.logos[props.sport].logoBaseUrl}${CONFIG.logos[props.sport].teamLogoMap[item.away]}.svg`}
                    alt={item.away}
                    title={item.away}
                    className={"h-20"}
                  />
                  <p>@</p>
                  <img
                    src={`${CONFIG.logos[props.sport].logoBaseUrl}${CONFIG.logos[props.sport].teamLogoMap[item.home]}.svg`}
                    alt={item.home}
                    title={item.home}
                    className={"h-20"}
                  /></div>
              </TableCell>
              <TableCell align="center">
                {item.gameTime}
              </TableCell>
              <TableCell align="center">
                {item.status}
              </TableCell>
              <TableCell align="center">
                {item.winner === "No Winner Yet" ? (
                  item.winner
                ) : (
                  <img
                    src={`${CONFIG.logos[props.sport].logoBaseUrl}${CONFIG.logos[props.sport].teamLogoMap[item.winner]}.svg`}
                    alt={item.winner}
                    title={item.winner}
                  />
                )}
              </TableCell>
              <TableCell
                align="center"
              >{`${item.awayTeamScore} - ${item.homeTeamScore}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

