import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
class Login extends Component {
  state={
    email:"",
    password:""
  }
  onEmailChange=(e)=>{
    this.setState({email:e.target.value});
  }
  onPasswordChange=(e)=>{
    this.setState({password:e.target.value});
  }
  onSubmit=(e)=>{
    e.preventDefault();
    this.props.login();
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit} className="mt-5">
        <legend>Login</legend>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input onChange={this.onEmailChange} type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input onChange={this.onPasswordChange} type="password" name="password" id="examplePassword" placeholder="Enter your password" />
        </FormGroup>
        <Button color="dark">Submit</Button>
      </Form>

    );
  }
}

export default Login;
