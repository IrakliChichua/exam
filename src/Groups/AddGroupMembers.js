import React, {useState} from 'react';
import {Button, Form, Modal, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";

function AddGroupMembers({add, showModal, setShowModal}) {

    const {groupId} = useParams();

    const [studentId, setStudentId] = useState('')
    const [teacherId, setTeacherId] = useState('')
    const [studentOrTeacher, setStudentOrTeacher] = useState(false)

    const hide = () => {
        setShowModal(false)
    }
    const addHandler = () => {
        add({groupId, studentId, teacherId})
        hide()
    }

    return (
        <Modal show={showModal} onHide={hide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title> Create Group </Modal.Title>
                <button className="m-2" onClick={() => setStudentOrTeacher(prevState => !prevState)}>
                    Student/Teacher
                </button>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Form className="m-3">
                    <Row>
                        {
                            studentOrTeacher ?
                                <Form.Group className="mb-3">
                                    <Form.Label>studentId</Form.Label>
                                    <Form.Control placeholder="Enter studentId" value={studentId}
                                                  onChange={e => setStudentId(e.target.value)}/>
                                </Form.Group>
                                :
                                <Form.Group className="mb-3">
                                    <Form.Label>teacherId</Form.Label>
                                    <Form.Control placeholder="Enter teacherId" value={teacherId}
                                                  onChange={e => setTeacherId(e.target.value)}/>
                                </Form.Group>
                        }
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

export default AddGroupMembers;