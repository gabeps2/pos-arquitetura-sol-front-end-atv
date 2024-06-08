import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --white: #ffffff;
        --blue-500: #0A66C2;
        --background: #ffffff;
    }
    
    @media (min-width: 576px) {
        html {
            font-size: 14px;
        }
    }

    @media (min-width: 768px) {
        html {
            font-size: 18px;
        }
    }

    
    @media (min-width: 992px) {
        html { 
            font-size: 20px;
        }
    }
    

    @media (min-width: 1200px) {
        html {
            font-size: 24px;
        }
    }

    body {
        background: var(--background);
        color: var(--gray-800);
        overflow-x: hidden;

        scroll-behavior: smooth;

        &::-webkit-scrollbar{
            width: 5px;
        }

        &::-webkit-scrollbar-track {
            background: --var(--white);
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--gray-800);    
            border-radius: 20px;       
        }
    }

    body,
    input,
    textarea,
    select,
    button {
        font: 300 1rem "Arial", sans serif;
        outline: none;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;
