import React, { Component } from 'react'
import styled from 'styled-components'

class Card extends Component {
  render() {
    const { id, handleClick, background } = this.props
    return (
      <CardStyle
        style={{ backgroundImage: `url(${background})` }}
        onClick={() => handleClick(id)}
      />
    )
  }
}

export default Card

const CardStyle = styled.div`
  width: auto;
  height: 0;
  padding-bottom: 100%;
  cursor: pointer;
  transition: transform 0.2s;
  background-repeat: no-repeat;
  background-size: cover;
  :hover {
    transform: scale(1.1);
  }
`
