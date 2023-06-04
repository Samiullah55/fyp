import React from "react";
import "../styles/regions.css";
import Malakand from "./Malakand";
import Watershed from "./Watershed";
import South from "./South";
import Hazara from "./Hazara";
import { useState } from "react";
function Regions() {
  const [myregion, setRegion] = useState("");
  return (
    <div className="regionscontainer">
      <label>Enter region:</label>
      <br />
      <input
        onChange={(event) => {
          setRegion(event.target.value);
        }}
      />
      {myregion === "malakand" && <Malakand />}
      {myregion === "watershed" && <Watershed />}
      {myregion === "hazara" && <Hazara />}
      {myregion === "south" && <South />}
    </div>
  );
}
export default Regions;
