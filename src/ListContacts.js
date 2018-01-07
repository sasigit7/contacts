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
import React from "react";
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

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};
export default ListContacts;
