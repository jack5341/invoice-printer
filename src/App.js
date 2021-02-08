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
import Editor from './pages/editor'

ReactGA.initialize("G-VTPVN058D5"); 

function App() {

  useEffect( () => {
    // This line will trigger on a route change
    ReactGA.pageview(window.location.pathname + window.location.search); 
  });

  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route component={Homepage} exact path="/" />
          <Route component={Editor} path="/invoice-edit" />
          <Route path="/print" />
        </Switch>
      </Router>
    </ChakraProvider>
  )
}

export default App;
