import { useState } from "react";

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");

  const handleChange = (e) =>{
    setTitle(e.target.value);
    setContent(e.target.value);
    setFile(e.target.value);
  }

  return (
    <div className="flex justify-center items-center h-full pt-5 bg-gray-100">
      <div className="bg-white shadow-md rounded-md px-8 py-6 w-96">
        <h2 className="text-2xl font-semibold mb-6">Create a Post</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-medium mb-2">Title</label>
            <input type="text" id="title" className="w-full border rounded-md py-2 px-3 text-gray-700" placeholder="Enter post title" value={title} onChange={handleChange} />
          </div>
          <div className="mb-6">
            <label htmlFor="content" className="block text-gray-700 text-sm font-medium mb-2">Content</label>
            <textarea id="content" rows="4" className="w-full border rounded-md py-2 px-3 text-gray-700" placeholder="Enter post content" value={content} onChange={handleChange}></textarea>
          </div>
          <div className="mb-6">
            <label htmlFor="img" className="block text-yellow-600 text-sm font-semibold mb-2">Add Image</label>
            <input type="file" name="img" id="img" value={file} onChange={handleChange}/>
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
