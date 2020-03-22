import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    
    html, body, #root {
        height: 100%;
        background: #2a2a2a;
    }
    ::-webkit-scrollbar {
        width: 6px;
        background-color: #171a1d;
        border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb        {  
        border-radius: 12px;
        background-color: #97bfd3;
    }
    ::-webkit-scrollbar-track {
        border-radius: 12px;
        background-color: #171a1d;
    }

`;