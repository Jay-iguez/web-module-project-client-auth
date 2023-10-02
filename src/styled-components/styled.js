import styled from "styled-components";

// Navigation Styles

export const MainBody = styled.div`
    margin: 0 auto;
    width: 50%;
    border: 1px solid black;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

export const NavigationBar = styled.div`
    display: flex;
    justify-content: space-around;
    border-bottom: .5rem solid black;
    padding: 1rem;
`

export const NavigationLinks = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;

    .link-navigation-item {
        margin: 0 1rem;
        padding: 1rem;
        text-decoration: none;
        background-color: black;
        color: white;
        font-weight: bold;
    }
`

// Component Styles

export const MainComponentBody = styled.div`
    display: flex;
    border: 1px solid black;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 50%;
`

export const Form = styled.form`
    display: flex;
    flex-flow: column wrap;
    padding-bottom: 8rem;

    label {
        display: flex;
        flex-flow: column wrap;
        margin: 1rem 0;
    }

    input {
        background-color: black;
        color: white;
        padding: .5rem;
    }

    button {
        background-color: black;
        color: white;
        padding: .5rem;
    }
`

export const ListItems = styled.div`
   display: flex;
   flex-flow: column nowrap;

   li {
    list-style: none;
    margin: .5rem 0;
    font-weight: bold;
    font-size: 1.2rem;
   }

`