import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';
import { Statistics } from '../Statistics/Statistics';
import { SubTitle, Title, Wrapper } from './Section.styled';

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
    <Wrapper>
      <Title>{title}</Title>
      <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={click} />
      {showStatistics ? (
        <>
          <SubTitle>Statistics</SubTitle>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Wrapper>
  );
};
