import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

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
import axios from 'axios';
const MainDashboard = () => {

  axios.defaults.withCredentials = true;

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [totalSales, setTotalSales] = useState('');
  const [totalRents, setTotalRents] = useState('');
  const [totalVues, setTotalVues] = useState('');
  const [totalVille, setTotalVille] = useState('');
  const [totalListings, setTotalListings] = useState('');
  const [allLocations, setAllLoactions] = useState([]);
  const [numberOfComments, setNumberOfComments] = useState(0);
  const [allComments, setAllComments] = useState([]);
  const [thereIsNotif ,setThereIsNotif] = useState(false);

  //get totla sales of the user 
  const GetTotalSales = () => {
    axios
      .get("http://localhost:3006/api/GetTotalSalesByUser")
      .then(result => { setTotalSales(result.data.count) })
      .catch(error => { console.log(error) })
  }

  //Get total Rents
  const GetTotalRents = () => {
    axios
      .get("http://localhost:3006/api/GetTotalRentsByUser")
      .then(result => { setTotalRents(result.data.count) })
      .catch(error => { console.log(error) })
  }

  const GetTotalCities = () => {
    axios
      .get("http://localhost:3006/api/GetTotalCities")
      .then(result => { setTotalVille(result.data.count) })
      .catch(error => { console.log(error) })
  }

  const GetTotalVues = () => {
    axios
      .get("http://localhost:3006/api/GetTotalVues")
      .then(result => { setTotalVues(result.data.count) })
      .catch(error => { console.log(error) })
  }
console.log(totalVues);
  const GetTotalListings = () => {
    axios
      .get("http://localhost:3006/api/GetTotalListings")
      .then(result => { setTotalListings(result.data.count) })
      .catch(error => { console.log(error) })
  }

  const GetAllLocations = () => {
    axios
      .get("http://localhost:3006/api/GetAllLoactionsByUser")
      .then(result => {
        const tempArray = [];
        (result.data.count).forEach(element => {
          var mySubsTring = element.row.substring(element.row.indexOf("(") + 1, element.row.lastIndexOf(")"));
          var tempObj = mySubsTring.split(",");
          tempArray.push({
            key: tempObj[0],
            popupMessage: tempObj[1],
            position: {
              lat: tempObj[3],
              lng: tempObj[4]
            }
          })
        });
        setAllLoactions(tempArray);
      })
      .catch(error => { console.log(error) })
  }
  //get the username and email from localstorage
  const GetUserInfo = () => {
    //get user infos from localhost
    const infos = JSON.parse(localStorage.getItem('userID'));
    setUsername(infos.user);
    setName(infos.nom + " " + infos.prenom);
  }


  //Get three last comments  in listings that belongs to a user 
  const GetLastThreeComments = () => {
    axios
      .get('http://localhost:3006/api/GetLastComments')
      .then(result => {
        setNumberOfComments(result.data.data.length);
        setAllComments(result.data.data);
      })
      .catch(error => {
        console.log(error);
      })
  }


  const GetAllNotfications = () => {
    axios
      .get(`http://localhost:3006/api/GetAllNotificationByUserId`)
      .then(response => {
        console.log(response.data);
        response.data.data.length > 0 ? setThereIsNotif(true) :  setThereIsNotif(false);
      })
      .catch(error => {

        console.log(error);

      })
  }
  useEffect(() => {
    GetUserInfo();
    GetTotalSales();
    GetTotalRents();
    GetTotalCities();
    GetTotalVues();
    GetTotalListings();
    GetAllLocations();
    GetLastThreeComments();
    GetAllNotfications();
  }, [])

  //to navigate to another page 
  let navigate = useNavigate();

  return (
    <>
      <MainWrapper>
        <Header>
          <Row container row>
            <Row item xs={12} md={6}>
              <div className='icon-wrapper'>
                <AgendaBtn>
                  <AgendaIcon onClick={() => navigate("../calendar")} />
                </AgendaBtn>
                <AgendaBtn>
                  <AddPropIcon onClick={() => navigate("../addproperty")} />
                </AgendaBtn>
              </div>
            </Row>
            <Row item xs={12} md={6} row justifycenter="true">
              <div className='right-wrapper'>
                <div className='icon-wrapper'>
                  <div className={thereIsNotif ? 'notification-sign' : null}>
                    <NotifIcon />
                  </div>
                  <div className='notification-sign'>
                    <MessageIcon />
                  </div>
                </div>
                <div className='profile-icon'>
                  <div>
                    <p id="username">{name}</p>
                    <span id="email">{username}</span>
                  </div>
                  <div className='profile-img-wrapper'>
                    <img src="/profile.jpg" alt='profileimg' />
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
                  <span> {totalSales} </span>
                </div>
                <div className='stat-percent'>
                  <Pie percentage={totalSales} colour="#9379EE" />
                </div>
              </StatContainer>
            </Row>
            <Row item xs={12} md={3}>
              <StatContainer>
                <div className='stat-type'>
                  <p>Propriétés à louer</p>
                  <span> {totalRents} </span>
                </div>
                <div className='stat-percent'>
                  <Pie percentage={totalRents} colour="#39D5A2" />
                </div>
              </StatContainer>
            </Row>
            <Row item xs={12} md={3}>
              <StatContainer>
                <div className='stat-type'>
                  <p>Vues totales</p>
                  <span> {totalVues || 0} </span>
                </div>
                <div className='stat-percent'>
                  <Pie percentage={totalVues} colour="#EFA13B" />
                </div>
              </StatContainer>
            </Row>
            <Row item xs={12} md={3}>
              <StatContainer>
                <div className='stat-type'>
                  <p>Ville totale</p>
                  <span> {totalVille} </span>
                </div>
                <div className='stat-percent'>
                  <Pie percentage={totalVille} colour="#333E4B" />
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
                <Map setMark locations={allLocations} />
              </StatContainer>
            </Row>
            <Row item xs={12} md={3}>
              <StatContainer>
                <ProgressBarContainer produitListe={totalListings} revues={numberOfComments} />
              </StatContainer>
              <StatContainer>
                <CommentsWrapper>
                  <p className='comment-title'>Avis des clients</p>

                  {
                    allComments.map(element => {
                      return (
                        <>
                          <ComComp 
                            nom={element.nom}
                            prenom={element.prenom}
                            date={element.date_publish}
                            comment={element.description}
                            key={element.key}/>
                          <hr />
                        </>
                      )

                    })
                  }
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