import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { GoLinkExternal } from "react-icons/go";
// import { AiFillAndroid } from "react-icons/ai";
// import { FaApple } from "react-icons/fa6";
// import { SiChromatic } from "react-icons/si";
import { BsBrowserChrome } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import Footer from "./footer";
import Searchbar from "./searchbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" h-full bg-cyan-400">
      {/* ------------------------------ heading 1 */}
      <div className="text-5xl text-center pt-20 font-serif font-bold text-shadow-lg">
        Worldwide All AI Tools Are Here
      </div>
      {/* ------------------------------ heading 2 */}
      <div className="text-1xl text-center pt-10 font-serif font-bold">
        Search Your Ideal AI Tools Here
      </div>
      <Searchbar />
      {/* ------------------------------ heading 3 */}
      <div className="flex justify-center mt-10 items-center ">
        <p className="bg-gray-400 w-80 h-10 text-center py-1 font-serif font-bold text-2xl rounded-lg">
          Ai Tools Directory{" "}
        </p>
      </div>
      {/* --------------------------------------------------------option button for lists */}
      <div className="flex justify-between mx-20 mt-4">
        <div>
          <button className="px-4 py-2 bg-black text-white rounded-full hover:outline outline-black mr-4">
            All
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-full hover:outline outline-black mr-4">
            Popular
          </button>
        </div>
        <div>
          <select className="px-4 py-2 bg-black text-white rounded-full hover:outline outline-black mr-4">
            <option value="disabled selected">Select Feature</option>
            <option value="aaaaaa">aaaaa</option>
            <option value="aaaaaaaaa">aaaaa</option>
          </select>

          <select className="px-4 py-2 bg-black text-white rounded-full mr-4 hover:outline outline-black">
            <option value="disabled selected">Select price</option>
            <option value="aaaaaa">aaaaa</option>
            <option value="aaaaaaaaa">aaaaa</option>
          </select>
        </div>
      </div>
      {/* ------------------------------------lists box */}
      <div className="flex flex-col">
        <h1 className=" text-3xl text-center">---Month---</h1>
        <div className="flex justify-evenly flex-wrap mx-4 my-4">
          <div className=" w-80 h-28 bg-black rounded-lg flex flex-col my-2 hover:outline ">
          <Link to="toolprofile">
            <div className="flex items-center ">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="../../images/3.png"
                  alt="App logo"
                  className=" w-14 h-14 rounded-lg border ml-1 "
                />
              </div>
              <div className="ml-4 mt-0 text-xs">
                <p className="text-white text-xl">App Name</p>
                <div className="text-white text-xs">
                  <h1 className=" mt-1  ">App Category</h1>

                  <p className="">price details</p>
                </div>
              </div>
            </div>
            <div className="mt-1 flex  bg-gray-700 ">
              <h1 className="bg-gray-700 hover:bg-gray-900 text-white text-sm rounded ml-2 ">
                tags.
              </h1>
            </div>
            </Link>
            <div className="mt-0.5 mb-0.5 flex justify-between mx-6">
              <span title="Save">
                <CiBookmark className="h-5 w-5 text-white hover:text-cyan-400 cursor-pointer" />
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

              {/* <span title="Android supported">
              <AiFillAndroid className="h-5 w-5 text-cyan-400  cursor-pointer" />
            </span>
            <span title="ios supported">
              <FaApple className="h-5 w-5 text-cyan-400  cursor-pointer" />
            </span> 
            <span title="GPT supported">
              <SiChromatic className="h-5 w-5 text-cyan-400  cursor-pointer" />
            </span> */}
              <span title="Browser supported">
                <BsBrowserChrome className="h-5 w-5 text-cyan-400 cursor-pointer" />
              </span>
            </div>
          </div>
          
          <div className=" w-80 h-28 bg-black rounded-lg flex flex-col my-2 hover:outline ">
            <h>aaaaaaaaaaaaaaaaaa</h>
          </div>
          <div className=" w-80 h-28 bg-black rounded-lg flex flex-col my-2 hover:outline ">
            <h>aaaaaaaaaaaaaaaaaa</h>
          </div>
          <div className=" w-80 h-28 bg-black rounded-lg flex flex-col my-2 hover:outline ">
            <h>aaaaaaaaaaaaaaaaaa</h>
          </div>
          <div className=" w-80 h-28 bg-black rounded-lg flex flex-col my-2 hover:outline ">
            <h>aaaaaaaaaaaaaaaaaa</h>
          </div>
          <div className=" w-80 h-28 bg-black rounded-lg flex flex-col my-2 hover:outline ">
            <h>aaaaaaaaaaaaaaaaaa</h>
          </div>
          <div className=" w-80 h-28 bg-black rounded-lg flex flex-col my-2 hover:outline ">
            <h>aaaaaaaaaaaaaaaaaa</h>
          </div>
          <div className=" w-80 h-28 bg-black rounded-lg flex flex-col my-2 hover:outline ">
            <h>aaaaaaaaaaaaaaaaaa</h>
          </div>
          <div className=" w-80 h-28 bg-black rounded-lg flex flex-col my-2 hover:outline ">
            <h>aaaaaaaaaaaaaaaaaa</h>
          </div>
          <div className=" w-80 h-28 bg-black rounded-lg flex flex-col my-2 hover:outline ">
            <h>aaaaaaaaaaaaaaaaaa</h>
          </div>
          <div className=" w-80 h-28 bg-black rounded-lg flex flex-col my-2 hover:outline ">
            <h>aaaaaaaaaaaaaaaaaa</h>
          </div>
          <div className=" w-80 h-28 bg-black rounded-lg flex flex-col my-2 hover:outline ">
            <h>aaaaaaaaaaaaaaaaaa</h>
          </div>
          <div className=" w-80 h-28 bg-black rounded-lg flex flex-col my-2 hover:outline ">
            <h>aaaaaaaaaaaaaaaaaa</h>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
