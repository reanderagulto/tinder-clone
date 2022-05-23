import React from 'react'
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import { Button, Icon, IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className="header">
        <IconButton>
            <PersonIcon fontSize="large" className="header__icon"/>
        </IconButton>
        <Button>
            <img
                className="header__logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon-3.png"
                alt=""/>
        </Button>
        <IconButton>
            <ForumIcon fontSize="large" className="header__icon"/>
        </IconButton>
    </div>
  )
}

export default Header
