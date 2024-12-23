import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";


export const BasicDatePicker = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label={<p className="text-white font-BlackOpsOne">Game Date</p>}
          value={props.value}
          onChange={props.onChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
