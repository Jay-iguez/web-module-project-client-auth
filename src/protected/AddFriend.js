import React, { useState } from "react";
import { MainComponentBody, Form } from "../styled-components/styled";
import { addFriendPostRequest } from "../logic-functions/component-logic";

const initialFriendValues = {
    name: '',
    email: ''
}

export default function AddFriend(props) {

    const [friendValues, setFriendValues] = useState(initialFriendValues)

    const onChange = e => {
        const { name, value } = e.target
        setFriendValues({ ...friendValues, [name]: value })
    }

    const onSubmit = e => {
        e.preventDefault()

        const friendToPost = {
            username: friendValues.name,
            password: friendValues.email
        }

        addFriendPostRequest(friendToPost)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err)
        })
        
        setFriendValues(initialFriendValues)
    }


    return (
        <MainComponentBody>
            <h1>ADD FRIEND</h1>
            <Form>
                <label> FRIEND NAME
                    <input
                        type="text"
                        name='name'
                        value={friendValues.name}
                        placeholder=""
                        onChange={onChange}
                    />
                </label>
                <label> FRIEND EMAIL
                    <input
                    type="email"
                    name='email'
                    value={friendValues.email}
                    placeholder=""
                    onChange={onChange}
                    />
                </label>
                <button onClick={onSubmit}>SUBMIT</button>
            </Form>
        </MainComponentBody>
    )
}