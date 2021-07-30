import DisplayVenue from './DisplayVenue'
import React, { useState, useEffect } from 'react'

function Home() {
  const [hotSpot, setHotSpot] = useState({
    name: "",
    address: "",
    city: "",
    type: ""
  })
  
  
  useEffect(() => {
    const clientId =INSERT KEY
    const clientSecret =INSERT KEY
    const near= 'Manhattan,NY'
    // const locations=['Manhattan,NY', 'Brooklyn,NY', 'Long Island,NY', 'Queens,NY', 'Middletown,NY']
    // console.log(locations.sample)
    // const today = new Date()
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
      setHotSpot({
        name: json.response.venues[0].name,
        address: json.response.venues[0].location.address,
        city: json.response.venues[0].location.city,
        type: json.response.venues[0].categories[0].name
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
           <DisplayVenue />
        </div>
      </div>
    );
  }
  
  export default Home;