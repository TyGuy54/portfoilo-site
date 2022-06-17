import React from 'react';
import {SideNavData} from './sideNavData';
// import {Link} from 'react-router-dom'
import '../../assets/css/home-page.css';
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
                        <h4 >A passionate full stack developer</h4>
                    </div>
                    <h4>Nav bar here</h4> */}
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
            </div>
        </>
    )
}