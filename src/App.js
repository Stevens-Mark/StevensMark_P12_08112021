
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { lazy, Suspense } from 'react'
// component imports
import  Header  from './components/HeaderNav'
// import WelcomePage from './pages/WelcomePage'
// import DashBoard from './pages/DashBoard'
// import  Error from './pages/Error'
// import UnderConstruction from './pages/UnderConstruction'

// import components when needed using lazy loading
const WelcomePage = lazy(() => import('./pages/WelcomePage'))
const DashBoard = lazy(() => import('./pages/DashBoard'))
const UnderConstruction = lazy(() => import('./pages/UnderConstruction'))
const Error = lazy(() => import('./pages/Error'))
const renderLoader = () => <p style={{color: "red"}}>Loading...</p>

/**
 * Manages routes & renders pages
 * @function App
 * @returns {JSX}
 */
export default function App() {
  return (   
    <Suspense fallback={renderLoader()}>
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
    </Suspense>
  )
}
