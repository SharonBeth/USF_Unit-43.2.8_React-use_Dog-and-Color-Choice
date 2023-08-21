import React from "react";

import { NavLink, Link } from "react-router-dom";

import AddColor from './NewColorForm';

import "./Colors.css";

function Colors ({colors}) {
    const colorLinks = Object.keys(colors).map(colorName => (
        <li key={colorName}>
          <Link to={`/colors/${colorName}`}>{colorName}</Link>
        </li>
      ));
    
    return (
        <div className="Colors">
            <div className="NavBar">
                <p>Welcome to the Color Factory</p>
                <Link to="/colors/addColor">Add a color.</Link>
             </div>
             <div className="colorSelect">
                <p>Please select a color.</p>
                {/* <div> */}
                    {/* {colors.map(color=>( */}
                    {/* //    <div className="col-3 text center" key={color.color}> */}
                            {/* <p>{color.color}</p> */}
                            {/* <h3 className="mt-3"> */}
                                {/* <Link to={`/colors/${color.color}`}>{color.color}</Link> */}
                            {/* </h3> */}
                            {/* </div> */}
                    {/* // ))} */}
                <ul>{colorLinks}</ul>  
            </div>
        </div>
            
    )
}



export default Colors;