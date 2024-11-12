import React from 'react';

const ContentTop = () => {
  return <section className='h-full max-h-[640px] mb-8 lg:mb-52 bg-white'>
    <div className='flex flex-col lg:flex-row'>
      <div className ='hidden lg:flex justify-start items-start pt-44'>
        <img className='h-[550px] rounded-tr-[50px] shadow-lg lg:shadow-2xl lg:ml-[-40px]' src='https://images.pexels.com/photos/8560041/pexels-photo-8560041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
      </div>
    <div className='flex flex-col'>
      <div className='items-center flex flex-col lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
      <div class="h-[5px] w-[150px] bg-gradient-to-r from-orange-500 to-green-500 mb-10"></div>

        <h1 className='text-4xl lg:text-[42px] font-semibold leading-none mb-6'>You're in good hands</h1>
        <p className='max-w-[480px] mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam eros, auctor nec mi quis, suscipit fringilla neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis efficitur risus. Aliquam dui velit, sodales sit amet pretium scelerisque, accumsan ac turpis. Vestibulum vel semper nulla. Aliquam et eros vel felis.</p>
        <button class="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
      Learn more
    </button>
      </div>
      </div>

    </div>
    
  </section>;
};

export default ContentTop;
