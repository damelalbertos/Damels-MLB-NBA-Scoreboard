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
        <TableBody className="bg-slate-500">
          {props.data.map((item) => (
            <TableRow
              key={item.away}
            >
              <TableCell component="th" scope="row">
                <div className="flex justify-center items-center space-x-4">
                  <img
                    src={`${CONFIG.logos[props.sport].logoBaseUrl}${CONFIG.logos[props.sport].teamLogoMap[item.away]}.svg`}
                    alt={item.away}
                    title={item.away}
                    className={"w-20 h-20"}
                  />
                  <p className="text-white font-BlackOpsOne text-lg">vs</p>
                  <img
                    src={`${CONFIG.logos[props.sport].logoBaseUrl}${CONFIG.logos[props.sport].teamLogoMap[item.home]}.svg`}
                    alt={item.home}
                    title={item.home}
                    className={"w-20 h-20"}
                  /></div>
              </TableCell>
              <TableCell align="center">
                <p className="text-white font-BlackOpsOne text-lg">{item.gameTime}</p>
              </TableCell>
              <TableCell align="center">
                <p className="text-white font-BlackOpsOne text-lg">{item.status}</p>
              </TableCell>
              <TableCell>
                <div className="flex justify-center">
                  {item.winner === "No Winner Yet" ? (
                    <p className="text-white font-BlackOpsOne text-lg">{item.winner}</p>
                  ) : (
                    <img
                      src={`${CONFIG.logos[props.sport].logoBaseUrl}${CONFIG.logos[props.sport].teamLogoMap[item.winner]}.svg`}
                      alt={item.winner}
                      title={item.winner}
                      className={"w-20 h-20"}
                    />
                  )}
                </div>
              </TableCell>
              <TableCell
                align="center"
              >
                <p className="text-white font-BlackOpsOne text-lg">{`${item.awayTeamScore} - ${item.homeTeamScore}`}</p>
              </TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

