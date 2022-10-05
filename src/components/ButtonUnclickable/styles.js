import styled, { css } from "styled-components";

const ButtonUnclickableContainer = styled.div`
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;

    position: absolute;
    overflow: hidden;
`

const ContainerButtonMove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 300px;
    height: 150px;

    ${(props) => {
        if(props.isPosition){
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

export {ButtonUnclickableContainer, ContainerButtonMove}