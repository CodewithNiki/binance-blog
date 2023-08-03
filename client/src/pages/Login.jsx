import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3001/login", {email, password})
    .then(res=> {
      if(res.data === "Success"){
        navigate("/home")
      }else{
        navigate("/register")
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-md p-8">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input type="email" id="email" className="w-full border rounded-md py-2 px-3 text-gray-700" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <input type="password" id="password" className="w-full border rounded-md py-2 px-3 text-gray-700" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
