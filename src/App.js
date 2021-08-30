import React,{useState} from 'react'
import '../src/App.css'
import Repos from './component/Repos'
import Axios from 'axios'
import Heerosection from './component/Heerosection'
import UserPage from './component/UserPage'

function App() {

  const [query,setQuery]=useState('')
  const [user, setUser]=useState(null)


  const fetchDetails = async ()=>{
    try {
      const {data} = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data)
      console.log(data.user)
    } catch (error) {
      alert("No user find with this username")
    }
  }
  

  return (
    <div>
    <input id="inputuser" value={query} onChange={e=>setQuery(e.target.value)} placeholder="search Git User" />
    <button id="Submit" onClick={fetchDetails} >click me </button>
      <Heerosection />
      {/* <UserPage/> */}
      {user ? <UserPage user={user} />
       : console.log("no")}

      {user ? <Repos repos_url={user.repos_url}/> : null}

    </div>
  )
}

export default App
