import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DayTile from './DayTile';

const WeekView = () => {
  const habits = useSelector((state) => state.habits);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="week-view-container flex mg-top-bottom-5vh">
        <div className="flex week-view-list">
          {habits.map((habit) => (
            <div className="week-view-individual-habit" key={habit.id}>
              <div className="week-view-habit-heading">{habit.text}</div>
              <div className=" flex week-view-habit-week-log">
                {habit.weekLog.map((habitDay) => (
                  <DayTile key={habitDay.id} habitDay={habitDay} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeekView;
