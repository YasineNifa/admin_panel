import React from 'react'
import "./Sidebar.scss"

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
                    <span>Dashboard</span>
                
                </li> 
                <li>
                    <span>Dashboard</span>
                
                </li> 
                <li>
                    <span>Dashboard</span>
                
                </li> 
                <li>
                    <span>Dashboard</span>
                
                </li>    
            </ul>    
        </div>
        <div className='bottom'>color options</div>  
    </div>
  )
}

export default Sidebar