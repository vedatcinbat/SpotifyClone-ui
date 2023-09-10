import React, { useEffect, useState } from "react";
import { FavoriteBorder } from "@mui/icons-material";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function SongBox({ songInfo }) {
  const {
    currentUser,
    setCurrentUser,
    albumDetail,
    setAlbumDetail,
    songDetail,
    setSongDetail,
  } = useUserContext();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const isLikedOrNot = async () => {
    const isLikedSong = await currentUser.likedSongs.some(
      (song) => song.title === songInfo.title
    );
    if (isLikedSong) {
      setLiked(true);
    }
  };

  useEffect(() => {
    isLikedOrNot();
  }, [currentUser.likedSongs.length]);
  const addLikedSongs = async () => {
    const songExists = currentUser.likedSongs.some(
      (song) => song.title === songInfo.title
    );

    if (!songExists) {
      const likedSongs = currentUser.likedSongs;
      const updatedLikedSongs = [...likedSongs, songInfo];
      await axios.patch(`http://localhost:8000/api/users/${currentUser._id}`, {
        ...currentUser,
        likedSongs: updatedLikedSongs,
      });

      const updatedUser = { ...currentUser, likedSongs: updatedLikedSongs };

      setCurrentUser(updatedUser);
    } else {
      alert(
        `This song has been already added to Liked Songs: ${songInfo.title}`
      );
    }
  };
  const goAlbum = async () => {
    const albumId = songInfo.album._id;
    const albumInfo = await axios
      .get(`http://localhost:8000/api/albums/${albumId}`)
      .then((data) => {
        setAlbumDetail(data.data.album);
        navigate("/albumdetails");
      });
  };
  const goSong = async () => {
    setSongDetail(songInfo);
    navigate("/songdetails");
  };
  return (
    <div className="songBox rounded-2xl w-[30vh] h-[48vh] bg-[#ffffff12] hover:bg-[#ffffff1a] mb-[1vh] overflow-hidden mb-[5rem] cursor-pointer">
      <div onClick={goSong} class="songImg">
        <img src={songInfo.songImg} alt="songImg" />
      </div>
      <div class="songDetails flex flex-col p-2">
        <div class="songText bg-[#1c1c1c] w-[6vh] text-[#7d7a7a] p-2 rounded-xl">
          <div>Song</div>
        </div>
        <div onClick={goSong} class="title text-center ">
          <div className="text-white text-lg hover:text-[#7d7a7a]">
            {songInfo.title}
          </div>
        </div>
        <div class="desc flex flex-col items-center">
          {/* <div>{songInfo.artist.artistname}</div> */}
          <div onClick={goAlbum} className="text-[1.4vh] hover:text-[#7d7a7a]">
            ({songInfo.album.album_title})
          </div>
        </div>
        <div
          onClick={addLikedSongs}
          className={`HearthIcon ${
            liked ? "text-green-400" : "text-gray-800"
          } flex justify-end items-end`}
        >
          <FavoriteBorder />
        </div>
      </div>
    </div>
  );
}

export default SongBox;
