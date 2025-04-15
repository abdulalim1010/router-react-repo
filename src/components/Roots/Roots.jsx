import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router';
import Footer from './Header/Footer/Footer';
import Sidebar from './SideBar/Sidebar';
import './Root.css';

const Roots = () => {
  return (
    <div>
      <Header></Header>
      <div className='root-main' >
        <Sidebar></Sidebar>
         <Outlet></Outlet>
     </div>
      <Footer></Footer>
    </div>
  );
};

export default Roots;