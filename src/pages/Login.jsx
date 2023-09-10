import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const { currentUser, setCurrentUser, banner, setBanner } = useUserContext();

  const [usernameTyped, setUsernameTyped] = useState("");
  const [passwordTyped, setPasswordTyped] = useState("");

  const authFunction = async () => {
    const userdata = await axios.get("http://localhost:8000/api/users");
    const users = userdata.data;
    for (let i = 0; i < users.size; i++) {
      if (
        users.allUsers[i].username === usernameTyped &&
        users.allUsers[i].password === passwordTyped
      ) {
        setCurrentUser(users.allUsers[i]);
        setBanner("false");
        navigate("/");
      }
    }
  };

  return (
    <div className="w-[100%] rounded-xl h-[100vh] mr-1 mt-[0.2vh] mb-[0.2vh] bg-[#212121] text-white flex justify-center items-center ">
      <div className="loginSystem -mt-[2rem] h-[25rem] w-[30rem] flex flex-col  justify-between items-center rounded-[1rem] shadow shadow-white bg-[#2e2e2e] p-2">
        <div className="text-center text-2xl text-[#1ed760]">
          Spotify Clone Login System
        </div>
        <div className="form-area flex flex-col w-[25rem] h-[10rem] flex flex-col justify-between w-full">
          <div className="username flex justify-center items-center p-2">
            <input
              className="w-[90%] hover:placeholder-[#212121] text-xl bg-[#212121] text-white p-2 hover:rounded-xl duration-500 hover:bg-[#1ed760]"
              type="text"
              placeholder="username..."
              onChange={(e) => setUsernameTyped(e.target.value)}
            />
          </div>
          <div className="password  flex justify-center items-center p-2">
            <input
              className="w-[90%] hover:placeholder-[#212121] text-xl bg-[#212121] text-white p-2 hover:rounded-xl duration-500 hover:bg-[#1ed760]"
              type="password"
              placeholder="password..."
              onChange={(e) => setPasswordTyped(e.target.value)}
            />
          </div>
        </div>
        <div className="buttons mb-4 align-center text-center flex-row items-center rounded-xl">
          <div className="bg-[#181818] mb-2 bg-[#181818] text-gray-300 p-3 w-[7rem] rounded-2xl hover:bg-[#1ed760] hover:text-black">
            <button onClick={authFunction}>Log in</button>
          </div>
          <Link to="/signup">
            <button className=" bg-[#181818] text-gray-300 p-3 w-[7rem] rounded-2xl hover:bg-[#1ed760] hover:text-black">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
