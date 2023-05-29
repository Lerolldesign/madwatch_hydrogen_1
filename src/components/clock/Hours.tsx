import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Clock from "./Clock";




export default function Hours () {

    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <StrictMode>
        <Clock />
      </StrictMode>,
      rootElement
    );
  
  );
}