import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Peralta&display=swap');
    * {
        font-family: 'Peralta', cursive;
        color: white;
    }

    :root {
        --O-AMOR-1-rgba: rgba(207, 31, 77, 1);
        --O-AMOR-2-rgba: rgba(239, 11, 140, 1);
        --O-AMOR-3-rgba: rgba(205, 45, 131, 1);
        --O-AMOR-4-rgba: rgba(232, 114, 168, 1);
        --O-AMOR-5-rgba: rgba(249, 156, 200, 1);
    }

    body {
        margin: 0;
        overflow: hidden;
    }

    .App {
        max-height: 100vh;
        max-width: 100vw;       
        min-height: 100vh;
        min-width: 100vw;
        
        overflow: hidden;
    }

`

export default GlobalStyle