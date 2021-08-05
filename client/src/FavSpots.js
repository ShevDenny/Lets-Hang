import { useState, useEffect } from 'react'
import DisplayVenue from './DisplayVenue'

function FavSpots() {

  const [favSpots, setFavSpots] = useState([])
  const [errors, setErrors] = useState(null)
  // let favData = []
  //let displayVenues = []

  useEffect(() => {
    const userId = localStorage.getItem("user_id")
    fetch(`http://localhost:3000/fav_locations?user_id=${userId}`)
    .then(res => res.json())
    .then(data => {
      if (data.errors){
        setErrors(data)
      } else {
        console.log(data)

        // this is returning an array of objects
        let newState = data.map(fav => {
          return {
          id: fav.id,
          location_id: fav.location.id,
          name: fav.location.name,
          address: fav.location.address,
          city: fav.location.city,
          category: fav.location.category,
          imgUrl: fav.location.img_url
          }
        })

        setFavSpots(newState)


        console.log(favSpots)
        // displayVenues = favSpots.map(venue => {
        //   console.log(venue)
        //   return <DisplayVenue venue={venue} />
        // })
      }
    })
  }, [])

  // async function fetchLocation(){
  //   const userId = localStorage.getItem("user_id")
  //   const res = await fetch(`http://localhost:3000/fav_locations?user_id=${userId}`)
  //   if (res.ok) {
  //       const data = await res.json()
  //       console.log(data)
  //       setFavSpots(data)
  //   } else {
  //       const error = await res.json()
  //       setErrors(error.message)
  //       console.log(error)
  //   }
  // }
  // // fetchLocation()

  // why is this .map refusing to map over an array of objects?
    const displayVenues = favSpots.map(venue => {
    console.log(venue)
    return <DisplayVenue venue={venue} />
  })

    return (
      <div>
        <h2>It's favspots</h2>
        {displayVenues}
      </div>
    );
  }
  
  export default FavSpots;