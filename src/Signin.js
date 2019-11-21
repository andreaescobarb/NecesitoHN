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
                            This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.</p>
                        <p>
                            <Button variant="primary">
                                {/*<Link to={routes.Home}>Sign In</Link>*/}
                            </Button>
                        </p>
                    </Jumbotron>
            </div>
        );
    }

}

export default Signin;