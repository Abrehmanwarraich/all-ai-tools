import { useState } from "react";
import Footer from "./footer";
import "./extra.css";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";

const SubmitAiTools = () => {
  const [websiteLogo, setWebsiteLogo] = useState(null);
  const [Name, setName] = useState("");
  const [link, setlink] = useState("");
  const [date, setdate] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [supported, setsupported] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [description, setdescription] = useState("");

  const maxLength = 255;

  const handleWebsiteLogoChange = (e) => {
    const file = e.target.files[0];
    setWebsiteLogo(file);
  };

  const handleintroductionChange = (event) => {
    const value = event.target.value;
    if (value.length <= maxLength) {
      setIntroduction(value);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleDescriptionChange = (content) => {
    setdescription(content);
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = () => {
    if (tagInput.trim() !== "") {
      if (tags.length < 10) {
        setTags([...tags, tagInput.trim()]);
        setTagInput("");
      }
    }
  };
  const handleRemoveTag = (indexToRemove) => {
    setTags(tags.filter((tag, index) => index !== indexToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    console.log({
      websiteLogo,
      Name,
      image,
      link,
      date,
      supported,
      category,
      price,
      tags,
      introduction,
      description,
    });

    const formData = new FormData();
    formData.append("websiteLogo", websiteLogo);
    formData.append("name", Name);
    formData.append("link", link);
    formData.append("date", date);
    formData.append("image", image);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("supported", supported);
    formData.append("introduction", introduction);
    formData.append("description", description);
    const tagsString = JSON.stringify(tags);
    formData.append("tags", tagsString);

    try {
      await axios.post("http://localhost:3001/submit", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Your data succcessful uploaded");
      setWebsiteLogo(null);
      setName("");
      setlink("");
      setdate("");
      setImage(null);
      setCategory("");
      setPrice("");
      setsupported("");
      setTags([]);
      setIntroduction("");
      setdescription("");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error uploading your data. Please try again later.");
    }
  };

  return (
    <div className=" bg-cyan-400">
      <h1 class="text-2xl bg-gray-400 font-bold mb-6 text-center ">
        Upload Tool And Share Your Innovation with the World.
      </h1>
      <h1 className="text-3xl font-bold mb-10 text-center underline underline-offset-8">
        Submit Ai Tool
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" mx-20 border-4 rounded-3xl border-black p-10"
      >
        {/* ----------------add website logo */}
        <div className=" mb-10 ">
          <label
            htmlFor="websiteLogo"
            className="block rounded-lg  bg-gray-500 w-52 text-center font-bold mb-1"
          >
            Upload Website Logo:
          </label>
          <input
            type="file"
            className="bg-black text-white"
            onChange={handleWebsiteLogoChange}
            required
          />
        </div>
        {/* -------------------------type website name */}
        <div className="mb-10">
          <label className="block rounded-lg  bg-gray-500 w-52 text-center font-bold mb-1">
            Type Website Name:
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded px-4 py-2 w-full bg-black text-white"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {/* -------------------------type website link */}
        <div className="mb-10">
          <label
            htmlFor="name"
            className="block rounded-lg  bg-gray-500 w-52 text-center font-bold mb-1"
          >
            Type Website link:
          </label>
          <input
            type="text"
            id="link"
            className="border border-gray-300 rounded px-4 py-2 w-full bg-black text-white"
            value={link}
            onChange={(e) => setlink(e.target.value)}
            required
          />
        </div>
        {/* -------------------------add date */}
        <div className="mb-10">
          <label
            htmlFor="date"
            className="block rounded-lg  bg-gray-500 w-52 text-center font-bold mb-1"
          >
            Add Uploading Date:
          </label>
          <input
            type="date"
            id="date"
            className="border bg-black border-gray-300 rounded px-4 py-2 w-full  text-white"
            value={date}
            onChange={(e) => setdate(e.target.value)}
            required
          />
        </div>
        {/* ---------------------upload image */}
        <div className="mb-10">
          <label
            htmlFor="image"
            className="block rounded-lg  bg-gray-500 w-32 text-center font-bold mb-1"
          >
            Upload Image:
          </label>
          <input
            type="file"
            id="image"
            className="bg-black text-white"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        {/* --------------------------add category */}
        <div className="mb-10">
          <label
            htmlFor="category"
            className="block rounded-lg  bg-gray-500 w-32 text-center font-bold mb-1"
          >
            Add Category:
          </label>
          <select
            id="category"
            className="border border-gray-300 rounded px-4 py-2 w-full bg-black text-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="disable selector">Select Category</option>
            <option value="a">aaaaaaa</option>
            <option value="b">bbbbbbbbbb</option>
          </select>
        </div>
        {/* --------------add price */}
        <div className="mb-10">
          <label
            htmlFor="name"
            className="block rounded-lg  bg-gray-500 w-32 text-center font-bold mb-1"
          >
            Type Price:
          </label>
          <input
            type="text"
            id="link"
            className="border border-gray-300 rounded px-4 py-2 w-full bg-black text-white"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        {/* --------------add supported  */}
        <div className="mb-10">
          <label
            htmlFor="supported"
            className="block rounded-lg  bg-gray-500 w-32 text-center font-bold mb-1"
          >
            Add supported:
          </label>
          <select
            id="supported"
            className="border border-gray-300 rounded px-4 py-2 w-full bg-black text-white"
            value={supported}
            onChange={(e) => setsupported(e.target.value)}
            required
          >
             <option value="disabled selected">Select Feature</option>
            <option value="Chrome">Chrome</option>
            <option value="Android">Android</option>
            <option value="IOS">IOS</option>
            <option value="GPT">GPT</option>
          </select>
        </div>
        {/* ----------------add tags */}
        <div className="mb-10">
          <span className="flex item center justify-between">
            {" "}
            <label
              htmlFor="introduction"
              className="block rounded-lg  bg-gray-500 w-32 text-center font-bold mb-1"
            >
              Add Tags:
            </label>
            <p className=" text-xs mt-2">
              {tags.length}/{10} Tags
            </p>
          </span>
          <div className="flex items-center">
            <input
              type="text"
              className="border border-gray-300 rounded-l px-4 py-2 flex-1 bg-black text-white"
              value={tagInput}
              onChange={handleTagInputChange}
              
            />
            <button
              type="button"
              className="bg-black text-white font-bold rounded-lg hover:outline p-2 outline-black ml-1"
              onClick={handleAddTag}
            >
              Make Tag
            </button>
          </div>
          <div className="mt-10">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-black text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"
              >
                {tag}
                <button
                  type="button"
                  className="ml-3 text-white"
                  onClick={() => handleRemoveTag(index)}
                >
                  x
                </button>
              </span>
            ))}
          </div>
        </div>
        {/* -=-------------------------introduction */}
        <div className="mb-10">
          <span className="flex item center justify-between">
            {" "}
            <label
              htmlFor="introduction"
              className="block rounded-lg  bg-gray-500 w-32 text-center font-bold mb-1"
            >
              Introduction:
            </label>
            <p className=" text-xs mt-2">
              {introduction.length}/{maxLength} characters
            </p>
          </span>
          <textarea
            id="introduction"
            className="border bg-black text-white border-gray-300 rounded px-4 py-2 w-full"
            value={introduction}
            onChange={handleintroductionChange}
            maxLength={maxLength}
            rows="4"
            required
          />
        </div>
        {/* -------------------------description */}
        <div className="mb-10 ">
          <label
            htmlFor="description"
            className="block rounded-lg  bg-gray-500 w-32 text-center font-bold mb-1"
          >
            Description:
          </label>
          <Editor
            apiKey="oxja26fp9aj1li6ihkja5sv5lcokmubxekm4xzcjnyw803t5"
            textareaName="editorname"
            onEditorChange={handleDescriptionChange}
            init={{              
              height: 350,
              menubar: false,
              content_style: "body { background-color: black; color: white !important; }",
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar: `undo redo | formatselect | bold italic backcolor |
                       alignleft aligncenter alignright alignjustify |
                       bullist numlist outdent indent | removeformat | help`,
              content_css: "editorStyles", // Path to your custom theme CSS file
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 hover:outline outline-black rounded"
        >
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default SubmitAiTools;
