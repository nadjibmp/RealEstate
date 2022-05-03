import React from 'react'
import {
    CardContainer,
    CardBody,
    CardTitle,
    CardText
} from './Card.styled'

export const Card = ({ title, text, children }) => {
    return (
        
        <CardContainer>
            {children}
            <CardBody>
                <CardTitle> { title } </CardTitle>
                <CardText> { text }</CardText>
            </CardBody>
        </CardContainer>
    )
}

export default Card;