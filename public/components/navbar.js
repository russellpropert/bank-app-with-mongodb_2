function Navbar() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const navbarThemeClass = theme === 'light' ? 'navbar-light' : 'navbar-dark';

  return (
    <nav className={`navbar navbar-expand-lg ${navbarThemeClass} bg-light`}>
      <a className="navbar-brand" href="#/">Bank App</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item">
            <a className="nav-link" href="#/createAccount/">Create Account</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/allData/">All Data</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/about/">About</a>
          </li>

        </ul>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          style={{marginLeft: 'auto'}}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
}
