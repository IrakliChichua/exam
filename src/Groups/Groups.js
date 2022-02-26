import React, {useEffect, useState} from 'react';
import GroupCards from "./GroupCards";
import api from "../api";
import GroupSearch from "./GroupSearch";
import GroupAdd from "./GroupAdd";
import {Button, ButtonToolbar} from "react-bootstrap";

function Groups(props) {

    const [groups, setGroups] = useState([])
    const [showAddModal, setShowAddModal] = useState(false)

    async function getGroups(params) {
        const res = await api.get("groups/search/findBy", {
            params
        })
        setGroups(res.data._embedded.groups)
    }

    async function addGroup(params) {
        const {title, groupNo} = params
        await api.post("groups", {
            title, groupNo
        })
        await getGroups()
    }


    useEffect(() => {
        getGroups().catch(console.error)
    }, [])

    return (
        <>
            <GroupSearch onSubmit={getGroups}/>

            <ButtonToolbar className="justify-content-end m-3">
                <Button variant="primary" type="submit" onClick={() => setShowAddModal(true)}>
                    Create Group
                </Button>
            </ButtonToolbar>

            <GroupAdd add={addGroup} showModal={showAddModal} setShowModal={setShowAddModal}/>
            <GroupCards groups={groups}/>
        </>
    );
}

export default Groups;