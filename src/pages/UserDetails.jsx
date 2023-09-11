import React, { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function UserDetails() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useUserContext();

  const [userNameTyped, setUserNameTyped] = useState(`${currentUser.username}`);
  const [passwordTyped, setPasswordTyped] = useState(`${currentUser.password}`);
  const [emailTyped, setEmailTyped] = useState(`${currentUser.email}`);
  const [ageTyped, setAgeTyped] = useState(`${currentUser.age}`);
  const [countryTyped, setCountryTyped] = useState(`${currentUser.country}`);
  const [collegeTyped, setCollegeTyped] = useState(`${currentUser.college}`);
  const [userImgTyped, setUserImgTyped] = useState(`${currentUser.userImg}`);

  const [isDataSame, setIsDataSame] = useState(true);

  function shallowEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }

    return true;
  }

  const checkUserInfo = () => {
    const likedSongs = currentUser.likedSongs;
    const playLists = currentUser.playLists;
    const v = currentUser.__v;
    const id = currentUser._id;
    const userImg = currentUser.userImg;
    let typedUserData = {
      username: userNameTyped,
      password: passwordTyped,
      email: emailTyped,
      age: parseInt(ageTyped),
      country: countryTyped,
      college: collegeTyped,
      userImg: userImgTyped,
      __v: v,
      _id: id,
    };
    typedUserData = {
      ...typedUserData,
      playLists: playLists,
      likedSongs: likedSongs,
      userImg: userImg,
    };

    if (shallowEqual(typedUserData, currentUser)) {
      setIsDataSame(true);
    } else {
      setIsDataSame(false);
    }
  };

  useEffect(() => {
    checkUserInfo();
    if (userNameTyped === "") {
      setUserNameTyped(`${currentUser.username}`);
    }
    if (passwordTyped === "") {
      setPasswordTyped(`${currentUser.password}`);
    }
    if (emailTyped === "") {
      setEmailTyped(`${currentUser.email}`);
    }
    if (ageTyped === "") {
      setAgeTyped(`${currentUser.age}`);
    }
    if (countryTyped === "") {
      setCountryTyped(`${currentUser.country}`);
    }
    if (collegeTyped === "") {
      setCollegeTyped(`${currentUser.college}`);
    }
  }, [userNameTyped, passwordTyped, emailTyped, ageTyped, collegeTyped]);

  const updateUser = async () => {
    const playLists = currentUser.playLists;
    const likedSongs = currentUser.likedSongs;
    const v = currentUser.__v;
    const id = currentUser._id;
    let updatedUser = {
      username: userNameTyped,
      password: passwordTyped,
      email: emailTyped,
      age: parseInt(ageTyped),
      country: countryTyped,
      college: collegeTyped,
      __v: v,
      _id: id,
      userImg: userImgTyped,
    };
    updatedUser = {
      ...updatedUser,
      playLists: playLists,
      likedSongs: likedSongs,
    };
    await axios
      .patch(`http://localhost:8000/api/users/${currentUser._id}`, updatedUser)
      .then(() => {
        alert("Your profile has been updated! ");
        setCurrentUser(updatedUser);
        setUserNameTyped("");
        setPasswordTyped("");
        setEmailTyped("");
        setAgeTyped("");
        setCollegeTyped("");
        navigate("/userdetails");
      });
  };

  return (
    <>
      {currentUser ? (
        <div class="container h-full w-full flex flex-col  justify-center items-center">
          <div class="header text-white mb-4 text-green-500 text-2xl">
            <div>Spotify Clone - User Informations</div>
          </div>
          <div class="form bg-[#212121] rounded-xl flex flex-col  p-2 justify-between w-[50vh] h-[60vh]">
            <div class="inputForm flex items-center justify-start">
              <label className="text-white mr-3 w-[10vh]">Username</label>
              <input
                className="p-3 bg-gray-900 w-full text-white rounded-xl hover:bg-[#1ed760] hover:text-black hover:placeholder-[#121212]"
                type="text"
                placeholder={currentUser.username}
                onChange={(e) => setUserNameTyped(e.target.value)}
              />
            </div>
            <div class="inputForm flex items-center justify-start">
              <label className="text-white mr-3 w-[10vh]">Password</label>
              <input
                className="p-3 bg-gray-900 w-full text-white rounded-xl hover:bg-[#1ed760] hover:text-black hover:placeholder-[#121212]"
                type="text"
                placeholder={currentUser.password}
                onChange={(e) => setPasswordTyped(e.target.value)}
              />
            </div>
            <div class="inputForm flex items-center justify-start">
              <label className="text-white mr-3 w-[10vh]">Age</label>
              <input
                className="p-3 bg-gray-900 w-full text-white rounded-xl hover:bg-[#1ed760] hover:text-black hover:placeholder-[#121212]"
                type="number"
                placeholder={currentUser.age}
                onChange={(e) => setAgeTyped(e.target.value)}
              />
            </div>
            <div class="inputForm flex items-center justify-start">
              <label className="text-white mr-3 w-[10vh]">Country</label>
              <input
                className="p-3 bg-gray-900 w-full text-white rounded-xl hover:bg-[#1ed760] hover:text-black hover:placeholder-[#121212]"
                type="text"
                placeholder={currentUser.country}
                onChange={(e) => setCountryTyped(e.target.value)}
              />
            </div>
            <div class="inputForm flex items-center justify-start">
              <label className="text-white mr-3 w-[10vh]">College</label>
              <input
                className="p-3 bg-gray-900 w-full text-white rounded-xl hover:bg-[#1ed760] hover:text-black hover:placeholder-[#121212]"
                type="text"
                placeholder={currentUser.college}
                onChange={(e) => setCollegeTyped(e.target.value)}
              />
            </div>
            <div class="inputForm flex items-center justify-start">
              <label className="text-white mr-3 w-[10vh]">Image</label>
              <input
                className="p-3 bg-gray-900 w-full text-white rounded-xl hover:bg-[#1ed760] hover:text-black hover:placeholder-[#121212]"
                type="text"
                placeholder={currentUser.userImg}
                onChange={(e) => setUserImgTyped(e.target.value)}
              />
            </div>
          </div>
          <div
            className={`${
              isDataSame ? "bg-sky-600" : "bg-red-300"
            } text-white mt-3 rounded-lg p-2 w-[20vh] text-center hover:rounded-xl cursor-pointer hover:bg-[#1ed760] hover:text-black`}
          >
            <button onClick={updateUser}>Update User</button>
          </div>
        </div>
      ) : (
        <>
          <div>Please login first</div>
        </>
      )}
    </>
  );
}

export default UserDetails;
{
  /* <div>{currentUser.username}</div>
          <div>{currentUser.password}</div>
          <div>{currentUser.email}</div>
          <div>{currentUser.age}</div>
          <div>{currentUser.college}</div> */
}
