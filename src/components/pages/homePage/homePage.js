import {SideNav} from '../../sideNav/sideNav';
import {SiPython, SiReact, SiRust} from 'react-icons/si';
import { useSpring, animated, config } from 'react-spring'
import '../../../assets/css/util.css';


export const HomePage = () =>{

    const homeTitle = useSpring({
        to: { marginLeft: 648 },
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
                </div>
                <div className='h-screen bg-gray-800'>
                    <div className='font-invasion text-[90px] 
                                text-white text-center'
                    >
                    <h1 className='text-shadow pl-[60px]'>What I Specialize In</h1>
                        <div className='flex pl-52'>
                            <div className='container text-[30px]'>
                                <div className='text-left pl-64 pt-10'>
                                    <SiPython size={"150"}/>
                                </div>
                            </div>
                            <div className='container text-[30px]'>
                                <div className='text-left pl-[125px] pt-10'>
                                    <SiRust size={"150"}/>
                                </div>
                            </div>
                            <div className='container text-[30px]'>
                                <div className='text-left pl-50 pt-10'>
                                        <SiReact size={"150"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
