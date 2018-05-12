import React, { Component } from "react";
import { Provider } from "react-redux";
import Main from "./components/Main";
import rootReducer from "./reducers";
import { createStore } from 'redux'

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
