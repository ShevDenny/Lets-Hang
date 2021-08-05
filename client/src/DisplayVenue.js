import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import MyHangsForm from "./MyHangsForm"

function DisplayVenue({venue, googleAPI, fav, setFav, currentUser}) {
    const [displayForm, setDisplayForm] = useState(false)
    const [errors, setErrors] = useState(null)

    // const history = useHistory()
    let locationId = ""

    function handleClick(e) {
        setDisplayForm(!displayForm)
        console.log(e.target.value)
    }
  
    // async function fetchLocation(){
    //     const new_venue = {
    //         name: venue.name,
    //         address: venue.address,
    //         city: venue.city,
    //         category: venue.category,
    //         img_url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${venue.imgUrl}&key=${googleAPI}`
    //     }
    //     console.log(new_venue)
    //     const res = await fetch('http://localhost:3000/locations', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(new_venue)
    //     })
    //     if (res.ok) {
    //         const data = await res.json()
    //         // console.log(data)
    //     } else {
    //         const error = await res.json()
    //         setErrors(error.message)
    //         // console.log(error)
    //     }
        
    // }
    // fetchLocation()
    function handleFav(e) {
        console.log(e.target.value)
        // const new_venue = {
        //     name: venue.name,
        //     address: venue.address,
        //     city: venue.city,
        //     category: venue.category,
        //     img_url: venue.imgUrl,
        //     // img_url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${venue.imgUrl}&key=${googleAPI}`
        // }
        // console.log("HOPE", new_venue)

        async function fetchLocation(){
            const new_venue = {
                name: venue.name,
                address: venue.address,
                city: venue.city,
                category: venue.category,
                img_url: venue.imgUrl
            // img_url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${venue.imgUrl}&key=${googleAPI}`
            }
            console.log(new_venue)
            const userId = localStorage.getItem("user_id")
            const res = await fetch(`http://localhost:3000/fav_locations?user_id=${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(new_venue)
            })
            if (res.ok) {
                const data = await res.json()
                console.log(data)
                setFav(true)
            } else {
                const error = await res.json()
                setErrors(error.message)
                console.log(error.errors[0])
                console.log(fav)
                if (error.errors[0] === "User has already been taken") {
                    setFav(true)
                    console.log(fav)
                }
                
            }

            // *********************************************************
            // all attempts at posting to location & fav location
            // function someFetchOne(){
            //     fetch("url")
            //     .then(res => res.json())
            //     .then(data => someFetchTwo(data))
            // }

            // function someFetchTwo(){
            //     fetch("url")
            //     .then(res => res.json())
            //     .then(data => )
            // }

            // async function fetchFav(){
            //     const new_fav = {
            //         location_id: locationId,
            //         user_id: 1,
            //         note: "wow"
            //     }
            //     console.log(new_fav)
            //     const res = await fetch('http://localhost:3000/fav_locations', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(new_fav)
            //     })
            //     if (res.ok) {
            //         const data = await res.json()
            //         console.log(data)
            //     } else {
            //         const error = await res.json()
            //         setErrors(error.message)
            //         console.log(error)
            //     }
                
            // }
            // fetchFav()
            // *************************************************************
        }
        fetchLocation()
        console.log(locationId)
        
        
    }

    return(
        <div>
            <h1>{venue.name}</h1>
            <h3>Type of hang: {venue.category}</h3>
            <img src={venue.imgUrl}/>
            {/* <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${venue.imgUrl}&key=${googleAPI}`} /> */}
            {/* <img src="https://fastly.4sqi.net/img/general/300x500/6036_Xv3VOJm0A8HMF8EbQWdKPXIce7LxcvXOMt4_nW5gDhU.jpg" /> */}
            <h3>Address: {venue.address}, {venue.city}</h3>
            <h3>Open now: {venue.hours ? "Open" : "Closed" } </h3>
            {Object.keys(currentUser).length === 0 ? 
            null
            :
            <>
            {!fav ? <button value={venue.name} onClick={handleFav}>Fave Spot</button> : <button disabled>Fav-ed</button>}
            <button value={venue.name} onClick={handleClick}>Plan a hang</button>
            {displayForm ? <MyHangsForm venue={venue}/> : null}
            </>      
            }
        </div>
    )
}

export default DisplayVenue