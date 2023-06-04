import React from 'react';
import mardanafter from "../regionsdata/images/Mardan_after.png";
import mardanbefore from "../regionsdata/images/Mardan_before.png";

function Mardan() {
  return (
    <div className="d-flex flex-column bg-mine m-4 rounded justify-content-center align-items-center vh-100">
        <div className="row w-20 h-20">
            <div className="col-lg d-flex justify-content-center align-items-center">
                <h1 className="text-center">Mardan</h1>
            </div>
        
        </div>
        <div className="row d-flex justify-content-center align-content-center">
            <div className="col-lg-5">
                <p>Before</p>
                <img className="img-fluid rounded shadow-sm shadow-primary" src={mardanbefore} alt="" />
                
            </div>
            <div className="col-lg-5">
                <p>After</p>
                <img className="img-fluid rounded shadow-sm" src={mardanafter} alt="" />
            </div>
        </div>
        <div className="row">
        <h2>Random Forest Results</h2>
        <table class="tree-table">
        <tr>
            <th>Requirment</th>
            <th>Result</th>
        </tr>
        <tr>
            <td>Non-Trees Points/Pixels</td>
            <td>257 pts and 6 polygons</td>
        </tr>
        <tr>
            <td>Trees Points/Pixels</td>
            <td>266 pts</td>
        </tr>
        <tr>
            <td>Timestamp</td>
            <td>Date (2023-05-20 05:47:42)</td>
        </tr>
        <tr>
            <td>Training Error Matrix</td>
            <td>
            Non-Trees: [201,1] <br />
            Trees: [4,205]
            </td>
        </tr>
        <tr>
            <td>Training Overall Accuracy</td>
            <td>98.78% (0.9878)</td>
        </tr>
        <tr>
            <td>Testing Error Eatrix</td>
            <td>
            Non-Trees: [60,4] <br />
            Trees: [2,55]
            </td>
        </tr>
        <tr>
            <td>Testing Overall Accuracy</td>
            <td>95.04% (0.9504)</td>
        </tr>
        <tr>
            <td>Polygon Area</td>
            <td>167.99 km^2</td>
        </tr>
        <tr>
            <td>Area of Non-Trees</td>
            <td>84.0 km^2</td>
        </tr>
        <tr>
            <td>Area of Trees</td>
            <td>83.86 km^2</td>
        </tr>
        </table>
        </div>

  </div>  
  )
}

export default Mardan;