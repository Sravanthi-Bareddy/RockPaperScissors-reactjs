import {ListItem, GameButton, GameButtonImage} from './styledComponents'

const GameButtonItem = props => {
  const {gameButtonDetails, playerSelection} = props
  const {id, imageUrl} = gameButtonDetails

  const onPlayerSelection = () => {
    playerSelection(gameButtonDetails)
  }

  const dataTestId = () => {
    switch (id) {
      case 'ROCK':
        return 'rockButton'
      case 'PAPER':
        return 'paperButton'
      case 'SCISSORS':
        return 'scissorsButton'
      default:
        return null
    }
  }

  return (
    <ListItem>
      <GameButton
        type="button"
        data-testid={dataTestId()}
        onClick={onPlayerSelection}
      >
        <GameButtonImage src={imageUrl} alt={id} />
      </GameButton>
    </ListItem>
  )
}
export default GameButtonItem
