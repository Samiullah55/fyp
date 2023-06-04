import React from 'react';
import abbottabadafter from "../regionsdata/images/abbres.png";
import abbottabadbefore from "../regionsdata/images/abbemp.JPG";
import abb17 from "../regionsdata/images/abb17.png";
import abb13 from "../regionsdata/images/abb13.png";

function Abbottabad() {
  return (
    <div className="d-flex flex-column bg-mine m-4 rounded justify-content-center align-items-center vh-100">
        <div className="row w-20 h-20">
            <div className="col-lg d-flex justify-content-center align-items-center">
                <h1 className="text-center">Abbottabad</h1>
                
            </div>
        </div>
        <div className="row">
        <div className="col-lg d-flex justify-content-center align-items-center">
                <h6 className="text-center">Unnet Result</h6>
                
            </div>
        </div>
        <div className="row d-flex justify-content-center align-content-center">
            <div className="col-lg-5">
                <p>Before</p>
                <img className="img-fluid rounded shadow-sm shadow-primary" src={abbottabadbefore} alt="" />
                
            </div>
            <div className="col-lg-5">
                <p>2018 Results</p>
                <img className="img-fluid rounded shadow-sm" src={abbottabadafter} alt="" />
            </div>
            <div className="col-lg-5">
                <p>2017 Results</p>
                <img className="img-fluid rounded shadow-sm" src={abb17} alt="" />
            </div>
            <div className="col-lg-5">
                <p>2013 Results</p>
                <img className="img-fluid rounded shadow-sm" src={abb13} alt="" />
            </div>
        </div>
  </div>  
  )
}

export default Abbottabad;