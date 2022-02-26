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
        console.log(params)
        const res = await api.get("students/search/findBy", {
            params
        })
        setStudents(res.data._embedded.students)
    }

    async function addStudent(params) {
        const {firstName, lastName, personalNo, email, birthDate} = params['person']
        await api.post("students", {
            firstName, lastName, personalNo, email, birthDate
        })
        await getStudents()
    }

    // update student
    async function putStudent(params) {
        const {firstName, lastName, personalNo, email, birthDate, id} = params
        await api.put(`students/${id}`, {
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

            <Persons persons={students} modifyPerson={putStudent}
                     deletePerson = {deleteStudent} type={'student'}/>
        </>
    );
}

export default Students;