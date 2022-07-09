import React from 'react';
import {BsPlus, BsFileEarmarkPersonFill} from 'react-icons/bs';
import {AiFillHome, AiFillGithub, AiOutlineUserAdd} from 'react-icons/ai';
// import {Link} from 'react-router-dom'


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
          <div className="fixed top-0 left-0 h-screen w-60 m-0
                            flex flex-col
                            bg-gray-900 text-white shadow-lg font-invasion">
                                
            <SideBarIcon icon={<AiFillHome size={"28"}/>} title="Home"/>
            <SideBarIcon icon={<BsFileEarmarkPersonFill size={"28"}/>} title="About"/>
            <SideBarIcon icon={<AiOutlineUserAdd size={"28"}/>} title="Interests"/>
            <SideBarIcon icon={<AiFillGithub size={"28"}/>} title="Projects"/>
            {/* <SideBarIcon icon={<FaPoo size={"28"}/>}/> */}
          </div>
        </>
    )
}
