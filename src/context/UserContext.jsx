import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [currentSong, setCurrentSong] = useState();
  const [banner, setBanner] = useState("true");
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [albumDetail, setAlbumDetail] = useState([]);
  const [songDetail, setSongDetail] = useState([]);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        currentSong,
        setCurrentSong,
        banner,
        setBanner,
        albums,
        setAlbums,
        songs,
        setSongs,
        albumDetail,
        setAlbumDetail,
        songDetail,
        setSongDetail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
