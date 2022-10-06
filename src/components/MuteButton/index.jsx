import { GiSoundOff } from "react-icons/gi"
import { GiSoundOn } from "react-icons/gi"
import React from "react"

const MuteButton = (props) => {

    return (
        <button onClick={props.onClick} style={{background: "none", border: "none"}}>{props.muted ? <GiSoundOn size={50} />  : <GiSoundOff size={50}/>}</button>
    )
}

export default MuteButton