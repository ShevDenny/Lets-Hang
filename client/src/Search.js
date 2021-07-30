import DisplayVenue from "./DisplayVenue";
import { useState } from 'react'

function Search({googleAPI, clientId, clientSecret, today}) {
  const [display, setDisplay] = useState(false)
  // const [searchTerm, setSearchTerm] = useState({
  //   query: "",
  //   location: ""
  // })
  const [query, setQuery] = useState("")
  const [location, setLocation] = useState("")
  const [venues, setVenues] = useState([{
    name: "",
    address: "",
    city: "",
    type: "",
    imgUrl: ""
  },
  {
    name: "",
    address: "",
    city: "",
    type: "",
    imgUrl: ""
  },
  {
    name: "",
    address: "",
    city: "",
    type: "",
    imgUrl: ""
  },
  {
    name: "",
    address: "",
    city: "",
    type: "",
    imgUrl: ""
  },
  {
    name: "",
    address: "",
    city: "",
    type: "",
    imgUrl: ""
  }]
  )

  function handleChange(e) {
    setQuery(e.target.value)
  }

  function handleLocation(e) {
    setLocation(e.target.value)
  }

  function handleSearch() {
    console.log(location)
    console.log(query)
    async function searchVenue() {
      let res = await fetch(`https://api.foursquare.com/v2/venues/search?near=${location}&client_id=${clientId}&client_secret=${clientSecret}&query=${query}&limit=1&v=${today}`);
      let json = await res.json();
      // console.log(json.response)
    }
    searchVenue()
    console.log("click")
  }

  return (
    <div>
      <h2>It's a search</h2>
      
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSearch()
      }}>
        <input type="text" placeholder="Search" onChange={handleChange} value={query}></input>
        <select name="location" onChange={handleLocation} value={location}>
          {/* no idea why selected/disabled option isn't working... */}
          <option selected disabled>Location</option>
          <option value="Manhattan, NY">Manhattan</option>
          <option value="Brooklyn, NY">Brooklyn</option>
          <option value="Jersey City, NJ">Jersey City</option>
          <option value="Queens, NY">Queens</option>
          <option value="Long Island, NY">Long Island</option>
          <option value="Bronx, NY">Bronx</option>
        </select>
        <input type="submit"></input>
      </form>
      <div className="resultsBox">
        <div className="resultVenues">
          {display ? <DisplayVenue /> : null}
        </div>
      </div>
      
    </div>
  )
    }
  
  
  export default Search;