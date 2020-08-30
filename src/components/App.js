import React, { Component } from "react"

import "../assets/css/App.css"

import { faOtter,faHippo,faDog,faSpider,faHorse,faFrog,faFish,faCat,faDragon,faDove }
from '@fortawesome/free-solid-svg-icons'

import Card from "./Card";

const icons = [
  faOtter,
  faHippo,
  faDog,
  faSpider,
  faHorse,
  faFrog,
  faFish,
  faCat,
  faDragon,
  faDove,
  faOtter,
  faHippo,
  faDog,
  faSpider,
  faHorse,
  faFrog,
  faFish,
  faCat,
  faDragon,
  faDove,
]
class App extends Component {  

  render() {
    // const zeros = new Array(20).fill(0)
    // const cards = zeros.map((zero, index) => (<Card />))
    let cards = icons.map((icon, index) => (<Card icon={ icon } key={Number(index)} id={ index } />))

    return (
      <>
        <h3>Welcome!!</h3>
        <div className="cards-container">
          { cards }
        </div>
      </>
    );
  }
}

export default App;
