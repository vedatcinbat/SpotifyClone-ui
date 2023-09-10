import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import LikedSongs from "./pages/LikedSongs";
import { UserProvider } from "./context/UserContext";
import { useUserContext } from "./context/UserContext";
import Search from "./pages/Search";
import AlbumDetails from "./pages/AlbumDetails";
import SongDetail from "./pages/SongDetail";
import UserDetails from "./pages/UserDetails";

function App() {
  const { currentUser } = useUserContext();
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/likedsongs" element={<LikedSongs />} />
              <Route path="/search" element={<Search />} />
              <Route path="/albumdetails" element={<AlbumDetails />} />
              <Route path="/songdetails" element={<SongDetail />} />
              <Route path="/userdetails" element={<UserDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
