import Box from "@mui/material/Box";
import React from "react";
import {airCodes} from "../data/airCodes";

const App = () => {
  return (
    <React.Fragment>
      {airCodes.map((ele, index) => {
        return (
          <Box key={index}>
            {ele.iata_code} {ele.name} {ele.icao_code}
          </Box>
        );
      })}
    </React.Fragment>
  );
};

export default App;
