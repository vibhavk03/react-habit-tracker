import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../features/habit/habitSlice';

const NewHabitForm = () => {
  const [habit, setHabit] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addHabit(habit));

    setHabit('');
  };

  return (
    <div className="new-habit-form-container flex mg-top-10vh">
      <div className="limit-width-55">
        <form className="new-habit-form flex" onSubmit={handleSubmit}>
          <input
            value={habit}
            id="habit"
            type="text"
            onChange={(e) => {
              setHabit(e.target.value);
            }}
            placeholder="add new habit ..."
            required
          />
          <button className="primary-btn">Add Habit</button>
        </form>
      </div>
    </div>
  );
};

export default NewHabitForm;
