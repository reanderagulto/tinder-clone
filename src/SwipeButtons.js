import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { Button, IconButton } from '@mui/material';

function SwipeButtons() {
  return (
    <div className="swipeButtons">
        <IconButton className="swipeButtons__repeat">
            <ReplayIcon fontSize="large"></ReplayIcon>
        </IconButton>
        <IconButton className="swipeButtons__left">
            <CloseIcon fontSize="large"></CloseIcon>
        </IconButton>
        <IconButton className="swipeButtons__star">
            <StarRateIcon fontSize="large"></StarRateIcon>
        </IconButton>
        <IconButton className="swipeButtons__right">
            <FavoriteIcon fontSize="large"></FavoriteIcon>
        </IconButton>
        <IconButton className="swipeButtons__lightning">
            <FlashOnIcon fontSize="large"></FlashOnIcon>
        </IconButton>
    </div>
  )
}

export default SwipeButtons