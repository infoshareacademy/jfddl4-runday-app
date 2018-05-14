import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const SideBar = ({ onRequestSideBarChange, isSideBarOpen }) => (
    <Drawer
        docked={false}
        onRequestChange={onRequestSideBarChange}
        open={isSideBarOpen}
    >
        <Link to={'/'} style={{ textDecoration: 'none' }}><MenuItem onClick={onRequestSideBarChange}>Dashboard</MenuItem> </Link>    
        <Link to={'/CreateNewRun'} style={{ textDecoration: 'none' }}><MenuItem onClick={onRequestSideBarChange}>Create new run</MenuItem> </Link>
        <Link to={'/ListOfRun'} style={{ textDecoration: 'none' }}><MenuItem onClick={onRequestSideBarChange}>Schow List Of Runs</MenuItem> </Link>
    </Drawer>
)

export default SideBar