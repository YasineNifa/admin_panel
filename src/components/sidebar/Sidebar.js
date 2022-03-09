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
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className='logo'>Admin Panel</span>    
        </div>
        <hr/>{/*add an horizontal line*/}
        <div className='center'>
            <ul>
                <li>
                    <DashboardIcon />
                    <span>Dashboard</span>
                </li>
                <li>
                    <PersonOutlinedIcon/>
                    <span>Users</span>
                </li> 
                <li>
                    <AddBusinessIcon/>
                    <span>Products</span>
                </li> 
                <li>
                    <CreditCardIcon/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon/>
                    <span>Delivery</span>
                </li>
                <li>
                    <QueryStatsIcon/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveIcon/>
                    <span>Notifications</span>
                </li>
                <li>
                    <LocalHospitalIcon/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyIcon/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon/>
                    <span>Settings</span>
                </li>
                <li>
                    <AccountBoxIcon/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon/>
                    <span>Logout</span>
                </li>
            </ul>    
        </div>
        <div className='bottom'>color options</div>  
    </div>
  )
}

export default Sidebar