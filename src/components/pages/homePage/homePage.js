import {useState} from 'react';
import {SideNav} from '../../sideNav/sideNav';
import { useSpring, animated, config } from 'react-spring'
import '../../../assets/css/homeSection.css';


export const HomePage = () =>{

    const homeTitle = useSpring({
        to: { marginLeft: 635 },
        from: { marginLeft: -1000 },
        reset: false,
        delay: 400,
        config: config.molasses,
    })

    const homeContent = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: false,
        delay: 600,
        config: config.molasses,
    })

    return (
        <>
            <div className='h-screen bg-gray-800'>
                <div className='flex'>
                    <SideNav/>
                </div>
                <div className='font-invasion'>
                    <animated.div className='homeH1' style={homeTitle}>Tyler Ross</animated.div>
                    <animated.div className='homeP' style={homeContent}>A passionate programmer</animated.div>
                    <animated.div className='homeP' style={homeContent}>I program good</animated.div>
                </div>
            </div>
        </>
    )
}
