import React from 'react';
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import './Header.css';

export function Header() {
  return (
    <div className='container'>
      <div className='menu'>
        <IoMenu color='white' fontSize="28px" />
      </div>
      <div className='search'>
        <input type='text' placeholder='Search...' />
        <FaSearch color='#48C067' fontSize="16px" className='Search-icon'/>
      </div>
    </div>
  );
}