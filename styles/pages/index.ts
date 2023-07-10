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