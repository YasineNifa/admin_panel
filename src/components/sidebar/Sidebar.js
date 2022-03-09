import React from 'react'
import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className='logo'>Admin Panel</span>    
        </div>
        <hr/>{/*add an horizontal line*/}
        <div className='center'>
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{ textDecoration: "none" }}>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                </Link>
                <p className="title">LISTS</p>
                <Link to="/users" style={{ textDecoration: "none" }}>
                <li>
                    <PersonOutlinedIcon className="icon"/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to="/products" style={{ textDecoration: "none" }}> 
                <li>
                    <AddBusinessIcon className="icon"/>
                    <span>Products</span>
                </li>
                </Link>
                <li>
                    <CreditCardIcon className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <QueryStatsIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <LocalHospitalIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountBoxIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>    
        </div>
        <div className='bottom'>
            <div
            className='colorOption'
            ></div>
            <div
            className='colorOption'
            ></div>
            <div
            className='colorOption'
            ></div>
        </div>  
    </div>
  )
}

export default Sidebar