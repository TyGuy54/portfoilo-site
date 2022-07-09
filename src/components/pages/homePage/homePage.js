import {useState} from 'react';
import {SideNav} from '../../sideNav/sideNav';
import { useSpring, animated, config } from 'react-spring'
import '../../../assets/css/util.css';


export const HomePage = () =>{

    const homeTitle = useSpring({
        to: { marginLeft: 850 },
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
                <div className='h-screen bg-gray-800'>
                    <div className='font-invasion text-[90px] 
                                text-white text-center'
                    >
                    <h1 className='text-shadow pl-64'>What I Specialize In</h1>
                        <div className='flex'>
                            <div className='container text-[30px]'>
                                <p className='text-shadow text-left pl-64 pt-10'>
                                    Put a Python symbol here
                                </p>
                            </div>
                            <div className='container text-[30px]'>
                                <p className='text-shadow text-left pl-64 pt-10'>
                                    Put a React symbol here
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
