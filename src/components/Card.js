import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let selectedCards = [];

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    }
  }

  toggleClass = (event) => {

    selectedCards.push(event.currentTarget.id)
    console.log(selectedCards)
    
    if (selectedCards.length === 2) {
      var card1 = document.getElementsByClassName(selectedCards[0])[0]
      var card2 = document.getElementsByClassName(selectedCards[1])[0]

      console.log(this.state.isFlipped)
      setTimeout(() => {
        card1.classList.remove('is-flipped')
        card2.classList.remove('is-flipped')
      }, 1000)
      selectedCards = []
    }
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }))
  }

  render() {
    return (
      <div className="fade-in scene">
        <div
          className={
            this.state.isFlipped
              ? `card is-flipped ${this.props.id}`
              : `card ${this.props.id}`
          }
          onClick={this.toggleClass}
          id={this.props.id}
        >
          <div
            className="card__face card__face--front"
          ></div>
          <div className="card__face card__face--back">
            <FontAwesomeIcon icon={this.props.icon} color="coral" size="2x" />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
