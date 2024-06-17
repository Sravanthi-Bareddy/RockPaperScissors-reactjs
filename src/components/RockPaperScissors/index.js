import {Component} from 'react'

import {
  AppContainer,
  MainScoreBoard,
  Heading,
  ScoreContainer,
  ScoreText,
  ScoreCount,
  GameViewContainer,
  ResultViewContainer,
  PlayersContainer,
  PlayerItem,
  PlayerText,
  PlayerSelectSymbol,
  ResultTest,
  PlayAgain,
} from './styledComponents'

import GameButtonItem from '../GameButtonItem'
import RulesPopUpButton from '../RulesPopUpButton'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissors extends Component {
  state = {
    isGameOver: false,
    score: 0,
    playerSelected: {},
    opponentSelected: choicesList[Math.floor(Math.random() * 3)],
    matchResult: '',
  }

  playerSelection = selectedItem => {
    const {opponentSelected} = this.state

    if (selectedItem.id === opponentSelected.id) {
      this.setState({
        isGameOver: true,
        matchResult: 'IT IS DRAW',
        playerSelected: selectedItem,
      })
    } else if (
      (selectedItem.id === 'ROCK' && opponentSelected.id === 'SCISSORS') ||
      (selectedItem.id === 'PAPER' && opponentSelected.id === 'ROCK') ||
      (selectedItem.id === 'SCISSORS' && opponentSelected.id === 'PAPER')
    ) {
      this.setState(prevState => ({
        isGameOver: true,
        score: prevState.score + 1,
        matchResult: 'YOU WON',
        playerSelected: selectedItem,
      }))
    } else {
      this.setState(prevState => ({
        isGameOver: true,
        score: prevState.score - 1,
        matchResult: 'YOU LOSE',
        playerSelected: selectedItem,
      }))
    }
  }

  renderGameView = () => (
    <GameViewContainer>
      {choicesList.map(eachItem => (
        <GameButtonItem
          key={eachItem.id}
          gameButtonDetails={eachItem}
          playerSelection={this.playerSelection}
        />
      ))}
    </GameViewContainer>
  )

  onPlayAgain = () => {
    this.setState({
      isGameOver: false,
      playerSelected: {},
      opponentSelected: choicesList[Math.floor(Math.random() * 3)],
      matchResult: '',
    })
  }

  renderResultView = () => {
    const {playerSelected, opponentSelected, matchResult} = this.state
    return (
      <ResultViewContainer>
        <PlayersContainer>
          <PlayerItem>
            <PlayerText>YOU</PlayerText>
            <PlayerSelectSymbol
              src={playerSelected.imageUrl}
              alt="your choice"
            />
          </PlayerItem>
          <PlayerItem>
            <PlayerText>OPPONENT</PlayerText>
            <PlayerSelectSymbol
              src={opponentSelected.imageUrl}
              alt="opponent choice"
            />
          </PlayerItem>
        </PlayersContainer>
        <ResultTest>{matchResult}</ResultTest>
        <PlayAgain type="button" onClick={this.onPlayAgain}>
          Play Again
        </PlayAgain>
      </ResultViewContainer>
    )
  }

  render() {
    const {isGameOver, score, opponentSelected} = this.state

    console.log(opponentSelected)

    return (
      <AppContainer>
        <MainScoreBoard>
          <Heading>
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
          </Heading>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <ScoreCount>{score}</ScoreCount>
          </ScoreContainer>
        </MainScoreBoard>
        {isGameOver ? this.renderResultView() : this.renderGameView()}
        <RulesPopUpButton />
      </AppContainer>
    )
  }
}

export default RockPaperScissors
