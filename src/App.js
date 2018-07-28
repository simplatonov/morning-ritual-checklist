import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import CheckList from "./components/CheckList";
import ItemModal from "./components/ItemModal";
import store from "./store";
import {Provider} from "react-redux";
import {Container} from "reactstrap";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <AppNavbar />

          <Container>

            <ItemModal/>
            <CheckList/>
          </Container>


        </div>
      </Provider>
    );
  }
}

export default App;
