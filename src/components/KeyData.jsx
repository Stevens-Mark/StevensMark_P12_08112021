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
  align-items: center;
  color: ${colors.NumberText};
  display: flex;
  flex-direction: column;

    @media screen and (min-width: 455px) {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }
    @media screen and (min-width: 1024px) {
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      margin-left: 10%;
    }
`;

const HealthCard = styled.article`
  align-items: center;
  background: ${colors.backgroundLight};
  border-radius: 5px;
  box-shadow: 0px 2px 4px 0px #00000005;
  display: flex;
  height: 70px;
  margin: 10px;
  width: 100%;
  
  img {
    height: 50px;
    margin-left: 15px;
    width: 50px;
      @media screen and (min-width: 1024px) {
        height: 60px;
        Width: 60px;
        } 
    }

  @media screen and (min-width: 455px) {
    flex: 1 1 250px;
    margin: unset;
    min-width: 325px;
    }
  @media screen and (min-width: 1024px) {
    flex: unset;
    height: 100px;
    margin: unset;
    min-width: unset;
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

  const categories = ['Calories', 'Protéines', 'Glucides', 'Lipides']
  const icons = [calories, protiens, fats, carbs]

  // console.log(Object.values(healthData))
  return (
    <HealthWrapper>
      {categories.map((cat, index) => (
        <HealthCard key={cat}>
          <img src={icons[index]} alt='' />
          <HealthValue>
            {Object.values(healthData)[index] + ' '}
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
