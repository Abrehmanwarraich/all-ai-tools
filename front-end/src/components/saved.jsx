import Footer from "./footer";
import { CiBookmark } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { GoLinkExternal } from "react-icons/go";
// import { AiFillAndroid } from "react-icons/ai";
// import { FaApple } from "react-icons/fa6";
// import { SiChromatic } from "react-icons/si";
import { BsBrowserChrome } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import { CiBookmarkMinus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Saved = () => {
  const [uploadedData, setUploadedData] = useState([]);

  // ----------------fetch data from savetools=======================================
  const fetchUploadedData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/fetchsavetools");
      setUploadedData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUploadedData();
  }, []);

  const convertTags = (tags) => {
    return JSON.parse(tags.split(","));
  };

  // -----------------------------------delet from reviwtools table--------------------------
  const removefromsavetools = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/savetools/${id}`);
      const updatedData1 = uploadedData.filter((item) => item.save_id !== id);
      setUploadedData(updatedData1);
      alert("Your data successfully unsaved.");
    } catch (error) {
      console.error("Error deleting review tool:", error);
    }
  };

  return (
    <div className=" h-full bg-cyan-400">
      <h1 className="flex justify-center text-2xl bg-gray-400 mb-16 item-center font-bold items-center">
        Bookmark your top AI tools for quick access and enhanced productivity
      </h1>
      <h1 className="flex justify-start text-4xl mb-16 ml-24 font-bold items-center underline underline-offset-8">
        <CiBookmark />
        My Saved Ai Tools:
      </h1>
      {uploadedData !== null && uploadedData.length === 0 ?   (
        <Link to="/">
          <div className="flex justify-center items-center my-28">
            <CiBookmarkPlus className="p-0 cursor-pointer text-gray-700 text-9xl hover:text-black" />
          </div>
        </Link>
      ) : (
      
        <div className="flex flex-col">
          <div className="flex justify-evenly flex-wrap mx-4 my-4">
            {uploadedData.map((dataItem, index) => (
              <div
                key={index}
                className="w-80 h-28 bg-black rounded-lg flex flex-col my-2 hover:outline"
              >
                <Link to="toolprofile">
                  <div className="flex items-center">
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={`http://localhost:3001/${dataItem.tool_logo}`}
                        alt="App logo"
                        className="w-14 h-14 rounded-lg border ml-1"
                      />
                    </div>
                    <div className="ml-4 mt-0 text-xs">
                      <p className="text-white text-xl">{dataItem.tool_name}</p>
                      <div className="text-white text-xs">
                        <h1 className="mt-1">{dataItem.tool_category}</h1>
                        <p>price details</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1 flex bg-gray-400 overflow-hidden w-auto">
                    <ul className="flex bg-gray-400 text-white text-xs w-auto rounded mx-2 animate-scroll">
                      {convertTags(dataItem.tags).map((tag, tagIndex) => (
                        <li
                          key={tagIndex}
                          className="flex items-center justify-center mr-1.5 bg-gray-300 px-1 pb-0.5 text-black rounded-lg"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
                <div className="mt-1 mb-0.5 flex justify-between mx-6">
                  <span title="Save">
                    <CiBookmarkMinus
                      className="h-5 w-5 text-white hover:text-cyan-400 cursor-pointer"
                      onClick={() =>
                        dataItem.save_id &&
                        removefromsavetools(dataItem.save_id)
                      }
                    />
                  </span>
                  <span title="Comments">
                    <GoComment className="h-5 w-5 text-white hover:text-cyan-400 cursor-pointer" />
                  </span>
                  <span title="Share">
                    <IoShareSocialOutline className="h-5 w-5 text-white hover:text-cyan-400 cursor-pointer" />
                  </span>
                  <span title="Visit">
                    <GoLinkExternal className="h-5 w-5 text-white hover:text-cyan-400 cursor-pointer" />
                  </span>
                  <span title="Browser supported">
                    <BsBrowserChrome className="h-5 w-5 text-cyan-400 cursor-pointer" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>)}
    

      <Footer />
    </div>
  );
};

export default Saved;
