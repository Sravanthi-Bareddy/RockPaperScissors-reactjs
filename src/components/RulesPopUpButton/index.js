import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {MdClose} from 'react-icons/md'

import {
  PopUpContainer,
  RulesContainer,
  RulesButton,
  RulesImage,
  CloseButton,
} from './styledComponents'

const RulesPopUpButton = () => (
  <PopUpContainer>
    <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
      {close => (
        <RulesContainer>
          <CloseButton
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            <MdClose />
          </CloseButton>
          <RulesImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </RulesContainer>
      )}
    </Popup>
  </PopUpContainer>
)

export default RulesPopUpButton
