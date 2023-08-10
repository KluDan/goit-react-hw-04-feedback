import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { Statistics } from './Statistics';

export const Section = ({
  title,
  totalFeedback,
  positiveFeedbackPercentage,
  state,
  click,
}) => {
  const { good, neutral, bad } = state;
  const showStatistics = totalFeedback > 0;
  return (
    <>
      <h1>{title}</h1>
      <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={click} />
      {showStatistics ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};
