import React from 'react';
import {SideNavData} from './sideNavData';
// import {Link} from 'react-router-dom'
import logo from '../../assets/images/81783445.png'
import '../../assets/css/sideNav.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';


export const SideNav = () => {
    return (
        <>  
            <div className="sidenav">
                <div className="sidenav__logo">
                    <p>Tyler Ross</p>
                </div>
                {/* <div className="underline">
                    <p className="sidenav__undertext">A passionate full stack developer</p>
                </div> */}
                {
                    SideNavData.map((item, index) => (
                        <li key={index} className={item.cName}>
                            {/* <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link> */}
                            <a>
                                <span>{item.title}</span>
                            </a>
                        </li>
                    ))
                }
                <div className="sidenav__img">
                    <img src={logo} alt="cool pixel are"/>
                </div>
            </div>
        </>
    )
}