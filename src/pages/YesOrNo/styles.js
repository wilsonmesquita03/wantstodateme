import styled from "styled-components";

const YesOrNoContainer = styled.div`
    min-height: 100vh;
    min-width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    background-color: var(--O-AMOR-1-rgba);
`

const DivFlex = styled.div`
    display: flex;
    gap: 1rem;
    animation: moveTo 5s;


    @keyframes moveTo {
        from {
            transform: translateY(100vh);
        }

        to {
            transform: translateY(0);
        }
    }
`

export { YesOrNoContainer, DivFlex }