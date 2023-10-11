function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
          <h3 className="navbar navbar-expand-md bg-body-tertiary">AppName</h3>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Main Feature</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;