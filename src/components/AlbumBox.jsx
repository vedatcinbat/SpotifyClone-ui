import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

function AlbumBox({ albumInfo }) {
  const { albumDetail, setAlbumDetail } = useUserContext();
  const navigate = useNavigate();

  const goAlbum = async () => {
    setAlbumDetail(albumInfo);
    navigate("/albumdetails");
  };

  return (
    <div
      onClick={goAlbum}
      className="albumBox rounded-2xl w-[30vh] h-[45vh] bg-[#ffffff12] hover:bg-[#ffffff1a] mb-[4vh] overflow-hidden mb-[1rem] cursor-pointer whitespace-no-wrap"
    >
      <div className="songImg flex justify-center items-center overflow-hidden">
        <img className="" src={albumInfo.albumImg} alt="albumImg" />
      </div>
      <div className="albumDetails flex flex-col items-start p-[1vh] whitespace-no-wrap">
        <div className="albumText bg-[#1c1c1c] text-[#7d7a7a] p-2 rounded-xl">
          <div>Album</div>
        </div>
        <div className="title text-center">
          <div className="text-white text-lg">{albumInfo.album_title}</div>
        </div>
        <div className="desc flex justify-between items-center text-[#ffffff4d]">
          <div className="text-[2.0vh] text-white">
            {albumInfo.album_publishYear}
          </div>
          <div className="ml-2 mr-2">o</div>
          <div className="text-[2.0vh]">
            {albumInfo.album_artists[0].artistname}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumBox;
