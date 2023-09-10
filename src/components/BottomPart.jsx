import React from "react";
import { useUserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { Close } from "@mui/icons-material";
function BottomPart() {
  const { currentSong, setCurrentSong, banner, setBanner } = useUserContext();
  return (
    <>
      {currentSong ? (
        <div className="mainBottom p-2 text-black rounded-xl bg-gradient-to-r from-[#af2896] to-[#509bf5] rounded-xl h-[16vh] flex justify-between">
          <div className="textPart">
            <div className="text-[#ffffffb3] text-md">{currentSong.title}</div>
            <div className="text-[#ffffffb3] text-md">
              {currentSong.duration}
            </div>
            <div className="text-[#ffffffb3] text-md">
              {currentSong.artist.artistname}
            </div>
          </div>
          <div
            onClick={() => setCurrentSong()}
            class="removeSong cursor-pointer"
          >
            <Close />
          </div>
        </div>
      ) : (
        <>
          {banner === "true" ? (
            <div className="mainBottom  text-black rounded-xl bg-gradient-to-r from-[#af2896] to-[#509bf5]   rounded-xl h-[12vh]">
              <div className="p-2 flex items-center justify-between pt-[2vh] ml-3">
                <div className="textPart">
                  <div className="text-[#ffffffb3] text-md">
                    PREVIEW OF SPOTIFY
                  </div>
                  <div className="text-[#ffffff] font-bold text-xl">
                    Sign up to get unlimited songs and podcasts with occasional
                    ads. No credit card needed
                  </div>
                </div>
                <div className="button">
                  <Link to="/signup">
                    <button className="mr-4  bg-[#ffffffb3] hover:bg-[#121212] hover:text-white w-[12rem] pt-4 pb-4 text-gray-900 p-3 w-[7rem] rounded-2xl hover:bg-[#1ed760] hover:text-black">
                      Sign up
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="mainBottom  text-black rounded-xl bg-gradient-to-r from-[#af2896] to-[#509bf5]   rounded-xl h-[12vh]"></div>
          )}
        </>
      )}
    </>
  );
}

export default BottomPart;
