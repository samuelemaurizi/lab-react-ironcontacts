import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Card from "./components/Card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts,
      displayedCeleb: [],
      maxCeleb: 5
    };

    this.addCelebHandler = this.addCelebHandler.bind(this);
    this.sortByNameHandler = this.sortByNameHandler.bind(this);
    this.sortByPopularityHandler = this.sortByPopularityHandler.bind(this);
    this.deleteCelebHandler = this.deleteCelebHandler.bind(this);
  }

  componentDidMount() {
    let startCeleb = this.state.contacts
      .slice(0, this.state.maxCeleb)
      .map((celeb, index) => {
        return celeb;
      });
    this.setState({ displayedCeleb: startCeleb });
  }

  render() {
    const displayedCeleb = this.state.displayedCeleb.map((contact, index) => {
      return (
        <Card
          img={contact.pictureUrl}
          name={contact.name}
          popularity={contact.popularity.toFixed(2)}
          key={index}
          deleteCelebHandler={this.deleteCelebHandler}
        />
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Iron Contacts</h1>
          <button onClick={e => this.addCelebHandler(e)}>
            Add Random Contacts
          </button>
          <button onClick={this.sortByNameHandler}>Sort by name</button>
          <button onClick={this.sortByPopularityHandler}>
            Sort by popularity
          </button>
        </header>
        <div className="celebrities-table">
          <table className="celebritiy-card">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>{displayedCeleb}</tbody>
          </table>
        </div>
      </div>
    );
  }

  addCelebHandler() {
    let randomCeleb = contacts[Math.floor(Math.random() * contacts.length)];
    console.log(`Added: ${randomCeleb.name}`);
    let newStateCeleb = this.state.displayedCeleb;
    newStateCeleb.push(randomCeleb);

    this.setState({ contacts: newStateCeleb });
  }

  sortByNameHandler() {
    var sortedCeleb = [...this.state.displayedCeleb].sort((a, b) => {
      return b.name < a.name ? 1 : -1;
    });
    this.setState({ displayedCeleb: sortedCeleb });
  }

  sortByPopularityHandler() {
    var sortedCeleb = [...this.state.displayedCeleb].sort((a, b) => {
      return a.popularity - b.popularity;
    });
    this.setState({ displayedCeleb: sortedCeleb });
  }

  deleteCelebHandler(name) {
    let newStateCeleb = this.state.displayedCeleb.filter(contact => {
      console.log(`Removed: ${name}`);
      return contact.name !== name;
    });
    this.setState({ displayedCeleb: newStateCeleb });
  }
}

export default App;
