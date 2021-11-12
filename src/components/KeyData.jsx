import colors from '../utils/style/colors';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import health icons
import calories from '../assets/icons/calories.svg';
import protiens from '../assets/icons/protiens.svg';
import fats from '../assets/icons/fats.svg';
import carbs from '../assets/icons/carbs.svg';

/**
 * CSS for the component using styled.components
 */
const HealthWrapper = styled.div`
  color: ${colors.HealthDataText};
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  height: 100%;
  justify-content: space-between;
`;

const HealthCard = styled.article`
  display: flex;
  align-items: center;
  padding-left: clamp(0.75rem, 2vw, 2rem);
  height: 121px;
  min-width: 185px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px 0px #00000005;
  background: ${colors.backgroundLight};

  @media screen and (min-width: 1025px) {
    height: 124px;
  
    }  
`;

const HealthValue = styled.div`
  font-size: 20px;
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
 * Renders the data showing health (calories, carbs, fats & proteins)
 * @function KeyData
 * @param {object} healthData: holds users health data
 * @returns {JSX}
 */

export default function KeyData({ healthData }) {
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
  );
}

// Prototypes

KeyData.propTypes = {
  healthData: PropTypes.object.isRequired,
};
