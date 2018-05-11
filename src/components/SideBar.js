import React from 'react'
import {Link} from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const SideBar = ({onRequestSideBarChange, isSideBarOpen}) => (
    <Drawer
        docked={false}
        onRequestChange={onRequestSideBarChange}
        open={isSideBarOpen}
    >
        <Link to={'/'}><MenuItem onClick={onRequestSideBarChange}>Dashboard</MenuItem> </Link>
        <Link to={'/ListOfResults'}><MenuItem onClick={onRequestSideBarChange}>Listen of results</MenuItem> </Link>
        <Link to={'/RegistrationForm'}><MenuItem onClick={onRequestSideBarChange}>Registration form</MenuItem> </Link>
        <Link to={'/ResultsPage'} ><MenuItem onClick={onRequestSideBarChange}>Result page</MenuItem> </Link>
        <Link to={'/SearchForm'}><MenuItem onClick={onRequestSideBarChange}>Search form</MenuItem> </Link>
    </Drawer>
)

export default SideBar