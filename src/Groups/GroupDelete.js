import React from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function GroupDelete({id, del}) {

    let navigate = useNavigate();

    const deleteHandler= () => {
        del(id)
        /*// eslint-disable-next-line no-restricted-globals
        history.back()*/
        navigate('/groups')
    }

    return (
            <Button className="m-2" variant="secondary" onClick={deleteHandler}>Delete Group</Button>
    );
}

export default GroupDelete;