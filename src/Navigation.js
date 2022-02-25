import React from 'react';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <Nav
            activeKey="/"
        >
            <Nav.Item>
                <Nav.Link as={Link} to="/students">Students</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/teachers">Teachers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/groups">Groups</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}


export default Navigation;