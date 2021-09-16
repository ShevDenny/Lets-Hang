import DisplayVenue from './DisplayVenue'
import React, { useState, useEffect } from 'react'

function Home({googleAPI, clientId, clientSecret, today, currentUser, fav, setFav}) {
  const [errors, setErrors] = useState(null)
  const [hotSpot, setHotSpot] = useState({
    name: "",
    address: "",
    city: "",
    type: "",
    imgUrl: ""
  })

 

  useEffect(() => {

    const near= 'New York,NY'
  
    const queries = ['tacos', 'sushi', 'ice cream', 'bar', 'dancing', 'restaurant', 'park', 'carousel', 'club', 'winery', 'lounge']
    const random = Math.floor(Math.random() * queries.length)
    const query = queries[random]
        
    async function fetchOrder() {
      let res = await fetch(`https://api.foursquare.com/v2/venues/search?near=${near}&client_id=${clientId}&client_secret=${clientSecret}&query=${query}&limit=1&v=${today}`);
      let json = await res.json();

      let placeSearch= json.response.venues[0].name + "New York,NY"

      let res2 = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${placeSearch}&key=${googleAPI}`);
      let json2 = await res2.json();
   
      let open_hours
      if (typeof json2.results[0].opening_hours !== 'undefined' && json2.results[0].hasOwnProperty('opening_hours')) {
        open_hours = json2.results[0].opening_hours.open_now
      } else {
        open_hours = "We don't know!"
      }
      
      setHotSpot({
        name: json.response.venues[0].name,
        address: json.response.venues[0].location.address,
        city: json.response.venues[0].location.city,
        category: json.response.venues[0].categories[0].name,
        imgUrl: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${json2.results[0].photos[0].photo_reference}&key=${googleAPI}`,
        hours: open_hours
      })  
      console.log(hotSpot.name)
      
      const userId = localStorage.getItem("user_id")
      const secondFunction = async () => {
        const result = await fetchOrder()
        console.log(hotSpot.name)
        fetch(`http://localhost:3000/fav_locations/${userId}?user_id=${userId}&name=${hotSpot.name}`)
      .then(res => res.json())
      .then(data => {
        if (data.errors){
        setErrors(data)
      } else {
        setFav(true)
        console.log(data)
      }})}
      }
      fetchOrder()
    
    }, [])
  

    return (
      <div>
        <h1 id="title">Let's Hang!</h1>
          <div class="homeContainer">
            <div class="homeLeft">
              <h3 id="subtitle">Miss being around people?<br></br>Miss seeing your friends? <br></br>Miss seeing their whole faces?<br></br><br></br>Discover new venues and plan your next outing with <i>Let's Hang!</i></h3>
            </div>
            <div id="hotspot" class="homeRight">
              <div id="hotleft"><h2>HOT SPOT OF THE MO':</h2></div>
              <div id="hotleft"><DisplayVenue currentUser={currentUser} venue={hotSpot} googleAPI={googleAPI} fav={fav} setFav={setFav}/></div>
            </div>
          </div>
      </div>
    );
  }
  
  export default Home;