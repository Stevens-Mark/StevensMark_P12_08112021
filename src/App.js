
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// component imports
import  Header  from './components/HeaderNav'
import WelcomePage from './pages/WelcomePage'
import DashBoard from './pages/DashBoard'
import  Error from './pages/Error'
import UnderConstruction from './pages/UnderConstruction'

/**
 * Manages routes & renders pages
 * @function App
 * @returns {JSX}
 */
export default function App() {
  return (   
    <Router>
      <Header />  
        <Switch>
          <Route exact path="/" component={WelcomePage}/>
          <Route path="/user/:id" component={DashBoard}/>
          <Route path="/profile" component={UnderConstruction}/>
          <Route path="/settings" component={UnderConstruction}/>
          <Route path="/community" component={UnderConstruction}/>
          <Route component={Error}/>
        </Switch> 
    </Router>  
  )
}
