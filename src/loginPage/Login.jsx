
import React, {Fragment, useEffect, useState} from 'react';
// import {Button, TextField} from "@mui/material";
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material/'
import {login} from "../api";

export default function Login(){
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password).then((response) => {
            // set the token in local storage
            sessionStorage.setItem("token", response.data);
            setError(false);
            setUsername("");
            setPassword("");
        }).catch((error) => {
            setError(true);
        })
    }

    const formStyle = {padding: 20, height: '50vh', width: 290, margin: "20px auto"}
    const textStyle = {margin: "10px auto"}

    return (
        <Grid>
            <Paper style = {formStyle}>
                <Grid align = 'center'>
                    <h2>Sign in</h2>
                </Grid>
                <TextField
                    label = "Username"
                    value={ username }
                    error={error}
                    fullWidth required
                    onChange={ e => setUsername(e.target.value) }
                    style = {textStyle}
                />
                <TextField
                    label = "Password"
                    value={ password }
                    type = 'password'
                    error={error}
                    fullWidth required
                    onChange={ e => setPassword(e.target.value) }
                    style = {textStyle}
                />
                <Button
                    type = "submit"
                    color = "primary"
                    variant='contained'
                    fullWidth
                    onClick={e => handleSubmit(e)}
                >
                    Sign in
                </Button>
                <span>Need an account? </span>
                <a href="/register">Register here</a>
            </Paper>
        </Grid>
    )


}
