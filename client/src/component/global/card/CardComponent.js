import React, { useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { DataContext } from '../../annoncebody/AnnBody.js';
import {
  Card,
  CardHeader,
  CardBody,
  CardBodyItem,
  Title,
  Address,
  Price,
  LocationIcon,
  IconWrapper,
  BedIcon,
  SizeIcon,
  SeeMoreBtn,
  Btn,
} from './Card.styled.js';
import { AiOutlineHeart, AiFillHeart, AiFillEye, AiFillLike } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import Slider from '../slider/Slider';
import axios from 'axios';

const CardComponent = ({ images, data, title, adresse, chambre, feet, prix, typeBien, id }) => {
  const location = useLocation();
  const setData = useContext(DataContext);
  const [like, setLike] = useState(true);
  const [LikeCount, setLikeCount] = useState(0);
  const [VuesCount, setVuesCount] = useState(0);

  const GetLikeState = () => {
    try {
      axios
        .get('http://localhost:3006/api/GetLikeState', {
          params: {
            id
          }
        })
        .then(response => {
          const { data } = response.data;
          console.log(response.data);
          data > 0 ? setLike(true) : setLike(false)
        })
    } catch (error) {
      console.log(error);
    }
  }

  //Get the number of Like in listing
  const GetLikeCount = () => {
    try {
      axios
        .get('http://localhost:3006/api/GetLikeCount', {
          params: {
            id
          }
        })
        .then(response => {
          const { data } = response.data;
          setLikeCount(response.data.data);
        })
        .catch(error => {
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }
  }


  //Post Like 
  const PostLike = () => {
    try {
      if (!like) {
        axios
          .post('http://localhost:3006/api/PostLike', { id })
          .then(response => {
            console.log(response.data);
            setLike(!like);
            setLikeCount(LikeCount + 1);
          })
          .catch(error => {
            console.log(error);
          })
      }
      else {
        axios
          .delete('http://localhost:3006/api/PostLike', {
            data: { id }
          })
          .then(response => {
            setLike(!like);
            setLikeCount(LikeCount - 1);
          })
          .catch(error => {
            console.log(error);
          })
      }
    } catch (error) {
      console.log(error);
    }
  }

  const GetVuesCount = () => {
    try {
      try {
        axios
          .get('http://localhost:3006/api/ShowVuesCount', {
            params: {
              id
            }
          })
          .then(response => {
            const { data } = response.data;
            setVuesCount(response.data.data);
          })
          .catch(error => {
            console.log(error);
          })
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    GetLikeCount();
    GetLikeState();
    GetVuesCount();
  }, [])

  return (
    <>
      {
        location.pathname === '/Annonces' || location.pathname === '/Annonces' ?
          <Card data-key={data} onMouseEnter={() => setData(data)}>
            <CardHeader >
              <Slider slides={images} />
            </CardHeader>
            <CardBody>
              <CardBodyItem start row>
                <div>
                  <Btn bgcolor="#E4DDFD" color='#9379EE'> <AiFillEye /> {VuesCount} </Btn>
                  <Btn bgcolor="#FFEDDB" color='#E99037'><HiUserGroup /> {typeBien}</Btn>
                  <Btn bgcolor="#BDF1E0" color='#39D5A2'><AiFillLike /> {LikeCount}</Btn>
                </div>
                {
                  like ? <AiFillHeart onClick={PostLike} size={32} color='#EFA13B' /> : <AiOutlineHeart onClick={PostLike} size={32} color='#1f1f1fcc' />
                }
              </CardBodyItem>
              <CardBodyItem row>
                <Title>
                  {title}
                </Title>
              </CardBodyItem>

              <CardBodyItem start>
                <Address><LocationIcon />{adresse} </Address>
              </CardBodyItem>
              <CardBodyItem start>
                <IconWrapper spacebetween>
                  <IconWrapper>
                    <BedIcon />
                    {chambre} Chambres
                  </IconWrapper>

                  {/* <IconWrapper>
                    <BathIcon />
                      étages
                  </IconWrapper> */}

                  <IconWrapper>
                    <SizeIcon />
                    {feet} M²
                  </IconWrapper>

                </IconWrapper>
              </CardBodyItem>
              <CardBodyItem row>
                <IconWrapper width spacebetween aligncenter>
                  <Price>{prix} DZD</Price>
                  <SeeMoreBtn to='/property'>Voir plus</SeeMoreBtn>
                </IconWrapper>
              </CardBodyItem>
            </CardBody>
          </Card>
          :
          <Card data-key={data}>
            <CardHeader >
              <Slider slides={images} />
            </CardHeader>
            <CardBody>
              <CardBodyItem start row>
                <div>
                  <Btn bgcolor="#E4DDFD" color='#9379EE'> <AiFillEye /> {VuesCount} </Btn>
                  <Btn bgcolor="#FFEDDB" color='#E99037'><HiUserGroup /> {typeBien}</Btn>
                  <Btn bgcolor="#D3F5EA" color='#30302E'><AiFillLike /> {LikeCount}</Btn>
                </div>
                {
                  like ? <AiFillHeart className='animate' onClick={PostLike} size={32} color='#EFA13B' /> : <AiOutlineHeart onClick={PostLike} size={32} color='#1f1f1fcc' />}
              </CardBodyItem>
              <CardBodyItem row>
                <Title>
                  {title}
                </Title>
              </CardBodyItem>

              <CardBodyItem start>
                <Address><LocationIcon /> {adresse}</Address>
              </CardBodyItem>
              <CardBodyItem start>
                <IconWrapper spacebetween>
                  <IconWrapper>
                    <BedIcon />
                    {chambre} Chambres
                  </IconWrapper>
                  {/* 
                  <IconWrapper>
                    <BathIcon />
                    
                  </IconWrapper> */}

                  <IconWrapper>
                    <SizeIcon />
                    {feet} M²
                  </IconWrapper>

                </IconWrapper>
              </CardBodyItem>
              <CardBodyItem row>
                <IconWrapper width spacebetween aligncenter>
                  <Price>{prix} DZD</Price>
                  <SeeMoreBtn to='/property'>Voir plus</SeeMoreBtn>
                </IconWrapper>
              </CardBodyItem>
            </CardBody>
          </Card>
      }
    </>
  )
}

export default CardComponent
