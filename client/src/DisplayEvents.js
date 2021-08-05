

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
        <div>
            <h2>Event Name: {event.name}</h2>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <button onClick={handleRemove}>Remove Hang</button>
        </div>
    )
}
export default DisplayEvents