import React, { useEffect, useState } from "react";
import Song from "./Song";
import { AccessAlarm } from "@mui/icons-material";
import axios from "axios";
import { useUserContext } from "../context/UserContext";
function LikedSongList() {
  const { currentUser, setCurrentUser } = useUserContext();
  return (
    <div className="rounded-xl">
      <div className="likedsonglist flex flex-col text-white bg-[#121212]  ">
        <div className="colNames flex justify-between items-center  mt-4">
          <div className="flex-1 pl-[15vh]">Title</div>
          <div className="flex-1 pl-[34vh]">Album</div>
          <div className="flex-1 pl-[20vh]">
            <AccessAlarm />
          </div>
        </div>
        <div className="allLikedSongs flex bg-[#121212] flex-col justify-between text-center pl-[4vh] pr-[4vh] mt-2">
          {currentUser.likedSongs.map((song, index) => {
            return (
              <div>
                <Song songInfo={song} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LikedSongList;
