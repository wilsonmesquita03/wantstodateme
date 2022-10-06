import Confetti from "../../components/Confetti"
import { YesContainer } from "./styles"
import music from "../../audio/music.mp3"
import { TypeAnimation } from "react-type-animation"
import { useState } from "react"
import MuteButton from "../../components/MuteButton"


const Yes = () => {
    const [mute, setMute] = useState(true)

    const functionMute = (e) => {
        e.preventDefault()

        setMute((oldMute) => !oldMute)

        const audio = document.getElementById('player')
        console.log(audio)

        audio[mute ? "pause" : "play"]()

    }   

    return (
        <YesContainer>
            <MuteButton muted={mute} onClick={(e) => functionMute(e)} />
            <Confetti>
                <TypeAnimation
                    sequence={[
                        `Chama no zap bb`,
                        3000
                    ]}
                wrapper="div"
                cursor={true}
                repeat={false}
                style={{ fontSize: '1.5em' }}
                />
            </Confetti>
            <audio id="player" autoPlay loop>
                <source src={music} type="audio/mp3"/>
            </audio>
        </YesContainer>
    )
}

export default Yes