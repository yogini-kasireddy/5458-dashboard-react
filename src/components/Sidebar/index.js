import React from 'react'
import Button from '@mui/material/Button';
import { RxDashboard } from "react-icons/rx";
import { FaGraduationCap } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import { AiOutlineMessage } from "react-icons/ai";
import { IoHelpCircleSharp } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
      <ul>
          <li>

            <Button className="w-100">
            <span className="icon"><RxDashboard /></span>
            DashBoard
            </Button>
            
            </li>
            <li>
            <Button className="w-100">
            <span className='icon'><FaGraduationCap /></span>
              interships
            </Button>
            </li>
            <li>
            <Button className="w-100">
            <span className='icon'><SiCoursera /></span>
              courses
            </Button>
            </li>
            <li>
            <Button className="w-100">
            <span className='icon'><AiOutlineMessage/></span>
              messages
            </Button>
            </li>
            <li>
            <Button className="w-100">
            <span className='icon'><FaGraduationCap/></span>
              interviews
            </Button>
            </li>
            <li>
            <Button className="w-100">
            <span className='icon'><FaGraduationCap/></span>
              mentorship
            </Button>
            </li>
            <li>
            <Button className="w-100">
            <span className='icon'><IoHelpCircleSharp/></span>
              help
            </Button>
            </li>
        </ul>
        <div className='logoutWrapper'>
        <div className="logoutBox">
        <Button variant="contained"><AiOutlineLogout/>Logout</Button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
