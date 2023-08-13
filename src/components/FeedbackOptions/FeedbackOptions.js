import { Button } from '../FeedbackButton/FeedBackButton';
import { List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map((option, index) => (
        <Button
          key={index}
          onIncrement={() => onLeaveFeedback(option)}
          name={option.charAt(0).toUpperCase() + option.slice(1)}
        />
      ))}
    </List>
  );
};
