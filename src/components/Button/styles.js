import styled from "styled-components";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    z-index: 1;

    border: none;
    border-radius: 8px;

    background-color: var(--O-AMOR-4-rgba);

    font-size: 1.25rem;
    font-weight: 800;
    color: white;

    :hover {
        background: var(--O-AMOR-3-rgba);
    }

    :active {
        background: var(--O-AMOR-2-rgba);
    }

    padding: 20px;

    min-width: 200px;
    height: 50px;
`


export { Button }