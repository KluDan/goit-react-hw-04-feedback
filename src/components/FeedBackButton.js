export const Button = ({ onIncrement, name }) => {
  return <button onClick={onIncrement}>{name}</button>;
};
