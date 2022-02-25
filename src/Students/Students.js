import React from 'react';
import {Table} from "react-bootstrap";
import StudentOperationModifyModal from "./StudentOperationModifyModal";
import StudentOperationDelete from "./StudentOperationDelete";

function Students({students, updateStudent, deleteStudent}) {
    const Student = ({firstName, lastName, personalNo, email, birthDate}) => (
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
                students.map((student) => (
                    <tr key={student.studentId}>
                        <Student key={student.studentId}  {...student}/>
                        <StudentOperationDelete id={student.studentId} deleteStudent={deleteStudent}/>
                        <StudentOperationModifyModal student={student} updateStudent={updateStudent}/>
                    </tr>
                ))
            }
            </tbody>

        </Table>
    )
        ;
}

export default Students;