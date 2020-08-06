import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Create Import File
import './App.css';

// Home Layout 
import Main from './Main';


import { BrowserRouter, Switch, Route  } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter basename={'/'}>
		<Switch>
			<Route exact path={`${process.env.PUBLIC_URL}/`} component={Main}/>
		</Switch>
	</BrowserRouter>
  );
}

export default App;
