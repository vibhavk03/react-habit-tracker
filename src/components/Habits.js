import { useSelector, useDispatch } from 'react-redux';
import { removeHabit } from '../features/habit/habitSlice';
import { Link } from 'react-router-dom';

const Habits = () => {
  const habits = useSelector((state) => state.habits);
  const dispatch = useDispatch();

  return (
    <div className="habits-container flex mg-top-bottom-5vh">
      <div className="limit-width-55 flex habits-list">
        {habits.map((habit) => (
          <div key={habit.id} className="individual-habit flex">
            <div className="inner-habit-left">
              <div className="habit-text">{habit.text}</div>
              <div>7/7 for past week</div>
            </div>
            <div className="inner-habit-center"></div>
            <div className="inner-habit-right flex">
              <button className="primary-btn secondary-btn limit-width-btn link-btn">
                <Link to="/weekView">Detail View</Link>
              </button>
              <button
                className="primary-btn delete-btn limit-width-btn"
                onClick={() => dispatch(removeHabit(habit.id))}
              >
                Remove Habit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habits;
