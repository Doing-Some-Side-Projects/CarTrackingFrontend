import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/Form/style.css'
import '../App.css'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar.Text className="justify-content-center align-content-center"><h2>Get Yer Car Work Done Too</h2>
     <Nav className ="justify-content-center align-items-center"  defaultActiveKey="/Landingpage">
     
      
      <li className="nav-item">
       
        <a
          href="#landingpage"
          onClick={() => handlePageChange('Landingpage')}
          className={currentPage === 'Landingpage' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li> 
      <li className="nav-item">
        <a
          href="#gasfills"
          onClick={() => handlePageChange('gasfills')}
          className={currentPage === 'gasfills' ? 'nav-link active' : 'nav-link'}
        >
          Gas Fill-ups
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#oilchange"
          onClick={() => handlePageChange('oilchange')}
          className={currentPage === 'oilchange' ? 'nav-link active' : 'nav-link'}
        >
          Oil Changes
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#tires"
          onClick={() => handlePageChange('tires')}
          className={currentPage === 'tires' ? 'nav-link active' : 'nav-link'}
        >
          Tires
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#othermaintenance"
          onClick={() => handlePageChange('othermaintenance')}
          className={currentPage === 'othermaintenance' ? 'nav-link active' : 'nav-link'}
        >
          Other Maintenance Items
        </a>
      </li>
    </Nav>
    </Navbar.Text>
  );
}

export default NavTabs;
