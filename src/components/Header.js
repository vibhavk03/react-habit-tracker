const Header = () => {
  return (
    <header className="flex">
      <div>
        <a href="/">
          <h3>Habit Tracker</h3>
        </a>
      </div>
      <div>
        <button className="primary-btn secondary-btn">Detail View</button>
      </div>
    </header>
  );
};

export default Header;
