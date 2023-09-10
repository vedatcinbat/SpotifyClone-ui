import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FavoriteBorder } from "@mui/icons-material";

import axios from "axios";
import { useUserContext } from "../context/UserContext";

function Song({ songInfo }) {
  const {
    currentUser,
    setCurrentUser,
    currentSong,
    setCurrentSong,
    setAlbumDetail,
    setSongDetail,
  } = useUserContext();
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  const goAlbum = async () => {
    const albumId = songInfo.album._id;
    const albumInfo = await axios
      .get(`http://localhost:8000/api/albums/${albumId}`)
      .then((data) => {
        setAlbumDetail(data.data.album);
        navigate("/albumdetails");
      });
    alert("Message");
  };
  const removeSong = async () => {
    let likedSongs = currentUser.likedSongs;
    let updatedLikedSongs = likedSongs.filter(
      (song) => song._id !== songInfo._id
    );
    await axios
      .patch(`http://localhost:8000/api/users/${currentUser._id}`, {
        ...currentUser,
        likedSongs: updatedLikedSongs,
      })
      .then(() => {
        const updatedUser = { ...currentUser, likedSongs: updatedLikedSongs };
        setCurrentUser(updatedUser);
        setCurrentSong();
      });
  };
  const goSong = async () => {
    setSongDetail(songInfo);
    navigate("/songdetails");
  };
  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
      className="flex items-center pl-[5vh] p-4  mt-[1vh] gap-2 cursor-pointer hover:bg-[#2b2a2a] rounded-lg"
    >
      <div
        onClick={() => {
          setCurrentSong(songInfo);
        }}
        className="flex items-center flex-1"
      >
        <img className="w-[6vh]" src={songInfo.songImg} alt="" />
        <div className="songInfo ml-2 text-left flex flex-col justify-center">
          <div
            onClick={goSong}
            className="mb-[0.1vh] mt-2 text-[#ffffff] hover:text-[#2b2a2a]"
          >
            {songInfo.title}
          </div>
          <div className="text-[#8d8d8d]">{songInfo.artist.artistname}</div>
        </div>
      </div>
      <div className="flex-1 ml-[28vh] text-left text-[#8d8d8d] hover:text-[#636361]">
        <button onClick={goAlbum}>{songInfo.album.album_title}</button>
      </div>
      <div className="flex-1 -ml-[7vh] translate-x-[1vh] text-[#8d8d8d]">
        {songInfo.duration}
        <button
          onClick={removeSong}
          className={`ml-2 bg-[#1ed760] text-black p-2 rounded-xl hover:text-white ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Song;
