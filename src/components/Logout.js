import React from "react";
import { useNavigate } from "react-router-dom";
import { MainComponentBody, Form } from "../styled-components/styled";

export default function Logout() {
    const navigate = useNavigate()

    const handleLogOut = (e) => {
        e.preventDefault()
        localStorage.removeItem('login-token')
        navigate('/')
    }

    return (
        <MainComponentBody>
            <h1>LOGOUT</h1>
            <Form>
                <button onClick={handleLogOut}>CONFIRM</button>
            </Form>
        </MainComponentBody>
    )
}