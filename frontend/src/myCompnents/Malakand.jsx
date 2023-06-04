import React,{useState} from 'react'
import '../styles/malakand.css';
import Swat from "../regionsdata/Swat";
function Malakand() {
  const [showSwat,setShowSwat]=useState(false);
  const handleClickSwat=()=>{
    setShowSwat(!showSwat);
  }
  return (
    <div >
      <div className="row d-flex flex-column">
      <div className="col">
        <button className="button" onClick={handleClickSwat}>
            Swat
          </button>
          {showSwat && <Swat />}
        </div>
      <div className="col">
      
      <button className='button'>Malamjaba</button>
      </div>
      <div className="col">
      
      <button className='button'>Kalam</button>
      </div>
      <div className="col">
      
      <button className='button'>Mahudand</button>
      </div>
      <div className="col">
      
      <button className='button'>Bunner</button>
      </div>
      <div className="col">
      <button className='button'>Alpuri</button>
      </div>
      <div className="col">
      <button className='button'>Upper Dir</button>
      </div>
      <div className="col">
      <button className='button'>Lower Dir</button>
      </div>
      <div className="col">
      <button className='button'>Chitral</button>
      </div>
      </div>
    </div>
  )
}

export default Malakand;