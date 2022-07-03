import React from 'react'
import {
    ProgresBar,
    ProgressContainer,
} from './ProgressBar.styled'

const ProgressBarContainer = ({ produitConsulte, produitListe, revues }) => {
    return (
        <>
            <ProgressContainer>
                <div>
                    <div>
                        <span>Produit consulté</span>
                        <span>{produitConsulte}/Mois</span>
                    </div>
                    <ProgresBar completed={produitConsulte || 0} isLabelVisible={false} animateOnRender={true} bgColor='#9379EE' />
                </div>
                <div>
                    <div>
                        <span>Produit listé</span>
                        <span>{produitListe} Unités</span>
                    </div>
                    <ProgresBar completed={produitListe || 0} isLabelVisible={false} animateOnRender={true} bgColor='#9379EE' />
                </div>
                <div>
                    <div>
                        <span>Revues</span>
                        <span>{revues} Commentaires</span>
                    </div>
                    <ProgresBar completed={revues || 0} isLabelVisible={false} animateOnRender={true} bgColor='#9379EE' />
                </div>
            </ProgressContainer>
        </>
    )
}

export default ProgressBarContainer