import React from "react";
import { useState } from "react";
import { 
    createUserWithEmailAndPassword,
} from "firebase/auth";
import './App.css';
import {auth} from './firebase-config';



function App() {
    const [registerEmail, setRegisterEmail] = useState ("");
    const [registerPassword, setRegisterPassword] = useState ("");



    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword    
            );  
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
    };


    return (
        <div className="App">
            <div className="colonne">
                <img className="logo"alt="logo" src="/images/Meetngo.png"></img>
                <h3>Créer un compte</h3>
                <input className="creerbox"
                    placeholder="  Adresse e-mail"
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }} 
                />
                <input className="creerbox"
                    placeholder="  Mot de Passe"
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }} 
                />
                <text className="txt">J'accepte les conditions générales d'utilisation</text>
                <button className="button" onClick={register}> Créer le compte</button>
                <text className="ou">ou</text>
                <img className="ahah"alt="ahah" src="/images/ahah.png"></img>
                <div className="guncompte">
                    <text className="jpp">J'ai déjà un compte?</text><text className="Se"> Se Connecter</text>
                </div>
            </div>

        </div>
        
        /* <div>
            <div className="header">
                <h1>Meet'ngo</h1>   
                <img src={images.logo} className="logo"></img>
            </div>
        </div>*/
        
        

    );
}


export default App;
