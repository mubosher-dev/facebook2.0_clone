import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { TextField, Button } from "@mui/material"
import { changeTitle } from '../changeTitle';
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import { useStateValue } from "../StateProvider";
import { actionType } from "../reducer"

function Login() {

    const navigateTo = useNavigate();
    const [state, dispatch] = useStateValue();
    const [loginPage, setLoginPage] = useState(false);
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const subscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigateTo("/home")
                dispatch({
                    type: actionType.SET_USER,
                    user: authUser,
                })
                if (authUser.displayName) {

                }
                else {
                    return authUser.updateProfile({
                        displayName: username,
                    })
                }
            }
            else {
                setUserName(null)
            }
        })
        changeTitle("Login Page")
        return () => {
            subscribe();
        }
    }, [username])


    const signUp = (e) => {
        e.preventDefault();

        if (loginPage) {
            if (
                password !== " "
                &&
                email !== " "
            ) {
                auth.signInWithEmailAndPassword(email, password)
                    .then((authUser) => {
                        return authUser.user.updateProfile({
                            displayName: username
                        })
                    })
                setUserName("")
                setEmail("")
                setPassword("")
                navigateTo("/home")
            }
            else {

                alert("write a form")
            }
        }
        else {

            if (
                username !== " "
                &&
                password !== " "
                &&
                email !== " "
            ) {
                auth.createUserWithEmailAndPassword(email, password)
                    .then((authUser) => {
                        console.log("auth", authUser);
                        return dispatch({
                            type: actionType.SET_USER,
                            user: authUser,
                        })
                        navigateTo("/home")
                    })
                    .then(user => {
                        return user.user.updateProfile({
                            displayName: username
                        })
                    })
                    .catch((err) => alert(err.massage))
                setUserName("")
                setEmail("")
                setPassword("")
            }
            else {
                alert("Please write a form")
            }
        }
    }


    const setLogin = (e) => {
        if (loginPage) {
            setLoginPage(false)
        }
        else {
            setLoginPage(true)
        }
    }



    return (
        <LoginWrapper>
            <LoginContainer>
                <LoginLeft>
                    <LoginLogoImg src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
                </LoginLeft>
                <LoginRight>
                    <LoginForm onSubmit={signUp}>
                        {loginPage ? (
                            <></>
                        ) :
                            (
                                <div>
                                    <TextField
                                        value={username}
                                        onChange={e => setUserName(e.target.value)}
                                        label="username"
                                        type="text" />
                                </div>
                            )
                        }
                        <div>
                            <TextField
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                label="email"
                                type="email" />
                        </div>
                        <div>
                            <TextField
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                label="password"
                                type="password" />
                        </div>
                        <div>
                            {loginPage ? (
                                <Button
                                    onClick={signUp}
                                    type="submit"
                                    style={{ width: '100%' }}> Login </Button>

                            ) : (
                                <Button
                                    onClick={signUp}
                                    type="submit"
                                    style={{ width: '100%' }}> Sign Up </Button>

                            )}

                            <hr />
                            {loginPage ? (
                                <Button
                                    onClick={setLogin}
                                    style={{ width: `100%` }} >Sign up</Button>
                            ) : (
                                <Button
                                    onClick={setLogin}
                                    style={{ width: `100%` }} >Login</Button>
                            )}

                        </div>
                    </LoginForm>
                </LoginRight>
            </LoginContainer>

        </LoginWrapper >
    )
}

const LoginWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height: 100vh;
    background: #f3f3f3;
    overflow: hidden;
    right: 0;
`;

const LoginContainer = styled.div`
    display: flex;
    align-items:center;
    width: 50%;
    justify-content: center;

    @media (max-width:768px){
        width:100%;
    }
`;

const LoginLeft = styled.div`
    width:300px;

    @media (max-width:768px){
        display:none;
    }
`;

const LoginLogoImg = styled.img`
    width:100%;
`;

const LoginRight = styled.div`
    background: #fff;
    box-shadow: 0 0 4px 4px lightgray;
    padding: 20px;
`;

const LoginForm = styled.form`
    width:250px;
    div{
        width:100%;
    }
    div:nth-child(2){
        margin:10px 0;
    }
`;

export default Login