import React, { createContext, useContext, useState } from "react";

const MusicContext = createContext();

const useMusicContext = () => {
  return useContext(MusicContext);
};

const MusicProvider = ({ children }) => {
  const [musicPlayer, setMusicPlayer] = useState();

  return (
    <MusicContext.Provider value={{musicPlayer, setMusicPlayer}}>
      {children}
    </MusicContext.Provider>
  );
};

export { useMusicContext, MusicProvider }