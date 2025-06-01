import styled from "styled-components";
import {topicsStyles} from "../../topics/topics.js";

export const SkeletonCard = styled.div`
    width: 220px;
    height: 130px;
    border-radius: 12px;
    margin: 15px 13px 19px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    background-color: #e2e8f0;
    animation: pulse 1.5s infinite ease-in-out;

    @keyframes pulse {
        0% {
            opacity: 1
        }
        50% {
            opacity: 0.4
        }
        100% {
            opacity: 1
        }
    }
`

export const SCardsItem = styled.div`
    padding: 5px;
    animation-name: card-animation;
    animation-duration: 500ms;
    animation-timing-function: linear;
`

export const SCardsCard = styled.div`
    width: 220px;
    height: 130px;
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;

    //@media screen and (max-width: 1200px)
    // width: 220px;
    //     height: 130px;
    //     background-color: #FFFFFF;
    //     border-radius: 10px;
    //     display: flex;
    //     flex-direction: column;
    //     align-items: flex-start;
    //     justify-content: stretch;
    //     padding: 15px 13px 19px;
`

export const SCardGroup = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const STopicText = styled.p`
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
`

export const SCardTheme = styled.div`
    width: auto;
    height: 20px;
    padding: 5px 14px;
    border-radius: 18px;
    background-color: ${({$topicColor}) =>
            topicsStyles[$topicColor]?.backgroundColor || "#ccc"};

    ${STopicText} {
        color: ${({$topicColor}) => topicsStyles[$topicColor]?.color || "#ccc"
        }

`

export const SCardButton = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2px;

    div {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #94A6BE;
    }
`

export const SCardContent = styled.div`
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`

export const SCardTitle = styled.h3`
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #000000;
    margin-bottom: 10px;
`

export const SCardDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    p {
        margin-left: 6px;
        font-size: 10px;
        line-height: 13px;
        color: #94A6BE;
        letter-spacing: 0.2px;
    }
`