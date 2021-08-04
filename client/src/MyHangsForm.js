import {useState} from 'react'

function MyHangsForm(){
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: ""
    })

 
    function handleSubmit(e){
        e.preventDefault()
        console.log(e)
        // async function createEvent(){
        //     let res = await fetch('/events')
        // }

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