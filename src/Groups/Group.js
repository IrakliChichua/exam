import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Button, ButtonToolbar, Table} from "react-bootstrap";
import GroupDelete from "./GroupDelete";
import api from "../api";
import AddGroupMembers from "./AddGroupMembers";

function Group(props) {

    const {groupId} = useParams();
    const [groupMembers, setGroupMembers] = useState([])
    const [groupMembersShowModal, setGroupMembersShowModal] = useState(false)

    console.log(groupMembers)
    async function getGroupMembers() {
        const res = await api.get("/group-members")
        setGroupMembers(res.data._embedded["group-members"])
    }

    useEffect(()=>{getGroupMembers().catch(console.error)},[])

    async function addGroupMembers(params) {
        console.log(params)
        /*const {groupId, studentId, teacherId} = params*/
        await api.post("/group-members", {
            params
        })
    }

    async function deleteGroup(id) {
        await api.delete(`${id}`)

    }

    const Member = ({studentId, teacherId, memberId}) => (
        <>
            <td>{memberId}</td>
            <td>{studentId || ''}</td>
            <td>{teacherId || ''}</td>
            <td>{studentId ? 'student' : teacherId ? 'teacher' : 'neither'}</td>
        </>
    )
    return (
        <>
            <ButtonToolbar className="justify-content-end m-3">
                <GroupDelete id={groupId} del={deleteGroup}/>
                <Button variant="primary" type="submit"
                        onClick={() => setGroupMembersShowModal(true)}>
                    Add Member
                </Button>
            </ButtonToolbar>
            <AddGroupMembers add={addGroupMembers} showModal={groupMembersShowModal}
                                setShowModal={setGroupMembersShowModal} />
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Group#{groupId}</th>
                    <th>studentId</th>
                    <th>teacherId</th>
                    <th>Role</th>
                </tr>
                </thead>
                <tbody>
                {
                    groupMembers.map((member) => (
                        <tr key={member.memberId}>
                            <Member  {...member}/>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </>

    );
}

export default Group;