import { Container } from '@material-ui/core';
import styled from "styled-components";
import { Grid } from '@material-ui/core';

export const PropertyMain = styled.section`
    background-color: #f8f9fca6;
    padding: 120px 0 90px 0;
`;
export const PropertyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
`;

export const ContainerWrapper = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Row = styled(Grid)`
    display: flex;
    flex-direction: ${({ row }) => row ?  'row !important' : 'column !important'}; 
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: ${({ paddingTop }) => paddingTop ? '10px  0 !important' : 'none'};
    .cond-paimenet-title
    {
        font-size: 1.6rem;
    font-family: 'Open Sans',sans-serif;
    color: #3E416D;
    margin: 0 0 10px 0;
    box-sizing: border-box;
    padding: 5px;
    }
`;

export const PropertyInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`;

export const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    
`;

export const CondtionPaimentContainer = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 10px 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgb(100 100 111 / 10%) 0px 7px 29px 0px;
    box-sizing: border-box;
`;

export const PaimentItem = styled.p`
    padding: 10px 18px;
    border-radius: 25px;
    border: 1px solid #E1F8F1;
    background-color: #E1F8F1;
    font-family: 'rubik', sans-serif;
    margin-right: 8px;
`;