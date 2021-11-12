
import { useParams } from 'react-router'
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useFetch } from '../utils/hooks'
import LoadingIcon from '../utils/Loaders/LoadingIcon'
import Error from './Error'
import Activity from '../components/Activity'
import KeyData from '../components/KeyData'
import Average from '../components/Average'

/**
 * CSS for component using styled.components
 */
const DashBoardWrapper = styled.main`
  padding: clamp(0.625rem, 2vw, 4.5rem);
  @media screen and (min-width: 1440px) {
    padding: 77px;
    } 
`;
// margin-left: clamp(3.5rem, 8vw, 7.5rem);

const Welcome = styled.div`
  color: ${colors.secondary};
  margin-bottom: 35px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 77px;
    } 

  h1 {
    font-size: clamp(0.875rem, 3vw, 3rem);
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
`;

const Stats = styled.div`
width: 75%;
`;

const KeyDataWrapper = styled.div`
width: 25%;
`;

const Analysis = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  gap: 15px;

  @media screen and (min-width: 1025px) {
    gap: 30px;
    }  
`;

const CONTAINER = styled.div`
  height: 225px;
  width: 32%;
  max-width: 258px;
  border-radius: 5px;
  background: blue;
  box-shadow: 0px 2px 4px 0px #00000005;

  @media screen and (min-width: 1025px) {
    height: 263px;
    } 
`;

/**
 * 
 * @function User
 * @returns {JSX}
 */
export default function User() {
 
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
        <LoadingIcon />
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

