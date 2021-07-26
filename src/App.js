import React from 'react';
import Users from './components/UsersComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3 style={{textAlign:"center"}}>* * * * User Cards Using Redux Saga * * * *</h3><br></br>
      <Users />
    </div>
  );
}

export default App;