/*
 React, { Component } from "react"
import ListContacts from './ListContacts'


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
*/

/* 5. UPDATING STATE WITH SETSTATE::
1) Updating state directly won't work. The reason being is becuase by mutating
the state directly, React will have no idea that the state of the component
actually changed. To solve this problem, React gives us a helper method called
"setState".
2) There are two ways to use setState:::
a) The first way is by passing setState as a function. This function will be
passed the "previous state" as its first argument. The object returned from this
function will be merged with the current state to form the new state of the
component.
b)The second way is by passing setState as an object. The object will be merged
with the current state to form a new state of the component.
** When to use and when not to use these two ways**
-> Use the "functional setState" when the new state of the component depends on
   the previous state. And for everything else, use the "object setState".
    Regardless, how we use the "setState", the end result will be the same.

Whenever we invoke setState, React , by default is going to re-render the entire
application and update the UI.
This is the reason, why we say, in React, UI is just a function of the state.
 Once the state changes, the UI will change automatically.
*/

// USING setState TO REMOVE CONTACT::
/*
import React, { Component } from "react"
import ListContacts from './ListContacts'

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
   removeContact = (contact) => {
       // FIRST WAY - REFER ABOVE 2.a
       this.setState((state) => ({
           contacts: state.contacts.filter((c) => c.id !== contact.id)
       }))
       //SECOND WAY - REFER ABOVE 2.b
       /*
       this.setState({

       })

   }
  render() {
    return (
      <div>
        <ListContacts
          onDeleteContact={this.removeContact}
          contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
*/

/* 6. PROPTYPES:::::
->Runtime type checking for React props and similar objects. You can use
prop-types to document the intended types of properties passed to components.
React will check props passed to your components against those definations, and
warn in development if they don't match.
Installation::-> npm install --save prop-types
Importing::-> import Prop-Types from 'prop-types'; //ES6
Usage::-> PropTypes was originally exposed as part of the React core module,
and is commonly used with React Components. */
/*
import React, { Component } from "react"
import ListContacts from './ListContacts'

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
   removeContact = (contact) => {
       // FIRST WAY - REFER ABOVE 2.a
       this.setState((state) => ({
           contacts: state.contacts.filter((c) => c.id !== contact.id)
       }))
       //SECOND WAY - REFER ABOVE 2.b
       /*
       this.setState({

       })

   }
  render() {
    return (
      <div>
        <ListContacts
          onDeleteContact={this.removeContact}
          contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App
*/

// RENDER UI WITH EXTERNAL DATA::::

import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts }) // this.setState({ contacts: contacts })
    })
  }
   removeContact = (contact) => {
       // FIRST WAY - REFER ABOVE 2.a
       this.setState((state) => ({
           contacts: state.contacts.filter((c) => c.id !== contact.id)
       }))
       //SECOND WAY - REFER ABOVE 2.b
        this.setState({

       })
}
  render() {
    return (
      <div>
        <ListContacts
          onDeleteContact={this.removeContact}
          contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
