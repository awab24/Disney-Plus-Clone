import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <Nav>
<Logo src="/Disney Clone Challenge/images/logo.svg"/>
<NavMenu >
<a>
  <img src="/Disney Clone Challenge/images/home-icon.svg"/>
  <span>Home</span>
</a>
<a>
  <img src="/Disney Clone Challenge/images/search-icon.svg"/>
  <span>Search</span>
</a>
<a>
  <img src="/Disney Clone Challenge/images/watchlist-icon.svg"/>
  <span>Watchlist</span>
</a>
<a>
  <img src="/Disney Clone Challenge/images/movie-icon.svg"/>
  <span>Movies</span>
</a>
<a>
  <img src="/Disney Clone Challenge/images/series-icon.svg"/>
  <span>Series</span>
</a>
</NavMenu>
<UserImg src="/Disney Clone Challenge/images/msg777000-13796.jpg"/>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
height : 70px;
background: #090b13;
display: flex;
align-items: center;
padding: 0 36px;
overflow: hidden;

`
const Logo = styled.img`
width: 80px;

`
const NavMenu = styled.div`
display: flex;
margin-left : 20px;
align-items: center;
padding-right : 590px;


span {
  color : white;
  font-size : 13px;
  letter-spacing : 1.42px;
  position : relative;
  &:after {
    content : "";
    height: 2px;
    background: white;
    position : absolute;
    left : 0 ;
    right :0 ;
    bottom: -6px;
    opacity : 0;
    transform-origin: left center;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    transform : scaleX(0);

  }

}
&: hover {
  span: after {
    transform : scaleX(1);
    opacity: 1;
  }
}

a{
display: flex;
align-items: center;
padding: 0 12px;
cursor: pointer;
img  {
height : 20px;
padding-left : 20px

}

}
`
const UserImg = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
cursor : pointer;
`
