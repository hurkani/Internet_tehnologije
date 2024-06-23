import { AddTaskOutlined, ReplyOutlined, ThumbDownOffAltOutlined, ThumbUpOutlined } from "@mui/icons-material";
import React from "react"
import styled from "styled-components"
import ayanokoji from '../img/ayanokoji.jpg'
import Comments from "../Components/Comments";
import Card  from "../Components/Card";



const Container = styled.div`
    display: flex;
    gap: 24px;

`;

const Content = styled.div`
    flex: 5;
`;

const VideoWrapper = styled.div`

`;

const Title = styled.h1`
    font-size: 18px; 
    font-weight: 500;
    margin-top: 16px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled.span`
    color: ${({ theme }) => theme.textSoft};

`;

const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.text};

`;

const Button = styled.div`
    display: flex ;
    align-items: center;
    gap: 5px;

`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft} ;
`;

const Recommendation = styled.div`
    flex: 2;
`;

const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ChannelInfo = styled.div`
    display: flex;
    gap: 20px;
    
`;

const Subscribe = styled.button`
    background-color: #0000FF;
    font-weight: 500;
    color: white;
    border: none;
    border-radius: 2px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
`;

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;

`;

const ChannelDetail = styled.div`
    display: flex;
    flex-direction: column; 
    color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
    font-weight: 500;
`;

const ChannelCounter = styled.span`
    margin-top: 5px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.textSoft};
    font-size: 12px;
`;

const Description = styled.p`
    font-size: 14px;

`;



const Video = () => {
    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe 
                        width="100%"
                        height="500"
                        src="https://zoroxtv.to/watch/wind-breaker-ll1x3/ep-1"
                        title="Btube video"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        >
                        </iframe>
                </VideoWrapper>
                <Title>Wind Breaker ep 1</Title>
                <Details>
                    <Info>96K views  1 year ago</Info>
                    <Buttons>
                        <Button>
                        <ThumbUpOutlined /> 123
                        </Button>
                        <Button>
                            <ThumbDownOffAltOutlined /> Dislike
                        </Button>
                        <Button>
                            <ReplyOutlined /> Share
                        </Button>
                        <Button>
                            <AddTaskOutlined /> Save
                        </Button>
                    </Buttons>
                </Details>
                <Hr/>
                <Channel>
                    <ChannelInfo>
                        <Image src = {ayanokoji} />
                        <ChannelDetail>
                            <ChannelName>Btube</ChannelName>
                            <ChannelCounter>200k subs</ChannelCounter>
                            <Description>najbolja je uvijek prva epizoda.</Description>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>SUBSCRIBE</Subscribe>
                </Channel>
                <Hr />
                <Comments />
            </Content>  
            <Recommendation> 
                <Card type="sm"/> 
                <Card type="sm"/> 
                <Card type="sm"/> 
                <Card type="sm"/> 
                <Card type="sm"/> 
                <Card type="sm"/> 
                <Card type="sm"/> 
                <Card type="sm"/> 
            </Recommendation>       
          
        </Container>
    )
}

export default Video