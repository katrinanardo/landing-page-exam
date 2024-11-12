import React from 'react';
import {Link} from 'react-router-dom';


import ViewListings from './ViewListings';

const Banner = () => {
  return <section className='h-full max-h-[640px]'>
    <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-transparent z-0"></div>
    
    <div className="relative z-10 p-8 pb-0">
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[170px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text-4xl text-white lg:text-[64px] font-semibold leading-none mb-6 max-w-full lg:max-w-[35%]'>Beutiful homes made for you</h1>
        <p className='max-w-[480px] mb-8 text-white'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan dui sed orci fringilla aliquet ac in orci. Pellentesque gravida magna a luctus molestie. In aliquam odio eu arcu laoreet, in tempor purus pellentesque.
        </p>
      </div>
      </div>
      <div Link to='/warahil'>
       <ViewListings/>
      </div>
      
    </div>
    
  </section>;
};

export default Banner;
