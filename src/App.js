import React, { Component } from "react"
import ListContacts from './ListContacts'

/*
class ContactList extends React.Component {
  render() {
    const people = this.props.contacts;

    return (
      <ol>{people.map(person => <li key={person.name}>{person.name}</li>)}</ol>
    );
  }
}
*/
/* THIS CONTACTS VARIABLE IS JUST HANGING OUT HERE LIKE AN ORPHAN AND REACT
DOESN'T KNOW IT'S EXISTENCE AND ANY CHANGES IN CONTACTS, WE WOULDN'T BE
ABLE TO INFORM REACT OF THAT CHANGE. SO, WE WILL MOVE THIS CONTACTS DATA INTO
THE SPECIFIC COMPONENT ITSELF. WHILE DOING SO, ANYTIME WE UPDATE THE CONTACTS,
REACT WILL KNOW ABOUT THAT AND ACTUALLY GO AHEAD AND UPDATE THE UI AS WELL. */

/*
const contacts = [
  {
    "id": "ryan",
    "name": "Ryan Florence",
    "email": "ryan@reacttraining.com",
    "avatarURL": "http://localhost:5001/ryan.jpg"
  },
  {
    "id": "michael",
    "name": "Michael Jackson",
    "email": "michael@reacttraining.com",
    "avatarURL": "http://localhost:5001/michael.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "email": "tyler@reacttraining.com",
    "avatarURL": "http://localhost:5001/tyler.jpg"
  }
]
*/
/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList
          contacts={[
            { name: "Shashi" },
            { name: "Jhansi" },
            { name: "Shajhanshi" }
          ]}
        />
        <ContactList
          contacts={[
            { name: "Chukki" },
            { name: "Chakki" },
            { name: "Chakkichukki" }
          ]}
        />
      </div>
    );
  }
}
*/

class App extends Component {
  state = {
    contacts: [
      {
        id: "ryan",
        name: "Ryan Florence",
        email: "ryan@reacttraining.com",
        avatarURL: "http://localhost:5001/ryan.jpg"
      },
      {
        id: "michael",
        name: "Michael Jackson",
        email: "michael@reacttraining.com",
        avatarURL: "http://localhost:5001/michael.jpg"
      },
      {
        id: "tyler",
        name: "Tyler McGinnis",
        email: "tyler@reacttraining.com",
        avatarURL: "http://localhost:5001/tyler.jpg"
      }
    ]
  };
  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
