import React, { useState } from 'react';

const DropDownMenu = ({ sort }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  let dropdownVisible = toggleMenu ? 'block' : 'none';

  const toggleDropdown = () => {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };

  const sortAndToggle = value => {
    toggleDropdown();
    sort(value);
  };

  return (
    <div>
      <button className='dropdown-button' onClick={() => toggleDropdown()}>
        Sort by...
      </button>
      <ul className='dropdown-menu-content' style={{ display: dropdownVisible }}>
        <div className='dropdown-menu-container'>
          <p>Sort by</p>
          <button onClick={() => toggleDropdown()}>✕</button>
        </div>
        <li onClick={() => sortAndToggle('episode')}>Episode</li>
        <li onClick={() => sortAndToggle('year')}>Year</li>
        <li onClick={() => sortAndToggle('title')}>Title</li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
