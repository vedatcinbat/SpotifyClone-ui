import React from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
function AlbumSong({ songInfo }) {
  const { setCurrentSong, setSongDetail } = useUserContext();
  const navigate = useNavigate();

  const goSong = async () => {
    setSongDetail(songInfo);
    navigate("/songdetails");
  };
  return (
    <div className="flex items-center pl-[5vh] p-4  mt-[1vh] gap-2 cursor-pointer hover:bg-[#2b2a2a] rounded-lg">
      <div
        onClick={() => setCurrentSong(songInfo)}
        className="flex items-center flex-1"
      >
        <img className="w-[6vh]" src={songInfo.songImg} alt="" />
        <div className="songInfo ml-2 text-left flex flex-col justify-center">
          <div
            onClick={goSong}
            className="mb-[0.1vh] mt-2 text-[#ffffff] hover:text-[#7d7a7a]"
          >
            {songInfo.title}
          </div>
          <div className="text-[#8d8d8d]">{songInfo.artist.artistname}</div>
        </div>
      </div>
      <div className="flex-1 ml-[28vh] text-left text-[#8d8d8d] hover:text-[#636361]">
        {songInfo.album.album_title}
      </div>
      <div className="flex-1 -ml-[7vh] translate-x-[1vh] text-[#8d8d8d]">
        {songInfo.duration}
      </div>
    </div>
  );
}

export default AlbumSong;
