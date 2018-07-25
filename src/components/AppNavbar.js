import React, {Component} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container} from 'reactstrap';

class AppNavbar extends Component{
  state = {
    isOpen:false
  }
  toggle = () => {
    this.setState({
      isOpen:!this.state.isOpen
    })
  }
  render(){
    return(
      <div>
        <Navbar color="dark" dark expand="sm" className="mb5">
          <Container>
            <NavbarBrand href="/">Morning Ritual Checklist</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              {
                this.props.route==="main"?
                <NavItem>
                <NavLink style={{cursor:"pointer"}} onClick={this.props.loginRoute}>
                Logout
                </NavLink>
                </NavItem>



                :(


                  <NavItem>
                  <NavLink style={{cursor:"pointer"}} onClick={this.props.loginRoute}>
                  Login
                  </NavLink>
                  </NavItem>

                )}{
                this.props.route!=="main"?
                <NavItem>

                  <NavLink style={{cursor:"pointer"}} onClick={this.props.registerRoute}>
                    Register
                  </NavLink>
                </NavItem>:<p></p>
              }


                <NavItem>
                  <NavLink href="https://github.com/simplatonov">
                    Github
                  </NavLink>
                </NavItem>

              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );

  }
}



export default AppNavbar;
