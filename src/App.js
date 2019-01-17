import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import styled from 'styled-components'
import './App.css'

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    cards: [
      {
        id: 1,
        name: 'Mario',
        clicked: false,
        background: 'https://i.imgur.com/BMKlWox.png'
      },
      {
        id: 2,
        name: 'Yoshi',
        clicked: false,
        background: 'https://i.imgur.com/uiR2unW.png'
      },
      {
        id: 3,
        name: 'DK',
        clicked: false,
        background: 'https://i.imgur.com/XbM6fpi.png'
      },
      {
        id: 4,
        name: 'Kirby',
        clicked: false,
        background: 'https://i.imgur.com/VvgrXVM.png'
      },
      {
        id: 5,
        name: 'Link',
        clicked: false,
        background: 'https://i.imgur.com/otQD5aA.png'
      },
      {
        id: 6,
        name: 'Fox',
        clicked: false,
        background: 'https://i.imgur.com/iGRHG0E.png'
      },
      {
        id: 7,
        name: 'Samus',
        clicked: false,
        background: 'https://i.imgur.com/zUuNytA.png'
      },
      {
        id: 8,
        name: 'Pikachu',
        clicked: false,
        background: 'https://i.imgur.com/vkt4QdQ.png'
      },
      {
        id: 9,
        name: 'Luigi',
        clicked: false,
        background: 'https://i.imgur.com/VZFgeI7.png'
      },
      {
        id: 10,
        name: 'Ness',
        clicked: false,
        background: 'https://i.imgur.com/FIwD0Kw.png'
      },
      {
        id: 11,
        name: 'C.Falcon',
        clicked: false,
        background: 'https://i.imgur.com/qCB6gQo.png'
      },
      {
        id: 12,
        name: 'Jigglypuff',
        clicked: false,
        background: 'https://i.imgur.com/p6qO4bB.png'
      }
    ]
  }

  handleClick = id => {
    const card = this.returnCard(id)
    this.checkCardStatus(card)
  }

  returnCard = id => this.state.cards.find(card => card.id === id)

  checkCardStatus = card => {
    if (card.clicked === true) {
      this.resetScore()
    } else {
      this.clickCard(card)
      this.addScore()
    }
  }

  clickCard = card => {
    const { cards } = this.state
    let updatedCards = [...cards]
    const indexOfCard = updatedCards.indexOf(card)

    updatedCards[indexOfCard].clicked = true

    this.setState({
      cards: updatedCards
    })
  }

  resetScore = () => {
    const resetCards = this.state.cards.map(card => {
      const resetCard = { ...card, clicked: false }
      return resetCard
    })

    const shuffledCards = this.shuffle(resetCards)

    this.setState({
      score: 0,
      cards: shuffledCards
    })
  }

  addScore = () => {
    const { score, topScore, cards } = this.state
    const shuffledCards = this.shuffle(cards)
    if (score >= topScore) {
      this.setState({
        score: score + 1,
        topScore: score + 1,
        cards: shuffledCards
      })
    } else {
      this.setState({
        score: score + 1,
        cards: shuffledCards
      })
    }
  }

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  render() {
    const { score, topScore, cards } = this.state
    return (
      <div className="App">
        <Navbar score={score} topScore={topScore} />
        <CardContainer>
          {cards.map(card => (
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              background={card.background}
              handleClick={this.handleClick}
            />
          ))}
        </CardContainer>
      </div>
    )
  }
}

export default App

const CardContainer = styled.div`
  position: relative;
  top: 75px;
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  width: 960px;
  margin: 0 auto;
`
