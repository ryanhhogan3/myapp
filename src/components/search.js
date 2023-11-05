import { useState, redirect } from "react";
import { useNavigate } from "react-router";

const SearchBar = () => {

    const [search, setSearch] = useState("")
    const navigate = useNavigate();

    // const enter = () => {
    //     useNavigate("/searchResult",{state:{id:1}})
    // }
    
    const change = event => {
        setSearch(event.target.value)
        
    }
    console.log(search)
    return(
        <div className="search-bar">
      
            
        <input type="text" id="fname" name="fname" 
        placeholder="Search" value={search}
        onChange={change}
        />
        <button onClick={()=>navigate("/searchResult")}>Search</button>

        </div>
    )
}

export default SearchBar;