import {useState} from 'react'
import { useHistory } from "react-router-dom"

function MyHangsForm({ venue }){
    const [errors, setErrors] = useState(null)
    const [formData, setFormData] = useState({
        event: "",
        date: "",
        time: ""
    })
    const [locationId, setLocationId] = useState("")
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        console.log(e)
        async function fetchLocation(){
            const new_venue = {
                ...formData,
                name: venue.name,
                address: venue.address,
                city: venue.city,
                category: venue.category,
                img_url: venue.imgUrl
            }
            console.log(new_venue)
            const userId = localStorage.getItem("user_id")
            const res = await fetch(`http://localhost:3000/events?user_id=${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(new_venue)
            })
            if (res.ok) {
                const data = await res.json()
                history.push('/my_hangs')
                console.log(data)
            } else {
                const error = await res.json()
                setErrors(error.message)
                console.log(error)
            }
        }
        fetchLocation()
    }

    function handleChange(e) {
        const key = e.target.name
        const val = e.target.value
        const newData = {
            ...formData, [key]: val
        }
        console.log(newData)
        setFormData(newData)
    }
   

   return (
        <div className="hangs" id="myForm">
            <form onSubmit={handleSubmit}>
                <input type="text" name="event" placeholder="Event Name" value={formData.event} onChange={handleChange}/>
                <input type="text" name="date" placeholder="MM/DD/YYYY" value={formData.date} onChange={handleChange}/>
                <input type="text" name="time" placeholder="Time" value={formData.time} onChange={handleChange}/>
                <input id="submit" type="submit" value="Lets Hang!" />
            </form>
        </div>
    )
}


 

export default MyHangsForm;