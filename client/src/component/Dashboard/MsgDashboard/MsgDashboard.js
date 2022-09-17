import React, { useState, useEffect } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineAttachFile, MdSend } from "react-icons/md";
import { useParams } from 'react-router-dom';
import {
  Wrapper,
  SideMsgBar,
  ProfilePic,
  MsgItem,
  MsgInfoWrapper,
  MsgSender,
  MsgBrief,
  MsgRow,
  MessageContentWrapper,
  MessagesBox,
  FormWrapper,
  Status
} from './MsgDashboard.styled';
import { useSocket } from '../../GlobalContext/SocketContext';
import axios from 'axios';

const MsgDashBoard = () => {

  //States.....
  const [briefMsg, setBriefMsg] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [allMessages, setAllMessage] = useState([]);
  const [roomId, setRoomId] = useState('');
  const socket = useSocket();


  //Functions ...


  //**************** Send Message *********************/
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        roomId,
        author: "nadjib",
        message: currentMessage,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
      };
      socket.emit("send_message", messageData);
    }
  }


  /*********************** JOIN ROOM *****************/
  const joinRoom = () => {
    // socket.emit("join_room", room);
  }

  /**********************  Get All Messages ************/

  const GetAllMessagesAvailable = async () => {
    try {
      const response = await axios.get("http://localhost:3006/api/GetAllMessagesAvailable");
      if (response) {
        const tempArray = [];
        const { data } = response.data;
        //prerocessing the data 
        data.forEach(element => {
          var mySubsTring = element.row.substring(element.row.indexOf("(") + 1, element.row.lastIndexOf(")"));
          var tempObj = mySubsTring.split(",");
          tempArray.push({
            profilePic: tempObj[0],
            nom: tempObj[1],
            prenom: tempObj[2],
            message: tempObj[3],
            time: tempObj[4],
            room: tempObj[5]
          })
        })
        const byRoom = tempArray.reduce((a, b) => (a[b.room] ? a[b.room].push(b) : a[b.room] = [b], a), {});
        const arrayClassified = Object.values(byRoom);
        setAllMessage(arrayClassified);
      }
    } catch (error) {
      //handle error here 
      console.log(error);
    }
  }

  /*******************Set Biref Messages*****************/
  const SetBriefMessages = () => {
    allMessages.forEach(element => {
      element.reverse();
      for (let index = 0; index < element.length; index++) {
        if (element[index].room.endsWith(JSON.parse(localStorage.getItem('userID')).userId)) {
          setBriefMsg(prevState => [...prevState, element[index]]);
          break;
        }
      }
    })
  }

  // End Function Section

  useEffect(() => {
    // joinRoom();
    // socket.on("receive_message", (data) => {
    //   console.log(data);
    // });
    GetAllMessagesAvailable();
  }, [])

  useEffect(() => {
    SetBriefMessages();
  }, [allMessages])
  

  return (
    <>
      <Wrapper>
        <MsgRow container>
          <MsgRow item xs={3}>
            <SideMsgBar >
              <div className='header'>
                <span>Discussions</span>
                <AiOutlineSearch color={"#323B4D"} size={24} />
              </div>

              {/*Shows all the messages available for the user.... */}

              {/* Begin of the component */}
              {
                briefMsg.map(element => {
                  return(
                    <MsgItem >
                <ProfilePic>
                  <img src={"http://localhost:3006/images/" + element.profilePic} alt="profile" />
                </ProfilePic>
                <MsgInfoWrapper>
                  <div>
                    <MsgSender>
                      {
                        element.nom + element.prenom
                      }
                    </MsgSender>
                    <span className='time'>
                      {element.time}
                    </span>
                  </div>
                  <MsgBrief>
                    {element.message}
                  </MsgBrief>
                </MsgInfoWrapper>
              </MsgItem>
                  )
                })
              }
              {/* <MsgItem >
                <ProfilePic>
                  <img src={"http://localhost:3006/images/" + element[index].profilePic} alt="profile" />
                </ProfilePic>
                <MsgInfoWrapper>
                  <div>
                    <MsgSender>
                      {
                        element[index].nom + element[index].prenom
                      }
                    </MsgSender>
                    <span className='time'>
                      {element[index].time}
                    </span>
                  </div>
                  <MsgBrief>
                    {element[index].message}
                  </MsgBrief>
                </MsgInfoWrapper>
              </MsgItem> */}

              {/* ENd of the component */}


            </SideMsgBar>
          </MsgRow>
          <MsgRow item xs={9}>
            <MessageContentWrapper>
              <div class="receiver-username">
                <h3>Oussama Debch  </h3>
                <Status />
              </div>
              <span>
              </span>
              <MessagesBox>

                <div className='Message-Wrapper Wrapper-sender'>
                  <ProfilePic >
                    <img src="/profile.jpg" alt="profile" />
                  </ProfilePic>
                  <div className='msg-infos'>
                    <div className='username-date'>
                      <span>Ahmed nadjib</span>
                      <span className='time'>10:30 AM</span>
                    </div>
                    <p className='sender message'>I want to get some details about your home</p>
                  </div>
                </div>

                <div className='Message-Wrapper '>
                  <ProfilePic >
                    <img src="/profile.jpg" alt="profile" />
                  </ProfilePic>
                  <div className='msg-infos'>
                    <div className='username-date'>
                      <span>Ahmed nadjib</span>
                      <span className='time'>10:30 AM</span>
                    </div>
                    <p className='receiver message'>I want to get some details about your home</p>
                  </div>
                </div>

                <div className='Message-Wrapper'>
                  <ProfilePic >
                    <img src="/profile.jpg" alt="profile" />
                  </ProfilePic>
                  <div className='msg-infos'>
                    <div className='username-date'>
                      <span>Ahmed nadjib</span>
                      <span className='time'>10:30 AM</span>
                    </div>
                    <p className='receiver message'>I want to get some details about your home</p>
                  </div>
                </div>
                <div className='Message-Wrapper Wrapper-sender'>
                  <ProfilePic >
                    <img src="/profile.jpg" alt="profile" />
                  </ProfilePic>
                  <div className='msg-infos'>
                    <div className='username-date'>
                      <span>Ahmed nadjib</span>
                      <span className='time'>10:30 AM</span>
                    </div>
                    <p className='sender message'>I want to get some details about your home</p>
                  </div>
                </div>
              </MessagesBox>
              <FormWrapper>
                <MsgRow containerend>
                  <MsgRow item xs={1} >
                    <MdOutlineAttachFile size={24} color={"#9ba6b2"} />
                  </MsgRow>
                  <MsgRow item xs={10} >
                    <input type={"text"}
                      placeholder="Ecrire un Message..."
                      onChange={event => setCurrentMessage(event.target.value)} />
                  </MsgRow>
                  <MsgRow item xs={1} >
                    <MdSend onClick={sendMessage} size={24} color={"#4E38A3"} />
                  </MsgRow>
                </MsgRow>
              </FormWrapper>
            </MessageContentWrapper>
          </MsgRow>
        </MsgRow>
      </Wrapper>
    </>
  )
}

export default MsgDashBoard