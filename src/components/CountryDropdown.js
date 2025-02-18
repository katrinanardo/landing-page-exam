import React, {useState,useEffect, useContext} from 'react';

import {RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';

import {Menu} from '@headlessui/react';
import {HouseContext} from './HouseContext';


const CountryDropdown = () => {
  const {country, setCountry,countries} = useContext(HouseContext);
  
  const [isOpen, setIsOpen] = useState(false);


  return(
     <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)}  className='dropdown-btn'>
        <div>
          <div>Location</div>
          <div className='text-[15px] font-medium leading-tight'>{country}</div>
          
          
        </div>
          {
            isOpen ? (
              <RiArrowUpSLine className='dropdown-icon-primary' />
            ) : (
              <RiArrowDownSLine className='dropdown-icon-primary' />
            )
          }
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {countries.map((country, index)=>{
          return (
            <Menu.Item
            onClick={() => setCountry(country)}
             className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
              {country}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
