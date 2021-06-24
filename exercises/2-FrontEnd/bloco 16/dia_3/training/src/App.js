import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <main className="main">
          <Player />
          <Sidebar />
        </main>
      </Provider>
    );
  }
}

export default App;
