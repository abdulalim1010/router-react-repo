import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router';
import Footer from './Header/Footer/Footer';

const Roots = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Roots;