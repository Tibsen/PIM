import React from "react";
import { BrowserRouter as Route, Router } from "react-router-dom";
import { Container } from "@mui/material";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <Container>
            <div className="App">
                <Router>
                    <Route path="/login" component={LoginPage}></Route> ta grandmere
                </Router>
            </div>
        </Container>
    );
}

export default App;
