import React, {useState, useEffect} from "react";
import Colors from './Colors';
import ColorDetails from './ColorDetails';
import NewColorForm from './NewColorForm';


import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

function App2() {
    const initialColors = JSON.parse(localStorage.getItem("colors")) || {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    };
    const [colors, updateColors] = useState(initialColors);

    useEffect(
        () => localStorage.setItem("colors", JSON.stringify(colors)),
        [colors]
    );

    function handleAdd(newColorObj) {
        updateColors(prevColors => ({ ...prevColors, ...newColorObj }));
    }
    
    function renderCurrentColor(props) {
      const { color } = props.match.params;
      const hex = colors[color];
      return <ColorDetails {...props} hex={hex} color={color} />;
    };

    return(
        <div className="App2">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/colors">
                        <Colors colors={colors}/>
                    </Route>
                    <Route exact path="/colors/addColor">
                        <NewColorForm addColor={handleAdd} />
                    </Route>
                    <Route exact path="/colors/:color" render={renderCurrentColor}>
                        <ColorDetails colors={colors}/>
                    </Route>
                    <Redirect to="/colors" />
                </Switch>
            </BrowserRouter>
        </div>
    )

}
export const colors = 
[
    {color: "green"},
    {color: "red"},
    {color: "purple"}
]

App2.defaultProps = {colors}
export default App2;