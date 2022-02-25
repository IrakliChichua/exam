import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Alert} from "react-bootstrap";
import App from "./App";
import Students from "./Students/Students";
import Teachers from "./Teachers/Teachers";
import GroupsView from "./Groups/GroupsView";
import Group from "./Groups/Group";


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Students/>}/>
                <Route path='students' element={<Students/>}/>
                <Route path='teachers' element={<Teachers/>}/>
                <Route path='groups' element={<GroupsView/>}/>
                <Route path='groups/:groupId' element={<Group/>}/>
                <Route path='*' element={<Alert variant="danger"> 404 page not found</Alert>}/>
            </Route>
        </Routes>
    </BrowserRouter>,

    document.getElementById('root')
);

