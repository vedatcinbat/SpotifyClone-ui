import React from "react";
import { useUserContext } from "../context/UserContext";
import SongBox from "./SongBox";
function SongsPart() {
  const { songs, setSongs } = useUserContext();
  return (
    <>
      <div className="p-4 mt-2 ml-2">All Songs</div>
      <div className="songList grid grid-cols-5 p-4 ">
        {songs.map((song) => {
          return <SongBox songInfo={song} />;
        })}
      </div>
    </>
  );
}

export default SongsPart;
