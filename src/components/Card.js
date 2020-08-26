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
    selectedCards.push(event.currentTarget.id)

    console.log(event.currentTarget.className)

    if (selectedCards[0] === selectedCards[1]) {
      document.getElementById(`${selectedCards[0]}`).style.visibility = 'hidden'
      document.getElementById(`${selectedCards[1]}`).style.visibility = 'hidden'
    }

    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }))
}

  render() {
  
    return (
      <div className={this.state.visible ? "fade-in scene" : "scene"} >
        <div
          className={this.state.isFlipped ? "card is-flipped" : "card" }
          onClick={ this.toggleClass }
          id={ this.props.id }
          key={ this.props.key }
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