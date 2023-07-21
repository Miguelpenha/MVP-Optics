import styled from 'styled-components'
import { QRCodeSVG } from 'qrcode.react'

export const Container = styled.div`
    width: 70%;
    display: flex;
    cursor: default;
    margin: 3em auto;
    overflow: hidden;
    position: relative;
    align-self: center;
    border-radius: 15px;
    transition-duration: 0.2s;
    transition-timing-function: linear;

    :hover {
        background-color: rgba(0, 0, 0, 0.6);

        div {
            visibility: visible;
        }
    }

    div {
        visibility: hidden;
    }
`

export const Options = styled.div`
    gap: 1.5em;
    width: 100%;
    padding: 1em;
    display: flex;
    position: absolute;
    transition-duration: 0.2s;
    transition-timing-function: linear;
`

export const Option = styled.button`
    border: none;
    width: 3.5em;
    display: flex;
    padding: 0.7em;
    cursor: pointer;
    border-radius: 50%;
    transition-duration: 0.2s;
    background-color: #0e0e0e;
    transition-timing-function: linear;

    :hover {
        background-color: rgba(14, 14, 14, 0.8);
    }

    svg {
        width: 100%;
        fill: #efefef;
    }
`

export const QRCodeRaw = styled(QRCodeSVG)`
    width: 100%;
    z-index: -1;
    height: auto;
    border-radius: 15px;
`