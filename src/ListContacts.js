/*
import React, { Component } from 'react';

// ADD STATE TO A COMPONENT - STATELESS FUNCTIONAL COMPONENTS
/* CLASS FIELDS::EXAMPLE::::
class User extends React.Component {
   constructor(props) {
   super(props);
   this.state = {
     username: 'Shashi'
   }
  }
}
is equivalent to ...
class User extends React.Component {
   state = {
   username: 'Shashi'
 }
}
@Having state outside the constructor() method means it is a CLASS FIELD.
IT'S NEW PROPOSAL FOR A CHANGE IN JS AND IT'S NOT SUPPORTED BY JS, BUT THANKS TO
BABEL'S FANTASTIC POWER'S OF TRANSPILING, WE CAN USE IT.


function ListContacts (props) {
    return (
      <ol className="contact-list">
      {props.contacts.map((contact) => (
         <li key={contact.id} className='contact-list-item'>

           <div className='contact-avatar' style={
             {
               backgroundImage: `url(${contact.avatarURL})`
             }
           }>
         </div>

         <div className='contact-details'>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
         </div>

        <button className='contact-remove'>
          Remove
        </button>
         </li>
      ))}
    </ol>
    )
}
*/
/* IF THE COMPONENT HAS ONLY RENDER METHOD, WE CAN WRITE IT AS A STATELESS
 FUNCTIONAL COMPONENT LIKE BELOW EXAMPLE...

class Email extends React.Component {
 render() {
 return (
   <div>{this.props.text}</div>
   );
 }
}
is equivalent to this...PROPS WILL BE PASSED AS AN ARGUMENT TO THE FUNCTION
AND KEYWORD "THIS" WILL BE REMOVED FROM JSX...
 function Email (props) = {
  return (
  <div>{props.text}</div>
 )
}
is equivalent to this ...using ES6 with an implicit return
  const Email = (props) = > (
   <div>{props.text}</div>
)
*/
/* PASS DATA WITH PROPS
class ListContacts extends Component {
   render() {
    // console.log('Props', this.props)
     return (
         <ol className="contact-list">
         {this.props.contacts.map((contact) => (
            <li key={contact.id} className='contact-list-item'>

              <div className='contact-avatar' style={
                {
                  backgroundImage: `url(${contact.avatarURL})`
                }
              }>
            </div>

            <div className='contact-details'>
               <p>{contact.name}</p>
               <p>{contact.email}</p>
            </div>

           <button className='contact-remove'>
             Remove
           </button>
            </li>
         ))}
       </ol>
     )
   }
}

export default ListContacts
*/

//5. UPDATE STATE WITH setState
/*
import React, { Component } from 'react'
function ListContacts (props) {
    return (
      <ol className="contact-list">
      {props.contacts.map((contact) => (
         <li key={contact.id} className='contact-list-item'>

           <div className='contact-avatar' style={
             {
               backgroundImage: `url(${contact.avatarURL})`
             }
           }>
         </div>

         <div className='contact-details'>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
         </div>

        <button
          // use onClick method
          onClick={() => props.onDeleteContact(contact)}
          className='contact-remove'>
          Remove
        </button>
         </li>
      ))}
    </ol>
    )
}
export default ListContacts
*/

//6. PROPTYPES::
/*
//Modified...
import React from "react";
//Imported...
import PropTypes from "prop-types";

function ListContacts(props) {
  return (
    <ol className="contact-list">
      {props.contacts.map(contact => (
        <li key={contact.id} className="contact-list-item">
          <div
            className="contact-avatar"
            style={{
              backgroundImage: `url(${contact.avatarURL})`
            }}
          />

          <div className="contact-details">
            <p>{contact.name}</p>
            <p>{contact.email}</p>
          </div>

          <button
            // use onClick method
            onClick={() => props.onDeleteContact(contact)}
            className="contact-remove"
          >
            Remove
          </button>
        </li>
      ))}
    </ol>
  );
}
//PropTYpes Inclusion...
ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};
export default ListContacts;
*/
/* 7. CONTROLLED COMPONENTS:::::
->Controlled Components are components which render a form, but the source of
truth for that form state lives inside of the component state rather than inside
of the DOM.
Benefits::->
a) Instant Input Validation
b) Conditionally disable/enable buttons
c) Enforce input formats
*/
/*
import React, { Component } from "react"
import PropTypes from "prop-types"
import escapeRegExp from "escape-string-regexp"
import sortBy from "sort-by"

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ""
  }

updateQuery = (query) => {
 let trimmedQuery = query.replace(/^\s+/, "")
  this.setState({
    query: trimmedQuery
  })
}

clearQuery = () => {
  this.updateQuery("")
}

render() {
   const { contacts, onDeleteContact } = this.props
   const { query } = this.state

   let showingContacts
   if (query) {
     const match = new RegExp(escapeRegExp(query), "i")
     showingContacts = contacts.filter((contact) => match.test(contact.name))
   } else {
      showingContacts = contacts
}

showingContacts.sort(sortBy("name"))

  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input
          className="search-contacts"
          type="text"
          placeholder="Search contacts"
          value={query}
          onChange={(event) => this.updateQuery(event.target.value)}
        />
      </div>

      {showingContacts.length !== contacts.length && (
        <div className="showing-contacts">
      <span>Now showing {showingContacts.length} of {contacts.length} total</span>
        <button onClick={this.clearQuery}>Show all</button>
        </div>
      )}

    <ol className="contact-list">
        {showingContacts.map((contact) => (
          <li key={contact.id} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}
            />

            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>

            <button
              onClick={() => onDeleteContact(contact)}
              className="contact-remove"
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
    )
  }
}

export default ListContacts
*/
//ADD THE CREATE CONTACT BUTTON::
import React, { Component } from "react"
import PropTypes from "prop-types"
import escapeRegExp from "escape-string-regexp"
import sortBy from "sort-by"

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ""
  }

updateQuery = (query) => {
 let trimmedQuery = query.replace(/^\s+/, "")
  this.setState({
    query: trimmedQuery
  })
}

clearQuery = () => {
  this.updateQuery("")
}

render() {
   const { contacts, onDeleteContact } = this.props
   const { query } = this.state

   let showingContacts
   if (query) {
     const match = new RegExp(escapeRegExp(query), "i")
     showingContacts = contacts.filter((contact) => match.test(contact.name))
   } else {
      showingContacts = contacts
}

showingContacts.sort(sortBy("name"))

  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input
          className="search-contacts"
          type="text"
          placeholder="Search contacts"
          value={query}
          onChange={(event) => this.updateQuery(event.target.value)}
        />

        <a
          href='#create'
          onClick={this.props.onNavigate}
          className='add-contact'
           >Add Contact</a>
      </div>

      {showingContacts.length !== contacts.length && (
        <div className="showing-contacts">
      <span>Now showing {showingContacts.length} of {contacts.length} total</span>
        <button onClick={this.clearQuery}>Show all</button>
        </div>
      )}

    <ol className="contact-list">
        {showingContacts.map((contact) => (
          <li key={contact.id} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}
            />

            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>

            <button
              onClick={() => onDeleteContact(contact)}
              className="contact-remove"
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
    )
  }
}

export default ListContacts
