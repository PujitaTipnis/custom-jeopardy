import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css';

const Header = () => {
    return (
       <Container fluid>
           <Row>
                <Col>
                    <h1>Family Jeopardy</h1>
                </Col>
           </Row>
       </Container> 
    );
};

export default Header;