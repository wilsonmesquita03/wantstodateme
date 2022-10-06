import styled, { css } from "styled-components";

const ButtonMain = styled.button`
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

const ContainerButtonMove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 300px;
    height: 150px;

    ${({children}) => {if(children === "Não") return css`z-index: 2;`}}

    ${(props) => {
        if(props.move){
            return css`
                position: static;
                
            ` 
        }else{
            return css`
                position: absolute;
            `
        }
        
    }}

    ${(props) => {
        return css`
            top: ${props.top}px;
            left: ${props.left}px; 
        `
    }}
`


export { ButtonMain, ContainerButtonMove }