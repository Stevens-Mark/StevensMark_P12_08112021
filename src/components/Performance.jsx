import { useParams } from 'react-router'
import PropTypes from 'prop-types'
import { useFetch } from '../utils/hooks/FetchData'
import styled from 'styled-components'
import colors from '../utils/style/colors'
import MiniLoadingIcon from '../utils/Loaders/MiniLoadingIcon'
// import helper function to format 'kind' of activity
import { TranformKind } from '../utils/HelperFunctions/Formatters'

// import Rechart items
import { 
  Radar, 
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer 
} from 'recharts';

/**
 * CSS for the component using styled.components
 */
 const Wrapper = styled.article`
 display: flex;
 align-items: center;
 justify-content: center;
 background: ${colors.quaternary};
 height: 225px;
 width: 100%;
 border-radius: 5px;
 box-shadow: 0px 2px 4px 0px #00000005;

  @media screen and (min-width: 600px) {
    width: 32%;
    max-width: 258px;
    } 
  // @media screen and (min-width: 1025px) {
  //   height: 263px;
  //   }    
  @media screen and (min-width: 1440px) {
    height: 325px;
    max-width: 325px;
    } 
`;

const ErrorMsg = styled.p `
  color: ${colors.tertiary};
  padding: 10px;
`;

/**
 * Renders Performance Radar chart
 * @function Performance
 * @returns {JSX} Performance Radar chart
 */
const Performance = () => {
  // Get ID from URL param
  const { id } = useParams()
     
  // Fetch the data using HOOK useFetch
  // @returns @param {object} data, {boolean} isLoading and {boolean} error

  // mocked endpoint/data
  const { data, isLoading, error } = useFetch(`../${id}/performance.json`)

  // const { data, isLoading, error } = useFetch(`http://localhost:3000/user/${id}/performance`)

    if (error) {
      return (
        <Wrapper>
          <ErrorMsg>Aucune donnée n'a été trouvée</ErrorMsg>
        </Wrapper>
        )
    }
    if (isLoading) {
      return (
        <Wrapper>
          <MiniLoadingIcon isWhite={true} />
        </Wrapper>
      )
    }
    else {
      const performance = data.data
      
    // Display Radar chart using RECHARTS
    return (
      <Wrapper>
        <ResponsiveContainer width="100%" height="100%"> 

            <RadarChart 
              cx="50%" cy="50%" 
              outerRadius="60%" 
              data={performance.data}>

            <PolarGrid radialLines={false}/>

            <PolarAngleAxis 
            dataKey="kind" 
            tickFormatter={TranformKind} 
            stroke= {`${colors.tertiary}`}
            dy={4}
            tickLine={false}
              style={{ 
              fontSize: '12px', 
              fontWeight: '500',}} />

            <Radar 
              name="Mike" 
              dataKey="value" 
              fill={`${colors.primary}`} 
              fillOpacity={0.7} />
            </RadarChart>

         </ResponsiveContainer> 
      </Wrapper>   
    )
  }
}

export default Performance

//  Prototypes

TranformKind.propTypes = {
  tickItem: PropTypes.number.isRequired,
}


