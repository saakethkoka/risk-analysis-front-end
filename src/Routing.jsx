import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./loginPage/Login"
import Register from "./loginPage/Register"


export default function Routing(){

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </Router>
    );
}