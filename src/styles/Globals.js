import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Hat+Text:wght@700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        background-color: #fe797a;
        background-image: url('/images/bg-intro-mobile.png');

        display: flex;
        justify-content: center;
        align-items: center;

        font-family: "Poppins", sans-serif;
        font-style: normal;
        text-align: center;
        font-stretch: normal;
        letter-spacing: normal;
    }
`;
