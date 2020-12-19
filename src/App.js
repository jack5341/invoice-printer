import { usersStore } from './context/getusers'
import { useEffect,useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import axios from 'axios'

// Pages
import Homepage from './pages/homepage'
import Printpage from './pages/printpage'

export default function App() {

  const [users,setUsers] = useState([])

  useEffect(() => {
    axios({
      url: "http://localhost:8080/getusers",
      method: "GET"
    }).then((res) => {
      setUsers(res.data)
    })
  },[])

  return (
    <Router>
      <usersStore.Provider value={users} >
      <Switch>
        <Route exact path="/print/:id" component={Printpage} />
        <Route component={Homepage} path="/"/>
      </Switch>
      </usersStore.Provider>
    </Router>
  )
}

