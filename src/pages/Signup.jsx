import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [country, setCountry] = useState("");
  const [college, setCollege] = useState("");
  const [userImg, setUserImg] = useState("");
  const [likedSongs, setLikedSongs] = useState([]);
  const [playLists, setPlayLists] = useState([]);

  const [sameOrNot, setSameOrNot] = useState("notsame");

  const navigate = useNavigate();

  const createUser = async () => {
    const newUserObj = {
      username: username,
      password: password,
      email: email,
      age: age,
      country: country,
      college: college,
      likedSongs: likedSongs,
      playLists: playLists,
      userImg: userImg,
    };

    const allUsers = await axios.get("http://localhost:8000/api/users");
    const userData = allUsers.data.allUsers;
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].username === newUserObj.username) {
        setSameOrNot("sameUsername");
      }
      if (userData[i].email === newUserObj.email) {
        setSameOrNot(`sameUsernamesameEmail`);
      }
    }

    if (sameOrNot === "notsame") {
      await axios
        .post("http://localhost:8000/api/users", newUserObj)
        .then(() => {
          alert(`User Has Been Created !`);
          navigate("/");
        });
    } else if (sameOrNot === "sameUsername") {
      alert(`SAME USERNAME . PLEASE TRY SOMETHIN DIFFERENT`);
    } else if (sameOrNot === "sameUsernamesameEmail") {
      alert(`SAME USERNAME AND SAME EMAIL. PLEASE TRY SOMETHING DIFFERENT`);
    }
  };

  return (
    <div className="w-[100%] h-full bg-[#212121] text-white flex justify-center items-center ">
      <div className="loginSystem -mt-[2rem] h-[70vh] w-[30rem] flex flex-col  justify-between items-center rounded-[1rem] shadow shadow-white bg-[#2e2e2e] p-2">
        <div className="text-center text-2xl text-[#1ed760]">
          Spotify Clone Login System
        </div>
        <div className="form-area flex flex-col w-[25rem] h-[50vh] overflow-hidden flex flex-col justify-between w-full">
          <div className="username flex justify-center items-center p-2 h-[5vh]">
            <input
              className="w-[90%] hover:text-[#212121] text-xl bg-[#212121] text-white p-2 hover:rounded-xl duration-500 hover:bg-[#1ed760]"
              type="text"
              placeholder="username..."
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="password  flex justify-center items-center p-2 h-[5vh]">
            <input
              className="w-[90%] hover:text-[#212121] text-xl bg-[#212121] text-white p-2 hover:rounded-xl duration-500 hover:bg-[#1ed760]"
              type="text"
              placeholder="password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="password  flex justify-center items-center p-2 h-[5vh]">
            <input
              className="w-[90%] hover:text-[#212121] text-xl bg-[#212121] text-white p-2 hover:rounded-xl duration-500 hover:bg-[#1ed760]"
              type="text"
              placeholder="email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password  flex justify-center items-center p-2 h-[5vh]">
            <input
              className="w-[90%] hover:text-[#212121] text-xl bg-[#212121] text-white p-2 hover:rounded-xl duration-500 hover:bg-[#1ed760]"
              type="number"
              placeholder="age..."
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="password  flex justify-center items-center p-2 h-[5vh]">
            <input
              className="w-[90%] hover:text-[#212121] text-xl bg-[#212121] text-white p-2 hover:rounded-xl duration-500 hover:bg-[#1ed760]"
              type="text"
              placeholder="country..."
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="password  flex justify-center items-center p-2 h-[5vh]">
            <input
              className="w-[90%] hover:text-[#212121] text-xl bg-[#212121] text-white p-2 hover:rounded-xl duration-500 hover:bg-[#1ed760]"
              type="text"
              placeholder="college..."
              onChange={(e) => setCollege(e.target.value)}
            />
          </div>
          <div className="password  flex justify-center items-center p-2 h-[5vh]">
            <input
              className="w-[90%] hover:text-[#212121] text-xl bg-[#212121] text-white p-2 hover:rounded-xl duration-500 hover:bg-[#1ed760]"
              type="text"
              placeholder="userImg..."
              onChange={(e) => setUserImg(e.target.value)}
            />
          </div>
        </div>
        <div className="buttons mb-4 align-center text-center flex justify-center items-center rounded-xl">
          <div className="bg-[#181818] bg-[#181818] text-gray-300 p-3 w-[7rem] rounded-2xl hover:bg-[#1ed760] hover:text-black">
            <button onClick={createUser}>Signup</button>
          </div>
          <Link to="/">
            <button className=" bg-[#181818] text-gray-300 p-3 w-[7rem] rounded-2xl hover:bg-[#1ed760] hover:text-black">
              HomePage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
