import React, { Component } from 'react';
import Header from './components/Header';
import FriendCard from './components/FriendCard';
import Footer from './components/Footer';
import Wrapper from "./components/Wrapper";
import cast from "./cast.json";
import './App.css';

class App extends Component {

  // Setting this.state.friends to the friends json array
  state = {
    cast,
    score: 0,
    high_score: 0,
    old_top_score: 0,
    message: ""
  };

  selectCharacter = id => {
    let message = this.state.message;
    let score = this.state.score;
    let high_score = this.state.high_score;
    let cast = this.state.cast.filter(cast => cast.id === id)[0];

    if (cast.selected === false || cast.selected === undefined) {

      message = "";
      score += 1;


      if(high_score < score) {
        high_score = score;
      }

      cast.selected = true;

      this.setState({ score, high_score, message, cast: this.shuffleArray(this.state.cast) });

    } else {
      console.log(cast.selected);
      this.endGame();

    }

  };

  shuffleArray = arr => {
    
    for (let k = arr.length - 1; k > 0; k--) {
      const j = Math.floor(Math.random() * (k + 1));
      [arr[k], arr[j]] = [arr[j], arr[k]];
    }
    return arr;
      
  }

  endGame = () => {
    let high_score = this.state.high_score;
    let old_top_score = this.state.old_top_score;
    let score = this.state.score;
    let message = this.state.message;

    if(old_top_score < high_score){
      old_top_score = high_score;
      message = `Congrats! new high score: ${old_top_score}`
    } else {
      message = "Game over! Try again though!"
    }

    score = 0;
    this.state.cast.map((cast) => {
      return cast.selected = false;

    })
    this.setState({ score, high_score, old_top_score, message })
  }

  render() {
    return (
      <div className="App">
          <Header score={this.state.score} high_score={this.state.high_score} message={this.state.message}/>
          <Wrapper>
          {this.state.cast.map((cast, index) => (
            <FriendCard
              id={cast.id}
              selectCharacter={this.selectCharacter}
              name={cast.name}
              image={cast.image}
              key={index}
              index={index}
            />
          ))}
          </Wrapper>
          <Footer />
      </div>
    );
  }
}

export default App;
