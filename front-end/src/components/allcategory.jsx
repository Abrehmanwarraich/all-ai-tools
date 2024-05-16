import "./scrollbar.css";
import Footer from "./footer";
import Searchbar from "./searchbar";
import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { GoLinkExternal } from "react-icons/go";
// import { AiFillAndroid } from "react-icons/ai";
// import { FaApple } from "react-icons/fa6";
// import { SiChromatic } from "react-icons/si";
import { BsBrowserChrome } from "react-icons/bs";
import { GoComment } from "react-icons/go";

const Allcategory = () => {
  return (
    <div className=" h-max bg-cyan-400">
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
          Ai Tools Categories.
        </p>
      </div>
       {/* --------------------------------------------------------option button for lists */}
       <div className="flex justify-center mt-4">
        
          <select className="px-4 py-2 bg-black text-white rounded-full mr-4 hover:outline outline-black">
            <option value="disabled selected">---Select All Category---</option>
            <option value="aaaaaa">aaaaa</option>
            <option value="aaaaaaaaa">aaaaa</option>
          </select>
        
      </div>
      {/* ---------------------------------------category list box  */}
      <div className="flex justify-evenly flex-wrap mt-12 mb-14 ">
        <div className=" bg-cyan-400 w-96 h-96 border-black my-4">
          <h1 className="flex justify-center mb-0.5 items-center rounded-lg text-xl bg-gray-400 text-black static top-0 border-4 mt-0 border-black font-bold ">
            <img
              src="../../images/3.png"
              alt="Category logo"
              className=" w-6 h-6"
            />
            App Category.
          </h1>
          <ol
            className=" list-decimal text-white overflow-y-scroll custom-scrollbar max-h-80"
          >
            <li className="text-white border flex hover:text-cyan-400 hover:cursor-pointer border-cyan-400 bg-black pl-4 text-xs items-center rounded-lg">
              <img
                src="../../images/3.png"
                alt="app logo"
                className=" w-6 h-6 mr-2"
              />{" "}
              <span className=" w-40 overflow-hidden">App name app name.</span>
              <div className=" w-40 flex justify-between">
                <span title="Save">
                  <CiBookmark className="h-4 w-4 text-white hover:text-cyan-400 cursor-pointer" />
                </span>
                <span title="Comments">
                  <GoComment className="h-4 w-4 text-white hover:text-cyan-400 cursor-pointer" />
                </span>
                <span title="Share">
                  <IoShareSocialOutline className="h-4 w-4 text-white hover:text-cyan-400 cursor-pointer" />
                </span>
                <span title="Visit">
                  <GoLinkExternal className="h-4 w-4 text-white hover:text-cyan-400 cursor-pointer" />
                </span>

                {/* <span title="Android supported">
              <AiFillAndroid className="h-4 w-4 text-cyan-400  cursor-pointer" />
            </span>
            <span title="ios supported">
              <FaApple className="h-4 w-4 text-cyan-400  cursor-pointer" />
            </span> 
            <span title="GPT supported">
              <SiChromatic className="h-4 w-4 text-cyan-400  cursor-pointer" />
            </span> */}
                <span title="Browser supported">
                  <BsBrowserChrome className="h-4 w-4 text-cyan-400 cursor-pointer" />
                </span>
              </div>
            </li>
            <li className="text-white border flex hover:text-cyan-400 hover:cursor-pointer border-cyan-400 bg-black pl-4 text-sm items-center rounded-lg">
              aaa
            </li>
            <li className="text-white border flex hover:text-cyan-400 hover:cursor-pointer border-cyan-400 bg-black pl-4 text-sm items-center rounded-lg">
              aaa
            </li>
            <li className="text-white border flex hover:text-cyan-400 hover:cursor-pointer border-cyan-400 bg-black pl-4 text-sm items-center rounded-lg">
              aaa
            </li>
            <li className="text-white border flex hover:text-cyan-400 hover:cursor-pointer border-cyan-400 bg-black pl-4 text-sm items-center rounded-lg">
              aaa
            </li>
            <li className="text-white border flex hover:text-cyan-400 hover:cursor-pointer border-cyan-400 bg-black pl-4 text-sm items-center rounded-lg">
              aaa
            </li>
            <li className="text-white border flex hover:text-cyan-400 hover:cursor-pointer border-cyan-400 bg-black pl-4 text-sm items-center rounded-lg">
              aaa
            </li>
            <li className="text-white border flex hover:text-cyan-400 hover:cursor-pointer border-cyan-400 bg-black pl-4 text-sm items-center rounded-lg">
              aaa
            </li>
            <li className="text-white border flex hover:text-cyan-400 hover:cursor-pointer border-cyan-400 bg-black pl-4 text-sm items-center rounded-lg">
              aaa
            </li>
            <li className="text-white border flex hover:text-cyan-400 hover:cursor-pointer border-cyan-400 bg-black pl-4 text-sm items-center rounded-lg">
              aaa
            </li>
            <li className="text-white border flex hover:text-cyan-400 hover:cursor-pointer border-cyan-400 bg-black pl-4 text-sm items-center rounded-lg">
              aaa
            </li>
            <li className="text-white border flex hover:text-cyan-400 hover:cursor-pointer border-cyan-400 bg-black pl-4 text-sm items-center rounded-lg">
              aaa
            </li>
            <li className="text-white border flex hover:text-cyan-400 hover:cursor-pointer border-cyan-400 bg-black pl-4 text-sm items-center rounded-lg">
              aaa
            </li>
            <li className="text-white border flex hover:text-cyan-400 hover:cursor-pointer border-cyan-400 bg-black pl-4 text-sm items-center rounded-lg">
              aaa
            </li>
            <li className="text-white border flex hover:text-cyan-400 hover:cursor-pointer border-cyan-400 bg-black pl-4 text-sm items-center rounded-lg">
              aaa
            </li>
          </ol>

          <button className=" w-full rounded-lg mt-0.5 text-sm hover:border-4 border-black bg-cyan-400 border-2 border-b-4  font-bold static bottom-0">
            Show All 444
          </button>
        </div>
        <div className=" bg-black w-96 h-96 border-black my-4"></div>
        <div className=" bg-black w-96 h-96 border-black my-4"></div>
        <div className=" bg-black w-96 h-96 border-black my-4"></div>
        <div className=" bg-black w-96 h-96 border-black my-4"></div>
        <div className=" bg-black w-96 h-96 border-black my-4"></div>
        <div className=" bg-black w-96 h-96 border-black my-4"></div>
        <div className=" bg-black w-96 h-96 border-black my-4"></div>
        <div className=" bg-black w-96 h-96 border-black my-4"></div>
       
      </div>
      <Footer/>
    </div>
  );
};

export default Allcategory;
