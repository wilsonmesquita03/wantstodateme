import ButtonUnclickable from "../../components/ButtonUnclickable"
import { Button } from "../../components/Button/styles";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { YesOrNoContainer, DivFlex } from "./styles";
import { useParams } from "react-router-dom";

const YesOrNo = () => {
    const [finished, setFinished] = useState(false)

    const { name } = useParams()

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
                    <ButtonUnclickable />
                    <Button>Sim</Button>
                </DivFlex>
                :
                <></>
            }

            
        </YesOrNoContainer>
    )
}

export default YesOrNo