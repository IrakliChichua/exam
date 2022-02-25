import React from 'react';
import {useParams} from "react-router-dom";

function Group(props) {

    const {groupId} = useParams();

    return (
        <>
            <div>{groupId}</div>
        </>
    );
}

export default Group;