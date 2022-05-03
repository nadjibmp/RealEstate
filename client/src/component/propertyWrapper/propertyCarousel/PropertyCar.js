import React from 'react'
import {
    SliderComp,
    Carousel
} from './PropertyCar.styled';
import {Data} from '../../global/slider/SliderData'
const PropertyCar = () => {
    return (
        <Carousel >
            <SliderComp slides={Data}/>
        </Carousel>
    )
}

export default PropertyCar
