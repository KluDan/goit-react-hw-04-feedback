import { Button } from './FeedBackButton';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, index) => (
        <Button
          key={index}
          onIncrement={() => onLeaveFeedback(option)}
          name={option.charAt(0).toUpperCase() + option.slice(1)}
        />
      ))}
    </>
  );
};
