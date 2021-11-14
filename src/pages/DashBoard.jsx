
import { useParams } from 'react-router'
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useFetch } from '../utils/hooks/FetchData'
import Error from './Error'
import Activity from '../components/Activity'
import KeyData from '../components/KeyData'
import Average from '../components/Average'
import MiniLoadingIcon from '../utils/Loaders/MiniLoadingIcon'

/**
 * CSS for component using styled.components
 */
 const LoaderWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 90vh;
`;

const DashBoardWrapper = styled.main`
  padding: clamp(0.625rem, 2vw, 4.5rem);

    @media screen and (min-width: 1440px) {
    padding: 77px;
    } 
`;

const Welcome = styled.div`
  color: ${colors.secondary};
  margin-bottom: 35px;

    @media screen and (min-width: 1440px) {
      margin-bottom: 77px;
      } 

  h1 {
    font-size: clamp(1.5rem, 3vw, 3rem);
    font-style: normal;
    font-weight: 500;
    margin: unset;
  }

  p {
    font-size: clamp(0.75rem, 1.250vw, 1.125rem);
    font-weight: 400;
  }

  span {
    color: ${colors.primary};
  }
`;

const UserStats = styled.div`
  display: flex;
  flex-direction: column-reverse;

    @media screen and (min-width: 1024px) {
      flex-direction: row;
      }
`;

const Stats = styled.div`
  @media screen and (min-width: 1024px) {
    width: 75%;
    }
`;

const KeyDataWrapper = styled.aside`
  margin-bottom: 20px;

    @media screen and (min-width: 1024px) {
      width: 25%;
      margin-bottom: 0px;
      }
`;

const Analysis = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  gap: 15px;

    @media screen and (min-width: 600px) {
      flex-direction: row;
      justify-content: space-between;
    }  
    @media screen and (min-width: 1440px) {
      margin-top: 70px;
    }  
`;

// THIS IS TEMPORARY FOR DUMMY CHARTS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const CONTAINER = styled.article`
  height: 225px;
  width: 100%;
  border-radius: 5px;
  background: blue;
  box-shadow: 0px 2px 4px 0px #00000005;

    @media screen and (min-width: 600px) {
      width: 32%;
      max-width: 258px;
      }  
    @media screen and (min-width: 1025px) {
      height: 263px;
      } 
    @media screen and (min-width: 1440px) {
      height: 325px;
      max-width: 325px;
      } 
`;

/**
 * Displays the Dashboard of a user with all their stats
 * @function DashBoard
 * @returns {JSX}
 */
export default function DashBoard() {
 
  const { id } = useParams()
  
  const mockData = `../${id}.json`
  // const apiData = `http://localhost:3000/user/${id}/`
  // const performance = `http://localhost:3000/user/${id}/performance`

  const { data, isLoading, error } = useFetch(mockData)
  
  if (error) {
    return <Error />
  }
  if (isLoading) {
      return (
        <LoaderWrapper>
          <MiniLoadingIcon />
        </LoaderWrapper>
      )
  }
  else {
    const details = data.data

    return (
      <DashBoardWrapper>
          <Welcome>
           <h1>Bonjour <span>{details.userInfos.firstName}</span></h1>   
              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </Welcome>
         <UserStats> 
            <Stats>
              <Activity />         
                <Analysis>          
                  <Average />
                  <CONTAINER />
                  <CONTAINER />
                </Analysis>
            </Stats>
            <KeyDataWrapper>
              <KeyData healthData={details.keyData} />
            </KeyDataWrapper>
          </UserStats>  
      </DashBoardWrapper>
    )
  }
}

