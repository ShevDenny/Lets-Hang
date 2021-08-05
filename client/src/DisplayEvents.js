function DisplayEvents({event}) {
    return (
        <div>
            <h2>Event Name: {event.name}</h2>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <button>Remove Hang</button>
        </div>
    )
}
export default DisplayEvents