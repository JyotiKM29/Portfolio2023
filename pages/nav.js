import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">Logo</a>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li className="navbar-menu-item"><a href="#">Menu Item 1</a></li>
        <li className="navbar-menu-item"><a href="#">Menu Item 2</a></li>
        <li className="navbar-menu-item"><a href="#">Menu Item 3</a></li>
      </ul>
      <button className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
      </button>
    </nav>
  );
}
