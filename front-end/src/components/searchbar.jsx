

const Searchbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div>
        {/* ------------------------------ search bar and button */}
      <div className="flex justify-center mt-2 ">
        <input
          className="w-3/6 px-4 py-2 h-14 bg-black text-white rounded-l-full rounded-r-full focus:border-b-2 focus:outline-none "
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
      </div>
    </div>
  )
}

export default Searchbar