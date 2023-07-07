import styled from 'styled-components'

interface IContainer {
    selected: boolean | undefined
}

export const Container = styled.button<IContainer>`
    width: 11rem;
    border: none;
    display: flex;
    padding: 1rem;
    cursor: pointer;
    text-align: center;
    align-self: center;
    border-radius: 10px;
    align-items: center;
    transform: scale(0.95);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    box-shadow: #efefef 0px 2px 8px 1px;
    background-color: ${props => props.selected ? '#efefef' : '#0e0e0e'};
    
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

    @media screen and (max-width: 900px) {
        max-width: 80%;
        min-width: 10em;
    }

    svg {
        width: 2.1em;
        height: 2.1em;
        transition-duration: 0.2s;
        transition-timing-function: linear;
        fill: ${props => !props.selected ? '#efefef' : '#0e0e0e'};
    }

    span {
        color: ${props => !props.selected ? '#efefef' : '#0e0e0e'};
    }
`

export const Text = styled.span`
    margin: auto;
    font-size: 1.4rem;
    font-weight: bold;
    transition-duration: 0.2s;
    transition-timing-function: linear;

    @media screen and (max-width: 900px) {
        font-size: 1.7em;
    }
`