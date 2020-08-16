import React from 'react'
import './Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar
                    className="header__avatar" 
                    alt={"user?.displayName"}
                    src={"user?.photoURL"} 
                />
                {/* Time icon*/}
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                {/* Search icon*/}
                <SearchIcon />
                <input placeholder="Search program entry"/>
                {/* Input */}
            </div>
            <div className="header__right">
                {/* help icon */}
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header






