import React from "react"
import ReactDOM from "react-dom/client"

//react core
const heading = React.createElement("h1", {id:"heading"}, "greate React");

// now will use JSX

//single line code snippet
const heading1 = <h1 id="heading1">React using jsx</h1>

//but we use multiple line code snippet

const heading5 = (
    <h1 id="heading1">
        React using jsx
    </h1>
);


//there are some changes as html vs jsx class vs className , for attribute use htmlfor

//this are the just react components and its just javascript objects

import HeadingComponent from "./src/components/HeadingComponent.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent></HeadingComponent>);










//now will use the jsx






