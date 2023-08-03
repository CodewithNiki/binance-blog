import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register"
import Home from "./pages/Home";
import CreatePostPage from "./pages/Create";
import Draft from "./pages/Draft";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/create" element={<CreatePostPage/>}/>
      <Route path="/draft" element={<Draft/>}/>
    </Routes>
  )
}

export default App