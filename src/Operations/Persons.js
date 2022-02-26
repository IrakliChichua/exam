import React from 'react';
import {Table} from "react-bootstrap";
import Delete from "./Delete";
import ModifyModal from "./ModifyModal";

function Persons({persons, modifyPerson, deletePerson, type}) {

    function id(person){
        if (type === 'student') return person.studentId
        else return person.teacherId
    }


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
                    <tr key={id(person)}>
                        <Person  {...person}/>
                        <Delete id={id(person)} del={deletePerson}/>
                        <ModifyModal id={id(person)} person={person} modify={modifyPerson}/>
                    </tr>
                ))
            }
            </tbody>

        </Table>
    )
        ;
}

export default Persons;