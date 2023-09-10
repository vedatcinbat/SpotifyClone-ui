import React from "react";
import { useUserContext } from "../context/UserContext";
function SongDetailHeader() {
  const { songDetail, setSongDetail } = useUserContext();
  return (
    <>
      <div className="bg-gradient-to-r from-[#337CCF] to-[#F4EEEE] min-h-[45vh] relative pl-[6vh] overflow-hidden flex items-center">
        <div className="playList__box w-[35vh]">
          <img src={songDetail.songImg} alt="" className="rounded-[2.5vh]" />
        </div>
        <div className="playList__header ml-[5vh]">
          <div className="font-bold text-white text-[3.5vh]">Song</div>
          <div className="font-bold text-white text-[7.5vh] mb-4">
            {songDetail.title}
          </div>
          <div className="playList__headerProfile flex justify-start items-center gap-2">
            <div className="profileImg cursor-pointer">
              <img
                src={songDetail.artist.artist_img}
                className="w-[5vh] h-[5vh] rounded-full"
                alt=""
              />
            </div>

            <div className="profileName ml-2 text-[#fff] font-bold">
              <div>{songDetail.artist.artistname}</div>
            </div>
            <div className="circle w-[1vh] h-[1vh] bg-white rounded-full flex items-center justify-center ml-1 mr-1"></div>
            <div className="profileName text-[#fff]">
              <div>{songDetail.album.album_title}</div>
            </div>
            <div className="circle w-[1vh] h-[1vh] bg-white rounded-full flex items-center justify-center ml-1 mr-1"></div>
            <div className="profileName text-[#fff]">
              <div>{songDetail.publishYear}</div>
            </div>
            <div className="circle w-[1vh] h-[1vh] bg-white rounded-full flex items-center justify-center ml-1 mr-1"></div>
            <div className="numberOfSongs text-[#e2e2e2]">
              <div>{songDetail.duration}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SongDetailHeader;
