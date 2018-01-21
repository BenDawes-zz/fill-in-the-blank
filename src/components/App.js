import React, { Component } from 'react';
import LiveAppHeader from '../containers/LiveAppHeader';
import LiveGame from '../containers/LiveGame';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import game from '../reducers/game.js'
import '../styles/App.less'

let store = createStore(game)

class App extends Component {
  render() {
    return (
      	<Provider store={store}>
      		<div className="main-app">

	        	<LiveAppHeader/>
	        	<LiveGame/>
	        </div>
      	</Provider>
    );
  }
}

export default App;
