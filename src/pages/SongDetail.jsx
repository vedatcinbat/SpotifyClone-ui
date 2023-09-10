import React from "react";
import SongDetailHeader from "../components/SongDetailHeader";
import SongDetails from "../components/SongDetails";

function SongDetail() {
  return (
    <div className="flex flex-col justify-start h-[100vh] bg-black p-[0.1rem] overflow-y-auto ">
      <SongDetailHeader />
      <SongDetails />
    </div>
  );
}

export default SongDetail;
