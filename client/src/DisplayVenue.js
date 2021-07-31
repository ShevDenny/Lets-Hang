function DisplayVenue({venue, googleAPI}) {
   

    return(
        <div>
            <h1>{venue.name}</h1>
            <h3>Type of hang: {venue.type}</h3>
            <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${venue.imgUrl}&key=${googleAPI}`} />
            <h3>Address: {venue.address}, {venue.city}</h3>
            <h3>Open now: {venue.hours ? "Open" : "Closed" } </h3>            

        </div>
    )
}

export default DisplayVenue