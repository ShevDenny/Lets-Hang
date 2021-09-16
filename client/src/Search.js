import DisplayVenue from "./DisplayVenue";
import { useState } from 'react'

function Search({clientId, clientSecret, today, setFav, currentUser}) {
  const [display, setDisplay] = useState(false)

  const [query, setQuery] = useState("")
  const [location, setLocation] = useState("default")
  const [venues, setVenues] = useState([{
    name: "",
    address: "",
    city: "",
    category: "",
    imgUrl: ""
  },
  {
    name: "",
    address: "",
    city: "",
    category: "",
    imgUrl: ""
  },
  {
    name: "",
    address: "",
    city: "",
    category: "",
    imgUrl: ""
  },
  {
    name: "",
    address: "",
    city: "",
    category: "",
    imgUrl: ""
  },
  {
    name: "",
    address: "",
    city: "",
    category: "",
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

    async function searchVenue() {
      let res = await fetch(`https://api.foursquare.com/v2/venues/search?near=${location}&client_id=${clientId}&client_secret=${clientSecret}&query=${query}&limit=5&v=${today}`);
      let json = await res.json();

      const ids = json.response.venues.map(index => index.id)

      const results = ids.map(id => {
        return fetch(`https://api.foursquare.com/v2/venues/${id}?&client_id=${clientId}&client_secret=${clientSecret}&v=${today}`)
        .then(res => res.json())
        .then (data => {
      
          let useName, useImg

          
          if (typeof data.response.venue.name !== 'undefined' && data.response.venue.hasOwnProperty("name")) {
            useName = data.response.venue.name
          } else {
            useName = "Don't know"
          }

          
          if (typeof data.response.venue.photos.groups.items !== 'undefined' && data.response.venue.photos.groups.hasOwnProperty("items")) {
            useImg = `${data.response.venue.photos.groups[0].items[0].prefix}200x400${data.response.venue.photos.groups[0].items[0].suffix}`
          } else {
            useImg = `${data.response.venue.photos.groups[0].items[0].prefix}200x400${data.response.venue.photos.groups[0].items[0].suffix}`
          }


          return {
            name: useName,
            address: data.response.venue.location.address,
            city: data.response.venue.location.city,
            category: "",
            imgUrl: useImg
          }
        })
      })
      
      Promise.all(results).then(data => {
        setFav(false)
        setVenues(data)
      })
    }
    
    searchVenue()
    console.log("click")
    setDisplay(true)  
    
  }

    const displayVenues = venues.map(venue => {
      console.log(venue)
      return <DisplayVenue currentUser={currentUser} venue={venue} />
    })

  return (
    
    <div className="fav">
      <h2>Find Your Next Fav Spot</h2>
      <div className="search" >
        <form onSubmit={(e) => {
          e.preventDefault()
          handleSearch()
        }}>
          <input type="text" placeholder="Search" onChange={handleChange} value={query}></input>
          <select name="location" onChange={handleLocation} value={location}>
            <option value="default" disabled>Pick a Location</option>          
            <option value="Brooklyn, NY">Brooklyn</option>
            <option value="Jersey City, NJ">Jersey City</option>
            <option value="Queens, NY">Queens</option>
            <option value="Long Island, NY">Long Island</option>
            <option value="Bronx, NY">The Bronx</option>
            <option value="Manhattan, NY">Manhattan</option>
          </select>
          <input type="submit" type="submit"></input>
        </form>
      </div>
      <div className="spotContainer">
        {display ? <> {displayVenues}</> : null}
      </div>
    </div>
      
  )
    }
  
  
  export default Search;