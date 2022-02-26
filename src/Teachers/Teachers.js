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
        console.log(params)
        const res = await api.get("teachers/search/findBy", {
            params
        })
        setTeachers(res.data._embedded.teachers)
        console.log(res.data._embedded.teachers)
    }

    async function addTeacher(params) {
        console.log(params)
        const {firstName, lastName, personalNo, email, birthDate} = params['person']
        await api.post("teachers", {
            firstName, lastName, personalNo, email, birthDate
        })
        await getTeachers()
    }


    // update teacher
    async function putTeacher(params) {
        const {firstName, lastName, personalNo, email, birthDate, id} = params
        await api.put(`teachers/${id}`, {
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
                      add={addTeacher}/>

            <Persons persons={teachers} modifyPerson={putTeacher}
                     deletePerson = {deleteTeacher} type={'teacher'}/>
        </>
    );
}

export default Teachers;