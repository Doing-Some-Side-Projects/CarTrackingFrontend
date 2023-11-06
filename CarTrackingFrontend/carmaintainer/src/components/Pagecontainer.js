import React, { useState } from 'react';
import NavTabs from './Navigation';
import Oilchange from './pages/oilchange';
import Landingpage from './pages/Landingpage';
import Othermaintenace from './pages/othermaintenace';
import Tires from './pages/tires';
import Gasfills from './pages/gasfills';
import Footer from './Footer';
import '../components/Form/style.css'
import '../App.css'


export default function PageContainer() {

  const [currentPage, setCurrentPage] = useState('Landingpage');
  const renderPage = () => {
    if (currentPage === 'Landingpage') {
      return <Landingpage />;
    }
    if (currentPage === 'oilchange') {
      return <Oilchange />;
     
    }
    if (currentPage === 'othermaintenance') {
      return <Othermaintenace />;
    }
    if(currentPage === 'tires'){
      return <Tires />
  }
  if (currentPage === 'gasfills')
  return<Gasfills />;

  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
     {renderPage()}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange}/>
      
    </div>
      
  );
}
