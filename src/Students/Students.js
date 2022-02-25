import React, {useEffect, useState} from 'react';
import AddModal from "../Operations/AddModal";
import api from "../api";
import {Button, ButtonToolbar} from "react-bootstrap";
import Persons from "../Operations/Persons";
import PersonSearch from "../Operations/PersonSearch";

function Students(props) {

    const [showModalAdd, setShowModalAdd] = useState(false)
    const [students, setStudents] = useState([])

    async function getStudents(params) {
        const res = await api.get("students/search/findBy", {
            params
        })
        setStudents(res.data._embedded.students)
    }

    async function addStudent(e) {
        const {firstName, lastName, personalNo, email, birthDate} = e
        await api.post("students", {
            firstName, lastName, personalNo, email, birthDate
        })
        await getStudents()
    }

    // update student
    async function putStudent(e) {
        const {firstName, lastName, personalNo, email, birthDate, studentId} = e
        await api.put(`students/${studentId}`, {
            firstName, lastName, personalNo, email, birthDate
        })
        await getStudents()
    }

    async function deleteStudent(studentId) {
        await api.delete(`students/${studentId}`)
        await getStudents()
    }

    useEffect(() => {
        getStudents().catch(console.error)
    }, [])


    return (
        <>
            <PersonSearch onSubmit={getStudents}/>

            <ButtonToolbar className="justify-content-end m-3">
                <Button variant="primary" type="submit" onClick={() => setShowModalAdd(true)}>
                    Add Student
                </Button>
            </ButtonToolbar>

            <AddModal showModal={showModalAdd}
                      setShowModal={setShowModalAdd}
                      add={addStudent}/>

            <Persons persons={students} updatePerson={putStudent} deletePerson = {deleteStudent}/>
        </>
    );
}

export default Students;