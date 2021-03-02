import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"
import ReactGA from 'react-ga';

// Pages
import Homepage from './pages/homepage'
import Editor from './pages/editors'

ReactGA.initialize("G-VTPVN058D5");

function App() {

  useEffect(() => ReactGA.pageview(window.location.pathname + window.location.search));

  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route component={Homepage} exact path="/" />
          <Route component={Editor} path="/invoice-edit" />
        </Switch>
      </Router>
    </ChakraProvider>
  )
}

export default App;
