import React from 'react'
import {
    BackLink,
    BackWrapper,
    BackIcon
} from './Back.syled'
const Back = () => {
    return (
        <>
            <BackWrapper>
                <BackLink to='/'>
                    <BackIcon/>
                    Retour à la Recherche
                </BackLink>
            </BackWrapper>
        </>
    )
}

export default Back
