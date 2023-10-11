function HeaderNavItems() {

  // this list could be retrieved from a noSQL, including the sub-menu, db to further customization without a new PR
  let menuItems = ['Main Feature', 'Feature', 'Options'];
  return(
    <>
      { menuItems.map(p => (
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{ p }</a>
        </li>
        ))}
    </>
  );
}

export default HeaderNavItems;