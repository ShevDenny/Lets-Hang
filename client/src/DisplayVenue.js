import { useState, useEffect } from 'react'
import MyHangsForm from "./MyHangsForm"

function DisplayVenue({venue, googleAPI}) {
    const [displayForm, setDisplayForm] = useState(false)

    function handleClick(e) {
        setDisplayForm(!displayForm)
        console.log(e.target.value)
    }

    useEffect(() => {
        fetch('localhost:3000/locations')
    })


   
   

    return(
        <div>
            <h1>{venue.name}</h1>
            <h3>Type of hang: {venue.type}</h3>
            <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${venue.imgUrl}&key=${googleAPI}`} />
            <h3>Address: {venue.address}, {venue.city}</h3>
            <h3>Open now: {venue.hours ? "Open" : "Closed" } </h3>
            <button value={venue.name}>Fave Spot</button>
            <button value={venue.name} onClick={handleClick}>Plan a hang</button>
            {displayForm ? <MyHangsForm/> : null}           

        </div>
    )
}

export default DisplayVenue