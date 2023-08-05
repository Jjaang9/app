import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    p {
        font-family: "Noto Sans KR";
    }

    button, input {
        border: none;
        outline: none;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
