import styled from "styled-components";
import { BiBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { GiResize } from "react-icons/gi";
import { Grid } from "@material-ui/core";

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    > * {
        box-sizing: border-box;
    }
`;

export const Row  = styled(({row, paddingTop, ...props}) => <Grid {...props}/>)`
    display: flex;
    flex-direction: ${({ row }) => row ?  'row !important' : 'column !important'}; 
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: ${({ paddingTop }) => paddingTop ? '10px  0 !important' : 'none'};
`;

export const TitleWrapper = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
`;

export const Title = styled.div`
    font-family: 'Open sans';
    font-size: 1.4rem;
    width:100%;
    margin: 0;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    width:100%;
    box-sizing:border-box;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    box-shadow: rgb(100 100 111 / 10%) 0px 7px 29px 0px;
`;

export const Ville = styled.h4`
    font-size: 1.2rem;
    font-family: 'Open Sans', sans-serif;
    color: #3E416D;
    margin:0 0 10px 0;
    box-sizing:border-box;
`;

export const Address = styled.h6`
    font-size: 15px;
    font-family: 'Open Sans', sans-serif;
    color: #6B6D8F;
    margin: 0;
    font-weight: 500;
    box-sizing:border-box;
`;

export const Descr = styled.div`
    margin: 20px 0;
    width: 100%;
`;

export const Information = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    width:100%;
    height: 100px;
    box-shadow: rgb(100 100 111 / 10%) 0px 7px 29px 0px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing:border-box;
    border-right: 2px solid rgba(162, 176, 196, 0.4);
    padding: 5px 20px;
    font-family: 'Open Sans';
    font-size: 14px;
    > span {
        color:#3E416D;
        font-weight: 600;
    }
    &:last-child {
        border: 0!important;
    }
`;

export const BedIcon = styled(BiBed)`
    margin-bottom: 7px;
    font-size: 1.5rem;
    color: #E99037;
`;

export const BathIcon = styled(FaBath)`
    margin-bottom: 7px;
    font-size: 1.5rem;
    color: #39D5A2;
`;

export const MIcon = styled(GiResize)`
    margin-bottom: 7px;
    font-size: 1.5rem;
    color: #9379EE;
`;

export const DesHeader = styled.h4`
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
    color: #3E416D;
    margin:0 0 10px 0;
    box-sizing:border-box;
    padding: 5px;
`;

export const DesMain = styled.article`
    font-size: 15px;
    padding: 30px 20px;
    background-color: #fff;
    border-radius: 10px;
    font-family: 'Open Sans';
    letter-spacing: 0.5px;
    line-height: 1.7;
    text-align: justify;
    text-justify: inter-word;
    color:#6B6D8F;
    box-shadow: rgb(100 100 111 / 10%) 0px 7px 29px 0px;
`;