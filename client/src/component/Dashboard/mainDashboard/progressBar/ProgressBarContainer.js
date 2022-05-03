import React from 'react'
import {
    ProgresBar,
    ProgressContainer,
} from './ProgressBar.styled'

const ProgressBarContainer = () => {
    return (
        <>
            <ProgressContainer>
                <div>
                    <div>
                        <span>Produit consulté</span>
                        <span>55/Mois</span>
                    </div>
                    <ProgresBar completed={60}  isLabelVisible={false} animateOnRender={true} bgColor='#9379EE'/>
                </div>
                <div>
                    <div>
                        <span>Produit listé</span>
                        <span>120 Unités</span>
                    </div>
                    <ProgresBar completed={60}  isLabelVisible={false} animateOnRender={true} bgColor='#9379EE'/>
                </div>
                <div>
                    <div>
                        <span>Revues</span>
                        <span>25 Commentaires</span>
                    </div>
                    <ProgresBar completed={60}  isLabelVisible={false} animateOnRender={true} bgColor='#9379EE'/>
                </div>
            </ProgressContainer>
        </>
    )
}

export default ProgressBarContainer