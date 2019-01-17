import React from 'react'
import styled from 'styled-components'

const Navbar = props => {
  const { score, topScore } = props
  return (
    <NavBar>
      <NavBarContainer>
        <NavBarItem>Clicky Game</NavBarItem>
        <NavBarItem>Click an image to begin!</NavBarItem>
        <NavBarItem>
          Score: {score} | Top Score: {topScore}
        </NavBarItem>
      </NavBarContainer>
    </NavBar>
  )
}

export default Navbar

const NavBarItem = styled.h3`
  color: white;
`

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  background-color: #24292e;
`

const NavBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
`
