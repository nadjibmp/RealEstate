import React from 'react'
import {
    PlanHeader,
    PlanWrapper,
    PlanWrapperImg,
    PlanImg
} from './Plan.styled'
function Plan() {
    return (
        <PlanWrapper>
            <PlanHeader>
                Plan  
            </PlanHeader>
            <PlanWrapperImg>
                <PlanImg src="/assets/plan.jpg"/>
            </PlanWrapperImg>
        </PlanWrapper>
    )
}
export default Plan
