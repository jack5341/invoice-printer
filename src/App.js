import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Pages
import Homepage from './pages/homepage'
import Editor from './pages/editor'

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Homepage} exact path="/"/>
        <Route component={Editor} path="/invoice-edit"/>
        <Route path="/print"/>
      </Switch>
    </Router>
  )
}

export default App;
