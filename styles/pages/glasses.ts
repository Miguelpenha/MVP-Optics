import styled from 'styled-components'
import ImageRaw from 'next/image'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    margin-top: 2vh;
    font-size: 2.2em;
    align-self: center;
    text-align: center;

    @media screen and (max-width: 900px) {
        font-size: 1.5em;
    }
`

export const Image = styled(ImageRaw)`
    margin-top: 4em;
    object-fit: cover;
    align-self: center;
    border-radius: 10px;
    width: 30em !important;
    position: relative !important;

    @media screen and (max-width: 520px) {
        width: 90% !important;
    }
`