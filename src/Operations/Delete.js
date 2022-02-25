import React from 'react';
import {Button} from "react-bootstrap";

function Delete({del, id}) {

    const deleteHandler= () => {
        del(id)
    }

    return (
        <th>
            <Button onClick={deleteHandler}>Delete</Button>
        </th>
    );
}

export default Delete;