import React, { useEffect } from "react";
import airlinesService from "../services/airlines/airlines";

const App = () => {
  useEffect(() => {
    airlinesService.getAirlines().then((response) => {
      const { data } = response;
      console.log(data);
    });
  });
  return <React.Fragment>Hello React</React.Fragment>;
};

export default App;
