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

export const ContainerImage = styled.div`
    width: 30em;
    height: 35vh;
    margin-top: 3em;
    overflow: hidden;
    align-self: center;
    border-radius: 10px;
    transition-duration: 0.2s;
    transition-timing-function: linear;

    :hover {
        filter: brightness(0.5);

        img {
            transform: scale(1.2);
        }
    }

    @media screen and (max-width: 520px) {
        width: 90% !important;
    }
`

export const Image = styled(ImageRaw)`
    object-fit: cover;
    transition-duration: 0.2s;
    position: relative !important;
    transition-timing-function: linear;
`