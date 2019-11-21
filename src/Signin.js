import React, { Component } from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import * as routes from './Router';
import NavBar from './Navbar';

class Signin extends Component {
    render() {
        return (           
            <div>
                <NavBar/>
                    <Jumbotron style={{ backgroundColor: '#89CFF0' }}>
                        <h1>NECESITO HN</h1>
                        <p>
                        Una plataforma que permita a los profesionales ofrecer
                        <br/> 
                        sus servicios de forma directa y que las personas 
                        <br/>
                        interesadas puedan contratarles según sus necesidades. 
</p>
                        <p>
                        </p>
                    </Jumbotron>
            </div>
        );
    }

}

export default Signin;