function SearchBar({

  search,

  setSearch

}) {

  return (

    <div className="search-section">

      <input

        type="text"

        placeholder="Search by Name or Email..."

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

      />

    </div>

  );

}

export default SearchBar;