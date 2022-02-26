import React, {useState} from 'react';
import {Button, Form, Modal, Row} from "react-bootstrap";

function AddModal({showModal, setShowModal, add}) {

    const [person, setPerson] = useState(
        {
            firstName: '',
            lastName: '',
            personalNo: '',
            email: '',
            birthDate: ''
        }
    )

    const hide = () => {
        setShowModal(false)
    }
    const addHandler = () => {
        add({person})
        hide()
    }

    return (
        <Modal show={showModal} onHide={hide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title> Add </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Form className="m-3">
                    <Row>
                        <Form.Group className="mb-3">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control placeholder="Enter FirstName" value={person.firstName}
                                          onChange={e => setPerson({...person, firstName: e.target.value})}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control placeholder="Enter LastName" value={person.lastName}
                                          onChange={e => setPerson({...person, lastName: e.target.value})}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Personal.no</Form.Label>
                            <Form.Control placeholder="Enter Personal.no" value={person.personalNo}
                                          onChange={e => setPerson({...person, personalNo: e.target.value})}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control placeholder="Enter email" value={person.email}
                                          onChange={e => setPerson({...person, email: e.target.value})}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Birth Date</Form.Label>
                            <Form.Control placeholder="Enter Birth Date" value={person.birthDate}
                                          onChange={e => setPerson({...person, birthDate: e.target.value})}/>
                        </Form.Group>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addHandler}>Add</Button>
                <Button onClick={hide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddModal;