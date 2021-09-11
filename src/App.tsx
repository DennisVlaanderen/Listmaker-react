import React from 'react';
import logo from './logo.svg';
import './App.css';

const user = {
  firstName: 'Dennis',
  lastName: 'Vlaanderen'
};

function formatName(user: any) {
  return user.firstName + " " + user.lastName;
}

const name = 'Dennis Vlaanderen';
const element = <h1>Hello, {formatName(user)}</h1>;

function App() {
  return (
    element
  );
}

export default App;
