import { BsSearch } from "react-icons/bs";

const Searchbar = () => {
  return (
    <div>
        {/* ------------------------------ search bar and button */}
      <div className="flex justify-center mt-2 ">
        <input
          className="w-3/6 px-4 py-2 bg-black text-white rounded-l-full focus:border-b-2 focus:outline-none "
          type="text"
          placeholder="Search..."
        />
        <button
          type="button"
          className="bg-black text-white rounded-r-full h-16 flex items-center justify-center hover:border-b-2 "
        >
          <BsSearch className="text-cyan-400 text-4xl w-16 hover:text-white" />
        </button>
      </div>
    </div>
  )
}

export default Searchbar