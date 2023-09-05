import React from 'react'
import styled from 'styled-components';
import IconProps from "./IconProps"
import {AiFillApple} from "react-icons/ai"
import image from "../../Assets/712x384.jpg"
import image1 from "../../Assets/Artboard_1.jpg"
import image2 from "../../Assets/Desktop_Homepage_Slider__712x384.png"


const Hero = () => {
  return (
    <div>
      <Container>
        <One>
         <IconProps word='Supermarket' icons={<AiFillApple/>}/>
         <IconProps word='Supermarket' icons={<AiFillApple/>}/>
         <IconProps word='Supermarket' icons={<AiFillApple/>}/>
         <IconProps word='Supermarket' icons={<AiFillApple/>}/>
        </One>

        <Two>
          <Pic src={image}/>
        </Two>

        <Three>
          <Img src={image1}/>
          <Img src={image2}/>
        </Three>
      </Container>
    </div>
  )
}

export default Hero;

const Pic = styled.img`
object-fit: cover;
height: 450px;
border-radius: 5px;
`
const Container = styled.div`
width: 100%;
height: 400px;
background-color: white;
display: flex;
justify-content: center;
`
const Two = styled.div`
width: 500px;
height: 200px;
background-color: blanchedalmond;
margin: 10px;
`
const One = styled.div`
width: 300px;
height: 450px;
background-color: brown;
margin: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: white;
`
const Three = styled.div`
width:300px;
height: 450px;
background-color: yellow;
margin: 10px;
display: flex;
flex-direction: column;
`
const Img = styled.img`
object-fit: fill;
height: 300px;
width: 250px;
margin: 10px;
border-radius: 5px;
`