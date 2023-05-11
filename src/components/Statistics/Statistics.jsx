import { List, Item } from './Statisctics.styled';
import propTypes from 'prop-types';

const Statisctics = ({ good, neutral, bad, total, persentage }) => {
  return (
    <List>
      <Item name="good">Good: {good}</Item>
      <Item name="neutral">Neutral: {neutral}</Item>
      <Item name="bad">Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <Item>Positive feedback: {persentage}%</Item>
    </List>
  );
};

Statisctics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  persentage: propTypes.number.isRequired,
};

export default Statisctics;
