const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-logo">Video Search</span>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;