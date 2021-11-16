import { useParams } from 'react-router'
import { useFetch } from '../utils/hooks/FetchData'
import styled from 'styled-components'
import colors from '../utils/style/colors'
import MiniLoadingIcon from '../utils/Loaders/MiniLoadingIcon'

// import Rechart items
import {
  ResponsiveContainer,
    PieChart,
    Pie, 
    Cell 
} from "recharts";

/**
 * CSS for the component using styled.components
 */
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.backgroundLight};
  color: ${colors.secondary};
  height: 225px;
  width: 32%;
  max-width: 258px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px 0px #00000005;

    p {
      padding: 10px;
    }
    
  @media screen and (min-width: 1025px) {
    height: 263px;
    }  
  @media screen and (min-width: 1440px) {
    height: 325px;
    max-width: 325px;
    } 
`;

const ScoreWrapper = styled.article`
  position: relative;
  height: 225px;
  width: 100%;
  border-radius: 5px;
  background: ${colors.backgroundLight};
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

const ScoreHeading = styled.div`
 
  
`;

const ScoreTitle = styled.h2`
  font-size: clamp(0.75rem, 1.042vw, 1.125rem);
  color: ${colors.H2HeadingText};
  // margin: unset;
  margin-top: 25px;
  position: absolute;
  left: 10%; 
`;

const ScorePercentage = styled.p`
  color: ${colors.NumberText};
  font-size: clamp(1rem,2vw,1.25rem);
  font-weight: 700;
  position: absolute;
  top: 25%;
  left: 44%;
  // margin: unset;
`;

const ScoreText = styled.p`
  color: ${colors.SecondaryText};
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  position: absolute;
  top: 41%;
  left: 39%;
`;

/**
 * Fetch() the user's data for their Score
 * Displays it on a PieChartWithPaddingAngle
 * @function Score
 * @returns {JSX} Score PieChartWithPaddingAngle
 */
export default function Score() {
  // Get ID from URL param
  const { id } = useParams()
    
    const mockScoreData = `../${id}.json`
      // const score = `http://localhost:3000/user/${id}/`
  
    // Fetch the data using HOOK useFetch
    // @returns @param {object} data, {boolean} isLoading and {boolean} error
    const { data, isLoading, error } = useFetch(mockScoreData)

    if (error) {
      return (
        <Wrapper>
          <p>Aucune donnée n'a été trouvée</p>
        </Wrapper>
        )
    }
    if (isLoading) {
      return (
        <Wrapper>
          <MiniLoadingIcon />
        </Wrapper>
      )
    }
    else {
      const score = data.data.todayScore

      const scoreData = [ { value: 12 }, {value: 1 - score } ]
      const COLORS = ['#FF0000', 'transparent']

    // Display Radar chart using RECHARTS
    return (
      <ScoreWrapper>
        <ScoreHeading>
          <ScoreTitle>Score</ScoreTitle>
          <ScorePercentage>{100 * score}%</ScorePercentage>
          <ScoreText>de votre <br />objectif </ScoreText>
        </ScoreHeading>

        <ResponsiveContainer width="100%" height="100%"> 
          <PieChart width={700} height={350}>
            <Pie
              data={scoreData}
              innerRadius={55}
              outerRadius={64}
              dataKey='value'
              stroke='transparent'
              startAngle={90} 
              endAngle={360} >
              
              {scoreData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} cornerRadius={50} />
              ))}
            </Pie>
          </PieChart>
         </ResponsiveContainer> 
      </ScoreWrapper>   
    )
  }
}

