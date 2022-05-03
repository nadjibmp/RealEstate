import React, {useState} from 'react'
import {
  Img, 
  RightArrow, 
  LeftArrow,
  SliderImg,
  ImgWrapper
} from './Slider.styled';

const Slider = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length; 

  if (!Array.isArray(slides) || slides.length <= 0 ) {
    return null;
  }
  

  const nextSlide = () => {
    setCurrent( current === length - 1 ? 0  : current + 1)
  }

  const prevSlide = () => {
    setCurrent( current === 0 ? length - 1  : current - 1)
  }

  return (
    <SliderImg>
      <LeftArrow  onClick={prevSlide} />
      <RightArrow onClick={nextSlide}/>
      {
        slides.map((image, index) => {
          return(
            <ImgWrapper key={index} current={ index === current ? true : false}> 
              {index === current && (
                <Img src={image.image} alt="image" />
              )}
            </ImgWrapper >
          )
        })
      }
    </SliderImg>
  )
}

export default Slider
