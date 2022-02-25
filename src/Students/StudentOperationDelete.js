import React from 'react';
import {Button} from "react-bootstrap";

function StudentOperationDelete({id, deleteStudent}) {

    const deleteHandler= () => {
        deleteStudent(id)
    }

    return (
        <th>
            <Button onClick={deleteHandler}>Delete</Button>
        </th>
    );
}

export default StudentOperationDelete;