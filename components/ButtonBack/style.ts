import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled(Link)`
    display: flex;
    padding: 0.5em;
    margin: 2em 1em;
    border-radius: 50%;
    position: absolute;
    transition-duration: 0.2s;
    transition-timing-function: linear;

    :hover {
        background-color: #efefef;

        svg {
            fill: #0e0e0e;
        }
    }
`

export const Icon = styled.svg`
    width: 3em;
    fill: #efefef;
    transition-duration: 0.2s;
    transition-timing-function: linear;
`