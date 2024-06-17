import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #223a5f;
  height: 100vh;
  padding: 5px;
`
export const MainScoreBoard = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  border: 2px solid #ffffff;
  width: 100%;
  padding: 13px 25px;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 25px;
  font-family: Bree Serif;
  font-weight: 100;
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 1px 20px;
`
export const ScoreText = styled.p`
  color: #223a5f;
  font-size: 30px;
  font-family: Bree Serif;
  margin: 0;
`
export const ScoreCount = styled.p`
  color: #223a5f;
  font-size: 55px;
  font-family: 'Roboto';
  margin: 0;
`
export const ResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PlayersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`
export const PlayerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const PlayerText = styled.p`
  color: #ffffff;
`
export const PlayerSelectSymbol = styled.img`
  width: 150px;
`
export const ResultTest = styled.p`
  color: #ffffff;
`
export const PlayAgain = styled.button`
  color: #223a5f;
  background-color: #ffffff;
  font-family: Bree Serif;
  border: none;
  border-radius: 5px;
`
export const GameViewContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  width: 400px;
  margin-top: 65px;
`
