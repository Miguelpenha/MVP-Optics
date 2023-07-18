import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    width: 50%;
    border: none;
    padding: 1rem;
    color: #efefef;
    font-size: 1rem;
    margin-top: 1em;
    align-self: center;
    border-radius: 15px;
    background-color: #0e0e0e;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    box-shadow: #efefef 0px 2px 8px -1px;

    :focus {
        outline: none;
        border-radius: 5px;
        box-shadow: #efefef 0px 2px 16px -1px;
    }

    ::placeholder {
        color: #bcbcbc;
    }
`

export const List = styled.ul`
    gap: 1.5em;
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 2em;
    list-style: none;
    margin-bottom: 4em;
    align-self: center;
    flex-direction: row;
    justify-content: center;
`