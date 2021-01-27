import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Pages
import Homepage from './pages/homepage'

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Homepage} path="/"/>
        <Route path="/invoice-edit"/>
        <Route path="/print"/>
      </Switch>
    </Router>
  )
}

export default App;
