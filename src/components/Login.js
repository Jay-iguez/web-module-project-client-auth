import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainComponentBody, Form } from "../styled-components/styled";
import { loginPostRequest, setToLocalStorage } from "../logic-functions/component-logic";

const initialLoginValues = {
    username: '',
    password: ''
}

export default function Login(props) {
    const [loginValues, setLoginValues] = useState(initialLoginValues)
    const navigate = useNavigate()

    const onChange = e => {
        const { name, value } = e.target
        setLoginValues({ ...loginValues, [name]: value })
    }

    const onSubmit = e => {
        e.preventDefault()

        const loginToPost = {
            username: loginValues.username,
            password: loginValues.password
        }

        loginPostRequest(loginToPost)
        .then(res => {
            console.log(res)
            setToLocalStorage('login-token', res.data.token)
            navigate('/friends')
        })
        .catch(err => {
            console.error(err)
        })
        
        setLoginValues(initialLoginValues)
    }

    return (
        <MainComponentBody>
            <h1>LOGIN</h1>
            <Form>
                <label> USERNAME
                    <input
                        type="text"
                        name='username'
                        value={loginValues.username}
                        onChange={onChange}
                        placeholder=""
                    />
                </label>
                <label> PASSWORD
                    <input
                        type="password"
                        name='password'
                        value={loginValues.password}
                        onChange={onChange}
                        placeholder=""
                    />
                </label>
                <button onClick={onSubmit} >SUBMIT</button>
            </Form>
        </MainComponentBody>
    )
}