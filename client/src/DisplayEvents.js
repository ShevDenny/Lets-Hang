import styled from "styled-components"

const DisplayEventStyle = styled.div`
    .venueCard {
        border: 2px solid white;
        background-color: #1A1B54;
        border: 2px solid #0B13F9;
        width: 20em;
        height: 20em;
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

    h3 {
        font-size: 30px;
    }
    h4 {
        font-size: 40px;
        font-family: 'Satisfy', cursive;
    }

    p {
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

function DisplayEvents({event, setMyHangs}) {


    function handleRemove(){
        console.log(event.id)
        const userId = localStorage.getItem("user_id")
        
        fetch(`http://localhost:3000/user_events/${event.id}?user_id=${userId}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(console.log)
        // .then(hangs => setMyHangs(hangs))
    }

    return (
        <DisplayEventStyle>
            <div className="venueCard">
                <h3>Event: <i>{event.name}</i></h3>
                <p>Date: <i>{event.date}</i></p>
                <p>Time: <i>{event.time}</i></p>
                <button onClick={handleRemove}>Remove Hang</button>
            </div>
        </DisplayEventStyle>
    )
}
export default DisplayEvents