import React from 'react'
import {
    PlanHeader,
    PlanWrapper,
    PlanWrapperImg,
    PlanImg
} from './Plan.styled'
function Plan({ plan_url, plan_img_alt }) {
    return (
        <PlanWrapper>
            <PlanHeader>
                Plan
            </PlanHeader>
            <PlanWrapperImg>
                <PlanImg src={`http://localhost:3006/images/${plan_url}`} alt={`plan ${plan_img_alt}`}/>
            </PlanWrapperImg>
        </PlanWrapper>
    )
}
export default Plan
