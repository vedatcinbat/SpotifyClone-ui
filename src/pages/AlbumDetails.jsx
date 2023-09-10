import React from "react";
import { useUserContext } from "../context/UserContext";
import AlbumDetailHeader from "../components/AlbumDetailHeader";
import AlbumSongs from "../components/AlbumSongs";
function AlbumDetails() {
  const { albumDetail } = useUserContext();
  return (
    <div className="flex flex-col justify-start h-[100vh] bg-black p-[0.1rem] overflow-y-auto ">
      <AlbumDetailHeader />
      <AlbumSongs />
    </div>
  );
}

export default AlbumDetails;
