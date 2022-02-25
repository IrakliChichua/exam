import React from 'react';
import {Card, Col, ListGroup, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function Groups({groups}) {

    let navigate = useNavigate();
    const nav = (groupId) => {
        navigate(`${groupId}`)
    }

    const GroupCard = ({title, groupNo, groupId}) => (
        <Card className="w-25 m-4" style={{cursor: 'pointer'}}
              onClick={()=>nav(groupId)}>
            <ListGroup variant="flush">
                <ListGroup.Item style={{background: "lightblue"}}>Group.N: {groupNo}</ListGroup.Item>
                <ListGroup.Item>
                    <h6>title: {title}</h6>
                    <h6>groupId: {groupId}</h6>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )

    return (
        <Row>
            {
                groups.map((group) => (
                    <Col key={group.groupId}>
                        <GroupCard {...group} />
                    </Col>
                ))
            }
        </Row>
    );
}

export default Groups;