import React from 'react'
import styled from 'styled-components'
import Bodinovklon from '../img/ytclone.jpg'
import HomeIcon from '@mui/icons-material/Home'
import ExploreIcon from '@mui/icons-material/Explore'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import HistoryIcon from '@mui/icons-material/History'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import SportsIcon from '@mui/icons-material/Sports'
import GamesIcon from '@mui/icons-material/Games'
import TheatersIcon from '@mui/icons-material/Theaters'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import SettingsIcon from '@mui/icons-material/Settings'
import ReportIcon from '@mui/icons-material/Report'
import HelpIcon from '@mui/icons-material/Help'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Link } from 'react-router-dom'


const Container = styled.div`
    flex: 1;
    background-color : ${({theme}) => theme.bgLighter};
    height: 100vh;
    color: ${({theme}) => theme.text}; 
    font-size: 13px;
    position: sticky;
    top: 0;
`;

const Wrapper = styled.div`
   padding: 15px 26px;
`;

const Logo = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
   font-weight: bold;
   margin-bottom: 10px;
`;

const Img = styled.img`
    height: 25px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 3px 0px;
`;

const Hr = styled.hr`
    margin: 12px 0px;
    border: 0.5px solid ${({theme}) => theme.soft};
`;

const Login = styled.div``;

const Button = styled.button`
    padding: 5px 12px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 16px;
`;

const Menu = ({darkMode, setDarkMode}) => {
    return (
        <Container>
            <Wrapper>
            <Link to = "/" style = {{textDecoration:"none", color:"inherit"}}>
                <Logo>
                    <Img src ={Bodinovklon}/>
                    Btube
                </Logo>
            </Link> 
                <Item>
                    <HomeIcon/>
                    Home
                </Item>
                <Item>
                    <ExploreIcon/>
                    Explore
                </Item>  
                <Item>
                    <SubscriptionsIcon/>
                    Subscriptions
                </Item>  
                <Hr />
                <Item>
                    <LibraryMusicIcon/>
                    Library
                </Item>  
                <Item>
                    <HistoryIcon/>
                    History
                </Item> 
                <Hr /> 
                <Login>
                    Sign in to like videos, comment and subscribe!
                    <Button>
                        <AccountCircleIcon/>
                        SIGN IN
                    </Button>
                </Login>
                <Hr />
                <Title>
                    MOST POPULAR
                </Title>
                <Item>
                    <MusicNoteIcon/>
                    Music
                </Item>  
                <Item>
                    <SportsIcon/>
                    Sports
                </Item>  
                <Item>
                    <GamesIcon/>
                    Gaming
                </Item>  
                <Item>
                    <TheatersIcon/>
                    Movies
                </Item>  
                <Item>
                    <NewspaperIcon/>
                    News
                </Item>  
                <Item>
                    <LiveTvIcon/>
                    Live
                </Item>  
                <Hr/>
                <Item>
                    <SettingsIcon/>
                    Settings
                </Item> 
                <Item>
                    <ReportIcon/>
                    Report
                </Item>  
                <Item>
                    <HelpIcon/>
                    Help
                </Item>  
                <Item onClick = {() => setDarkMode(!darkMode) }>
                    <SettingsBrightnessIcon/>
                    {darkMode ? "Light" : "Dark"} Mode
                </Item> 
            
            </Wrapper>
        </Container>
    )

}

export default Menu