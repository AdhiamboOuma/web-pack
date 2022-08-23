//City in this case is a component(MUST start with a capital letter not to be mistaken to be a function)

import React from "react";

/*
const City =(props) => {
  return <h2> Kisumu<h2>;
};
*/

const City =(props) => {
   return (
    <div>
      <h2>{props.town}</h2>
    <h2>{props.field}</h2>
    </div>
   );
};
export {City};
