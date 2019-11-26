import React, { Component } from 'react';
import { Button, Container, Form, } from 'react-bootstrap';
import NavBar from './Navbar';

class Home extends Component {


    render() {
        return (
            <div>
                <NavBar />
                <Container style={{ padding: '10%' }}>
                    <Form>
                        <Form.Group controlId="form">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="name" placeholder="Nombre" />
                        </Form.Group>
                        <Form.Group controlId="form">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="lastname" placeholder="Apellido" />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Registrarse
                    </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Home;