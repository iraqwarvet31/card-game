import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let selectedCards = [];

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      visible: false,
    }
  }

  componentDidMount() {
    this.setState({ visible: true })
  }

  toggleClass = (event) => {
    
    if (selectedCards.length > 2) selectedCards = []

    selectedCards.push((this.props.index).toString())

    if (selectedCards[0] === selectedCards[1]) {
      let pair1 = document.getElementsByClassName(selectedCards[0])[0]
      let pair2 = document.getElementsByClassName(selectedCards[1])[1]
      
      console.log('MATCH FOUND!!')
      console.log(selectedCards)
      
      setTimeout(() => pair1.style.visibility = 'hidden', 900)
      setTimeout(() => pair2.style.visibility = 'hidden', 900)

      selectedCards = []
    } 

    if (selectedCards[0] !== selectedCards[1] && selectedCards.length === 2) {
      let pair1 = document.getElementsByClassName(selectedCards[0])[0]
      let pair2 = document.getElementsByClassName(selectedCards[1])[1]
      // console.log(selectedCards, pair1,pair2)
      setTimeout(() => pair1.click(), 900)
      setTimeout(() => pair2.click(), 900)
  
      selectedCards = []
    }
      
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }))
}

  render() {
  
    return (
      <div className={this.state.visible ? "fade-in scene" : "scene"} >
        <div
          className={
            this.state.isFlipped ? `card is-flipped ${ this.props.index }` : 
            `card ${ this.props.index }` 
          }
          onClick={ this.toggleClass }
        >
          <div className="card__face card__face--front">
          </div>
          <div className="card__face card__face--back">
            <FontAwesomeIcon 
              icon={ this.props.icon }
              color="coral" 
              size="2x"
            />
          </div>
        </div>
      </div>
    )     
  } 
}

export default Card;