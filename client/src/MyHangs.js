import {useState} from 'react'
import DisplayEvents from './DisplayEvents'

function MyHangs({currentUser}) {
  const [myHangs, setMyHangs] = useState([])
  const [errors, setErrors] = useState(null)

  function fetchEvents() {
    const userId = localStorage.getItem("user_id")
    fetch(`http://localhost:3000/user_events?user_id=${userId}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.errors) {
       
        setErrors(data)
      } else {
        

        let newState = data.map(userEvent => {
          console.log(userEvent.id)
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
    
  }

  
 
  fetchEvents()
  


  const displayMyHangs = myHangs.map(event => {
    console.log(event)
    return <DisplayEvents setMyHangs={setMyHangs} event={event} />
  })

  return (
    <div className="fav">
      <h2>{currentUser.name}'s Hangs</h2>
      <div className="hangContainer">
        {displayMyHangs}
      </div>
    </div>
  );
  }
  
  export default MyHangs;