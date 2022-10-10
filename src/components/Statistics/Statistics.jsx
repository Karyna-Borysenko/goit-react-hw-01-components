import PropTypes from 'prop-types';
import getRandomHexColor from '../../utils/RandomColor';
import {
  Container,
  Title,
  StatisticsList,
  StatisticsItem,
  StatisticsText,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, statistics }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <StatisticsList>
        {statistics.map(({ id, label, percentage }) => (
          <StatisticsItem
            key={id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <StatisticsText>{label}</StatisticsText>
            <Percentage>{percentage}%</Percentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
