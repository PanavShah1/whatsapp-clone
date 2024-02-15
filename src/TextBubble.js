import React from "react"

export default function TextBubble(props){
    console.log("Props is: ", props)
    console.log(props.each.key)
    function findRetrieve(textKey){
        for(var i = 0; i< props.allData.length; i++){
            if(textKey==props.allData[i].key){
                console.log("have to reply to something")
                return(
                    <div className="replyText">
                        {props.allData[i].user} <br></br>
                        {props.allData[i].text} <br></br>
                        {props.allData[i].time} <br></br>
                    </div>
                )
            }
        }
        return null
    }
    return(
        <div className={props.each.user==0?"bubble0":"bubble1"}>
            <p>{props.each.user}</p>
            <button onClick={() => props.reply(props.each.key)}>reply</button>
            <h2>{props.each.text}</h2>
            <p>{props.each.time}</p>
            <p>
                {props.each.isReply.keyToReply == "" ?"": "Replying to "}
            </p>
            {findRetrieve(props.each.isReply.keyToReply)}
        </div>
    )
}