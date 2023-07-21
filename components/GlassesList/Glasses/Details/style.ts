import styled, { keyframes, css } from 'styled-components'

const animationShowDetails = keyframes`
    from {
        max-height: 0em;
    }

    to {
        max-height: 20em;
    }
`

const animationHiddenDetails = keyframes`
    from {
        max-height: 60em;
    }

    to {
        max-height: 0em;
    }
`

interface IContainer {
    show?: boolean
}

export const Container = styled.div<IContainer>`
    color: #efefef;
    margin-top: 1em;
    max-height: 0em;
    text-align: left;
    overflow: hidden;
    position: relative;

    ${props => props.show===false ? css`
        max-height: 0em;
        animation: ${animationHiddenDetails} 0.4s linear;
    ` : props.show && css`
        max-height: 60em;
        animation: ${animationShowDetails} 0.4s linear;
    `}
`

export const Detail = styled.p`
    margin-bottom: 0.4em;
`