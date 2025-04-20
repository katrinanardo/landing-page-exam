import React from 'react';

import {Link} from 'react-router-dom';
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return ( 
    
  <header className='py-2'>
    
    <div className="relative z-10 p-8">
    <div className="container mx-auto flex justify-between items-center">
    <Link to='/'>
      <img src={Logo} alt='' />
    </Link>
      <div className='flex items-center gap-6'>
      <Link className='hover:text-violet-900 transition' to=''>Home</Link>
      <Link className='hover:text-violet-900 transition' to=''>About Us</Link>
      <Link className='hover:text-violet-900 transition' to=''>Listings</Link>
      <Link className='hover:text-violet-900 transition' to=''>Contact</Link>
        <Link className='bg-orange-600 hover:bg-orange-800 text-white md:px-4 md:py-3 px-2 py-2 md:text-[16px] text-[12px] rounded-tr-[20px] transition'to=''>Work with us</Link>

      </div>
    </div>
    </div>
  </header>
  );
};

export default Header;
