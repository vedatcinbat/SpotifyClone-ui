import React, { useEffect } from "react";
import { useUserContext } from "../context/UserContext";
import LikedSongsHeader from "../components/LikedSongsHeader";
import LikedSongList from "../components/LikedSongsList";
function LikedSongs() {
  const { currentUser, setCurrentUser } = useUserContext();

  return (
    <div className="w-full relative overflow-y-auto rounded-xl">
      <LikedSongsHeader />
      <LikedSongList />
    </div>
  );
}

export default LikedSongs;
