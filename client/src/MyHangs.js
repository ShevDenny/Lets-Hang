import {useEffect, useState} from 'react'
import DisplayEvents from './DisplayEvents'

function MyHangs() {
  const [myHangs, setMyHangs] = useState([])
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    const userId = localStorage.getItem("user_id")
    fetch(`http://localhost:3000/user_events?user_id=${userId}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.errors) {
       
        setErrors(data)
      } else {
        

        let newState = data.map(userEvent => {
          return {
            id: userEvent.id,
            name: userEvent.event.event,
            date: userEvent.event.date,
            time: userEvent.event.time,
            user: userEvent.user.name

          }
        })
        setMyHangs(newState)
      }
    })

  },[])


  const displayMyHangs = myHangs.map(event => {
    console.log(event)
    return <DisplayEvents event={event} />
  })

    return (
      <div>
        <h2>My Hangs</h2>
        {displayMyHangs}
      </div>
    );
  }
  
  export default MyHangs;