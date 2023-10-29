import { Cell, Line } from './Transaction.styled';

export const Transaction = ({ id, amount, type, currency }) => {
  return (
    <Line key={id}>
      <Cell>{type}</Cell>
      <Cell>{amount}</Cell>
      <Cell>{currency}</Cell>
    </Line>
  );
};
