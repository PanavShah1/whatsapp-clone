import React from "react"

export default function Textbox(props){

    return(
        <div>
            <textarea
                type="text"
                value={props.value}
                onChange={props.handleChange}
                placeholder="Enter text here"
                // name="text-name"
            />
            <button
                onClick={props.handleChangeButton}
            >Enter</button>
        </div>
    )
}