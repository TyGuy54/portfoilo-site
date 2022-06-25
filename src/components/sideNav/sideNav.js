import React from 'react';
import {BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs';
import {AiFillHome} from 'react-icons/ai';
// import {Link} from 'react-router-dom'
import logo from '../../assets/images/81783445.png'

const SideBarIcon = ({icon, title}) => (
    <>
        <div className="sidenav-icon">
            {icon} {title}
        </div>
    </>
)

export const SideNav = () => {
    return (
        <>  
          <div className="fixed top-0 left-0 h-screen w-48 m-0
                            flex flex-col
                            bg-gray-900 text-white shadow-lg">
                                
            <SideBarIcon icon={<AiFillHome size={"28"}/>} title="Home"/>
            <SideBarIcon icon={<BsPlus size={"28"}/>} title="About"/>
            <SideBarIcon icon={<BsFillLightningFill size={"28"}/>} title="Projects"/>
            {/* <SideBarIcon icon={<FaPoo size={"28"}/>}/> */}
          </div>
        </>
    )
}