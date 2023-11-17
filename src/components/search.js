import { useState, redirect } from "react";
import { useNavigate } from "react-router";

// search bar for all pages
const SearchBar = () => {

    const [search, setSearch] = useState("")
    const navigate = useNavigate();

    // handles the search submit button if the user presses enter instead of clicking search
    const handleKeyPress = (event) =>{
        if (event.keyCode === 13 || event.which === 13) {
            console.log('entered:'+search)
            navigate("/searchResult/"+search, {replace:true})
    }
}
    // handles the event chage and sets the search variable to the change 
    const change = event => {
        setSearch(event.target.value)
        
    }
    console.log(search)
    // returns the search bar and input html section
    return(
        <div className="search-bar">
      
            
        <input type="text" id="fname" name="fname" 
        placeholder="Search" value={search}
        onChange={change} onKeyDown={handleKeyPress}
        />
        {/* use navigate to get to the search result plus search term. This renders the searchresult page and sets replace:true.
        The replace options property is a REPLACE navigation action. It's a redirect, replacing the current entry in the history 
        stack versus PUSHing a new entry onto the top like a regular navigation.
        */}
        <button onClick={()=>navigate("/searchResult/"+search, {replace:true})}>Search</button>


        </div>
    )
}

export default SearchBar;