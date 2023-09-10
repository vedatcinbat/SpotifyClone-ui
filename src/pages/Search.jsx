import React, { useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../context/UserContext";
import AlbumsPart from "../components/AlbumsPart";
import SongsPart from "../components/SongsPart";
import { Link } from "react-router-dom";
function Search() {
  const { currentUser, albums, setAlbums, songs, setSongs } = useUserContext();

  const getSongs = async () => {
    const songs = await axios.get(`http://localhost:8000/api/songs`);
    const songsData = songs.data;
    setSongs(songsData.allSongs);
  };
  const getAlbums = async () => {
    const albums = await axios.get(`http://localhost:8000/api/albums`);
    const albumsData = albums.data;
    setAlbums(albumsData.albums);
  };

  useEffect(() => {
    getSongs();
    getAlbums();
  }, []);

  return (
    <>
      {currentUser ? (
        <>
          {albums !== null && songs !== null ? (
            <div className="text-white overflow-y-scroll">
              <AlbumsPart />
              <SongsPart />
            </div>
          ) : (
            <div className="text-white">
              <div>Please wait...</div>
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-full text-white flex flex-col justify-center items-center">
          <div className="text-2xl">Please Login To See Songs and Albums</div>
          <div className="buttons flex justify-between mt-[5vh] w-[30vh] items-center">
            <div className="bg-[#181818] rounded-md p-2 w-[10vh] text-center hover:rounded-xl cursor-pointer hover:bg-[#1ed760] hover:text-black">
              <Link to="/login">Login</Link>
            </div>
            <div className="bg-[#181818] rounded-md p-2 w-[10vh] text-center hover:rounded-xl cursor-pointer hover:bg-[#1ed760] hover:text-black">
              <Link to="/signup">Signup</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Search;
