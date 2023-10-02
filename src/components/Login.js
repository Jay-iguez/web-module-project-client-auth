import React from "react";
import { MainComponentBody, Form } from "../styled-components/styled";

export default function Login(props) {

    return (
        <MainComponentBody>
            <h1>Login</h1>
            <Form>
                <label> USERNAME
                    <input
                        type="text"
                        name='username'
                        value=''
                        placeholder=""
                    />
                </label>
                <label> PASSWORD
                    <input
                    type="password"
                    name='password'
                    value=''
                    placeholder=""
                    />
                </label>
                <button>SUBMIT</button>
            </Form>
        </MainComponentBody>
    )
}