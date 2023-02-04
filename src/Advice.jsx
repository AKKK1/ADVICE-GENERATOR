import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import divider from '../src/images/divider.svg'
import dice from '../src/images/icon-dice.svg'
import divider2 from '../src/images/divider2.svg'
import axios from 'axios'


const Advice = () => {

const [advice, setAdvice] = useState()



const getAdvice = async()=>{
    const response = await axios.get("https://api.adviceslip.com/advice");
const advice = await response.data.slip;
    console.log(response);
    setAdvice(advice);
}


useEffect(()=> {

    getAdvice()
}, [])

  return (
    <Section>
        <Box> 
            <P>A D V I C E # {advice.id}</P>

            <H2> " {advice.advice} "</H2>
            <DividerMob src={divider2} alt="" />

            <Divider src={divider} alt="" />
            <DiceCont onClick={getAdvice}>
                <IMGdice src={dice} alt="" />
            </DiceCont>
        </Box>
    </Section>
  )
}
const Section = styled.section`
    background-color: #212733;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const Box = styled.div`
    width: 540px;
    height: 300px;
    background-color: #313a49;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
padding: 3rem 2rem 4.5rem 2rem;
margin: 0 auto;
border-radius: 15px;
position: relative;

  @media(max-width: 620px) {
width: 90%;
  }

`
const P = styled.p`
color: hsl(150,100%, 66%);
letter-spacing: 3.5px;
font-weight: 700;
margin-bottom: 1rem;
font-size: 12px;

@media(max-width: 375px ){
    font-size: 11px;
}
`
const H2 = styled.h2`
    color: hsl(193,38%,86%);
    font-size: 20px;
    margin-bottom: 2.5rem;
    text-align: center;
    @media(max-width: 375px ){
    font-size: 24px;
}
`
const DiceCont = styled.div`
    background-color: hsl(150,100%, 66%);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    bottom: -2rem;

    &:hover{
        box-shadow: 0 0 40px 0 rgba(82,255,169,1);
        transition:  -2s ease-in;
    }
`
const DividerMob = styled.img`
display: none;
@media(max-width: 620px ){
    display: block;

}
`
const Divider = styled.img`
@media(max-width: 620px ){
    display: none;

}
`
const IMGdice = styled.img`
    

`
export default Advice