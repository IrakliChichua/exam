import React, {useState} from 'react';
import {Button, Form, Modal, Row} from "react-bootstrap";

function GroupAdd({add, showModal, setShowModal}) {

    const [title, setTitle] = useState('')
    const [groupNo, setGroupNo] = useState('')

    const hide = () => {
        setShowModal(false)
    }

    const addHandler = () => {
        add({title,groupNo})
        hide()
    }

    return (
        <Modal show={showModal} onHide={hide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title> Create Group </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Form className="m-3">
                    <Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control placeholder="Enter title" value={title}
                                          onChange={e => setTitle(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>GroupNo</Form.Label>
                            <Form.Control placeholder="Enter groupNo" value={groupNo}
                                          onChange={e => setGroupNo(e.target.value)}/>
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

export default GroupAdd;