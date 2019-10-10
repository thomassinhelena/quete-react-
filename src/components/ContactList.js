import React from 'react';
import Contact from './Contact';


let Users = [{

name: "Sébastien",
avatar: "https://randomuser.me/api/portraits/men/58.jpg",
isOnline: true

},{
name: "Ludivine",
avatar: "https://randomuser.me/api/portraits/women/63.jpg",
isOnline: true

},{    
name: "Jean",
avatar: "https://randomuser.me/api/portraits/men/21.jpg",
isOnline: false

},{
name: "Marie",
avatar: "https://randomuser.me/api/portraits/women/3.jpg",
isOnline: true

},{
name: "Charlie",
avatar: "https://randomuser.me/api/portraits/women/26.jpg",
isOnline: false

}]

function ContactList() {
  return (
    <div>
      {Users.map((User) => {
        return (
        <Contact
          name={User.name} avatar={User.avatar} isOnline={User.isOnline}/>
        )
      })}
    </div>
  )
};

export default ContactList;
