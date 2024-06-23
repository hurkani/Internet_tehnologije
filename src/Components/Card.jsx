import React from "react"
import styled from "styled-components"
import ayanokoji from '../img/ayanokoji.jpg'
import { Link } from "react-router-dom";
import windbreaker from '../img/windbreaker.jpg'

const Container = styled.div`
    width: ${(props) => props.type !== "sm" && "380px"};
    margin-bottom: ${(props) => props.type === "sm" ? "10px" : "45px"};
    cursor: pointer;
    display: ${(props) => props.type === "sm" && "flex"};
    gap: 8px;
`;

const Image = styled.img`
    width: 100%;
    height: ${(props) => props.type === "sm" ? "100px" : "202px"};
    background-color: #999;
    flex: 1;
`;

const Details = styled.div`
    display: flex;
    margin-top: ${(props) => props.type !== "sm" && "16px"};
    gap: 10px;
    flex: 1;
`;

const ChannelImage = styled.img`
    width:45px;
    height:45px;
    border-radius: 50%;
    background-color: #999;
    margin-top: 1px;
    display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div`

`;

const Title = styled.h1`
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
    margin: 1px 0px;
`;

const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
    margin: 5px 0px;
`;

const Info = styled.div`
    font-size: 13px;
    color: ${({ theme }) => theme.textSoft};
`;


const Card = ({type }) =>{
    return (
        <Link to = "/video/test" style = {{textDecoration:"none"}}>
        <Container type={type}>
            <Image type={type} src = {windbreaker}/>
            <Details type={type}>
             <ChannelImage type={type} src = {ayanokoji} />
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