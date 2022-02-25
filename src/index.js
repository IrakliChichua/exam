import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Alert} from "react-bootstrap";
import App from "./App";
import StudentsView from "./Students/StudentsView";
import TeachersView from "./Teachers/TeachersView";
import GroupsView from "./Groups/GroupsView";
import Group from "./Groups/Group";


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<StudentsView/>}/>
                <Route path='students' element={<StudentsView/>}/>
                <Route path='teachers' element={<TeachersView/>}/>
                <Route path='groups' element={<GroupsView/>}/>
                <Route path='groups/:groupId' element={<Group/>}/>
                <Route path='*' element={<Alert variant="danger"> 404 page not found</Alert>}/>
            </Route>
        </Routes>
    </BrowserRouter>,

    document.getElementById('root')
);

