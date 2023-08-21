import React from "react";
import { NavLink, Link } from "react-router-dom";

function DogList({dogs}) {
    return (
        <div>
            <h1>Here are the list of Dogs</h1>
            <div>
                {dogs.map(d=> (
    
                    <div className="col-3 text-center" key={d.name}>
                        <p>{d.name}</p>
                        <img src={d.src} alt={d.name} />
                        <h3 className="mt-3">
                            <Link to ={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                        </h3>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default DogList;