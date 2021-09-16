import { useState, useEffect } from 'react'
import DisplayVenue from './DisplayVenue'

function FavSpots({fav, setFav, currentUser}) {

  const [favSpots, setFavSpots] = useState([])
  const [errors, setErrors] = useState(null)


  useEffect(() => {
    const userId = localStorage.getItem("user_id")
    fetch(`http://localhost:3000/fav_locations?user_id=${userId}`)
    .then(res => res.json())
    .then(data => {
      if (data.errors){
        setErrors(data)
      } else {

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
      }
    })
  }, [])

    const displayVenues = favSpots.map(venue => {
    console.log(venue)
    setFav(true)
    return <DisplayVenue currentUser={currentUser} fav={fav} venue={venue} />
  })

    return (
      <div className="fav">
        <h2>{currentUser.name}'s FavSpots</h2>
        <div className="spotContainer">
          {displayVenues}
        </div>
      </div>
    );
  }
  
  export default FavSpots;