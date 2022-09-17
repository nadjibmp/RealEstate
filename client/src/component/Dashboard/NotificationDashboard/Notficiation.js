import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Row } from '../mainDashboard/MainDashboard.styled';
import {
  Wrapper,
  NotificationBox,
  ActionLikeIcon,
  ActionOwner,
  OwnerProfilePic,
  Action,
  ActionSubject,
  DateNotification,
  HeartIcon,
  ActionCommentIcon,
  MessageIcon,
  RdvSection,
  Container,
  RdvCard,
  InfoIcon
} from './Notification.styled';
const Notficiation = () => {

  const [allNtofications, setNotifications] = useState([]);
  const [visits, setVisits] = useState([]);

  /* Remove the rdv wich i rejected from the array visits*/
  const DeleteItemFromArray = (array, event) => {
    try {
      const tempArray = [...array];
      let index;
      for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i]._id_appoinment == event.target.getAttribute("data-id-appointment")) {
          index = i;
          break;
        }
      }
      if (index !== undefined || index > -1) {
        tempArray.splice(index, 1);
      }
      setVisits(tempArray);
    } catch (error) {
      console.log(error);
    }
  }
  const DeleteRdv = async (event) => {
    try {
      const result = await axios.delete("http://localhost:3006/api/DeleteRdv",
        { data: { data: event.target.getAttribute("data-id-appointment") } });
      if (result) {
        DeleteItemFromArray(visits, event);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const ValidateRdv = async (event) => {
    try {
      const targetId = event.target.getAttribute("data-id-appointment");
      console.log(visits, targetId);
      for (let index = 0; index < visits.length; index++) {
        if (visits[index]._id_appoinment == targetId) {
          const result = await axios.put("http://localhost:3006/api/ValidateRdv",
            { 
              data:  visits[index],
            });
            if (result) {
              DeleteItemFromArray(visits, event);
            }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const DateConverter = (date) => {
    try {
      let newDate = date.slice(0, 10);
      let newTime = date.slice(11, 16);
      return `${newDate} à ${newTime}`;
    } catch (error) {
      console.log(error);
    }
  }
  const GetAllVisits = async () => {
    try {
      const response = await axios.get('http://localhost:3006/api/GetAllVisits');
      if (response) {
        const tempArray = response.data.data;
        setVisits(tempArray);
      }
    } catch (error) {
      console.log(error);
    }
  }


  const GetAllNotfications = () => {
    axios
      .get(`http://localhost:3006/api/GetAllNotificationByUserId`)
      .then(response => {
        //! push only property wich has the status false only...
        setNotifications(response.data.data);
      })
      .catch(error => {

        console.log(error);

      })
  }

  const DeleteAllNotifications = () => {
    axios
      .delete('http://localhost:3006/api/DeleteAllNotifications')
      .then(response => {
        if (response.data.message) {
          setNotifications([]);
        }
      })
      .catch(error => {
        console.log(error);
      })
  }
  console.log(visits);
  useEffect(() => {
    GetAllNotfications();
    GetAllVisits();
  }, [])

  return (
    <Container>
      <Wrapper>
        <Row container>
          <Row item>
            {
              allNtofications.map(element => {
                return (
                  <NotificationBox key={element.key}>
                    {
                      element.type === "aimé" ?
                        <ActionLikeIcon>
                          <HeartIcon />
                        </ActionLikeIcon>
                        :
                        <ActionCommentIcon>
                          < MessageIcon />
                        </ActionCommentIcon>
                    }

                    <ActionOwner>
                      {
                        `${element.prenom}  ${element.nom}`
                      }
                    </ActionOwner>
                    <OwnerProfilePic>
                      {
                        <img src={`http://localhost:3006/images/${element.profile_pic}`}></img>

                      }
                    </OwnerProfilePic>
                    <Action>
                      {
                        `à ${element.type} dans l'annonce`
                      }
                    </Action>
                    <ActionSubject>
                      {
                        element.title
                      }
                    </ActionSubject>
                    <DateNotification>
                      le {(element.date_notif).substr(0, 10)}
                    </DateNotification>
                  </NotificationBox>
                )
              })
            }
          </Row>
          <Row item>
            {
              allNtofications.length > 0 ?
                <div className='Button-clear'>
                  <button onClick={DeleteAllNotifications}>Marquer tous comme lu</button>
                </div> :
                <div className='no-notification'>
                  <span>Il n'y a pas des notifications pour l'instant</span>
                </div>
            }
          </Row>
        </Row>
      </Wrapper>

      <RdvSection>
        <Row container>
          <Row item xs={12} justifyCenter alignCenter>
            <h2> Demandes de visite</h2>
          </Row>
          {
            visits.map(element => (
              <Row item xs={12} key={element._id_appoinment}>
                <RdvCard>
                  <div className="card-title">
                    <InfoIcon />
                    <h3>Demande de visite </h3>
                  </div>

                  <div className='card-body'>
                    <p> Vous avez une demande de visite le <br />
                      <span> {
                        DateConverter(element.date_time)
                      } </span>
                    </p>
                  </div>

                  <div className='footer-card'>
                    <button
                      data-id-appointment={element._id_appoinment}
                      onClick={ValidateRdv}>
                      Valider
                    </button>

                    <button
                      data-id-appointment={element._id_appoinment}
                      onClick={DeleteRdv}>
                      Annuler
                    </button>
                  </div>
                </RdvCard>
              </Row>
            ))
          }
        </Row>
      </RdvSection>
    </Container>

  )
}

export default Notficiation