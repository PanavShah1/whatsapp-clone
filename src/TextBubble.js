import React from "react"
import replyimg from "./images/reply.svg"

export default function TextBubble(props){
    console.log("Props is: ", props)
    console.log(props.each.key)
    function findRetrieve(textKey){
        for(var i = 0; i< props.allData.length; i++){
            if(textKey==props.allData[i].key){
                console.log("have to reply to something")
                return(
                    <div className={props.allData[i].user==0?"reply0":"reply1"}>
                        <p className="reply--name">{props.allData[i].username} </p>
                        <div className="reply--lastline">
                            <p className="reply--text">{props.allData[i].text}</p>
                            <p className="reply--time">{props.allData[i].time}</p>
                        </div>
                        
    
                    </div>
                )
            }
        }
        return null
    }
    return(
        <div className={props.each.user==0?"bubble0":"bubble1"}>
            <div className="firstline">
                <p className="textbubble--name">{props.each.username}</p>
                <button className="textbubble--reply-button" onClick={() => props.reply(props.each.key)}>
                    <img src={replyimg}></img>
                </button>
            </div>
            <div className="lastline">
                <p className="textbubble--text">{props.each.text}</p>
                <p className="textbubble--time">{props.each.time}</p>
            </div>
            {/* <p>
                {props.each.isReply.keyToReply == "" ?"": "Replying to "}
            </p> */}
            {findRetrieve(props.each.isReply.keyToReply)}
        </div>
    )
}