import { useState, redirect } from "react";
import { useNavigate } from "react-router";

const SearchBar = () => {

    const [search, setSearch] = useState("")
    const navigate = useNavigate();


    const handleKeyPress = (event) =>{
        if (event.keyCode === 13 || event.which === 13) {
            console.log('entered:'+search)
            navigate("/searchResult/"+search, {replace:true})
    }
}
    
    const change = event => {
        setSearch(event.target.value)
        
    }
    console.log(search)
    return(
        <div className="search-bar">
      
            
        <input type="text" id="fname" name="fname" 
        placeholder="Search" value={search}
        onChange={change} onKeyDown={handleKeyPress}
        />
        <button onClick={()=>navigate("/searchResult/"+search, {replace:true})}>Search</button>


        </div>
    )
}

export default SearchBar;