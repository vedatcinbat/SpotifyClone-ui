import React from "react";
import { useUserContext } from "../context/UserContext";
import { AccessAlarm } from "@mui/icons-material";
import Song from "./Song";
import AlbumSong from "./AlbumSong";
function AlbumSongs() {
  const { albumDetail, setAlbumDetail } = useUserContext();
  return (
    <div className="rounded-xl">
      <div className="likedsonglist flex flex-col text-white bg-[#121212]  ">
        <div className="colNames flex justify-between items-center  mt-4">
          <div className="flex-1 ml-[14vh]">Title</div>
          <div className="flex-1 ml-[38vh]">Album</div>
          <div className="flex-1 ml-[29vh]">
            <AccessAlarm />
          </div>
        </div>
        <div className="allLikedSongs flex bg-[#121212] flex-col justify-between text-center pl-[4vh] pr-[4vh] mt-2">
          {albumDetail.album_songs.map((song, index) => {
            return (
              <div>
                <AlbumSong songInfo={song} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AlbumSongs;
