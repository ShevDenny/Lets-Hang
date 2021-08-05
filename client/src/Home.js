import DisplayVenue from './DisplayVenue'
import React, { useState, useEffect } from 'react'
import {useHistory} from "react-router-dom"

function Home({googleAPI, clientId, clientSecret, today, currentUser, setCurrentUser, fav, setFav}) {
  const [errors, setErrors] = useState(null)
  const [hotSpot, setHotSpot] = useState({
    name: "",
    address: "",
    city: "",
    type: "",
    imgUrl: ""
  })
// const history = useHistory()
// useEffect(() => {
//   const userId = localStorage.getItem('user_id')
//   fetch(`/re_auth?user_id=${userId}`).then((res) => {
//     if (res.ok) {
//       res.json().then((currentUser) => setCurrentUser(currentUser))
//     }
//   })
// },[])
 

  useEffect(() => {

    const near= 'New York,NY'
  
    const queries = ['tacos', 'sushi', 'ice cream', 'bar', 'dancing', 'restaurant', 'park', 'carousel', 'club', 'winery', 'lounge']
    const random = Math.floor(Math.random() * queries.length)
    const query = queries[random]
    console.log(query)
    
    // let today = new Date();
    // let dd = String(today.getDate()).padStart(2, '0');
    // let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // let yyyy = today.getFullYear();
    // today =  yyyy + mm + dd;
    // console.log(today)
        
    async function fetchOrder() {
      let res = await fetch(`https://api.foursquare.com/v2/venues/search?near=${near}&client_id=${clientId}&client_secret=${clientSecret}&query=${query}&limit=1&v=${today}`);
      let json = await res.json();
      console.log(json.response.venues[0].name)

      let placeSearch= json.response.venues[0].name + "New York,NY"

      let res2 = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${placeSearch}&key=${googleAPI}`);
      let json2 = await res2.json();
      
      // console.log(json2.results[0])
      // console.log(json2.results[0].opening_hours.open_now)
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
    
      // console.log(hotSpot.name)
      // const userId = localStorage.getItem("user_id")
      // fetch(`http://localhost:3000/fav_locations/${userId}?user_id=${userId}&name=${hotSpot.name}`)
      // .then(res => res.json())
      // .then(data => console.log(data))
      // setFav(false);
    }, [])
    // console.log(hotSpot)

    return (
      <div>
        <div>
          <h1>Let's Hang</h1>
          <h3>Miss being with people? Discover new venues and plan your next outing with "Let's Hang"!</h3>
        </div>
        <div>
           <DisplayVenue currentUser={currentUser} venue={hotSpot} googleAPI={googleAPI} fav={fav} setFav={setFav}/>
        </div>
      </div>
    );
  }
  
  export default Home;