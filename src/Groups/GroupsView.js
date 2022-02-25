import React, {useEffect, useState} from 'react';
import Groups from "./Groups";
import api from "../api";

function GroupsView(props) {

    const [groups, setGroups] = useState([])

    async function getGroups(){
        const res = await api.get("groups")
        setGroups(res.data._embedded.groups)
    }

    useEffect(() => {
        getGroups().catch(console.error)
    }, [])

    return (
        <Groups groups = {groups}/>
    );
}

export default GroupsView;