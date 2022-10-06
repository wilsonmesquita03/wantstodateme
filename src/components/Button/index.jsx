import { useState } from "react";
import { ButtonMain, ContainerButtonMove } from "./styles"

const Button = ({move, children, onFocus, onClick}) => {
    const [newCoords, setNewCoords] = useState({x: 0, y: 0})
    const [firstMove, setFirstMove] = useState(true)

    const handleMouseMove = event => {
        console.log(children)
        if(children === "Não"){
            if(firstMove){
                setFirstMove(false)
            }

            if(event.target.classList.contains("container")){
                handleButtonMove()
            }
        }
    };

    const handleButtonMove = (e) => {        
        let newTop = Math.floor(Math.random() * (window.innerHeight - 50) + 0)
        let newLeft = Math.floor(Math.random() * (window.innerWidth - 200) + 0)
        setNewCoords({
            y: newTop,
            x: newLeft
        })
    }
    
    return (    
        <ContainerButtonMove className="container" left={newCoords.x} top={newCoords.y} isPosition={move} children={children} move={firstMove} onMouseEnter={handleMouseMove}>
            <ButtonMain className="container" onClick={() => onClick()} onFocus={(e) => onFocus(e)} onMouseEnter={handleMouseMove}>{children}</ButtonMain>
        </ContainerButtonMove>
        
    )
}

export default Button