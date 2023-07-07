import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        scrollbar-width: thin;
        box-sizing: border-box;
        scroll-behavior: smooth;
        scrollbar-color: #efefef #0e0e0e;
        font-family: 'Inconsolata', monospace;
        
        ::-webkit-scrollbar {
            width: 12px;
        }

        ::-webkit-scrollbar-track {
            background: #0e0e0e;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 16px;
            background-color: #efefef;
        }
    }

    body {
        color: #efefef;
        background-color: #0e0e0e;
    }
`