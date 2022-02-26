import React, {useState} from 'react';
import {Button, ButtonToolbar, Col, Form, Row} from "react-bootstrap";

function GroupSearch({onSubmit}) {

    const [title, setTitle] = useState('')
    const [groupNo, setGroupNo] = useState('')

    const search = (e) => {
        e.preventDefault()
        if (title && groupNo) onSubmit({title, groupNo})
        else if (title) onSubmit({title})
        else if (groupNo) onSubmit({groupNo})
        else onSubmit('')
    }

    return (
        <Form className="m-3" onSubmit={search}>
            <Row>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="Enter Title" value={title}
                                  onChange={e => setTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                    <Form.Label>GroupNo</Form.Label>
                    <Form.Control placeholder="Enter groupNo" value={groupNo}
                                  onChange={e => setGroupNo(e.target.value)}/>
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

export default GroupSearch;