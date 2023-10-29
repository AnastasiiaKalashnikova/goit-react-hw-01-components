import { Container, StatItem, StatList } from './Statistics.stiled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <h2>{title.toUpperCase()}</h2>}

      <StatList>
        {stats.map(value => (
          <StatItem key={value.id} $color={getRandomHexColor}>
            <span>{value.label}</span>
            <span>{value.percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </Container>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
