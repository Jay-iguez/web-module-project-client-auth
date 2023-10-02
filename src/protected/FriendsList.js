import React, { useState, useEffect } from "react";
import { MainComponentBody, ListItems } from "../styled-components/styled";
import { fetchFriendsList } from "../logic-functions/component-logic";

const initialFriends = []

export default function FriendsList() {
    const [friendsList, setFriendsList] = useState(initialFriends)
    const [isShown, setIsShown] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('login-token') && isShown === false) {
            fetchFriendsList()
                .then(res => {
                    console.log(res)
                    setFriendsList(res.data)
                    setIsShown(true)
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }, [])

    return (
        <MainComponentBody>
            <h1>FRIENDS LIST</h1>
            <ListItems>
                {
                    !isShown ?
                        <h1 style={{ textAlign: 'center' }}>Loading friends, please wait...</h1>
                        :
                        friendsList.map((friend, index)=> {
                            return <li key={index} >- {friend.name || friend.username} - {friend.email || friend.password}</li>
                        })
                }
            </ListItems>
        </MainComponentBody>
    )
}