import React from "react";
import { MainComponentBody, Form } from "../styled-components/styled";

export default function AddFriend(props) {

    return (
        <MainComponentBody>
            <h1>ADD FRIEND</h1>
            <Form>
                <label> FRIEND NAME
                    <input
                        type="text"
                        name='username'
                        value=''
                        placeholder=""
                    />
                </label>
                <label> FRIEND EMAIL
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