import  styled  from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
    border: 2px solid #F4F4F9;
    border-radius: 10px;
    margin: 10px 10px;
    width: 80%;
    background-color: #fff;
    transition: all 0.3s ease-out;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        cursor: pointer;
    }
`;
export const CardImg = styled.img`
    width: 5vw;
`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 10px ;
`;



export const CardTitle = styled.h5`
    font-family: 'poppins';
    color: #0D2435;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px!important;
`;

export const CardText = styled.p`
    font-family: 'poppins', sans-serif;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1.8;
    text-align: center;
`;
