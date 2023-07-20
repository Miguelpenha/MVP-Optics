import styled, { css } from 'styled-components'

interface IContainer {
    sizeIcon: number
}

export const Container = styled.button<IContainer>`
    width: 17rem;
    border: none;
    display: flex;
    padding: 1rem;
    text-align: center;
    align-self: center;
    border-radius: 10px;
    align-items: center;
    transform: scale(0.95);
    transition-duration: 0.2s;
    background-color: #0e0e0e;
    transition-timing-function: linear;
    box-shadow: #efefef 0px 2px 8px 1px;
    
    ${props => !props.disabled ? css`
        cursor: pointer;
        
        :hover {
            transform: scale(1);
            background-color: #efefef;
            box-shadow: #efefef 0px 2px 8px 4px;

            span {
                color: #0e0e0e;
            }

            svg {
                fill: #0e0e0e;
            }
        }
    ` : css`
        filter: brightness(0.5);
    `}

    @media screen and (max-width: 900px) {
        max-width: 80%;
        min-width: 10em;
    }

    svg {
        fill: #efefef;
        transition-duration: 0.2s;
        transition-timing-function: linear;
        width: ${props => props.sizeIcon}em;
        height: ${props => props.sizeIcon}em;
    }
`

export const Text = styled.span`
    margin: auto;
    color: #efefef;
    font-size: 1.4rem;
    font-weight: bold;
    transition-duration: 0.2s;
    transition-timing-function: linear;

    @media screen and (max-width: 900px) {
        font-size: 1.7em;
    }
`