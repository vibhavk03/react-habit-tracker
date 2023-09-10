const Header = () => {
  return (
    <header class="flex">
      <div>
        <a href="/">
          <h3>Habit Tracker</h3>
        </a>
      </div>
      <div>
        <button className="primary-btn">Add Habit</button>
      </div>
    </header>
  );
};

export default Header;
