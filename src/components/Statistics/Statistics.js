import { StatisticsBlock, StatisticsItemText } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsBlock>
      <StatisticsItemText>Good: {good}</StatisticsItemText>
      <StatisticsItemText>Neutral: {neutral}</StatisticsItemText>
      <StatisticsItemText>Bad: {bad}</StatisticsItemText>
      <StatisticsItemText>Total: {total}</StatisticsItemText>
      <StatisticsItemText>
        Positive feedback: {positivePercentage}%
      </StatisticsItemText>
    </StatisticsBlock>
  );
};
