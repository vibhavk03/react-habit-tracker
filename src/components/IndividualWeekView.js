import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DayTile from './DayTile';

const IndividualWeekView = () => {
  // get all habits from state
  const habits = useSelector((state) => state.habits);

  // get id passed as parameter
  const { id } = useParams();

  // only rendering one habit in this view
  const habitToRender = habits.find((habit) => habit.id === id);

  return (
    <div className="individual-week-view-habit-container flex">
      <div className="week-view-container flex mg-top-bottom-5vh width-100">
        <div className="flex week-view-list">
          <div className="week-view-individual-habit">
            <div className="week-view-habit-heading">{habitToRender.text}</div>
            <div className=" flex week-view-habit-week-log">
              {habitToRender.weekLog.map((habitDay) => (
                <DayTile
                  key={habitDay.id}
                  habitDay={habitDay}
                  habitId={habitToRender.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualWeekView;
