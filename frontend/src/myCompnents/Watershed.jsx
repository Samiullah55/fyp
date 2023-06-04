import React,{useState} from 'react'
import '../styles/malakand.css';
import KohWatershed from '../regionsdata/KohWatershed';
function Watershed() {
  const [showKoh,setShowKoh]=useState(false);
  const handleClickKoh=()=>{
    setShowKoh(!showKoh);
  }
  return (
    <div className='regions'>
      <div className="row d-flex flex-column">
        <div className="col-lg">
        
      <button className='button'>Bunner Watershed</button>
      </div>
      <div className="col">
        <button className="button" onClick={handleClickKoh}>
            Kohistan WaterShed
          </button>
          {showKoh && <KohWatershed />}
        </div>
      <div className="col-lg">
      <button className='button'>Daur Watershed</button>
      </div>
      <div className="col-lg">
      <button className='button'>Kunhar Watershed</button>
      </div>
      <div className="col-lg">
      <button className='button'>Unhar Watershed</button>
      </div>
      </div>
    </div>
  )
}

export default Watershed;