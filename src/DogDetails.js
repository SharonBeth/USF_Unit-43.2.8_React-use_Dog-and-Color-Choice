import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
// import "./DogDetails.css";

function DogDetails({dogs}) {
    const {name} = useParams();
    console.log(name)
    let currentDog = "1";
    if(name) {
        currentDog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase(
        )
        )
    }else {
        return <Redirect to="/dogs/" />
    }
    console.log(currentDog + "current")

  return (
    <div className="row DogDetails">
      <div className="col d-flex flex-column align-items-center">
        <img src={currentDog.src} alt={currentDog.name} />
        <h2>{currentDog.name}</h2>
        <h3>{currentDog.age} years old</h3>
        <ul>
          {currentDog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
        <Link to="/dogs">Go Back</Link>
      </div>
    </div>
  );
}

export default DogDetails;