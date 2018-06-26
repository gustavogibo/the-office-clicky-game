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
    cast
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const cast = this.state.cast.filter(cast => cast.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ cast });
  };

  render() {
    return (
      <div className="App">
          <Header />
          <Wrapper>
          {this.state.cast.map(friend => (
            <FriendCard
              removeFriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
          </Wrapper>
          <Footer />
      </div>
    );
  }
}

export default App;
