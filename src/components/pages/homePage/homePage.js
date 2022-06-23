import {useState} from 'react';
import {SideNav} from '../../sideNav/sideNav';
import { useSpring, animated, config } from 'react-spring'
import '../../../assets/css/homeSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';


export const HomePage = () =>{
    // const [dispalyTitle, setDispalyTitle] = useState(false);

    // const homeTitle  = useSpring({
    //     opacity: dispalyTitle ? 1 : 0,
    //     marginTop: dispalyTitle ? 0 : -500
    //   });

    const homeTitle = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
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
            <SideNav/>
            <Container style={{maxWidth: '1006px'}}>
                <div className='homeBG'></div>
                <Col className='homeContent'>
                    <animated.div className='homeH1' style={homeTitle}>Tyler Ross</animated.div>
                    <animated.div className='homeP' style={homeContent}>A passionate programmer</animated.div>
                </Col>
            </Container>
        </>
    )
}