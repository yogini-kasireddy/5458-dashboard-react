import React,{useState} from 'react';

import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { IoShieldHalfSharp } from "react-icons/io5";

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';

const Header=()=>
{
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };
   return(
    <>
      <header className="row d-flex align-items-center">
        <div className="container-fluid w-100">
            <div className="row d-flex align-items-center w-100">
            {/* Logo wrapper*/}
            <div className="col-sm-2 part1">  
                <span className="ml-2">Amile</span>
            </div>
            <div className="col-sm-3 d-flex align-items-center part2 pl-4">
                 <Button className="rounded-circle mr-3"><MdMenuOpen/></Button>
                 <SearchBox/>    
            </div> 
            <div className="col-sm-7 d-flex align-items-center justify-content-end part3 pl-4">
            <Button className="rounded-circle mr-3"><MdOutlineLightMode/></Button>
            <Button className="rounded-circle mr-3"><FaRegBell/></Button>
            <Button className="rounded-circle mr-3"><AiOutlineMessage/></Button>
            
            <div className="myAccWrappper">
            <Button className="myAcc d-flex align-items-center"
            onClick={handleOpenMyAccDrop}>
            
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img src="https://yt3.ggpht.com/yti/ANjgQV8o4R3r61DocNKC7tWs43p6uEM953AY3eSo1DLhX3M=s88-c-k-c0x00ffffff-no-rj-mo"/>
                    </span>
                  </div>
            

             <div className="userInfo">
                  <h4>yogini</h4>
                   <p className="mb-0">@yogini</p>
             </div>
             </Button>
             <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleCloseMyAccDrop}
        onClick={handleCloseMyAccDrop}
          
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
      
        <MenuItem onClick={handleCloseMyAccDrop}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
            My account
        </MenuItem>
        <MenuItem onClick={handleCloseMyAccDrop}>
          <ListItemIcon>
            <IoShieldHalfSharp/>
          </ListItemIcon>
          Reset Password
        </MenuItem>
        <MenuItem onClick={handleCloseMyAccDrop}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
            </div>
            </div>
        </div>
        </div>
      </header>
    </>
   )
}
export default Header;