import React, { useEffect } from "react";
import { useUserContext } from "../context/UserContext";
import AlbumBox from "./AlbumBox";
import axios from "axios";
function AlbumsPart() {
  const { albums, setAlbums } = useUserContext();
  return (
    <>
      <div className="p-4 mt-2 ml-2">All Albums</div>
      <div className="albumList grid grid-cols-5 p-4 ">
        {albums.map((album) => {
          return <AlbumBox albumInfo={album} />;
        })}
      </div>
    </>
  );
}

export default AlbumsPart;
