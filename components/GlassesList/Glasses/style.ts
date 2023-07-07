import styled from 'styled-components'
import ImageRaw from 'next/image'

export const Container = styled.li`
    width: 25em;
    padding: 1em;
    cursor: pointer;
    border-radius: 10px;
    transform: scale(0.98);
    flex-direction: column;
    transition-duration: 0.2s;
    background-color: #0e0e0e;
    transition-timing-function: linear;
    box-shadow: #efefef 0px 2px 8px -1px;

    :hover {
        border-radius: 5px;
        transform: scale(1);
        box-shadow: #efefef 0px 4px 16px 0px;
    }
`

export const Points = styled.span`
    color: #efefef;
    font-weight: bold;
`

export const Title = styled.span`
    display: block;
    color: #efefef;
    overflow: hidden;
    margin-top: 0.5em;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const Image = styled(ImageRaw)`
    margin-top: 1em;
    object-fit: cover;
    border-radius: 10px;
    width: 100% !important;
    height: 12em !important;
    position: relative !important;
`