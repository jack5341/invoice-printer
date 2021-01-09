import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Pages
import Homepage from './pages/homepage'

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Homepage} path="/"/>
        <Route path="/demand"/>
      </Switch>
    </Router>
  )
}

export default App;
