import styled from "styled-components";
import { Row } from "../../heroSection/Hero.styled";

export const Wrapper = styled.div`
    display: flex;
    margin: 0px 20px;
    border-radius: 15px;
    height: 870px;
    width: 99%;
    margin-right:15px;
    background: linear-gradient(135deg, rgba(26,43,65,1) 0%, rgba(28,20,38,1) 61%);
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

export const SideMsgBar = styled.div`
    background-color: transparent;
    padding: 30px;
    height: 100%;
    border-radius: 15px;

    .header{
        display:flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        span{
            font-size:16px;
            font-family: "poppins", sans-serif;
            color:#fff;
        }
    }
`;

export const MsgRow = styled(Row)`
    width: 100%;
    height: 100%;
    justify-content: ${({ start }) => start ? "start" : "center"};
    align-items: ${({ end }) => end ? "end" : "center"};
`;

export const MsgItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 25px 5px;
    cursor: pointer;
    padding: 15px;
    border-radius: 15px;
    transition: all 0.2s ease-in-out;
    &:hover{
        background: linear-gradient(135deg, rgba(26, 43, 65,1) 0%, rgba(26, 43, 65,0.4) 75%);
    }
`;

export const ProfilePic = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 45px;
    height: 45px;
    margin-right: 10px;
    border-radius: 20%;
    background-color: #000;
    img {
            max-width: 100%;
            height: 100%;
            border-radius: 5px;
        }
`;

export const MsgInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    > div {
        display: flex;
        width: 100%;
        font-family: "Open Sans", sans-serif;
        font-size:15px;
        justify-content: space-between;
        > .time {
            color:#737278;
            font-size: 14px;
        }
    }
`;

export const MsgSender = styled.span`
    color: #89839b;
    font-family: "Open Sans", sans-serif;
    font-size:15px;
    font-weight: 500;
    margin-bottom: 5px;
`;

export const MsgBrief = styled.p`
    color: #9ba6b2;
    font-family: "Poppins", sans-serif;
    font-size:13px;
    max-width: 260px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden; 

`;

export const MessageContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: Transparent;
    width: 100%;
    margin-left: 20px;
    border-left: 2px solid #323B4D;
    padding: 55px 45px;
    color: #000;
    > .receiver-username {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        > h3 {
            margin-top: 1%;
            font-size: 24px;
            font-family: "Poppins" , serif;
            font-weight: 400;
            color:#fff;
        }
    }
    > span {
        color:rgba(255, 255, 255, 0.6);
        font-weight: 300;
        font-family: "Poppins", sans-serif;
        font-size:13px;
        width: 100%;
        text-align: center;
        margin-top: 50px;
    }
`;

export const MessagesBox = styled.div`
    display: flex;
    flex-direction:column;
    height: 85%;
    padding: 25px 0;
    > .Wrapper-sender{
        flex-flow: row-reverse;
    }
    > .Message-Wrapper{
        display: flex;
        margin-top: 15px;
        margin: 15px 10px;
        .message {
        padding: 12px 15px;
        width: auto;
        border-radius: 0px 25px 25px 25px;
        color:rgba(0,0,0,0.8);
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size:14px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        }

        .receiver{
            background-color: #1A2B40;
            color: #9ba6b2;
        }

        .sender{
            background-color: #4E38A3;
            border-radius: 25px 0px 25px 25px !important;
            color: #fff;
            margin-right: 10px;
        }
        .msg-infos{
            display: flex;
            flex-direction: column;
            .username-date {
                margin-left: 10px;
                display: flex;
                flex-direction: row;
                span {
                    color: rgba(255,255,255,0.6);
                    font-size: 13px;
                    font-family: 'poppins', sans-serif;
                    font-weight: 300;
                }
            }
            .time{
                font-size: 11px!important;
                color: rgba(255,255,255,0.3)!important;
                margin-left: 20px;
            }
        }
    }
`;

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    input{
        background-color: transparent;
        width: 100%;
        padding: 14px 25px;
        border: 1px solid #676e74;
        border-radius: 12px;
        outline: none;
        color: #f1f1f1;
        font-size: 13px;
        &::placeholder{
            color: #f1f1f1;
            font-family: "poppins", sans-serif;
            font-size:13px;
            font-weight:300;
        }
    }
`;

export const Status = styled.div`
    width: 11px !important ;
    height:11px !important;
    background-color:${({ connected }) => connected ? "green" : "#FF5555"} ;
    border-radius: 50%;
    border: 1px solid transparent;
    margin-left: 7px;
    margin-top: 10px;
`;
