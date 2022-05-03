import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    SideBarWrapper,
    Wrapper,
    LogoHeader,
    LinkWrapper,
    DashBoardIcon,
    CircleIcon,
    UserIcon,
    HomeIcon,
    LoveIcon,
    Footer,
    UserName,
    Email,
    MessageIcon,
    NotifIcon,
    AgendaIcon,
    AddIcon
} from './SideBar.styled';
import img from './logocutted.png'
import { useAuth } from '../../Auth';
const SideBar = () => {
    const auth = useAuth()
    
    return (
        <SideBarWrapper>
            <Wrapper maxWidth="xxl">
                <div className="logo-wrapper">
                    <LogoHeader src={img} alt="logo-3aqaar"/>
                </div>
                <ul className="link-wrapper">
                    <LinkWrapper>
                        <NavLink className="link-item" to="/dashboard/main">
                            <div>
                                <DashBoardIcon />
                                <span className="dashboard-link">Tableau de Bord </span>
                            </div>
                            <CircleIcon />
                        </NavLink>
                    </LinkWrapper>
                    <LinkWrapper>
                        <NavLink className="link-item" to="/dashboard/properties">
                            <div>
                                <HomeIcon />
                                <span className="dashboard-link">Mes Propriétés </span>
                            </div>
                            <CircleIcon />
                        </NavLink>
                    </LinkWrapper>
                    <LinkWrapper>
                        <NavLink className="link-item" to="/dashboard/addproperty">
                            <div>
                                <AddIcon />
                                <span className="dashboard-link">Nouvelle propriété </span>
                            </div>
                            <CircleIcon />
                        </NavLink>
                    </LinkWrapper>
                    <LinkWrapper>
                        <NavLink className="link-item" to="/dashboard/calendar">
                            <div>
                                <AgendaIcon />
                                <span className="dashboard-link">Agenda </span>
                            </div>
                            <CircleIcon />
                        </NavLink>
                    </LinkWrapper>
                    <LinkWrapper>
                        <NavLink className="link-item" to="/dashboard/liked">
                            <div>
                                <LoveIcon />
                                <span className="dashboard-link"> Mes préférés </span>
                            </div>
                            <CircleIcon />
                        </NavLink>
                    </LinkWrapper>
                    <LinkWrapper>
                        <NavLink className="link-item" to="/dashboard/notifications">
                            <div>
                                <NotifIcon />
                                <span className="dashboard-link">Notification </span>
                            </div>
                            <CircleIcon />
                        </NavLink>
                    </LinkWrapper>
                    <LinkWrapper>
                        <NavLink className="link-item" to="/dashboard/messages">
                            <div>
                                <MessageIcon />
                                <span className="dashboard-link">Message </span>
                            </div>
                            <CircleIcon />
                        </NavLink>
                    </LinkWrapper>
                    <LinkWrapper>
                        <NavLink className="link-item" to="/dashboard/profile">
                            <div>
                                <UserIcon />
                                <span className="dashboard-link"> Mon Profile </span>
                            </div>
                            <CircleIcon />
                        </NavLink>
                    </LinkWrapper>
                </ul>
                <Footer>
                    <div className="profile-img-wrapper">
                        <img src="/profile.jpg" alt='my-profile-pic'/>
                    </div>
                    <div className="username-wrapper">
                        {
                            auth.nom && auth.prenom ? <UserName>{auth.nom + " " + auth.prenom} </UserName> : <UserName>Invité</UserName>
                        }
                    </div>
                    <div className="email-wrapper">
                    {
                            auth.user ? <Email>{auth.user}</Email> : <UserName>Invité@invite.com</UserName>
                    }
                    </div>
                </Footer>
            </Wrapper>
        </SideBarWrapper>
    );

};

export default SideBar;
