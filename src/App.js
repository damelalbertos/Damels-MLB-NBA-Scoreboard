import React, { useState } from "react";
import { Alert } from "@mui/material";
import Scoreboard from "./components/Scoreboard";
import { BasicDatePicker } from "./components/BasicDatePicker";
import { SportPicker } from "./components/SportPicker";
import { createGameRows } from "./process.js";
import dayjs from "dayjs";
import "./App.css";

export default function App() {
  const [date, setDate] = useState(dayjs());
  const [selectedSport, setSelectedSport] = useState("");
  const [data, setData] = useState([]);

  async function handleSportSelection(newSport) {
    setSelectedSport(newSport);
    await fetchData(date, newSport);
  }

  async function handleDateChange(newDate) {
    setDate(newDate);
    await fetchData(newDate, selectedSport);
  }

  const fetchData = async (date, selectedSport) => {
    try {
      const data = await createGameRows(date, selectedSport);
      console.log(data);
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect(() => {
  //     const fetchData = async (date) => {
  //         try {
  //             const data = await createGameRows(date, selectedSport);
  //             console.log(data);
  //             setData(data);
  //         } catch (error) {
  //             console.error('Error fetching data:', error);
  //         }
  //     }
  //     fetchData(date);
  //   }, [date, selectedSport]);

  return (
    <div className="text-center">
      <div className={"bg-gray-600 min-h-max"}>
        <p className={"hover:cursor-pointer p-2 font-BlackOpsOne text-3xl text-white"} onClick={() => {
          setSelectedSport("");
        }}>
          DAMEL'S MLB/NBA SCOREBOARD
        </p>
      </div>
      <div className={"flex flex-col p-8"}>
        {selectedSport ? (
          <div className="flex flex-col">
            <div className="min-w-max pb-8">
              <BasicDatePicker
                value={date}
                onChange={(newDate) => {
                  handleDateChange(newDate);
                }}
              />
            </div>
            <div className="">
              {data.length ? (
                <Scoreboard sport={selectedSport} data={data} />
              ) : (
                <Alert severity="info">
                  No Games Today, Select Different Date
                </Alert>
              )}
            </div>
          </div>
        ) : (
          <SportPicker handleSportSelection={handleSportSelection} />
        )}
      </div>
    </div>
  );
}
