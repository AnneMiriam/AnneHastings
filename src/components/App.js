import React, { useEffect, useState } from "react";
import NavBar from "./navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import MusicPlayer from "./musicPlayer";
import Home from "../pages/home";
import Projects from "../pages/myProjects";
import Bio from "../pages/myBio";
import { MusicProvider } from "./contextProvider";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <MusicProvider>
          <div style={{ paddingTop: "64px", paddingBottom: "108px" }}>
            <Routes>
              <Route path="/all-ears" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/bio" element={<Bio />} />
            </Routes>
          </div>
        </MusicProvider>
        <MusicPlayer />
      </div>
    </Router>
  );
}

export default App;
