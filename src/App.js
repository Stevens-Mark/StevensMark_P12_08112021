
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// component imports
import Header from './components/Header'
import SideNav from './components/SideNav'
import User from './pages/User'
import Error from './pages/Error'
// CSS style
import './App.css';

/**
 * Manages routes & renders pages
 * @function App
 * @returns JSX
 */

export default function App() {
  return (
    <Router>
      <Header />  
      <SideNav /> 
        <Switch>
            <Route exact path="/user/:id" component={User}/>
            <Route>
              <Error />
            </Route>
        </Switch> 
    </Router>  
  )
}
