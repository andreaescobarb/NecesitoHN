import React, { Component } from 'react';
import { Form, FormControl, Nav, Button, Container, Navbar } from 'react-bootstrap';
import logo from './Picture1.png';

class NavBar extends Component {
    render() {
        return (
            <div>
                {/*<Container style={{ padding: '20px' ,}} >*/}
                    <Navbar bg="primary" variant="dark" expand="xl">
                        <Navbar.Brand href="#home"> <img src={logo} height="100" alt="logo"/></Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Navbar>
                {/*</Container>*/}
            </div>
        );
    }
}

const divStyle = {   
    color: 'black',
  };  

export default NavBar;