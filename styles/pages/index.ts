import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
`

interface ITitle {
    showGlasses: boolean
}

export const Title = styled.h1<ITitle>`
    margin-top: 6vh;
    font-size: 2.2em;
    align-self: center;
    text-align: center;
    margin-bottom: ${props => props.showGlasses ? '1.5' : '0'}em;

    @media screen and (max-width: 900px) {
        font-size: 1.5em;
    }
`