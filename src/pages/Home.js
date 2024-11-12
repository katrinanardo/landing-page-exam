import React from 'react';
import {Link} from 'react-router-dom';


import Header from '../components/Header';

import Banner from '../components/Banner';
import ContentTop from '../components/ContentTop';
import Search from '../components/Search';
import HouseList from '../components/HouseList';
import ContentLast from '../components/ContentLast';


const Home = () => {
  return <div className='min-h-[1880px]'>
    <div className="relative h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage:
"url('https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') ", }}>
    <Header/>
    <Banner />
    </div>
    <ContentTop/>
    <Search />
    <HouseList />
    <ContentLast/>
    </div>
};

export default Home;
