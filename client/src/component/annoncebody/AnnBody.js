import React, { useState, useEffect } from 'react'
import CardWrapper from './cardWrapper/CardWrapper'
import Map from './mapComponent/Map';
import {
    Row, 
    Annonces
} from './AnnoBody.styled';

export const DataContext  = React.createContext();
export const DataSend = React.createContext();
const AnnBody = () => {
    const [width, setWidth ] = useState(0);
    const [data, setData] = useState('');

    useEffect(() => {
        setWidth(document.body.clientWidth);
    }, [])
    return (
        <Annonces>  
            {
                width < 900 ? 
                    <Row container alignStart>
                        <Row item xs={12} md={5} sticky>
                            <DataContext.Provider value={setData}>
                                <CardWrapper/>
                            </DataContext.Provider> 
                        </Row>
                        <Row item xs={12} md={7} sticky stickytop>
                            <DataSend.Provider value={data}>
                                <Map/>
                            </DataSend.Provider>
                        </Row>
                    </Row>
                    :
                    <Row container alignStart>
                        <Row item xs={12} md={7} sticky stickytop>
                            <DataSend.Provider value={data}>
                                <Map/>
                            </DataSend.Provider>
                        </Row>
                        <Row item xs={12} md={5} sticky>
                            <DataContext.Provider value={setData}>
                                <CardWrapper/>
                            </DataContext.Provider> 
                        </Row>
                    </Row>
            }
        </Annonces>
    )
}

export default AnnBody
