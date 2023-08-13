import { OptionsButton } from './FeedbackButton.styled';

export const Button = ({ onIncrement, name }) => {
  return <OptionsButton onClick={onIncrement}>{name}</OptionsButton>;
};
