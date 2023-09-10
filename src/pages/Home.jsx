import React, { useContext } from "react";
import { useUserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { Favorite } from "@mui/icons-material";
function Home() {
  const { currentUser } = useUserContext();
  return (
    <>
      {currentUser ? (
        <div className="w-[100%] rounded-xl mt-[0.5vh] h-full  bg-gradient-to-b from-[#5038a0] to-[#281c50] mr-1 mt-[0.2vh] text-white flex  mb-[0.2vh] flex flex-col  ">
          <div className="p-5 text-2xl">Good Afternoon</div>
          <div class="albumsAndPlaylists p-4 grid grid-cols-3 gap-2 ">
            <div class="likedSongs w-[40vh] h-[15vh] bg-[#2b2a2a] flex justify-start items-center p-2 mb-[6vh] rounded-xl">
              <div class="hearthIcon w-[10vh] h-[10vh] bg-gradient-to-r from-sky-400 to-sky-800 flex justify-center items-center rounded-xl">
                <Favorite />
              </div>
              <Link to="/likedsongs">
                <div class="text ml-4 text-xl">
                  <div>LikedSongs</div>
                </div>
              </Link>
            </div>
          </div>
          <div class="playlists"></div>
        </div>
      ) : (
        <div className="w-[100%] h-full bg-[#181818] mr-1 mt-[0.2vh] text-white flex justify-center items-center mb-[0.2vh] ">
          <div className="homeDetail">
            <div className="mb-[4rem] text-[2rem]">SpotifyClone App</div>
            <div className="buttons flex justify-between items-center">
              <div className="bg-[#181818] p-2 w-[10vh] text-center hover:rounded-xl cursor-pointer hover:bg-[#1ed760] hover:text-black">
                <Link to="/login">Login</Link>
              </div>
              <div className="bg-[#181818] p-2 w-[10vh] text-center hover:rounded-xl cursor-pointer hover:bg-[#1ed760] hover:text-black">
                <Link to="/signup">Signup</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
