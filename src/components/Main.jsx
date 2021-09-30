import React from "react";
import HeroButton from "./ui/HeroButton";
import VillainButton from "./ui/VillainButton";
import data from "../data/heroesAndVillains";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      mode: "",
      display: [],
    };
    this.toggleHero = this.toggleHero.bind(this);
    this.toggleVillain = this.toggleVillain.bind(this);
  }

  toggleHero() {
    this.setState({
      mode: "hero",
    });
  }

  toggleVillain() {
    this.state = "villain";
  }

  componentDidUpdate(prevProps) {
    if (this.state.mode !== prevProps.mode) {
      this.dataMapper();
    }
  }

  dataMapper() {
    // Establish a true/false boolean value
    let filterForHero = this.state.mode === "hero";

    // Filter through the data and compare the .hero to filterForhero
    let filteredData = Data.filter(
      (character) => character.hero === filterForHero
    );

    this.setState({
      display: filteredData,
    });
  }

  renderData() {
    return this.state.display
      ? this.state.display.map((character, (index) => {
          return (
            <div key={index} className="character-display">
              <h2>{character.name}</h2>
              <h6>Real Name: {character.realName}</h6>
              <p>Universe: {character.universe}</p>
              <p>Powers: {character.power}</p>
            </div>
            <div>
              <p>Heroes or Villains?</p>
            </div>
          );
        })
      : null;
  }

  componentDidMount() {
    return (
      <div>
        <div className="btns" style={leftIndent}>
          <HeroButton toggleHero={this.toggleHero} />
          <VillainButton toggleVillain={this.toggleVillain} />
        </div>
        <div className="data-display">{this.renderData}</div>
      </div>
    );
  }
}

let leftIndent = {
  marginLeft: "1em",
};
