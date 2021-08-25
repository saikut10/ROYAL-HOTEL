import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header_icon" src="https://cfunity-school-logos.nfhsnetwork.com/v1/71ebebf118594346b218d6d35eb4b6aa.png" alt="logo"/>
            </Link> 
            <div className="header_center">
                <input type="text"/>
                <SearchIcon />
            </div> 
            <div className="header_right">
                <Avatar />
            </div> 
        </div>
    )
}

export default Header
