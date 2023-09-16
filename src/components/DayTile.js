const DayTile = ({ habitDay }) => {
  return (
    <div className="day-tile-container flex">
      <div className="day-tile-row">{habitDay.day}</div>
      <div className="day-tile-row">{habitDay.date}</div>
      <div className="day-tile-btns flex day-tile-row">
        <i
          className={
            habitDay.isCompleted === true
              ? 'fa-solid fa-circle-check'
              : 'fa-regular fa-circle-check'
          }
        ></i>
        <i
          className={
            habitDay.isCompleted === false
              ? 'fa-solid fa-circle-xmark'
              : 'fa-regular fa-circle-xmark'
          }
        ></i>
        <i
          className={
            habitDay.isCompleted === null
              ? 'fa-solid fa-circle-minus'
              : 'fa-regular fa-circle-minus'
          }
        ></i>
      </div>
    </div>
  );
};

export default DayTile;
