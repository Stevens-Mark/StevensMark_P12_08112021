import { useParams } from 'react-router'
import PropTypes from 'prop-types'
import { useFetch } from '../utils/Service/FetchData'
import styled from 'styled-components'
import colors from '../utils/style/colors'
import MiniLoadingIcon from '../utils/Loaders/MiniLoadingIcon'
// import helper function to format the date correctly
import { TranformDate } from '../utils/HelperFunctions/Formatters.js'

// import Rechart items
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

/**
 * CSS for component using styled.components
 */
const ActivityChartWrapper = styled.article`
  background: ${colors.backgroundLight};
  height: 290px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px 0px #00000005;
`;

const Wrapper = styled(ActivityChartWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.secondary};
`;

const ActivityHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: clamp(0.625rem, 0.972vw, 1rem);
  font-weight: 500;

    h2 {
      color: ${colors.H2HeadingText};
      font-size: clamp(1rem, 1.2vw, 1.125rem);
      font-weight: 500;
      margin-left: 5px;

        @media screen and (min-width: 375px) {
          margin-left: 35px;
          margin-right: 35px;
          }  
      }
`;

const ActivityLegend = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  color: ${colors.SecondaryText};

    @media screen and (min-width: 375px) {
      margin-right: 35px;
      }  
`;

const BulletOne = styled.span`
  font-size: 40px;
  font-weight: 500;
  color: ${colors.primary};
  margin-bottom: 8px;
  margin-left: 15px;
  margin-right: 5px;
`;

const BulletTwo = styled.span`
  font-size: 40px;
  font-weight: 500;
  color: ${colors.NumberText};
  margin-bottom: 8px;
  margin-left: 15px;
  margin-right: 5px;
`;

const ToolTipLabel = styled.div`
  color: ${colors.tertiary};
  background: ${colors.primary};
  font-size: 7px;
  font-weight: 500;
  padding: 5px;
`;

/**
 * Renders the tooltip (kg/kCal) information when user hovers on barchart
 * @function CustomTooltip
 * @param {boolean} active: inital value false / becomes true when hover on barchart
 * @param {array} payload: contains data to be displayed on hover
 * @returns {JSX}
 */
const CustomTooltip = ({ active, payload }) => {

  if (active && payload && payload.length) {
    return (
      <ToolTipLabel>
        <p>{`${payload[0].value} kCal`}</p>
        <p>{`${payload[1].value} Kg`}</p>
      </ToolTipLabel>
    )
  }
  return null
}

/**
 * Renders Activities BarChart with Weight & Calories burned
 * @function Activity
 * @returns {JSX}
 */
const Activity = () => {
  // Get ID from URL param
  const { id } = useParams()
  
  // Fetch the data using (custom hook) useFetch
  // @returns @param {object} data, {boolean} isLoading and {boolean} error 
  const { data, isLoading, error } = useFetch( id, 'activity')

  if (error) {
    return <Wrapper>Aucune donnée n'a été trouvée</Wrapper>
  }
  if (isLoading) {
    return (
      <Wrapper>
        <MiniLoadingIcon/>
      </Wrapper>
    )
  } else {
    const sessions = data.data.sessions
    console.log()
    // Display Activity chart using RECHARTS
    return (
      <ActivityChartWrapper>
        <ActivityHeading>
          <h2>Activité quotidienne</h2>
          <ActivityLegend>
            <BulletTwo>•</BulletTwo> Poids (Kg)
            <BulletOne>•</BulletOne> Calories brûlées (kCal)
          </ActivityLegend>
        </ActivityHeading>

        <ResponsiveContainer width='100%' height={250}>
          <BarChart
            data={sessions}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 30,
            }}
            barGap={5} >
            <XAxis
              dataKey='day'
              tickFormatter={TranformDate}
              stroke={`${colors.barChartText}`}
              tickLine={false} 
              style={{ fontSize: '14px', }} />

            <YAxis
              yAxisId='poids'
              stroke={`${colors.barChartText}`}
              orientation='right'
              axisLine={false}
              tickLine={false}
              domain={['dataMin -3', 'dataMax + 3']}
              style={{
                fontSize: '14px',
              }} />

            <YAxis
              yAxisId='calories'
              tick={false}
              orientation='left'
              axisLine={false}
              tickLine={false}
              domain={['dataMin -10', 'dataMax + 10']}  />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: `${colors.barChartToolTip}` }} />

            <CartesianGrid
              stroke={`${colors.barChartGridStroke}`}
              vertical={false} />

            <Bar
              yAxisId='calories'
              name='kCal'
              dataKey='calories'
              fill={`${colors.secondary}`}
              barSize={8}
              radius={[50, 50, 0, 0]} />

            <Bar
              yAxisId='poids'
              name='kg'
              dataKey='kilogram'
              fill={`${colors.primary}`}
              barSize={8}
              radius={[50, 50, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        
      </ActivityChartWrapper>
    )
  }
}

export default Activity

// Prototypes

TranformDate.propTypes = {
  tickItem: PropTypes.string.isRequired ,
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}
