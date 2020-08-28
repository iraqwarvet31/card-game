import React, { Component } from "react"

import "../assets/css/App.css"

import { faOtter,faHippo,faDog,faSpider,faHorse,faFrog,faFish,faCat,faDragon,faDove }
from '@fortawesome/free-solid-svg-icons'

import Card from "./Card";

class App extends Component {  

  render() {
    let icons = [
      faOtter,
      faHippo,
      faDog,
      faSpider,
      faHorse,
      faFrog,
      faFish,
      faCat,
      faDragon,
      faDove
    ]
    // const zeros = new Array(20).fill(0)
    // const cards = zeros.map((zero, index) => (<Card />))
    let cards1 = icons.map((icon, index) => (<Card icon={ icon } key={Number(index)} index={ index } />))
    let cards2 = icons.map((icon, index) => (<Card icon={ icon } key={Number(index)} index={ index } />))
    return (
      <>
        <h3>Welcome!!</h3>
        <div className="cards-container">
          { cards1 }
          { cards2 }
        </div>
      </>
    );
  }
}

export default App;
