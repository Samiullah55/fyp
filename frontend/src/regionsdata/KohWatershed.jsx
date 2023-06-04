import React from 'react';
import waterafter from "../regionsdata/images/Watershed_After.png";
import waterbefore from "../regionsdata/images/Watershed_Before.png";

function KohWatershed() {
  return (
    <div className="d-flex flex-column bg-mine m-4 rounded justify-content-center align-items-center vh-100">
        <div className="row w-20 h-20">
            <div className="col-lg d-flex justify-content-center align-items-center">
                <h1 className="text-center">Kohistan Watershed</h1>
            </div>
        
        </div>
        <div className="row d-flex justify-content-center align-content-center">
            <div className="col-lg-5">
                <p>Before</p>
                <img className="img-fluid rounded" src={waterbefore} alt="" />
                
            </div>
            <div className="col-lg-5">
                <p>After</p>
                <img className="img-fluid rounded" src={waterafter} alt="" />
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
            <td>241 pts</td>
        </tr>
        <tr>
            <td>Trees Points/Pixels</td>
            <td>251 pts</td>
        </tr>
        <tr>
            <td>Timestamp</td>
            <td>Date (2023-05-20 05:47:42)</td>
        </tr>
        <tr>
            <td>Training Error Matrix</td>
            <td>
            Non-Trees: [102,2] <br />
            Trees: [4,152]
            </td>
        </tr>
        <tr>
            <td>Training Overall Accuracy</td>
            <td>97.78% (0.9778)</td>
        </tr>
        <tr>
            <td>Testing Error Eatrix</td>
            <td>
            Non-Trees: [32,0] <br />
            Trees: [3,42]
            </td>
        </tr>
        <tr>
            <td>Testing Overall Accuracy</td>
            <td>96.04% (0.9604)</td>
        </tr>
        <tr>
            <td>Polygon Area</td>
            <td>69.99 km^2</td>
        </tr>
        <tr>
            <td>Area of Non-Trees</td>
            <td>31.0 km^2</td>
        </tr>
        <tr>
            <td>Area of Trees</td>
            <td>37.86 km^2</td>
        </tr>
        </table>
        </div>

  </div>  
  )
}

export default KohWatershed;