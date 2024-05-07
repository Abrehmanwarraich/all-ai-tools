import Footer from "./footer";
import { CiBookmark } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";


const Saved = () => {
  return (
    <div className=" h-full bg-cyan-400">
        <h1 className="flex justify-center text-2xl bg-gray-400 mb-16 item-center font-bold items-center">Bookmark your top AI tools for quick access and enhanced productivity</h1>
        <h1 className="flex justify-start text-4xl mb-16 ml-24 font-bold items-center underline underline-offset-8"><CiBookmark/>My Saved Ai Tools:</h1>
        <div className="flex justify-center items-center my-28"><CiBookmarkPlus className="p-0 cursor-pointer text-gray-700 text-9xl hover:text-black" /></div>
        {/* place here home box  */}
        <Footer/>
    </div>
  )
}

export default Saved