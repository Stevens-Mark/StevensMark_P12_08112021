
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
// component imports
import Header from './components/Header'
import SideNav from './components/SideNav'
import User from './pages/User'
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
            <main>
              <Switch>
                <Route exact path="/user/:id" component={User}/>
                <Route component={Error} />
              </Switch> 
          </main>
        </Wrapper>
    </Router>  
  )
}
