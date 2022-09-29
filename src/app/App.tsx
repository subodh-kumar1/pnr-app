import React, { useState } from "react";
import { Button, Input, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";

interface Station {
  stationCode: string;
  stationName: string;
}
const App = () => {
  const [searchData, setSearchData] = useState<Station[]>();
  const [searchQuery, setSearchQuery] = useState<string>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.currentTarget.value);
  };
  const handleStationSearch = () => {
    const options = {
      method: "GET",
      url: "https://indianrailways.p.rapidapi.com/findstations.php",
      params: { station: searchQuery },
      headers: {
        "X-RapidAPI-Key": "3ab77b4f8fmsh1f9b3164efb61b8p1bca29jsn732366074205",
        "X-RapidAPI-Host": "indianrailways.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setSearchData(response?.data?.stations); // stationCode, stationName
      })
      .catch(function (error) {
        console.error(error);
        setSearchData([])
      });
  };

  return (
    <React.Fragment>
      <Input onChange={handleInputChange} />
      <Button onClick={handleStationSearch}>Search Stations</Button>
      {searchData && <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Serial Number</TableCell>
                    <TableCell>Station Code</TableCell>
                    <TableCell>Station Name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    searchData?.map((each:Station, index : number) => {
                        return <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{each.stationCode}</TableCell>
                            <TableCell>{each.stationName}</TableCell>
                        </TableRow>
                    })
                }
            </TableBody>
        </Table>
      </TableContainer>}
    </React.Fragment>
  );
};

export default App;
