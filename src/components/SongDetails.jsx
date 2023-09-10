import React from "react";
import { useUserContext } from "../context/UserContext";
import {
  Circle,
  Favorite,
  FavoriteBorder,
  FavoriteOutlined,
  PlayArrow,
  ThreeDRotation,
} from "@mui/icons-material";

function SongDetailsUpper() {
  return (
    <div className="flex justify-start items-center p-2 ml-[5vh] mt-[1vh]">
      <div class="likeButton w-[5vh] h-[5vh] flex justify-center items-center p-2 bg-[#1ed760] rounded-full">
        <div class="arrowIcon cursor-pointer">
          <PlayArrow />
        </div>
      </div>
      <div class="hearthIcon ml-[2.8vh] scale-[1.8] cursor-pointer ">
        <FavoriteBorder />
      </div>
      <div class="threeDot scale-[0.4] ml-1 text-sky-400 cursor-pointer">
        <Circle />
        <Circle />
        <Circle />
      </div>
    </div>
  );
}

function LyrcsPart() {
  const { songDetail, setSongDetail } = useUserContext();
  const lyrcsText = `${songDetail.lyrcs}`;
  return (
    <div className="text-white flex-1 p-5">
      <div className="text-xl font-bold mb-[2vh]">Lyrcs</div>
      <div
        className="text-[#6e6d6b]"
        dangerouslySetInnerHTML={{ __html: lyrcsText.replace(/\n/g, "<br />") }}
      />
    </div>
  );
}

function ArtistPhoto() {
  const { songDetail, setSongDetail } = useUserContext();
  return (
    <div className="flex-1 p-5 flex justify-center items-center p-4 w-[10vh] h-[10vh]">
      <div class="imgFile  ">
        <img
          className="rounded-full w-[12vh] h-[12vh]"
          src={songDetail.artist.artist_img}
          alt=""
        />
      </div>
      <div class="artistname text-white ml-[2vh]">
        <div>{songDetail.artist.artistname}</div>
      </div>
    </div>
  );
}

function SongDetails() {
  const { songDetail, setSongDetail } = useUserContext();
  return (
    <div className="bg-gradient-to-b from-[#212121] to-[#1f1e1e] ">
      <div class="addToBasket w-full h-[8vh] bg-[#1f1e1e]">
        <SongDetailsUpper />
      </div>
      <div class="lyrcsAndArtist flex">
        <LyrcsPart />
        <ArtistPhoto />
      </div>
    </div>
  );
}

export default SongDetails;
