import React from "react"
import styled from "styled-components"
import ayanokoji from '../img/ayanokoji.jpg'
import { Link } from "react-router-dom";
import windbreaker from '../img/windbreaker.jpg'

const Container = styled.div`
    width: 360px;
    margin-bottom: 35px;
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    height: 202px;
    background-color: #999;
`;

const Details = styled.div`
    display: flex;
    margin-top: 14px;
    gap: 10px;

`;

const ChannelImage = styled.img`
    width:40px;
    height:40px;
    border-radius: 50%;
    background-color: #999;
    margin-top: 10px;
`;

const Texts = styled.div`

`;

const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
    margin: 9px 0px;
`;

const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
    margin: 9px 0px;
`;

const Info = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`;


const Card = () =>{
    return (
        <Link to = "/video/test" style = {{textDecoration:"none"}}>
        <Container>
            <Image src = {windbreaker}/>
            <Details>
             <ChannelImage src = {ayanokoji} />
                <Texts>
                    <Title>Epizoda 1</Title>
                    <ChannelName>hurkani</ChannelName>
                    <Info>695,546 views 1 day ago</Info>
                </Texts>
            </Details>
        </Container>
        </Link>


    );
};

export default Card