import { useState } from "react"
import { Button } from "../Button/styles";
import { ContainerButtonMove, ButtonUnclickableContainer } from "./styles";

const ButtonUnclickable = ({Element}) => {
    const [position, setPosition] = useState(false)
    const [mouseCoords, setMouseCoords] = useState({x: 0, y: 0});
    const [newCoords, setNewCoords] = useState({x: 0, y: 0})

    const handleMouseMove = event => {
        if(event.target.classList.contains("container")){
            handleButtonMove()
        }
        
        setMouseCoords({
            x: event.clientX,
            y: event.clientY
        });
    };

    const handleButtonMove = (e) => {
        if(!position){
            setPosition(true)
        }
        
        let newTop = Math.floor(Math.random() * (window.innerHeight - 50) + 0)
        let newLeft = Math.floor(Math.random() * (window.innerWidth - 200) + 0)

        setNewCoords({
            y: newTop,
            x: newLeft
        })
    }

  return (
    position ? 
    <ButtonUnclickableContainer onMouseMove={handleMouseMove}>
        <ContainerButtonMove top={newCoords.y} left={newCoords.x} className="container" isPosition={position}>
            <Button className="container">Não</Button>
        </ContainerButtonMove>
    </ButtonUnclickableContainer>
    :
    <Button onMouseEnter={() => setPosition(true)}>Não</Button>
  );
}


export default ButtonUnclickable