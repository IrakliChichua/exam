import Navigation from "./Navigation";
import {Outlet} from 'react-router-dom'

export default function App() {

    return (
        <>
            <Navigation/>
            <Outlet/>
        </>
    );
}