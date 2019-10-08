import React from 'react';
import './App.css';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact 
        name="Anita Sutton"
        avatar="https://randomuser.me/api/portraits/women/21.jpg"
        isOnline
      />
      <Contact 
        name="Jim George"
        avatar="https://randomuser.me/api/portraits/men/46.jpg"
        isOnline
      />
      <Contact 
        name="Charlotte Ryan"
        avatar="https://randomuser.me/api/portraits/women/92.jpg"
        isOnline
      />
    </div>
  );
}

export default App;
