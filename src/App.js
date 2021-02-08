import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ReactGA from "react-ga";  //Google Analytics
import { ChakraProvider } from "@chakra-ui/react"

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.initialize('G-VTPVN058D5');
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});


// Pages
import Homepage from './pages/homepage'
import Editor from './pages/editor'

function App() {
  return (
    <ChakraProvider>
      <Router history={history}>
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
