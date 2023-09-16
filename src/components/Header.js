import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex">
      <div>
        <Link to="/">
          <h3>Habit Tracker</h3>
        </Link>
      </div>
      <div>
        <button className="primary-btn secondary-btn">
          <Link to="/weekView">Go to Week View</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
