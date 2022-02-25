import React from 'react';
import Teachers from "./Teachers";
import TeachersSearch from "./TeachersSearch";

function TeachersView(props) {
    return (
        <>
            <TeachersSearch/>
            <Teachers/>
        </>
    );
}

export default TeachersView;