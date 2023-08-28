import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as RiIcons from "react-icons/ri"
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const SideBarData=[
    {
        title:"Home",
        path:"/home",
        icon:<HomeOutlinedIcon/>,
        /*iconClosed:<RiIcons.RiArrowDownFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,*/
        /*subNav:[
            {
                title:"Users",
                path:"/overview/users",
                icon:<IoIcons.IoIosPaper/>,
            },
            {
                title:"Revenue",
                path:"/overview/revenue",
                icon:<IoIcons.IoIosPaper/>,
            },
        ]*/
    },
    {
        title:"Profile",
        path:"/profile",
        icon:<AccountBoxOutlinedIcon/>,
        /*iconClosed:<RiIcons.RiArrowDownFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,*/
        /*subNav:[
            {
                title:"Reports",
                path:"/reports/reports1",
                icon:<IoIcons.IoIosPaper/>,
            },
            {
                title:"Reports 2",
                path:"/reports/reports2",
                icon:<IoIcons.IoIosPaper/>,
            },
            {
                title:"Reports 3",
                path:"/reports/reports3",
                icon:<IoIcons.IoIosPaper/>,
            },
        ]*/
    },
    {
        title:"Employee",
        path:"/employee",
        icon:<BadgeOutlinedIcon/>,
        /*iconClosed:<RiIcons.RiArrowDownFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,*/
        /*subNav:[
            {
                title:"Products",
                path:"/products/products1",
                icon:<IoIcons.IoIosPaper/>,
            },
            {
                title:"Products 2",
                path:"/products/products2",
                icon:<IoIcons.IoIosPaper/>,
            },
            {
                title:"Products 3",
                path:"/products/products3",
                icon:<IoIcons.IoIosPaper/>,
            },
        ]*/
    },
]