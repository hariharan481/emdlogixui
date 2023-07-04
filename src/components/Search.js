import React, { useEffect, useState } from "react";

import "../styles/Search.css";
import { Box, IconButton } from "@mui/material";
import { SearchOff, SearchOutlined, SearchRounded } from "@mui/icons-material";

export const Search = () => {
  const [city, setcity] = useState("");
  const [citysuggestion, setcitysuggestion] = useState([]);
  const [clicked, setclicked] = useState([]);
  const handleClick = (clickedCity) => {
    setcity(clickedCity);
    setclicked(true);
  };
  //const autoCompleteURl =
  // "https://api.weatherapi.com/v1/search.json?key=5eb1392b80024f268bd102013231503&q=";
  // const fetchCitySuggestion = async (url) => {
  // const resp = await fetch(url);
  //  const data = await resp.json();
  //  const citysuggestionData = data.map(
  //   (curData) => `${curData.name},${curData.region},${curData.country}`
  //  );
  //  console.log(citysuggestionData);
  //  setcitysuggestion(citysuggestionData);
  // };
  // useEffect(() => {
  //  fetchCitySuggestion(autoCompleteURl + city);
  // }, [city]);
  //if (!clicked && city.length > 0) {
  ///  fetchCitySuggestion();
  //  } else {
  //   setcitysuggestion([]);
  //  setclicked(false);
  // }

  return (
    <div>
      <form>
        <div className="app">
          <div className="App-body">
            <input
              type="text"
              className="citytextbox"
              placeholder="enter the code"
              value={city}
              onChange={(event) => setcity(event.target.value)}
            />
            {citysuggestion.length > 0 && (
              <div className="suggestionWrapper">
                {citysuggestion.map((curcity) => (
                  <div
                    className="suggestion"
                    onClick={() => handleClick(curcity)}
                  >
                    {curcity}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Box
            className="searchicon"
            sx={{
              height: "4.5vh",
              width: "50px",

              marginLeft: "1500px",
              marginTop: "-55px",
            }}
          >
            <SearchRounded
              sx={{
                color: "white",
                fontSize: "24px",
                fontWeight: "700",
                textAlign: "center",
                marginLeft: "15px",
                marginTop: "5px",
              }}
            />
          </Box>
        </div>
      </form>
    </div>
  );
};
