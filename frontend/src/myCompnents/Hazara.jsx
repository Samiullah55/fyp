import React, {useState} from 'react'
import '../styles/malakand.css';
import Abbottabad from './../regionsdata/Abbottabad'
function Hazara() {
  const [showAbbottabad, setShowAbbottabad] = useState(false);

  const handleClick = () => {
    setShowAbbottabad(!showAbbottabad);
  };
  return (
    <div className='hazara'>
      <div className="row d-flex flex-column">
        <div className="col-lg">
      <button className='button'>Haripur</button>
        </div>
        <div className="col-lg">
          <button className='button' onClick={handleClick}>Abbottabad
          </button>
          {showAbbottabad && <Abbottabad />}
        </div>
        <div className="col-lg">
          <button className='button'>Gallies</button>
        </div>
        <div className="col-lg">
          <button className='button'>Kaghan</button>
        </div>
        <div className="col-lg">
          <button className='button'>Siran</button>
        </div>
        <div className="col-lg">
          <button className='button'>Hazara Tribe</button>
        </div>
        <div className="col-lg">
          <button className='button'>Tor Ghar</button>
        </div>
        <div className="col-lg">
          <button className='button'>Agror Tanawla</button>
        </div>
      </div>
    </div>
  )
}

export default Hazara;