import { useState } from "react";

const SearchBar = () => {

    const [search, setSearch] = useState("")
    const enter = () => {
        alert(search)
    }
    
    const change = event => {
        setSearch(event.target.value)
        
    }
    console.log(search)
    return(
        <div className="search-bar">
      
            
        <input type="text" id="fname" name="fname" 
        placeholder="Search" value={search}
        onChange={change}/>
        <button onClick={enter}>Search</button>
        

        </div>
    )
}

export default SearchBar;