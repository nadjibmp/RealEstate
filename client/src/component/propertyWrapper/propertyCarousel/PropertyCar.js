import React from 'react'
import {
    SliderComp,
    Carousel
} from './PropertyCar.styled';

const PropertyCar = ({img_data}) => {

    var tempArray = img_data.split(",");
    for (let index = 0; index < tempArray.length; index++) {
        tempArray[index] = "http://localhost:3006/images/" + tempArray[index];            
    }

    return (
        <Carousel >
            <SliderComp slides={tempArray}/>
        </Carousel>
    )
}

export default PropertyCar
