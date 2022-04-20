import React from 'react';
import {TextField} from "@mui/material";

const LoginPage = () => {
    return (
        <form>
            <div>
                <TextField
                id="identifier"
                label="Username"
                type="text"
                name="identifiant"
                />
            </div>
            <div>
                <TextField
                id="password"
                label="Password"
                type="text"
                name="password"
                />
            </div>
        </form>
    );
}

export default LoginPage;

