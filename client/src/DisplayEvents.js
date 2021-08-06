import styled from "styled-components"

const DisplayEventStyle = styled.div`
#venueCard {
    border: 2px solid white;
    background-color: #1A1B54;
    border: 2px solid #0B13F9;
    width: 35em;
    height: 30em;
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
}
h1 {
    font-size: 40px;
}
h3 {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 20px;
}
button {
    font-family: 'Source Sans Pro', sans-serif;
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

function DisplayEvents({event, setMyHangs}) {


    function handleRemove(){
        console.log(event.id)
        const userId = localStorage.getItem("user_id")
        
        fetch(`http://localhost:3000/user_events/${event.id}?user_id=${userId}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(console.log)
        // .then(hangs => setMyHangs(hangs))
        
    }

    return (
        <DisplayEventStyle>
            <div>
                <h2>Event Name: {event.name}</h2>
                <p>Date: {event.date}</p>
                <p>Time: {event.time}</p>
                <button onClick={handleRemove}>Remove Hang</button>
            </div>
        </DisplayEventStyle>
    )
}
export default DisplayEvents