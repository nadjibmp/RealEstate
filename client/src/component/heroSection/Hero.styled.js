import  styled, {css}  from 'styled-components';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Container } from '@material-ui/core';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HouseIcon from '@mui/icons-material/House';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TodayIcon from '@mui/icons-material/Today';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';

export const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(95vh );
    background-size: 100% 100%;
    position: relative;
    @media screen and  (max-width: 960px) {
    height:100vh;
    padding-bottom: 30px;
    padding-top: 120px;
}
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled(Container)`
    display: flex;
    flex-direction: column;
    padding-bottom: 8%;
`;

export const Row  = styled(({rowfilters, alignStart, column, flexstart, hide, ...props}) => <Grid {...props}/>)`
    display: flex;
    position: relative;
    justify-content: ${({flexstart}) => flexstart ? 'flex-start' : 'center'};
    align-items: ${({alignStart}) => alignStart ? 'flex-start' : 'center'};
    flex-direction: ${({column}) => column ? 'column!important' : 'row!important'};
    ${({rowfilters}) => rowfilters && css`
        display: ${({hide}) => hide ? 'none !important' : 'flex !important'};
    `}
`;

export const Shape = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: 995;
    > svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height:30px;
        > .shape-fill{
            fill: #f8f9fa;
        }
    }
@media screen and  (max-width: 960px) {
    display: none;
}
`;

export const MainHeader = styled.h1`
    font-size: 3.5rem;
    color: #f9fafb;
    text-shadow: 2px 4px 3px #1f1f1f;
    font-family: 'Poppins';
    font-weight: 500;
    letter-spacing: 1.4px;
    text-align:center;
    margin: 15px 0;
    //Media Queryyyyyyyyyyyy
    @media (max-width: 576px) { 
        font-size: 1.5rem;
        margin-top: 90px;
    }
    @media (min-width: 577px) { 
    font-size: 1.7rem;
    margin-top: 90px;
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
        font-size: 2rem;
        margin-top: 50px;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { 
        font-size: 2.5rem;
        margin-top: 50px;
    }

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) { 
        font-size: 3rem;
        margin-top: 30px;
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) { 
        font-size: 3.5rem;
        margin-top: 0px;
        }
    `;

export const SecondHeader = styled.h4`
    font-size: 1rem;
    margin: 0;
    color: #f9fafb;
    text-shadow: 2px 4px 3px #1f1f1f;
    font-family: 'poppins', sans-serif;
    font-weight: 300;
    letter-spacing: 1.2px;
    text-align:center;
    @media (max-width: 576px) { 
        font-size: 0.8rem;
        
    }
    @media (min-width: 577px) { 
    font-size: 0.8rem;
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
        font-size: 0.9rem;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { 
        font-size: 1rem;
    }

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) { 
        font-size: 1rem;
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) { 
        font-size: 1.5rem;
        }
`;


export const Btn = styled(({colortheme, brtleft, ...props}) => <Button {...props}/>)`
    padding: 13px 18px !important;
    margin-top: 40px !important;
    width: 20%;
    color:${({colortheme}) => (colortheme ? '#000 !important' : 'rgba(255,255,255,0.9) !important')};
    font-family: 'Open Sans', sans-serif !important;
    letter-spacing: 1.0px !important;
    font-size: 14px !important;
    background-color:${({colortheme}) => (colortheme ? 'rgba(255,255,255,0.9) !important' : 'rgba(8, 32, 50, 0.9) !important')} ;
    text-transform: unset !important;
    font-weight: 500 !important;
    ${({brtleft}) => brtleft ? css `
        border-radius: 5px 0 0 0 !important;
    ` : css`
        border-radius: 0 5px 0 0 !important;
    `}
    /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    width: 25%;
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    width: 20%;
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 900px) {
    width: 15%;
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 1200px) {
    width: 12%;
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1536px) {
    width: 15%;
}
`;

export const BoxSearch = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    width: 100%;
    padding: 20px;
    border: 1px solid transparent;
    border-radius:  0 5px 5px 5px ;
    color: #fff;
    font-family: 'poppins', sans-serif;
    justify-content: center;
    display: flex;
`;


export const Form = styled.form`
    display: flex;
    width: 100%;
    justify-content: center;
    position: relative;
    padding: 15px 0;
`;
export const Label = styled.label`
    font-family: 'Open Sans', sans-serif;
    font-size: 0.9rem;
    color: #000;
    font-weight: 500;
`;

export const SelectInput  = styled.select`
    margin: 7px 5px;
    width: 90%;
    padding: 8px 0px 8px 23px;
    border-color: transparent;
    border-radius: 5px;
    font-family: 'Open-sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    
    &:focus{
        box-shadow: 0 0 5px #1976d2;
        border: 1px solid #1976d2;
    }
`;

export const ArrowIconDown = styled(FaChevronDown)`
    margin-left: 5px;
`;

export const ArrowIconUp = styled(FaChevronUp)`
    margin-left: 5px;
`;

export const InputFilter = styled.select`
    display: flex;
    width: 90%;
    border: 1px solid transparent;
    border-radius: 3px ;
    font-family: 'poppins', sans-serif;
    font-size: 13px;
    margin: 5px;
    padding: 3px 10px;
    outline:none;
    cursor: pointer;
`;

export const LoactionIcon = styled(LocationOnIcon)`
    position: absolute;
    color:#0E2536;
    top: 45%;
    left: 10px;
    font-size:1.3rem !important ;
`;

export const DarIcon = styled(HouseIcon)`
    position: absolute;
    color:#0E2536;
    top: 45%;
    left: 10px;
    font-size:1.3rem !important ;
`;

export const PriceIcon = styled(AttachMoneyIcon)`
    position: absolute;
    color:#0E2536;
    top: 45%;
    left: 10px;
    font-size:1.3rem !important ;
`;

export const CalendarIcon = styled(TodayIcon)`
    position: absolute;
    color:#0E2536;
    top: 45%;
    left: 10px;
    font-size:1.3rem !important ;
`;

export const SearchBtn = styled.button`
    width: 60px;
    height: 60px;
    border: 1px solid transparent;
    border-radius: 50%;
    background-color: #0E2536;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
    &:focus, &:hover{
        background-color: rgba(14, 35, 53, 0.9);
    }
`;

export const SendingIcon = styled(SendIcon)`
    font-size: 20px !important;
    transform: rotate(-30deg);
`;

export const Option = styled.option`
    padding: 3px !important;
`;

export const AlertBox = styled(Alert)`
    position: absolute !important ;
    top:10% !important ;
    z-index:999 ;
    left:50% ;
    transform:translate(-50%) ;
    color:#000 !important;
    background-color:#39D5A2 !important;
    font-family:'poppins' !important;
    font-weight: 400 !important;

`