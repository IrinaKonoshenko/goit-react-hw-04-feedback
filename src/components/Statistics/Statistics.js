import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = 0,
}) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        Good: <span className={css.itemNumber}>{good}</span>
      </li>
      <li className={css.item}>
        Neutral: <span className={css.itemNumber}>{neutral}</span>
      </li>
      <li className={css.item}>
        Bad: <span className={css.itemNumber}>{bad}</span>
      </li>
      <li className={css.item}>
        Total: <span className={css.itemNumber}>{total}</span>
      </li>
      <li className={css.item}>
        Positive feedback:{' '}
        <span className={css.itemNumber}>{positivePercentage.toFixed()}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
