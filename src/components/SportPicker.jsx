import * as constants from "../constants";
import CONFIG from "../config";
import React from "react";


export const SportPicker = (props) => {
  return (
    <div className={"grid grid-rows-2"}>
      <div className={"w-1/2 pb-8 justify-self-center self-center font-BlackOpsOne text-5xl"}>
        <p>PICK A SPORT</p>
      </div>
      <div className={"flex-auto items-center grid gap-16 grid-rows-1 grid-cols-2"}>
        <img
          className={"w-96 justify-self-center hover:cursor-pointer"}
          onClick={() => {
            props.handleSportSelection(constants.MLB);
          }}
          src={`${CONFIG.logos.mlb.logoBaseUrl}${CONFIG.logos.mlb.leagueLogoEndpoint}.svg`}
          alt={"MLB Icon"} />
        <img
          className={"w-96 justify-self-center hover:cursor-pointer"}
          onClick={() => {
            props.handleSportSelection(constants.NBA);
          }}
          src={`${CONFIG.logos.nba.logoBaseUrl}${CONFIG.logos.nba.leagueLogoEndpoint}.svg`}
          alt={"NBA Icon"} />
      </div>
    </div>
  );
};
