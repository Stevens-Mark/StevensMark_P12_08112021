import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../utils/style/colors'

// import Rechart items
import { 
    ResponsiveContainer,
    RadialBarChart, 
    RadialBar 
} from 'recharts'

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
 * Renders the user's Score on a RadialBarChart  - RECHARTS
 * @function Score
 * @param {number} scoreData: holds users daily score
 * @returns {JSX}
 */
const Score = ({ scoreData }) => {

  // A 'dummy' daily score of 100% (ie, value: 1) is needed as a comparison
  // in order to display todayScore correctly 
  const scoreValue = [ 
        { value: 1, fill: "transparent" }, 
        { value: scoreData, fill: "#FF0000" } ]

    // Display RadialBarChart using RECHARTS
    return (
      <Wrapper>
       
        <ScoreTitle>Score</ScoreTitle>
        <ScoreSummary>
          <ScorePercentage>{100 * scoreData}%</ScorePercentage>
          <ScoreText>de votre <br />objectif </ScoreText>
        </ScoreSummary>

        <ResponsiveContainer width="100%" height="100%"> 
          <RadialBarChart 
            width={700} 
            height={350} 
            startAngle={90} 
            endAngle={450} 
            innerRadius={50} 
            outerRadius={110} 
            barSize={10} 
            data={scoreValue}>
            <RadialBar cornerRadius={50} dataKey="value" />
          </RadialBarChart>
         </ResponsiveContainer> 
         
      </Wrapper>   
    )
  }

export default Score

// Prototypes

Score.propTypes = {
  ScoreData: PropTypes.number,
}