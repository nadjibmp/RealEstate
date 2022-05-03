import styled from 'styled-components'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'

export const SliderImg = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    border-radius: 10px;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-out;
    border-radius: 10px;
`;

export const RightArrow = styled(FaChevronRight)`
    position: absolute ;
    top: 50%;
    right: 22px;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
    user-select: none;
`;

export const LeftArrow = styled(FaChevronLeft)`
    position: absolute ;
    top: 50%;
    left: 22px;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
    user-select: none;
`;

export const ImgWrapper = styled.div`
    width: ${({current}) => current ? '100%' : 'unset'};
    opacity: ${({current}) => current ? '1' : '0'};
    transition-duration: 1s ease;
`;