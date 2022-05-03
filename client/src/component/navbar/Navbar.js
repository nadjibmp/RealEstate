import React, { useState, useEffect} from 'react'
import {
    NavbarWrapper,
    Containner,
    LogoWrapper,
    LogoLink,
    NavMobile,
    NavMenu,
    NavItem, 
    NavigationLink,
    ImgLogo
} from './Navbar.styled'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {FaTimes, FaBars, FaHome, FaSignInAlt, FaUser, FaUserPlus} from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { StylesProvider } from "@material-ui/core/styles";
import logo3 from './logo3.svg';
import logo1 from './logo1.svg';
import { MdSpaceDashboard, MdLogout } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { useAuth } from '../Auth';



//Starting the component right here 
const Navbar = () => {
    const auth = useAuth()
    const navigate= useNavigate()
    const handleLogout = () => {
        auth.logout();
        navigate('/', {replace: true});
    }
    const [offset, setOffset] = useState(0);

    //for closing and openning the burger menu 
    const [bgColor, setBgcolor] = useState(false);
    const [click, setClick] = useState(false);
    
    // const [stick, setStick] = useState(false);
    const openBurgerMenu = () => {
        setClick(!click)
    }
    const onScroll = () => {
        setOffset(window.pageYOffset);
    }
    const location = useLocation();
    useEffect(() => {
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])
    
    useEffect(() => {
        if( location.pathname === '/Annonces'                   || 
            location.pathname === '/dashboard'                  || 
            location.pathname === '/proprietes'                 || 
            location.pathname === '/dashboard/main'             || 
            location.pathname === '/dashboard/msgDashboard'     || 
            location.pathname === '/dashboard/properties'       ||
            location.pathname === '/dashboard/liked'            ||  
            location.pathname === '/dashboard/notifications'    ||
            location.pathname === '/dashboard/messages'         ||
            location.pathname === '/dashboard/profile'          ||
            location.pathname === '/dashboard/calendar'         ||
            location.pathname === '/dashboard/addproperty'         ||
            offset !== 0) {
            setBgcolor(true);
            } else {
            setBgcolor(false);
            }
    },[location.pathname,offset])
    return (
        <> 
            <StylesProvider injectFirst>
                <NavbarWrapper click={ click } bgColor={bgColor}>
                    <Containner maxWidth="lg">
                            <LogoWrapper>
                                <LogoLink to="/"><ImgLogo src={bgColor || click ? logo1 : logo3 }/></LogoLink>
                            </LogoWrapper>
                            <NavMobile onClick={ openBurgerMenu }>
                                {click ? <FaTimes/> : <FaBars/> }  
                            </NavMobile>
                            <NavMenu onClick={openBurgerMenu} click={ click }>
                                {
                                    !auth.user && (
                                    <>
                                        <NavItem>
                                            <NavigationLink to="/">
                                                <FaHome /> Accueil
                                            </NavigationLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavigationLink to="/enregistrer">
                                                <FaSignInAlt /> S'identifier
                                            </NavigationLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavigationLink to="/inscrire">
                                                <FaUserPlus /> S'inscrire
                                            </NavigationLink>
                                        </NavItem>
                                    </>
                                    )
                                }
                                
                                {
                                    auth.user ? 
                                    <NavItem>
                                    <div className='profile-img-wrapper'>
                                        <img src='/profile.jpg' alt="my-profile-pict"/>
                                    </div>
                                    <p className='username'>{auth.user}</p>
                                    <MdKeyboardArrowDown />
                                    <div className="dropdown-content">
                                        <button onClick={()=> navigate('dashboard/main')}>
                                            <MdSpaceDashboard/>
                                            {' '}Tableau de Bord
                                        </button>
                                        <button onClick={()=> navigate('dashboard/properties')}>
                                            <FaHome/>
                                            Mes propriétés
                                        </button>
                                        <button onClick={()=> navigate('dashboard/liked')}>
                                            <AiFillHeart/>
                                            Favories
                                        </button>
                                        <button onClick={()=> navigate('dashboard/profile')}>
                                            <FaUser/>
                                            Modifier vos infos
                                        </button>
                                        <button onClick={handleLogout}>
                                            <MdLogout/>
                                            Déconnexion
                                        </button>
                                    </div>
                                </NavItem> 
                                    : 
                                    null
                                }
                            </NavMenu>
                    </Containner>
                </NavbarWrapper>
            </StylesProvider>
        </>
    )
}

export default Navbar
