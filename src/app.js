import React from "react";  
import ReactDOM  from "react-dom";

import { City } from "./data";
const Template = () => {
  return (
    <div>
      <h1>THIS IS JSX FROM WEBPACK </h1>
      <City town= "Kisumu is a nice city" field= "nice landscapes" />
    </div>
  );
};
//in this case, Template is the parent component while City is a child component(must start with block letter), while town and field are Prop(erties)s- <arguments passed into react components and are read only-the parent component passes props to the child component>
ReactDOM.render(<Template />, document.getElementById("root"));