import { useDispatch } from 'react-redux';
import { changeHabitStatus } from '../features/habit/habitSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareCheck as solidCheck,
  faSquareMinus as solidMinus,
  faSquare as solidSqaure,
} from '@fortawesome/free-solid-svg-icons';
import {
  faSquareCheck as regularCheck,
  faSquareMinus as regularMinus,
  faSquare as regularSqaure,
} from '@fortawesome/free-regular-svg-icons';

const DayTile = ({ habitDay, habitId }) => {
  const dispatch = useDispatch();

  // rendering habit day tile
  return (
    <div className="day-tile-container flex">
      <div className="day-tile-row">{habitDay.day}</div>
      <div className="day-tile-row">{habitDay.date}</div>
      <div className="day-tile-btns flex day-tile-row">
        <div
          onClick={() =>
            dispatch(
              changeHabitStatus({
                habitId: habitId,
                dayId: habitDay.id,
                value: true,
              })
            )
          }
        >
          {habitDay.isCompleted === true ? (
            <FontAwesomeIcon icon={solidCheck} />
          ) : (
            <FontAwesomeIcon icon={regularCheck} />
          )}
        </div>
        <div
          onClick={() =>
            dispatch(
              changeHabitStatus({
                habitId: habitId,
                dayId: habitDay.id,
                value: false,
              })
            )
          }
        >
          {habitDay.isCompleted === false ? (
            <FontAwesomeIcon icon={solidMinus} />
          ) : (
            <FontAwesomeIcon icon={regularMinus} />
          )}
        </div>
        <div
          onClick={() =>
            dispatch(
              changeHabitStatus({
                habitId: habitId,
                dayId: habitDay.id,
                value: null,
              })
            )
          }
        >
          {habitDay.isCompleted === null ? (
            <FontAwesomeIcon icon={solidSqaure} />
          ) : (
            <FontAwesomeIcon icon={regularSqaure} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DayTile;
