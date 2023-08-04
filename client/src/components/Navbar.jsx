import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";
import axios from "axios";

const Navbar = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate()

  const handleLogout =() =>{
    axios.get("http://localhost:3001/logout")
    .then(res=>{
      if(res.data === "Success"){
        window.location.href ="/";
      }
    }
    )
    .catch(err=>console.log(err))
  }
  return (
    <div className=" flex bg-black text-yellow-400 p-6 justify-between">
      <p className=" font-semibold text-lg">Blog App</p>
      <div className=" flex gap-8">
        <Link to="/home" className=" hover:opacity-95 hover:scale-90">
          All Posts
        </Link>
        <Link to="/create" className="hover:opacity-95 hover:scale-90">
          Create Post
        </Link>
      </div>
      {user?.username ? (
        <button 
        onClick={handleLogout}
        className=" text-gray-700 bg-yellow-400 py-1 px-3 rounded-xl">
          signout
        </button>
      ) : (
        <div>
          <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
