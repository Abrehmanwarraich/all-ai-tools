import { NavLink } from "react-router-dom";
import "./scrollbar.css";
import { GoLinkExternal } from "react-icons/go";
import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TiTickOutline } from "react-icons/ti";
import { FaChevronDown } from "react-icons/fa";


const Reviewtools = () => {
    const [showDiv, setShowDiv] = useState(false);

    
    const toggleDiv = () => {
      setShowDiv(!showDiv);
    };
  return (
    <div className="bg-cyan-400 h-full">
      <h1 className="font-bold text-center py-6 text-1xl">
        if you want submit ai tools then press this down button.
      </h1>
      <h1 class="text-2xl bg-black hover:outline outline-black text-white font-bold mx-auto rounded-lg text-center w-44">
        <NavLink to={"submitaitools"}>SubmitAiTools</NavLink>
      </h1>

      {/* ---------------------------------------category list box  */}
      <div className="flex justify-evenly flex-wrap mt-4 mb-14 ">
        <div className=" bg-cyan-400 w-full h-lvh mx-52 border-black my-4">
          <h1 className="flex justify-center mb-0.5 items-center rounded-lg text-xl bg-gray-400 text-black static top-0 border-4 mt-0 border-black font-bold ">
            Reviews of tools before upload.
          </h1>
          <ol className="list-decimal text-white overflow-y-scroll custom-scrollbar ">
            <li className="flex justify-between text-white border px-10 hover:text-cyan-400 hover:cursor-pointer border-cyan-400 bg-black pl-4 h-10 items-center rounded-lg">
              <span className=" overflow-hidden">App name app name.</span>

              <span title="Visit">
                <GoLinkExternal className="h-5 w-5 text-white hover:text-cyan-400 cursor-pointer" />
              </span>
              <span title="Delete">
                <RiDeleteBin5Line className="h-5 w-5 text-white hover:text-cyan-400 cursor-pointer" />
              </span>
              <span title="Upload">
              <TiTickOutline  className="h-5 w-5 text-white hover:text-cyan-400 cursor-pointer" />
              </span>
              <span title="Up/Down">
              <FaChevronDown className="h-5 w-5 text-white hover:text-cyan-400 cursor-pointer"  onClick={toggleDiv}/>
              </span>
            </li>
            {showDiv && (
            <div className="flex h-96 bg-black text-white">
              <div className="flex flex-col items-center justify-center w-1/4">
                <img src="../../images/3.png" alt="App Logo" className="h-10 mb-2" />
                <h1 className="text-1xl mb-1">App Name</h1>
                <p className="text-1xl mb-1">App Category</p>
                <p className="text-1xl mb-1">link</p> 
                <ul className="flex flex-wrap mb-2 ">
                  <li className="px-1 mr-1 bg-gray-400 text-white rounded-lg">
                    Tag 1
                  </li>
                
                </ul>
                {/* Second Image */}
                <img
                  src="../../images/3.png"
                  alt="Second pic"
                  className="h-52  mb-0 w-52"
                />
              </div>

              {/* Right Side */}
              <div className=" overflow-y-scroll custom-scrollbar w-3/4">
                {/* Introduction */}
                <h2 className="text-lg mb-1">Introduction</h2>
                <p className="text-xs ">
                  This is the introduction paragraph. You can describe your app
                  here.
                </p>
                {/* Description */}
                <h2 className="text-jg mb-1">Description</h2>
                <p className="text-xs ">
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                  This is the description paragraph. You can provide detailed
                  information about your app here.
                </p>
              </div>
            </div>)}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Reviewtools;
