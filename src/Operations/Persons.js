import React from 'react';
import {Table} from "react-bootstrap";
import Delete from "./Delete";
import ModifyModal from "./ModifyModal";

function Persons({persons, updatePerson, deletePerson}) {

    const Person = ({firstName, lastName, personalNo, email, birthDate}) => (
        <>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{personalNo}</td>
            <td>{email}</td>
            <td>{birthDate}</td>
        </>
    )

    return (
        <Table striped bordered hover className="m-3">
            <thead>
            <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Personal.No</th>
                <th>Email</th>
                <th>Birth Date</th>
                <th>Modify</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {
                persons.map((person) => (
                    <tr key={person.studentId}>
                        <Person key={person.studentId}  {...person}/>
                        <Delete id={person.studentId} del={deletePerson}/>
                        <ModifyModal student={person} modify={updatePerson}/>
                    </tr>
                ))
            }
            </tbody>

        </Table>
    )
        ;
}

export default Persons;