import React from 'react'
import { Outlet } from 'react-router-dom'
import {
    DashboardWrapper,
    Wrapper,
    Row
} from './Dashboard.styled'
import SideBar from './sideBar/SideBar'
const Dashboard = () => {
    return (
        <>
        <DashboardWrapper >
            <Wrapper maxWidth="xxl">
                <Row container row>
                    <Row item xs={12} md={2}>
                        <SideBar/>
                    </Row>
                    <Row item xs={12} md={10}>
                        <Outlet/>
                    </Row>
                </Row>
            </Wrapper>
        </DashboardWrapper>
        </>
    )
}

export default Dashboard
