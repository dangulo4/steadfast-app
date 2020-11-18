import React from 'react';
import Navbar from './navbar';
import './styles.css';

export default function Layout({ children, title }) {
  return (
    <div>
      <Navbar title={title} />
      {children}
    </div>
  );
}
