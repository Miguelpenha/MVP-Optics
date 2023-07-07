import styled from 'styled-components'

export const Container = styled.button`
    width: 17rem;
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
    background-color: #0e0e0e;
    transition-timing-function: linear;
    box-shadow: #efefef 0px 2px 8px 1px;
    
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
        fill: #efefef;
        transition-duration: 0.2s;
        transition-timing-function: linear;
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