import React, {useState} from "react";
import { NavLink, Link } from "react-router-dom";


function Nav({dogs}) {
  const link = dogs.map(dog=>(
    <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
      {dog.name}
    </NavLink>
    ))

  return (
    <nav>
      <Link exact to="/dogs">Main Page for Dogs</Link>
      {link}
    </nav>
  );
}
// end

export default Nav;
