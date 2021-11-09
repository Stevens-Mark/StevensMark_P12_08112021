
import { useParams } from 'react-router';
import styled from 'styled-components'
import { Loader } from '../utils/style/Atoms'
import { useFetch } from '../utils/hooks'
import colors from '../utils/style/colors';


const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 117px;
  height: 90vh;
`;

const ErrorWrapper = styled.span`
  color: #000;
  margin-left: 117px;
`;

const Welcome = styled.div`
  color: #000;
  margin-left: 117px;

  h1 {
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    margin: unset;
  }

  p {
    font-size: 18px;
    font-weight: 400;
  }

  span {
    color: ${colors.primary};
  }
`;

export default function User() {
 
  const  userId  = useParams().id
  
  const mockData = `../${userId}.json`
  // const apiData = `http://localhost:3000/user/${userId}/`
  // const activity =`http://localhost:3000/user/${userId}/activity`
  // const sessions = `http://localhost:3000/user/${userId}/average-sessions`
  // const performance = `http://localhost:3000/user/${userId}/performance`

  const { data, isLoading, error } = useFetch(mockData)

  if (error) {
    return <ErrorWrapper>Il y a un problème</ErrorWrapper>
  }

  if (isLoading) {
      return (
        <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
      )
  }
  else {
    const details = data.data

    return (
      <div>
          <Welcome>
              <h1>Bonjour <span>{details.userInfos.firstName}</span></h1>   
              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </Welcome>
      </div>
    )
  }
}

