import React, {useState} from 'react';
import {TextField} from "@mui/material";
import { Button } from '@mui/material';
import "./LoginPage.css"

const LoginPage = () => {
    const [credentials, setCrentials] = useState({
        identifier:"",
        password:""
    });

    const handleChange =({currentTarget}) => {
        console.log(currentTarget)
        const value = currentTarget.value
        const name = currentTarget.name
        console.log(value,name)
    }
    return (
        <form>
            <div className='connexion'>
                <TextField
                id="identifier"
                label="Username"
                type="text"
                name="identifiant"
                onChange={handleChange}
                />
            </div>
            <div className='connexion'>
                <TextField
                id="password"
                label="Password"
                type="text"
                name="password"
                onChange={handleChange}
                />
            </div>
            <div className='oublie'>
                <a href=''>Identifiant oublié</a>
            </div>
            <div className='connexion'>
                <Button variant="contained" color="primary" type="submit">
                    Login
                </Button>
            </div>
        </form>
    );
}

export default LoginPage;

