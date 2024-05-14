import { Description } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>

      <Background>
        <img src="/Disney Clone Challenge/images/bao-animationscreencaps.com-.jpg"/>
      </Background>
      <AllWrapper>
<PlayButton>
<img src= "/Disney Clone Challenge/images/Play-icon-black.png"/>
<span>PLAY</span>
</PlayButton>
<TrailorWrapper>
<TrailerButton>
<img src= "/Disney Clone Challenge/images/Play-icon-white.png"/>
<span>TRAILOR</span>
</TrailerButton>
</TrailorWrapper>
<AddWrapper>
<AddButton>
<img src="/Disney Clone Challenge/images/AddButton.png" />
</AddButton>
</AddWrapper>
<GroupWrapper>
<GroupWatchButton>
<img src="/Disney Clone Challenge/images/group-icon.png" />

</GroupWatchButton>
</GroupWrapper>
</AllWrapper>
<TitleWrapper>
<SubTitle>
  2018 - 7m - Family, Fantasy, Kids, Animation
</SubTitle>
</TitleWrapper>
<DescriptionWrapper>
<Description2>
  A chinese mom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life.
</Description2>
</DescriptionWrapper>
    </Container>
  )
}

export default Detail

const Container = styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;

`
const Background = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0; 
right: 0;
z-index: -1;
opacity: .4;

img {
  width:100%;
  height: 100%;
}
`
const ImgTitle = styled.div`
height: 30vh;
min-height: 17px;
width: 35vw;
min-width: 200px;
img{
  width: 100%
  height: 100%
  object-fit: contain;
}
`
 
const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
display: flex;
align-items: center;
height: 56px;
background: rgb (249, 249, 249);
border: none;
letter-spacing: 1.8px;
cursor: pointer;
&: hover{
  background: rgb(198, 198, 198);
}
border-radius: 20px;
margin-bottom: 1px;

`
const AllWrapper = styled.div`
margin-top: 220px;

`
const TrailorWrapper = styled.div`
margin-top: -54px;
margin-bottom: 10px;
`
const TrailerButton = styled(PlayButton)`
align-items: center;
height: 56px;
background: rgba(0,0,0, 0.3);
border: 1px solid rgb(249 , 249, 249);
color: rgb(249, 249, 249);
text-transform: uppercase;
margin-left: 100px;
margin-top: 1px;

`
const AddWrapper = styled.div`
margin-top: -35px;

`
const AddButton= styled.button`
cursor: pointer;  
width: 44px;
height: 44px;
align-items: center;
img{
  height: 100%;
  width: 100%;
  object-fit: contain;

}
margin-left: -720px;
margin-top: -400px;
background: white;
padding-bottom: -10px;
padding-top: -10px;
border-radius: 50%


`
const GroupWrapper = styled.div`
margin-left: -600px;
margin-top: -43px;


`
const GroupWatchButton = styled.button`
cursor: pointer;
img{
  height: 100%;
  width: 100%;
  object-fit: contain;
background: rgba(0,0,0, 0);
border-radius: 40%;

}
background: rgba(0,0,0, 0.3);
border-radius: 40%;
&: hover{
  background: rgb(198, 198, 198);
}
`
const TitleWrapper = styled.div`
margin-right: 900px;
margin-top: 60px;
`
const SubTitle = styled.div`
font-size: 16px;
`

const DescriptionWrapper = styled.div`
margin-right: 340px;
`
const Description2 = styled.div`
line-height: 1.4;
font-size: 20px;
margin-top: 16px;
font-size: 14px;
`