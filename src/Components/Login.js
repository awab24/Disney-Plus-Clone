import React from 'react'
import styled from "styled-components"
function Login() {
  return (
    <Container>
      <img src="/Disney Clone Challenge/images/login-background.jpg" />

<CTAWrapper>
      <CTA >
      <img src="/Disney Clone Challenge/images/cta-logo-one.svg" />
      </CTA>
      </CTAWrapper>

      <CtaLogoOne>
      <SignUP>
GET ALL THERE
      </SignUP>
      </CtaLogoOne>
      <Description>
 
Get access to Raya and the last dragon.
      </Description>
      <CtaLogoTwo src="/Disney Clone Challenge/images/cta-logo-two.png" >
    
        </CtaLogoTwo>
    </Container>
  )
}

export default Login

const Container = styled.div`
position: relative;
height: calc(100vh - 70px);
display: flex;
flex-direction: column;

img{

&: before{
position: absolute;
content: "";
top: 0;
bottom: 0;
right: 0;
left: 0;

}
background-image: url("/Disney Clone Challenge/images/login-background.jpg")
}
`
const CTAWrapper = styled.div`

`
const CTA = styled.div`
display: flex;
display-direction: column;
max-width: 600px;
padding: 80px 40px;
width: 70%
display: flex;
flex-direction: coloumn;
margin-top: -800px;
margin-left: 335px;
opacity: 0.7;


`
const CtaLogoOne = styled.div`
margin-top: -500px;
margin-right: 60px;
`
const SignUP =styled.a`
border-radius: 4%;
width: 100%;
background-color: #0063e5;
font-weight: bold;
padding: 17px 200px;
color: #f9f9f9;
text-align: center;
font-size: 18px;
cursor: pointer;
transition: all 250px;
letter-spcaing: 1.5px;
margin-top: 8px;
margin-bottom: 12px;
&: hover {
background: #0483ee;
}
`
const Description = styled.p`
margin-top: 50px;
margin-right: 60px;
font-size: 11px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
padding-bottom: 20px;

`
const CtaLogoTwo = styled.img`

padding: 7px 27px;
opacity: 0.7;

`