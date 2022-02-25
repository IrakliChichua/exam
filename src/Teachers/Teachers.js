import React, {useEffect, useState} from 'react';
import api from "../api";
import {Button, ButtonToolbar} from "react-bootstrap";
import AddModal from "../Operations/AddModal";
import Persons from "../Operations/Persons";
import PersonSearch from "../Operations/PersonSearch";

function Teachers(props) {

    const [showModalAdd, setShowModalAdd] = useState(false)
    const [teachers, setTeachers] = useState([])

    async function getTeachers(params) {
        const res = await api.get("teachers/search/findBy", {
            params
        })
        setTeachers(res.data._embedded.students)
    }

    async function addTeacher(e) {
        const {firstName, lastName, personalNo, email, birthDate} = e
        await api.post("teachers", {
            firstName, lastName, personalNo, email, birthDate
        })
        await getTeachers()
    }

    // update student
    async function putTeacher(e) {
        const {firstName, lastName, personalNo, email, birthDate, teacherId} = e
        await api.put(`teachers/${teacherId}`, {
            firstName, lastName, personalNo, email, birthDate
        })
        await getTeachers()
    }

    async function deleteTeacher(teacherId) {
        await api.delete(`teachers/${teacherId}`)
        await getTeachers()
    }

    useEffect(() => {
        getTeachers().catch(console.error)
    }, [])


    return (
        <>
            <PersonSearch onSubmit={getTeachers}/>

            <ButtonToolbar className="justify-content-end m-3">
                <Button variant="primary" type="submit" onClick={() => setShowModalAdd(true)}>
                    Add Teacher
                </Button>
            </ButtonToolbar>

            <AddModal showModal={showModalAdd}
                      setShowModal={setShowModalAdd}
                      add={addTeacher()}/>

            <Persons persons={teachers} updatePerson={putTeacher} deletePerson = {deleteTeacher}/>
        </>
    );
}

export default Teachers;