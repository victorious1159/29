import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './Hello';
import Counter from './Counter';
import Counter1 from './Counter1';
import HelloAsClass from './HelloAsClass';
import HelloAsFunction from './HelloAsFunction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelloAsClass who="Tin" address="DN"></HelloAsClass>
 
  
 );

 
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
