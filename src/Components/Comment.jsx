import React from "react";
import styled from "styled-components";
import ayanokoji from '../img/ayanokoji.jpg'

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({ theme }) => theme.text};

`;

const userName = styled.span`
    font-size: 12px;
    font-weight: 500;
`;

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.textSoft};
    margin-left: 5px;

`;

const Text = styled.span`
    font-size: 14px;

`;

const Comment = () => {
    return (
        <Container>
            <Avatar src = {ayanokoji}/>
            <Details>
                <userName>Bodin Orlandic <Date> prije 1 dana</Date></userName>
                <Text>neki tekst.</Text>
            </Details>
        </Container>
    )
}

export default Comment