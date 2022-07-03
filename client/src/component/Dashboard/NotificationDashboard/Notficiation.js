import axios from 'axios';
import React, { useState, useEffect } from 'react'
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
  MessageIcon
} from './Notification.styled';
const Notficiation = () => {

  const [allNtofications, setNotifications] = useState([]);

  const GetAllNotfications = () => {
    axios
      .get(`http://localhost:3006/api/GetAllNotificationByUserId`)
      .then(response => {
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

  useEffect(() => {
    GetAllNotfications();
  }, [])

  return (
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
  )
}

export default Notficiation