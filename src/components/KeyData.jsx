import colors from '../utils/style/colors'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import health icons
import calories from '../assets/icons/calories.svg'
import protiens from '../assets/icons/protiens.svg'
import fats from '../assets/icons/fats.svg'
import carbs from '../assets/icons/carbs.svg'

/**
 * CSS for the component using styled.components
 */
const HealthWrapper = styled.div`
  color: ${colors.NumberText};
  display: flex;
  flex-direction: column;
  align-items: center;

    @media screen and (min-width: 455px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
    @media screen and (min-width: 1024px) {
      flex-direction: column;
      margin-left: 10%;
      justify-content: space-between;
      height: 100%;
    }
`;

const HealthCard = styled.article`
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 0px 2px 4px 0px #00000005;
  background: ${colors.backgroundLight};
  
  img {
    margin-left: 15px;
    height: 50px;
    height: 50px;
      @media screen and (min-width: 1024px) {
        height: 60px;
        height: 60px;
        } 
    }

  @media screen and (min-width: 455px) {
    flex: 1 1 250px;
    min-width: 325px;
    margin: unset;
    }
  @media screen and (min-width: 1024px) {
    height: 100px;
    min-width: unset;
    margin: unset;
    flex: unset;
    }  
    @media screen and (min-width: 1440px) {
      height: 124px;
      }  
`;

const HealthValue = styled.div`
  font-size: clamp(1rem, 1.389vw, 1.25rem);
  font-style: normal;
  font-weight: 700;
  margin-left: 24px;

    p {
      color: ${colors.SecondaryText};
      font-size: 14px;
      font-weight: 500;
      margin: unset;
      }
`;

/**
 * Renders the data showing health (calories, carbs, fats & protiens)
 * @function KeyData
 * @param {object} healthData: holds users health data
 * @returns {JSX}
 */
const KeyData = ({ healthData }) => {

  const categories = ['Calories', 'Protéines', 'Glucides', 'Lipides'];
  const icons = [calories, protiens, fats, carbs];

  return (
    <HealthWrapper>
      {categories.map((cat, index) => (
        <HealthCard key={cat}>
          <img src={icons[index]} alt='' />
          <HealthValue>
            {healthData[Object.keys(healthData)[index]] + ' '}
            {index === 0 ? 'kCal' : 'g'}
            <p>{cat}</p>
          </HealthValue>
        </HealthCard>
      ))}
    </HealthWrapper>
  )
}

export default KeyData

// Prototypes

KeyData.propTypes = {
  healthData: PropTypes.object.isRequired,
}
