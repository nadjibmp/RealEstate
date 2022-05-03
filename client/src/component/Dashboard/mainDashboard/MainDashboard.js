import React from 'react'
import {
  MainWrapper,
  Header,
  MessageIcon,
  AgendaBtn,
  AgendaIcon,
  NotifIcon,
  Row,
  StatWrapper,
  StatContainer,
  CommentsWrapper,
  VoirTout,
  AddPropIcon
} from './MainDashboard.styled'
import Pie from './percentageCircle/Pie';
import ApexChart from './apexChart/ApexChart'
import ProgressBarContainer from './progressBar/ProgressBarContainer';
import ComComp from './../../propertyWrapper/commentSection/CommentComp/ComComp'
import Map from '../../annoncebody/mapComponent/Map';
const MainDashboard = () => {
  return (
    <>
      <MainWrapper>
        <Header>
          <Row container row>
            <Row item xs={12} md={6}>
              <div className='icon-wrapper'>
                <AgendaBtn>
                  <AgendaIcon />
                </AgendaBtn>
                <AgendaBtn>
                  <AddPropIcon />
                </AgendaBtn>
              </div>
            </Row>
            <Row item xs={12} md={6} row justifycenter="true">
              <div className='right-wrapper'>
                <div className='icon-wrapper'>
                  <div className='notification-sign'>
                    <NotifIcon />
                  </div>
                  <div className='notification-sign'>
                    <MessageIcon />
                  </div>
                </div>
                <div className='profile-icon'>
                  <div>
                    <p id="username">Nadjib</p>
                    <span id="email">anadjib45@gmail.com</span>
                  </div>
                  <div className='profile-img-wrapper'>
                    <img src="/profile.jpg" alt='profileimg'/>
                  </div>
                </div>
              </div>
            </Row>
          </Row>
        </Header>
        <StatWrapper>
          <Row container row>
            <Row item xs={12} md={12}>
              <p className='title-header'>Tableau de Bord</p>
            </Row>
            <Row item xs={12} md={3}>
              <StatContainer>
                <div className='stat-type'>
                  <p>Propriétés à vendre</p>
                  <span> 65 </span>
                </div>
                <div className='stat-percent'>
                  <Pie percentage={65} colour="#9379EE" />
                </div>
              </StatContainer>
            </Row>
            <Row item xs={12} md={3}>
              <StatContainer>
                <div className='stat-type'>
                  <p>Propriétés à louer</p>
                  <span> 20 </span>
                </div>
                <div className='stat-percent'>
                  <Pie percentage={20} colour="#39D5A2" />
                </div>
              </StatContainer>
            </Row>
            <Row item xs={12} md={3}>
              <StatContainer>
                <div className='stat-type'>
                  <p>Vues totales</p>
                  <span> 2000 </span>
                </div>
                <div className='stat-percent'>
                  <Pie percentage={99} colour="#EFA13B" />
                </div>
              </StatContainer>
            </Row>
            <Row item xs={12} md={3}>
              <StatContainer>
                <div className='stat-type'>
                  <p>Ville totale</p>
                  <span> 23 </span>
                </div>
                <div className='stat-percent'>
                  <Pie percentage={25} colour="#333E4B" />
                </div>
              </StatContainer>
            </Row>
          </Row>
          <Row container row>
            <Row item xs={12} md={9}>
              <StatContainer className="extended-container">
                <ApexChart />
              </StatContainer>
              <StatContainer className="extended-container">
                <Map />
              </StatContainer>
            </Row>
            <Row item xs={12} md={3}>
              <StatContainer>
                <ProgressBarContainer />
              </StatContainer>
              <StatContainer>
                <CommentsWrapper>
                  <p className='comment-title'>Avis des clients</p>
                  <ComComp />
                  <hr />
                  <ComComp />
                  <hr />
                  <ComComp />
                  <VoirTout>Voir touts les avis</VoirTout>
                </CommentsWrapper>
              </StatContainer>
            </Row>
          </Row>
        </StatWrapper>
      </MainWrapper>
    </>
  )
}

export default MainDashboard