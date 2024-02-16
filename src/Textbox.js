import React from "react"
import sendimg from "./images/sendd.png"

export default function Textbox(props){

    return(
        <div className="textbox-area">
            <textarea
                type="text"
                value={props.value}
                onChange={props.handleChange}
                placeholder="Type a message"
                // name="text-name"
            />
            <button
                className="send"
                onClick={props.handleChangeButton}
            ><img src={sendimg} ></img></button>
        </div>
    )
}