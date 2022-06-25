import {useState} from 'react';
import logo from '../../../assets/images/81783445.png'
import '../../../assets/css/util.css';

export const AboutPage = () => {
    return (
        <>
          <div className='h-screen bg-gray-700'>
            <div className='font-invasion text-[90px] 
                        text-white text-center'
            >
              <h1 className='text-shadow text-left pl-52'>About</h1>
              <div className='flex'>
                  <div className='container text-[30px]'>
                    <p className='text-shadow text-left pl-52 pt-10'>
                      Ive loved programming ever since I was 13,
                      It all started when my parent gave me my first laptop.
                      I saw a video online of this guy making a video game and I wanted to do the same!
                      From then on Ive wanted to learn everything that is to know about programming.
                    </p>
                  </div>
                  <div className='container pl-72'>
                    <img className='w-3/4' src={logo} alt={'The coolest dude here'}/>
                  </div>
                </div>
              </div>
          </div>
      </>
    )
}
