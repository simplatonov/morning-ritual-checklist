import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import CheckList from "./components/CheckList";
import ItemModal from "./components/ItemModal";
import store from "./store";
import {Provider} from "react-redux";
import {Container} from "reactstrap";
import Login from "./components/Login";
import Register from "./components/Register";
class App extends Component {
  state={
    route:"login"
  }
  login=()=>{
    this.setState({route:"main"});
  }
  registerRoute=()=>{
    this.setState({route:"register"});
  }
  loginRoute=()=>{
    this.setState({route:"login"});
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <AppNavbar route={this.state.route} loginRoute={this.loginRoute} registerRoute={this.registerRoute}/>
          {this.state.route==="main"?
          <Container>

            <ItemModal/>
            <CheckList/>
          </Container>:(this.state.route==="login"?
            <Container><Login login={this.login}/></Container>:
            <Container><Register login={this.login}/></Container>
          )}

        </div>
      </Provider>
    );
  }
}

export default App;
