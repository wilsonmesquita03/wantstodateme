import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { YesOrNoContainer, DivFlex } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";

const YesOrNo = () => {
    const navigate = useNavigate()

    const [defaultBtnMessage, setDefaultBtnMessage] = useState(false)
    const [firstMoveBtn, setFirstMove] = useState(true)

    const [finished, setFinished] = useState(false)

    const { name } = useParams()

    function changeMessage(e){
        if(e.target.innerText !== "Sim"){
            setDefaultBtnMessage(!defaultBtnMessage)
            setFirstMove(false)
        }
    }

    const redirectToYesPage = () => {
        navigate("/yes")
    }

    return (
        <YesOrNoContainer>
            <TypeAnimation
                sequence={[
                    `Oi ${name}`,
                    3000, 
                    'Quer namorar cmg?',
                    () => {
                        setFinished(true)
                    }
                ]}
            wrapper="div"
            cursor={true}
            repeat={false}
            style={{ fontSize: '2em' }}
            />
            {finished ? 
                <DivFlex>
                    <Button onClick={() => redirectToYesPage()} onFocus={(e) => changeMessage(e)}>{defaultBtnMessage ? "Sim":"Não"}</Button>
                    <Button onClick={() => redirectToYesPage()} onFocus={(e) => changeMessage(e)}>{defaultBtnMessage ? "Não":"Sim"}</Button>
                </DivFlex>
                :
                <></>
            }

            
        </YesOrNoContainer>
    )
}

export default YesOrNo