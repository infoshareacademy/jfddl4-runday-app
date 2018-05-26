import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import { ListItem } from 'material-ui/List'
import ShowChart from 'material-ui/svg-icons/editor/insert-chart'
import AddLocation from 'material-ui/svg-icons/maps/pin-drop'
import ImageSearch from 'material-ui/svg-icons/notification/event-available'

const SideBar = ({ onRequestSideBarChange, isSideBarOpen }) => (
    <Drawer
        docked={false}
        onRequestChange={onRequestSideBarChange}
        open={isSideBarOpen}
    >
        <h1 style={{ textAlign: 'center' }}>RUN DAY</h1>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
            <ListItem leftIcon={<ShowChart />} onClick={onRequestSideBarChange}>Dashboard</ListItem >
        </Link>
        <Link to={'/CreateNewRun'} style={{ textDecoration: 'none' }}>
            <ListItem leftIcon={<AddLocation />} onClick={onRequestSideBarChange}>Create New Run</ListItem>
        </Link>
        <Link to={'/ListOfRun'} style={{ textDecoration: 'none' }}>
            <ListItem leftIcon={<ImageSearch />} onClick={onRequestSideBarChange}>Show List Of Runs</ListItem>
        </Link>
    </Drawer>
)

export default SideBar