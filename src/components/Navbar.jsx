import React, { useState } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import AddCalendarForm from './AddCalendarForm';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  // Function to toggle the form
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };


  return (
    <div>
      <nav className="navbar">
        <div className="hamburger" onClick={toggleSidebar}>
          <MenuIcon className='menuIcon'></MenuIcon>
        </div>
        <div className="logo"><span className='fulllogo'>Social Media Calender</span><span className='shortlogo'>SMC</span></div>
        <div className="sign-in">
          <a href="#signin">Sign In</a>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={isOpen ? 'sidebar open' : 'sidebar'}>
        
        <div className='form-btn'>
        <button className='btn' onClick={toggleForm}>Add Calendar</button>
        </div>

        <ul className="sidebar-links">
          <li><a href="#services">Home</a></li>
          <li><a href="#services">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      {isFormOpen && <AddCalendarForm onClose={toggleForm} />}
    </div>
  );
}

export default Navbar;
