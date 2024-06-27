import { BsBookmarkPlus } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";
import { GoLinkExternal } from "react-icons/go";
import { BsBrowserChrome } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import { AiFillAndroid } from "react-icons/ai";
import { FaApple } from "react-icons/fa6";
import { SiOpenai } from "react-icons/si";
import Footer from "./footer";
import Searchbar from "./searchbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./extra.css";

const Home = () => {
  const [uploadedData, setUploadedData] = useState([]);
  const [btnfilters, setbtnfilters] = useState({
    searchQuery: "",
    category: "All",
    feature: "All",
  });

  // Fetch data from reviwtools
  const fetchUploadedData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/fetchfinaltools");
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

  // Data transfer to savetools from finaltools
  const postTosaveTools = async (dataItem) => {
    try {
      await axios.post("http://localhost:3001/savetools", dataItem);
      updateBookmarkCount(dataItem.final_id);
      alert("Your data successfully saved");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  // bookmark updated in finaltools table--------

  const updateBookmarkCount = async (id) => {
    try {
      await axios.put(
        `http://localhost:3001/bookmark_count_to_finaltools/${id}`
      );
    } catch (error) {
      console.error("Error updating bookmark count:", error);
    }
  };

  // Get popular tools based on most saved
  // const getPopularTools = () => {
  //   return uploadedData.sort((a, b) => b.saves - a.saves).slice(0, 10); // Adjust the slice value as needed
  // };

  // Update btnfilters
  const handleFilterChange = (filterName, value) => {
    setbtnfilters((currentstate) => ({
      ...currentstate,
      [filterName]: value, // helps in managing state updates for objects with multiple properties, such as filter criteria in a list
    }));
  };

  // Filtered data based on btnfilters
  const filteredData = uploadedData.filter((dataItem) => {
    const matchesSearchQuery = dataItem.tool_name
      .toLowerCase()
      .includes(btnfilters.searchQuery.toLowerCase());
    const matchesCategory =
      btnfilters.category === "All" ||
      dataItem.tool_category === btnfilters.category;
    const matchesFeature =
      btnfilters.feature === "All" ||
      convertTags(dataItem.tags).includes(btnfilters.feature);

    return matchesSearchQuery && matchesCategory && matchesFeature;
  });

  // Group tools by month
  const groupByMonth = (data) => {
    const groupedData = {};

    data.forEach((item) => {
      const date = new Date(item.upload_date);
      const monthYear = date.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });

      if (!groupedData[monthYear]) {
        groupedData[monthYear] = [];
      }
      groupedData[monthYear].push(item);
    });

    return groupedData;
  };

  const groupedData = groupByMonth(
    btnfilters.category === "Popular" ? getPopularTools() : filteredData
  );

  return (
    <div className="h-full bg-cyan-400">
      {/* Heading 1 */}
      <div className="text-5xl text-center pt-20 font-serif font-bold text-shadow-lg">
        Worldwide All AI Tools Are Here
      </div>
      {/* Heading 2 */}
      <div className="text-1xl text-center pt-10 font-serif font-bold">
        Search Your Ideal AI Tools Here
      </div>
      {/* Search Bar */}
      <Searchbar
        searchQuery={btnfilters.searchQuery}
        setSearchQuery={(value) => handleFilterChange("searchQuery", value)}
      />
      {/* Heading 3 */}
      <div className="flex justify-center mt-10 items-center">
        <p className="bg-gray-400 w-80 h-10 text-center py-1 font-serif font-bold text-2xl rounded-lg">
          AI Tools Directory
        </p>
      </div>
      {/* Option buttons and btnfilters */}
      <div className="flex justify-between mx-20 mt-4">
        <div>
          <button
            className="px-4 py-2 bg-black text-white rounded-full hover:outline outline-black mr-4"
            onClick={() => handleFilterChange("category", "All")}
          >
            All
          </button>
          <button
            className="px-4 py-2 bg-black text-white rounded-full hover:outline outline-black mr-4"
            onClick={() => handleFilterChange("category", "Popular")}
          >
            Popular
          </button>
          <select
            className="px-4 py-2 bg-black text-white rounded-full hover:outline outline-black mr-4"
            onChange={(e) => handleFilterChange("feature", e.target.value)}
          >
            <option value="disabled selected">Select Feature</option>
            <option value="All">All</option>
            <option value="Chrome">Chrome</option>
            <option value="Android">Android</option>
            <option value="IOS">IOS</option>
            <option value="GPT">GPT</option>
          </select>
        </div>
      </div>
      {/* List of tools grouped by month */}
      <div className="flex flex-col">
        {Object.keys(groupedData).map((monthYear) => (
          <div key={monthYear}>
            <h1 className="text-3xl text-center">{monthYear}</h1>
            <div className="flex justify-evenly flex-wrap mx-4 my-4">
              {groupedData[monthYear].map((dataItem, index) => (
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
                        <p className="text-white text-xl">
                          {dataItem.tool_name}
                        </p>
                        <div className="text-white text-xs">
                          <h1 className="mt-1">{dataItem.tool_category}</h1>
                          <p className="">price details</p>
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
                    <span title="Save" className="flex item-center">
                      <span className="text-white text-sm py-0 h-2">
                        {dataItem.bookmark_count}
                      </span>
                      <BsBookmarkPlus
                        className="h-5 w-5 text-white hover:text-cyan-400 cursor-pointer"
                        onClick={() => {
                          postTosaveTools(dataItem);
                        }}
                      />
                    </span>
                    <span title="Comments">
                      <GoComment className="h-5 w-5 text-white hover:text-cyan-400 cursor-pointer" />
                    </span>
                    <span title="Share">
                    <a  href = "dataItem.tool_link" target = "_blank" rel="noopener noreferrer">
                      <IoShareSocialOutline
                        className="h-5 w-5 text-white hover:text-cyan-400 cursor-pointer"
                      /></a>
                    </span>
                    <span title="Visit">
                      <GoLinkExternal className="h-5 w-5 text-white hover:text-cyan-400 cursor-pointer" />
                    </span>
                    <span>
                      {dataItem.tool_supported === "Android" ? (
                        <span title="Android">
                          {" "}
                          <AiFillAndroid className="h-5 w-5  text-cyan-400 cursor-pointer" />
                        </span>
                      ) : dataItem.tool_supported === "IOS" ? (
                        <span title="IOS">
                          <FaApple className="h-5 w-5  text-cyan-400 cursor-pointer" />
                        </span>
                      ) : dataItem.tool_supported === "Chrome" ? (
                        <span title="Chrome">
                          {" "}
                          <BsBrowserChrome className="h-5 w-5  text-cyan-400 cursor-pointer" />
                        </span>
                      ) : (
                        <span title="GPT">
                          {" "}
                          <SiOpenai className="h-5 w-5  text-cyan-400 cursor-pointer" />
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
