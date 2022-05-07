import React from 'react';
import Navbar from '../Navigation/Navbar';
import Footer from '../Navigation/Footer';

interface ILayoutProps {
  readonly children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
