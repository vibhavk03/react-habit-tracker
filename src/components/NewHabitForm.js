import { useState } from 'react';

const NewHabitForm = () => {
  const [habit, setHabit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('habit', habit);
  };

  return (
    <div className="new-habit-form-container flex mg-top-10vh">
      <div className="limit-width-70">
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
