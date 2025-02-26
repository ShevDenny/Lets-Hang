import { useState } from 'react'
import MyHangsForm from "./MyHangsForm"
import styled from "styled-components"

const DisplayVenueStyle = styled.div`
    .venueCard {
        border: 2px solid white;
        background-color: #1A1B54;
        border: 2px solid #0B13F9;
        width: 35em;
        height: 35em;
        display: grid;
        text-align: center;
        padding: 1rem;
        margin: 5px;
    }
    .venueContainer {
        display: flex;
        justify-content: space-around;
    }
    .venueLeft {
        width: 40%;
        text-align: center;
    }
    .venueRight {
        width: 40%;
    }
    img {
        float: left;
        width: 250px;
        height: 200px;
        object-fit: cover;
        border: 2px solid #0B13F9;
    }
    h1 {
        font-size: 40px;
    }
    h3 {
        font-family: 'Roboto Slab', serif;
        font-size: 20px;
    }
    button {
        font-family: 'Roboto Slab', serif;
        background-color: black;
        color: white;
        border: 2px solid #0B13F9;
        padding: 15px;
        margin: 5px;
        text-align: center;
        text-decoration: none;
        font-size: 20px;
        transition-duration: 0.4s;
        cursor: pointer;
        float: left;
        display: block;
        border-radius: 15px;
        width: 13em;

        &:hover {
            background-color: white;
            color: black;
        }

        &:disabled {
            background-color: grey;
        }
    }
`

function DisplayVenue({venue, googleAPI, fav, setFav, currentUser}) {
    const [displayForm, setDisplayForm] = useState(false)
    const [errors, setErrors] = useState(null)
    const [favd, setFavd] = useState(false)


    let locationId = ""

    function handleClick(e) {
        setDisplayForm(!displayForm)
        console.log(e.target.value)
    }

    

    function handleFav(e) {
        console.log(e.target.value)

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

        }
        fetchLocation()
        
    }

    

    return(
        <DisplayVenueStyle>
            <div className="venueCard">
                <h1>{venue.name}</h1>
                <div id="venueContainer">
                    <div id="venueLeft"><img src={venue.imgUrl}/></div>
                    <div id="venueRight">
                        <h3>Type of hang: <i>{venue.category}</i></h3>
                        <h3>Address: <br></br><i>{venue.address}<br></br> {venue.city}</i></h3>
                        {typeof venue.hours !== 'undefined' ? <h3>Open now: {venue.hours ? "OPEN" : "closed" } </h3>: null}
                        
                    </div>     
                </div>
                {Object.keys(currentUser).length === 0
                ?
                <>
                </>
                : 
                <div>
                {!fav ? <button value={venue.name} onClick={handleFav}>Fave Spot</button> : null}
                <button value={venue.name} onClick={handleClick}>Plan a hang</button>
                {displayForm ? <MyHangsForm venue={venue}/> : null}
                {/* <button disabled>Fav-ed</button> */}
                </div> }
            </div>
        </DisplayVenueStyle>
    )
}

export default DisplayVenue