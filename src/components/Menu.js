import React from 'react'
import MenuContactList from './MenuContactList';

const menuItems = {
  channels: {
    id:1,
    title: "Channels",
    contactList: [
      {
        name: "Facebook",
      },
      {
        name: "Twitter",
      },
    ],
  },
  contacts: {
    id:2,
    title: "Contacts",
    contactList: [
      {
        name: "Paula",
      },
      {
        name: "Joao",
      },
    ],
  },
};

const Menu = () => {
  return (
    <nav className="navbar-dark bg-dark p-3">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link active">
            Menu
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Menu
          </a>
        </li>
        <li className="nav-item">
          <MenuContactList items={menuItems.channels} />
        </li>
        <li className="nav-item">
          <MenuContactList items={menuItems.contacts} />
        </li>
      </ul>
    </nav>
  );
}

export default Menu