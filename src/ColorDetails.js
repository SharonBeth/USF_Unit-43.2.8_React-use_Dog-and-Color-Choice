import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";

function ColorDetails ({colors}) {
    const {color} = useParams();
    const test = color
    return(
        <div className="ColorDetails" style={{backgroundColor: test}} >
            <p>TEsting color Detailes page</p>
            <Link to="/colors">Go Back to Colors</Link>
        </div>
    )
}

export default ColorDetails;