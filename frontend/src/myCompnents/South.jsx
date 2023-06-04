import React, { useState } from 'react';
import '../styles/malakand.css';
import '../regionsdata/south.css';
import Mardan from '../regionsdata/Mardan';
import Peshawar from "../regionsdata/Peshawar";

function South() {
  const [showMardan, setShowMardan] = useState(false);
  const [showPeshawar,setShowPeshawar]=useState(false);

  const handleClick = () => {
    setShowMardan(!showMardan);
  };
  const handleClickPesh=()=>{
    setShowPeshawar(!showPeshawar);
  }

  return (
    <div>
      <div className="south row d-flex flex-column">
        <div className="col-lg">
            <button className="button">D I K</button>
        </div>
        <div className="col-lg">
            <button className="button">Bannu</button>
        </div>
        <div className="col-lg">
          <button className="button" onClick={handleClick}>
            Mardan
          </button>
          {showMardan && <Mardan />}
        </div>
        <div className="col-lg">
        <button className="button" onClick={handleClickPesh}>
            Peshawar
          </button>
          {showPeshawar && <Peshawar />}
        </div>
        <div className="col-lg">
        <button className="button">Kohat</button>
        </div>
      </div>
    </div>
  );
}

export default South;
