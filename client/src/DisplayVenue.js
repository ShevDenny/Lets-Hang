function DisplayVenue({hotSpot, googleAPI}) {
   

    return(
        <div>
            <h1>{hotSpot.name}</h1>
            <h3>Type of hang: {hotSpot.type}</h3>
            <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${hotSpot.imgUrl}&key=${googleAPI}`} />
            <h3>Address: {hotSpot.address}, {hotSpot.city}</h3>
            <h3>Open now: {hotSpot.hours ? "Open" : "Closed" } </h3>            

        </div>
    )
}

export default DisplayVenue