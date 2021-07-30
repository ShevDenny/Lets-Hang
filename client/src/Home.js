import DisplayVenue from './DisplayVenue'
import React, { useState, useEffect } from 'react'

function Home() {
  const [hotSpot, setHotSpot] = useState({
    name: "",
    address: "",
    city: "",
    type: "",
    imgUrl: ""
  })

  const googleAPI = INSERT API
  const clientId = INSERT API
  const clientSecret = INSERT API
  
  
  useEffect(() => {

    const near= 'New York,NY'
  
    const queries = ['tacos', 'sushi', 'ice cream', 'bars', 'dancing', 'restaurant', 'park', 'carousel']
    const random = Math.floor(Math.random() * queries.length)
    const query = queries[random]
    console.log(query)
    
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today =  yyyy + mm + dd;
    console.log(today)
        
    async function fetchOrder() {
      let res = await fetch(`https://api.foursquare.com/v2/venues/search?near=${near}&client_id=${clientId}&client_secret=${clientSecret}&query=${query}&limit=1&v=${today}`);
      let json = await res.json();
      console.log(json.response.venues[0].name)

      let placeSearch= json.response.venues[0].name + "New York,NY"

      let res2 = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${placeSearch}&key=${googleAPI}`);
      let json2 = await res2.json();
      
      console.log(json2.results[0].opening_hours.open_now)
      setHotSpot({
        name: json.response.venues[0].name,
        address: json.response.venues[0].location.address,
        city: json.response.venues[0].location.city,
        type: json.response.venues[0].categories[0].name,
        imgUrl: json2.results[0].photos[0].photo_reference,
        hours: json2.results[0].opening_hours.open_now

      })  
      }
      fetchOrder();
    }, [])
    console.log(hotSpot)

    return (
      <div>
        <div>
          <h1>Let's Hang</h1>
          <h3>Miss being with people? Discover new venues and plan your next outing with "Let's Hang"!</h3>
        </div>
        <div>
           <DisplayVenue hotSpot={hotSpot} googleAPI={googleAPI} />
        </div>
      </div>
    );
  }
  
  export default Home;