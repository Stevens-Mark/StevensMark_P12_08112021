
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
// component imports
import Header from './components/Header'
import SideNav from './components/SideNav'
import WelcomePage from './pages/WelcomePage'
import DashBoard from './pages/DashBoard'
import Error from './pages/Error'

/**
 * CSS for the component using styled.components
 */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: clamp(3.5rem, 8vw, 7.5rem) 1fr;
    }  
`;

/**
 * Manages routes & renders pages
 * @function App
 * @returns JSX
 */
export default function App() {
  return (
    
    <Router>
      <Header />  
        <Wrapper>
            <SideNav /> 
              <Switch>
                <Route exact path="/" component={WelcomePage}/>
                <Route  path="/user/:id" component={DashBoard}/>
                <Route component={Error} />
              </Switch> 
        </Wrapper>
    </Router>  
  )
}
