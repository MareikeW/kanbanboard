import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }

    body {
        line-height: 23px;
        font-weight: 500;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 13px;
    }

    h1 {
        line-height: 30px;
        font-weight: 700;
        font-size: 1.846rem;
    }

    h2 {
        line-height: 30px;
        font-weight: 700;
        font-size: 1.385rem;
    }

    h3 {
        line-height: 19px;
        font-weight: 700;
        font-size: 1.154rem;
    }

    h4 {
        line-height: 15px;
        font-weight: bold;
        font-size: 0.923rem;
        letter-spacing: 2.4px;
        font-kerning: normal;
    }

    .boldBody {
        line-height: 15px;
        font-weight: bold;
        font-size: 0.923rem;
    }

    button {
        cursor: pointer;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: bold;
    }
`;

export default GlobalStyle;