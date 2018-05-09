import React from 'react'
import {Link} from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const SideBar = (props) => (
    <Drawer
        docked={false}
        onRequestChange={props.onRequestSideBarChange}
        open={props.isSideBarOpen}
    >
        <Link to={'/'}><MenuItem>Dashboard</MenuItem> </Link>
        <Link to={'/ListOfResults'}><MenuItem>Listen of results</MenuItem> </Link>
        <Link to={'/RegistrationForm'}><MenuItem>Registration form</MenuItem> </Link>
        <Link to={'/ResultsPage'}><MenuItem>Result page</MenuItem> </Link>
        <Link to={'/SearchForm'}><MenuItem>Search form</MenuItem> </Link>
    </Drawer>
)

export default SideBar