import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

// Pages
import Homepage from './pages/homepage'
import Editor from './pages/editor'

function App() {

  const colors = {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  }

  const theme = extendTheme({ colors })

  return (
    <ChakraProvider theme={theme}>
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
