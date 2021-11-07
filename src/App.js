
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import SideNav from './components/SideNav'
import User from './pages/User'
import Error from './pages/Error'

import './App.css';

function App() {
  return (
    <Router>
      <Header />  
      <SideNav /> 
        <Switch>
            <Route exact path="/">
              <User />
            </Route>

            <Route>
              <Error />
            </Route>
        </Switch> 
    </Router>  
  )
}

export default App;
