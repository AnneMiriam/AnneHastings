import React from "react";
import ReactDOM  from "react-dom";
import App from "./components/App";
import { MusicProvider } from "../src/components/contextProvider";

ReactDOM.render(
    <React>
        <MusicProvider>
            <App />
        </MusicProvider>
    </React>,
    document.getElementById("root")
);