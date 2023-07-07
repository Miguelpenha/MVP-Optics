import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    margin-top: 6vh;
    font-size: 2.2em;
    align-self: center;
    text-align: center;

    @media screen and (max-width: 900px) {
        font-size: 1.5em;
    }
`

export const Form = styled.form`
    width: 80%;
    display: flex;
    max-width: 25em;
    margin-top: 8vh;
    align-self: center;
    flex-direction: column;
`

export const Field = styled.div`
    display: flex;
    margin-bottom: 2.5em;
    flex-direction: column;
`

export const Label = styled.label`
    font-size: 1.2em;
`

export const Options = styled.div`
    gap: 3em;
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.2em;
    justify-content: center;
`

export const Input = styled.input`
    width: 100%;
    border: none;
    padding: 1rem;
    color: #efefef;
    font-size: 1rem;
    margin-top: 1em;
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