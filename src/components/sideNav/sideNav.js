import React from 'react';
import {Link} from 'react-scroll';
import {BsPlus, BsFileEarmarkPersonFill} from 'react-icons/bs';
import {AiFillHome, AiFillGithub, AiOutlineUserAdd} from 'react-icons/ai';
// import {Link} from 'react-router-dom'


const SideBarIcon = ({icon, title}) => (
    <>
        <div className="space-x-10 sidenav-icon">
            {icon} {title}
        </div>
    </>
)

// const print = (e) => {
//     e.preventDefault();
//     console.log("Clicked here")
// }


export const SideNav = () => {
    return (
        <>  
          <div className="fixed top-0 left-0 h-screen w-60 m-0
                            flex flex-col
                            bg-gray-900 text-white shadow-lg font-invasion">
                                
            <Link to='home' spy={true} smooth={true} offset={50} duration={500}>
                <SideBarIcon icon={<AiFillHome size={"28"}/>} title="Home"/>
            </Link>
            <Link to='about' spy={true} smooth={true} offset={50} duration={500}>
                <SideBarIcon icon={<BsFileEarmarkPersonFill size={"28"}/>} title="About"/>
            </Link>
            {/* <SideBarIcon icon={<AiOutlineUserAdd size={"28"}/>} title="Interests"/> */}
            <Link to='projects' spy={true} smooth={true} offset={50} duration={500}>
                <SideBarIcon icon={<AiFillGithub size={"28"}/>} title="Projects"/>
            </Link>
            {/* <SideBarIcon icon={<FaPoo size={"28"}/>}/> */}
          </div>
        </>
    )
}
