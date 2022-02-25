import React, {useState} from 'react';
import {Button, Form, Modal, Row} from "react-bootstrap";

function StudentOperationAddModal({showModal, setShowModal, addStudent}) {
    /*
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        personalNo: '',
        email: '',
        birthDate: '',
    });*/
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [personalNo, setPersonalNo] = useState('')
    const [email, setEmail] = useState('')
    const [birthDate, setBirthDate] = useState('')

    const hide = () => {
        setShowModal(false)
    }
    const addHandler = () => {
        addStudent({firstName,lastName,personalNo,email, birthDate})
        hide()
    }

    return (
        <Modal show={showModal} onHide={hide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title> Add Student </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Form className="m-3">
                    <Row>
                        <Form.Group className="mb-3">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control placeholder="Enter FirstName" value={firstName}
                                          onChange={e => setFirstName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control placeholder="Enter LastName" value={lastName}
                                          onChange={e => setLastName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Personal.no</Form.Label>
                            <Form.Control placeholder="Enter Personal.no" value={personalNo}
                                          onChange={e => setPersonalNo(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control placeholder="Enter email" value={email}
                                          onChange={e => setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Birth Date</Form.Label>
                            <Form.Control placeholder="Enter Birth Date" value={birthDate}
                                          onChange={e => setBirthDate(e.target.value)}/>
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

export default StudentOperationAddModal;