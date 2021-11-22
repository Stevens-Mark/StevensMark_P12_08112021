import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../utils/style/colors'

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
const Wrapper = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.backgroundLight};
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

const ScoreTitle = styled.h2`
  font-size: clamp(1rem, 1.2vw, 1.125rem);
  color: ${colors.H2HeadingText};
  position: absolute;
  top: 0px;
  left: 15px; 
`;

const ScoreSummary = styled.div`
  position: absolute;
  background: ${colors.tertiary};
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
`;

const ScorePercentage = styled.p`
  color: ${colors.NumberText};
  font-size: clamp(1.125rem,2vw, 2rem);
  font-weight: 700;
  text-align: center;
  margin: 35px 0px 0px 0px;
    @media screen and (min-width: 1025px) {
      margin: 25px 0px 0px 0px;
        }  
`;

const ScoreText = styled.p`
  color: ${colors.SecondaryText};
  font-size: clamp(0.75rem, 1vw, 1.125rem);
  font-weight: 500;
  text-align: center;
  line-height: 20px;
  margin: 0px 0px 0px 0px;
`;

/**
 * Renders the user's Score on a PieChartWithPaddingAngle - RECHARTS
 * @function Score
 * @param {number} scoreData: holds users daily score
 * @returns {JSX}
 */
const Score = ({ scoreData }) => {

  const scoreValue = [ { value: scoreData}, {value: 1 - scoreData } ]
  const COLORS = ['#FF0000', 'transparent']

    // Display Radar chart using RECHARTS
    return (
      <Wrapper>
       
        <ScoreTitle>Score</ScoreTitle>
        <ScoreSummary>
          <ScorePercentage>{100 * scoreData}%</ScorePercentage>
          <ScoreText>de votre <br />objectif </ScoreText>
        </ScoreSummary>

        <ResponsiveContainer width="100%" height="100%"> 
          <PieChart width={700} height={350}>
            <Pie
              data={scoreValue}
              innerRadius={75}
              outerRadius={86}
              dataKey='value'
              // stroke='transparent'
              startAngle={90} 
              endAngle={450} >
              
              {scoreValue.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} cornerRadius={50} />
              ))}
            </Pie>
          </PieChart>
         </ResponsiveContainer> 
      </Wrapper>   
    )
  }

export default Score

// Prototypes

Score.propTypes = {
  ScoreData: PropTypes.number,
}