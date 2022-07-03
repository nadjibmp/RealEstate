import React from 'react'
import {
    PriceWrapper
} from "./Price.styled"
const Price = ({ price }) => {
    return (
        <>
            <PriceWrapper>
                {price} DZD
            </PriceWrapper>
        </>
    )
}

export default Price
