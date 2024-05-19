import { NavLink } from "react-router-dom";
import "./scrollbar.css";
import { GoLinkExternal } from "react-icons/go";
import { useState, useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TiTickOutline } from "react-icons/ti";
import { FaChevronDown } from "react-icons/fa";
import axios from "axios";

const Reviewtools = () => {
  const [showDiv, setShowDiv] = useState(null);
  const [uploadedData, setUploadedData] = useState([]);
  const [tagArray, setTagArray] = useState([]);

  const toggleDiv = (index, tags) => {
    if (showDiv === index) {
      setShowDiv(null);
      setTagArray([]);
    } else {
      setShowDiv(index);
      setTagArray(JSON.parse(tags.split(",")));
    }
  };
// ----------------fetch data from reviwtools=======================================
  const fetchUploadedData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/fetchsubmit");
      setUploadedData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
// --------------------------------data transfor to finaltools from reviwtools-----------
  const postToFinalTools = async (dataItem) => {
    try {
      await axios.post("http://localhost:3001/finaltools", dataItem);
      await axios.delete(`http://localhost:3001/reviewtools/${dataItem.reviw_id}`);
      setUploadedData(uploadedData.filter((item) => item.reviw_id !== dataItem.reviw_id));
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
// -----------------------------------delet from reviwtools table--------------------------
  const deleteReviewTool = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/reviewtools/${id}`);
      const updatedData = uploadedData.filter((item) => item.reviw_id !== id);
      setUploadedData(updatedData);
    } catch (error) {
      console.error("Error deleting review tool:", error);
    }
  };

  useEffect(() => {
    fetchUploadedData();
  }, []);

  return (
    <div className="bg-cyan-400 h-full">
      <h1 className="font-bold text-center py-6 text-1xl">
        If you want to submit AI tools then press the button below.
      </h1>
      <h1 className="text-2xl bg-black hover:outline outline-black text-white font-bold mx-auto rounded-lg text-center w-44">
        <NavLink to={"submitaitools"}>SubmitAiTools</NavLink>
      </h1>

      <div className="flex justify-evenly flex-wrap mt-4 mb-14">
        <div className="bg-cyan-400 w-full h-lvh mx-52 border-black my-4">
          <h1 className="flex justify-center mb-0.5 items-center rounded-lg text-xl bg-gray-400 text-black static top-0 border-4 mt-0 border-black font-bold">
            Reviews of tools before upload.
          </h1>
          <ol className="list-decimal text-white overflow-y-scroll custom-scrollbar">
            {uploadedData.map((dataItem, index) => (
              <li
                key={index}
                className="flex flex-col text-white border px-10 hover:text-cyan-400 hover:cursor-pointer border-cyan-400 bg-black pl-4 h-auto items-start rounded-lg mb-2"
              >
                <div className="flex justify-between w-full items-center h-10">
                  <span className="overflow-hidden">{dataItem.tool_name}</span>
                  <span className="text-xs">{dataItem.id}</span>
                  <span title="Visit">
                    <GoLinkExternal
                      className="h-5 w-5 text-white hover:text-cyan-400 cursor-pointer"
                      onClick={() => window.open(dataItem.tool_link, "_blank")}
                    />
                  </span>
                  <span title="Delete">
                    <RiDeleteBin5Line
                      className="h-5 w-5 text-white hover:text-cyan-400 cursor-pointer"
                      onClick={() => deleteReviewTool(dataItem.reviw_id)}
                    />
                  </span>
                  <span title="Upload">
                    <TiTickOutline
                      className="h-5 w-5 text-white hover:text-cyan-400 cursor-pointer"
                      onClick={() => postToFinalTools(dataItem)}
                    />
                  </span>
                  <span title="Up/Down">
                    <FaChevronDown
                      className="h-5 w-5 text-white hover:text-cyan-400 cursor-pointer"
                      onClick={() => toggleDiv(index, dataItem.tags)}
                    />
                  </span>
                </div>
                {showDiv === index && (
                  <div className="flex h-96 bg-black text-white mt-2 w-full">
                    <div className="flex flex-col items-center justify-center w-1/4">
                      <img
                        src={`http://localhost:3001/${dataItem.tool_logo}`}
                        alt="App Logo"
                        className="h-10 mb-2"
                      />
                      <h1 className="text-1xl mb-1">{dataItem.tool_name}</h1>
                      <p className="text-1xl mb-1">{dataItem.tool_category}</p>
                      <p className="text-1xl mb-1">
                        <a
                          href={dataItem.tool_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 underline"
                        >
                          {dataItem.tool_link}
                        </a>
                      </p>
                      <ul className="flex flex-wrap mb-2">
                        {tagArray.map((value, tagIndex) => (
                          <li
                            key={tagIndex}
                            className="px-1 mr-1 bg-gray-400 text-white rounded-lg"
                          >
                            {value}
                          </li>
                        ))}
                      </ul>
                      <img
                        src={`http://localhost:3001/${dataItem.main_image}`}
                        alt="Second pic"
                        className="h-52 mb-0 w-52"
                      />
                    </div>

                    <div className="overflow-y-scroll custom-scrollbar w-3/4">
                      <h2 className="text-lg mb-1">Introduction</h2>
                      <p className="text-xs">{dataItem.introduction}</p>
                      <h2 className="text-lg mb-1">Description</h2>
                      <p className="text-xs">{dataItem.description}</p>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Reviewtools;
