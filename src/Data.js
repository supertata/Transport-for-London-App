import React, { useEffect, useState } from "react";
import SelectFetchedData from "./SelectFetchedData";

function Data() {
  const [TflData, setTflData] = useState([]);
  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTflData(data);
      });
  }, []);
  return (
    <div>
      <SelectFetchedData transportModeData={TflData} />
    </div>
  );
}

export default Data;
