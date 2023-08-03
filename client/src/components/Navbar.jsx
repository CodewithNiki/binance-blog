import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className=" flex bg-black text-yellow-400 p-6 justify-between">
        <p className=" font-semibold text-lg">Blog App</p>
        <div className=" flex gap-8">
            <Link to="/home" className=" hover:opacity-95 hover:scale-90">All Posts</Link>
            <Link to="/create" className="hover:opacity-95 hover:scale-90">Create Post</Link>
        </div>
            <button className=" text-gray-700 bg-yellow-400 py-1 px-3 rounded-xl">signout</button>
    </div>
  )
}

export default Navbar