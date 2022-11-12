import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./loginPage/Login"
import Register from "./loginPage/Register"


export default function Routing(){
    const checkLogin = () =>{
        console.log()
        if(!sessionStorage.getItem('userID')){
            return <Login/>
        }
        return <Register/>;
    }

    return(
        <Router>
            <Routes>
                <Route path="/" element={checkLogin()} />
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </Router>
    );

}