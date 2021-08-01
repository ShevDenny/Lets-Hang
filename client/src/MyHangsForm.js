import {useState} from 'react'

function MyHangsForm({ venue }){
    const [errors, setErrors] = useState(null)
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: ""
    })
    const [locationId, setLocationId] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        console.log(e)
        // async function fetchLocation(){
        //     const new_venue = {
        //         name: venue.name,
        //         address: venue.address,
        //         city: venue.city,
        //         category: venue.category,
        //         img_url: venue.imgUrl
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
        //         console.log(data)
        //         setLocationId(data.id)
        //         console.log(locationId)
        //     } else {
        //         const error = await res.json()
        //         setErrors(error.message)
        //         console.log(error)
        //     }
        // }
        // async function postEvent(){
        //     const newForm = {
        //         ...formData,
        //         location_id: locationId
        //     }
        //     console.log(newForm)
        //     const res = await fetch('http://localhost:3000/events', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newForm)
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
        // // async function main() {
        // //     await Promise.all(
        // //         fetchLocation()
        // //     )
        // //     postEvent()
        // // }
        // // main()
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
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Event Name" value={formData.name} onChange={handleChange}/>
                <input type="text" name="date" placeholder="MM/DD/YYYY" value={formData.date} onChange={handleChange}/>
                <input type="text" name="time" placeholder="Time" value={formData.time} onChange={handleChange}/>
                <input type="submit" value="Lets Hang!" />
            </form>
        </div>
    )
}


 

export default MyHangsForm;