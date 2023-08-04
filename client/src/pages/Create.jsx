import { useState } from "react";
import axios from "axios";

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("file", file);
    axios.post("http://localhost:3001/create",formData)
    .then(res=>{
      if(res.data === "Success"){
// 
      }
    }).catch(err=>console.log(err))
  }

  return (
    <div className="flex justify-center items-center h-full pt-5 bg-gray-100">
      <div className="bg-white shadow-md rounded-md px-8 py-6 w-96">
        <h2 className="text-2xl font-semibold mb-6">Create a Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-medium mb-2">Title</label>
            <input type="text" id="title" className="w-full border rounded-md py-2 px-3 text-gray-700" placeholder="Enter post title" value={title} onChange={(e)=>setTitle(e.target.value)} />
          </div>
          <div className="mb-6">
            <label htmlFor="content" className="block text-gray-700 text-sm font-medium mb-2">Content</label>
            <textarea id="content" rows="4" className="w-full border rounded-md py-2 px-3 text-gray-700" placeholder="Enter post content" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
          </div>
          <div className="mb-6">
            <label htmlFor="img" className="block text-yellow-600 text-sm font-semibold mb-2">Add Image</label>
            <input type="file" name="file" id="img" value={file} onChange={(e)=>setFile(e.target.value)}/>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;
