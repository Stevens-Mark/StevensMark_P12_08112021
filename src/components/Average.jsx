import { useParams } from 'react-router'
import PropTypes from 'prop-types'
import { useFetch } from '../utils/Service/FetchData'
import styled from 'styled-components'
import colors from '../utils/style/colors'
import MiniLoadingIcon from '../utils/Loaders/MiniLoadingIcon'
// import helper function to format the day correctly
import { TranformDay } from '../utils/HelperFunctions/Formatters.js'

// import Rechart items
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid,
  Tooltip, 
  ResponsiveContainer 
}  from 'recharts'

/**
 * CSS for the component using styled.components
 */
 const Wrapper = styled.article`
 position: relative;
 display: flex;
 align-items: center;
 justify-content: center;
 background: ${colors.primary};
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

const ErrorMsg = styled.p`
  color: ${colors.tertiary};
  padding: 10px;
`;

const AverageHeading = styled.h2`
  position: absolute;
  top: 0px;
  left: 15px;
  color: ${colors.tertiary};
  opacity: 0.5;
  font-size: clamp(1rem, 1.2vw, 1.125rem);
  font-weight: 500;
  width: 170px;
`;

const ToolTipLabel = styled.div`
  color: ${colors.secondary};
  background: ${colors.tertiary};
  font-size: 7px;
  font-weight: 500;
  line-height: 4px;
  padding: 2px;
  height: 20px;
  width: 25px;
`;

/**
 * Renders the tooltip (minutes) information when user hovers on the line chart
 * @function CustomTooltip
 * @param {boolean} active: inital value false / becomes true when hover on linechart
 * @param {array} payload: contains data to be displayed on hover
 * @returns {JSX}
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <ToolTipLabel>
        <p>{`${payload[0].value} mins`}</p>
      </ToolTipLabel>
    )
  }
  return null
}
  
/**
 * Renders Average Sessions Line Chart
 * @function Average
 * @returns {JSX}
 */
const Average = () => {
  // Get ID from URL param
  const { id } = useParams()
 
  // Fetch the data using (custom hook) useFetch
  // @returns @param {object} data, {boolean} isLoading and {boolean} error
     const { data, isLoading, error } = useFetch( id, 'average' )

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
      const sessions = data.data.sessions

    // Display Line chart using RECHARTS
    return (
      <Wrapper>
        <AverageHeading>Durée moyenne des sessions</AverageHeading>

        <ResponsiveContainer width="100%" height="100%"> 
            <LineChart
              data={sessions}
              margin={{
                top: 0,
                right: 8,
                left: -53,
                bottom: 0, }} >

            <CartesianGrid
              strokeDasharray="0" 
              horizontal={false} 
              vertical={false} />

            <XAxis 
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickFormatter={TranformDay}
              stroke={`${colors.tertiary}`}
              style={{ fontSize: '12px', fontWeight: '500', opacity: '0.5',}} />

            <YAxis 
              dataKey="sessionLength"
              axisLine={false}
              tickLine={false}
              // tick={false}  
              domain={['dataMin -2', 'dataMax + 20']} />

            <Tooltip 
              content={<CustomTooltip />}
              cursor={{ 
              stroke: `${colors.secondary}`,
              strokeOpacity: 0.1, 
              strokeWidth: '45',}} />
            
            <Line type="monotone" 
              dataKey="sessionLength" 
              stroke={`${colors.tertiary}`} 
              strokeWidth={2}
              strokeOpacity={0.5}
              dot={false}
              activeDot={{ r: 3, strokeWidth: 9, strokeOpacity: 0.3, }} />
          </LineChart>

        </ResponsiveContainer>
      </Wrapper>   
    )
  }
}

export default Average

//  Prototypes

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}

