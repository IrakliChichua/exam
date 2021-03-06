import React, {useState} from 'react';
import {Button, ButtonToolbar, Col, Form, Row} from "react-bootstrap";

function PersonSearch({onSubmit}) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [personalNo, setPersonalNo] = useState('')

    const search = (e) => {
        e.preventDefault()
        if (personalNo) onSubmit({personalNo})
        else if (firstName && lastName) onSubmit({firstName, lastName})
        else if (firstName) onSubmit({firstName})
        else if (lastName) onSubmit({lastName})
        else onSubmit('')
    }

    return (
        <Form className="m-3" onSubmit={search}>
            <Row>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control placeholder="Enter Firstname" value={firstName}
                                  onChange={e => setFirstName(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control placeholder="Enter Lastname" value={lastName}
                                  onChange={e => setLastName(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                    <Form.Label>personal No</Form.Label>
                    <Form.Control placeholder="Enter personal No" value={personalNo}
                                  onChange={e => setPersonalNo(e.target.value)}/>
                </Form.Group>
            </Row>
            <ButtonToolbar className="justify-content-end">
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </ButtonToolbar>

        </Form>
    );
}

export default PersonSearch;