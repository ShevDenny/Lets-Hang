import DisplayVenue from "./DisplayVenue";
import { useState } from 'react'

function Search({googleAPI, clientId, clientSecret, today}) {
  const [display, setDisplay] = useState(false)
  // const [searchTerm, setSearchTerm] = useState({
  //   query: "",
  //   location: ""
  // })
  const [query, setQuery] = useState("")
  const [location, setLocation] = useState("default")
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
      let res = await fetch(`https://api.foursquare.com/v2/venues/search?near=${location}&client_id=${clientId}&client_secret=${clientSecret}&query=${query}&limit=5&v=${today}`);
      let json = await res.json();
      console.log(json.response.venues)
      console.log(json.response.venues[0].id)

      const ids = json.response.venues.map(index => index.id)
      console.log(ids)

      let type0, type1, type2, type3, type4
      if (typeof json.response.venues[0].categories !== 'undefined' && json.response.venues[0].categories.length !== 0) {
        type0 = json.response.venues[0].categories[0].name
      }
      if (typeof json.response.venues[1].categories !== 'undefined' && json.response.venues[1].categories.length !== 0) {
        type1 = json.response.venues[1].categories[0].name
      }
      if (typeof json.response.venues[2].categories !== 'undefined' && json.response.venues[2].categories.length !== 0) {
        type2 = json.response.venues[2].categories[0].name
      }
      if (typeof json.response.venues[3].categories !== 'undefined' && json.response.venues[3].categories.length !== 0) {
        type3 = json.response.venues[3].categories[0].name
      }
      if (typeof json.response.venues[4].categories !== 'undefined' && json.response.venues[4].categories.length !== 0) {
        type4 = json.response.venues[4].categories[0].name
      }


      
      const results = ids.map(id => {
        return fetch(`https://api.foursquare.com/v2/venues/${id}?&client_id=${clientId}&client_secret=${clientSecret}&v=${today}`)
        .then(res => res.json())
        .then (data => {
          console.log(data)
          let useName, useAddress, useCity, useImg

          // if (typeof data.response.venue.name !== 'undefined' && data.response.venues.hasOwnProperty("name")) {
          //   useName = data.response.venue.name
          // } else {
          //   useName = "Don't know"
          // }
          // return {
          //   name: useName,
          //   address: data.response.venue.location.address,
          //   city: data.response.venue.location.city,
          //   imgUrl: `${data.response.venue.photos.groups[0].items[0].prefix}200x500${data.response.venue.photos.groups[0].items[0].suffix}`
          // }
        })
      })
      
      // Promise.all(results).then(data => {
      //   //pu
      //   setVenues(data)
      // })

      // console.log(results)
      


      // fetch(`https://api.foursquare.com/v2/venues/${ids[0]}?&client_id=${clientId}&client_secret=${clientSecret}&v=${today}`)
      //   .then(res => res.json())
      //   .then (data => console.log(data))
        // .then(data => setVenues(
        //   [{
        //     name: data.response.venues[0].name,
        //     address: data.response.venues[0].location.address,
        //     city: data.response.venues[0].location.city,
        //     category: type0,
        //     imgUrl: ""
        //   },
        //   {
        //     name: data.response.venues[1].name,
        //     address: data.response.venues[1].location.address,
        //     city: data.response.venues[1].location.city,
        //     category: type1,
        //     imgUrl: ""
        //   },
        //   {
        //     name: data.response.venues[2].name,
        //     address: data.response.venues[2].location.address,
        //     city: data.response.venues[2].location.city,
        //     category: type2,
        //     imgUrl: ""
        //   },
        //   {
        //     name: data.response.venues[3].name,
        //     address: data.response.venues[3].location.address,
        //     city: data.response.venues[3].location.city,
        //     category: type3,
        //     imgUrl: ""
        //   },
        //   {
        //     name: data.response.venues[4].name,
        //     address: data.response.venues[4].location.address,
        //     city: data.response.venues[4].location.city,
        //     category: type4,
        //     imgUrl: ""
        //   } ]
        // ))
     
      // console.log(results)
      // let prefix = json2.response.venues.photos.groups.items.prefix
      // let suffix = json2.response.venues.photos.groups.items.suffix

      // return image = `${prefix}200x500${suffix}`

      // const imgResults = json.response.venues.map(index => {
      //   let placeSearch= json.response.venues[index].name + " " + location;
      //   let res2 = fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${placeSearch}&key=${googleAPI}`);
      //   let json2 = res2.json();
      //   return json2.results[0].photos[0].photo_reference
      // })

      // console.log(imgResults)

      // let placeSearch= json.response.venues[0].name + " " + location
      // console.log(placeSearch)

      // let res2 = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${placeSearch}&key=${googleAPI}`);
      // let json2 = await res2.json();

      // let type0, type1, type2, type3, type4
      // if (typeof json.response.venues[0].categories !== 'undefined' && json.response.venues[0].categories.length !== 0) {
      //   type0 = json.response.venues[0].categories[0].name
      // }
      // if (typeof json.response.venues[1].categories !== 'undefined' && json.response.venues[1].categories.length !== 0) {
      //   type1 = json.response.venues[1].categories[0].name
      // }
      // if (typeof json.response.venues[2].categories !== 'undefined' && json.response.venues[2].categories.length !== 0) {
      //   type2 = json.response.venues[2].categories[0].name
      // }
      // if (typeof json.response.venues[3].categories !== 'undefined' && json.response.venues[3].categories.length !== 0) {
      //   type3 = json.response.venues[3].categories[0].name
      // }
      // if (typeof json.response.venues[4].categories !== 'undefined' && json.response.venues[4].categories.length !== 0) {
      //   type4 = json.response.venues[4].categories[0].name
      // }
      // setVenues(
      //   [{
      //     name: json.response.venues[0].name,
      //     address: json.response.venues[0].location.address,
      //     city: json.response.venues[0].location.city,
      //     category: type0,
      //     imgUrl: ""
      //   },
      //   {
      //     name: json.response.venues[1].name,
      //     address: json.response.venues[1].location.address,
      //     city: json.response.venues[1].location.city,
      //     category: type1,
      //     imgUrl: ""
      //   },
      //   {
      //     name: json.response.venues[2].name,
      //     address: json.response.venues[2].location.address,
      //     city: json.response.venues[2].location.city,
      //     category: type2,
      //     imgUrl: ""
      //   },
      //   {
      //     name: json.response.venues[3].name,
      //     address: json.response.venues[3].location.address,
      //     city: json.response.venues[3].location.city,
      //     category: type3,
      //     imgUrl: ""
      //   },
      //   {
      //     name: json.response.venues[4].name,
      //     address: json.response.venues[4].location.address,
      //     city: json.response.venues[4].location.city,
      //     category: type4,
      //     imgUrl: ""
      //   } ]
      // )
    }
    
    searchVenue()
    console.log("click")
    setDisplay(true)  
    
  }

    console.log(venues)

    const displayVenues = venues.map(venue => {
      console.log(venue)
      return <DisplayVenue venue={venue} />
    })

  return (
    <div>
      <h2>It's a search</h2>
      
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSearch()
      }}>
        <input type="text" placeholder="Search" onChange={handleChange} value={query}></input>
        <select name="location" onChange={handleLocation} value={location}>
          <option value="default" disabled>Location</option>          
          <option value="Brooklyn, NY">Brooklyn</option>
          <option value="Jersey City, NJ">Jersey City</option>
          <option value="Queens, NY">Queens</option>
          <option value="Long Island, NY">Long Island</option>
          <option value="Bronx, NY">The Bronx</option>
          <option value="Manhattan, NY">Manhattan</option>
        </select>
        <input type="submit"></input>
      </form>
      <div className="resultsBox">
        <div className="resultVenues">
          {display ? <div id="displayBox">Hello! {displayVenues}</div> : null}
        </div>
      </div>
      
    </div>
  )
    }
  
  
  export default Search;