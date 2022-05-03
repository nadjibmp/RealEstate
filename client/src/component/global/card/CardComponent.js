import React,  { useState, useContext } from 'react'
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
  BathIcon,
  SizeIcon,
  SeeMoreBtn,
  Btn,
} from './Card.styled.js';
import { AiOutlineHeart, AiFillHeart, AiFillEye } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { Data } from '../slider/SliderData'
import Slider from '../slider/Slider';

const CardComponent = ({data}) => {
  const location = useLocation();
  const setData = useContext(DataContext);
  const [like, setLike] = useState(true);
  const likeEvent = () => {
    setLike(!like);
  }
  return (
    <>
      {
        location.pathname === '/Annonces' || location.pathname === '/Annonces' ? 
          <Card data-key={data} onMouseEnter={( )=> setData(data)}>
            <CardHeader >
              <Slider slides={Data}/>
            </CardHeader>
            <CardBody>
              <CardBodyItem start row>
                <div>
                  <Btn bgcolor="#E4DDFD" color='#9379EE'> <AiFillEye/> 123 </Btn>
                  <Btn bgcolor="#FFEDDB" color='#E99037'><HiUserGroup/> Villa</Btn>
                </div>
                {
                  like ? <AiOutlineHeart onClick={likeEvent} size={32} color='#1f1f1fcc' /> : <AiFillHeart onClick={likeEvent} size={32} color='#EFA13B' />
                }
              </CardBodyItem>
              <CardBodyItem row>
                <Title>
                  2 BHK  House 2000 Sqft.
                </Title>
              </CardBodyItem>
              
              <CardBodyItem start>
                <Address><LocationIcon/> Cité Didouche Mourad 440 lgts, bloc 3, apt 5. </Address>
              </CardBodyItem>
              <CardBodyItem start>
              <IconWrapper spacebetween>
                    <IconWrapper>
                      <BedIcon/>
                      2 Chambres
                    </IconWrapper>

                    <IconWrapper>
                      <BathIcon/>
                      3 Salle de bain
                    </IconWrapper>

                    <IconWrapper>
                      <SizeIcon/>
                      3 M²
                    </IconWrapper>

                  </IconWrapper>
              </CardBodyItem>
              <CardBodyItem row>
                  <IconWrapper width spacebetween aligncenter>
                    <Price>200,000 DZD</Price>
                    <SeeMoreBtn to='/property'>Voir plus</SeeMoreBtn>
                  </IconWrapper>
              </CardBodyItem>
            </CardBody>
          </Card>
        : 
          <Card data-key={data}>
              <CardHeader >
                <Slider slides={Data}/>
              </CardHeader>
              <CardBody>
                <CardBodyItem start row>
                  <div>
                    <Btn bgcolor="#E4DDFD" color='#9379EE'> <AiFillEye/> 123 </Btn>
                    <Btn bgcolor="#FFEDDB" color='#E99037'><HiUserGroup/> Villa</Btn>
                  </div>
                  {
                    like ? <AiOutlineHeart onClick={likeEvent} size={32} color='#1f1f1fcc' /> : <AiFillHeart onClick={likeEvent} size={32} color='#EFA13B' />
                  }
                </CardBodyItem>
                <CardBodyItem row>
                  <Title>
                    2 BHK  House 2000 Sqft.
                  </Title>
                </CardBodyItem>
                
                <CardBodyItem start>
                  <Address><LocationIcon/> Cité Didouche Mourad 440 lgts, bloc 3, apt 5. </Address>
                </CardBodyItem>
                <CardBodyItem start>
                <IconWrapper spacebetween>
                      <IconWrapper>
                        <BedIcon/>
                        2 Chambres
                      </IconWrapper>

                      <IconWrapper>
                        <BathIcon/>
                        3 Salle de bain
                      </IconWrapper>

                      <IconWrapper>
                        <SizeIcon/>
                        3 M²
                      </IconWrapper>

                    </IconWrapper>
                </CardBodyItem>
                <CardBodyItem row>
                    <IconWrapper width spacebetween aligncenter>
                      <Price>200,000 DZD</Price>
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
