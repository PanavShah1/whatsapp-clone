import React from "react"
import Chat from "./Chat"
import TextBubble from "./TextBubble"
import {nanoid} from "nanoid"
import TextBox from "./Textbox"


export default function App(){

    const [chat, setChat] = React.useState([])
    const [textBox, setTextBox] = React.useState("")
    const [textBox2, setTextBox2] = React.useState("")
    const [textList, setTextList] = React.useState([])
    const [isReply, setIsReply] = React.useState({keyToReply:"", toReply:false})
    

    React.useEffect(()  => {
        setTextList(chat.map(each => (  
            <TextBubble 
                each={each} 
                key={each.key}
                reply={replyText}
                allData={chat}
            />    
        )
    ), [chat])

    console.log(textList)
    },[chat])

    function textBoxWrite(event){
        setTextBox(event.target.value)
        // console.log(0)
    }

    function textBoxWrite2(event){
        setTextBox2(event.target.value)
        // console.log(1)
    }

    function submit(){
        console.log("submit")
        const currentDateTime = new Date().toLocaleString()
        setChat((prevChat) => [
            ...prevChat,
            {user: 0, text:textBox, time:currentDateTime, key:nanoid(), isReply:isReply}
        ])
        console.log("chat " + chat)
        setTextBox("")
        setIsReply({keyToReply:"", toReply:false})
    }

    function submit2(){
        console.log("submit")
        const currentDateTime = new Date().toLocaleString()
        setChat((prevChat) => [
            ...prevChat,
            {user: 1, text:textBox2, time:currentDateTime, key:nanoid(), isReply:isReply}
        ])
        console.log("chat " + chat)
        setTextBox2("")
        setIsReply({keyToReply:"", toReply:false})
    }

    function replyText(input){
        setIsReply(prevState => ({
            keyToReply: input,
            toReply: input==prevState.keyToReply ? !prevState.toReply: prevState.toReply //can improve
        }))
    }

    React.useEffect(()=>{
        console.log("reply : "+isReply.toReply+" key : "+isReply.keyToReply)
    }, [isReply])


    React.useEffect(()=>{
        console.log(chat)
    }, [chat])
    

    return (
        <div>
            <h1>app</h1>
            <div className="text-cont">{textList}</div>
            <TextBox 
                value={textBox} 
                handleChange={textBoxWrite} 
                handleChangeButton={submit}
            />
            <TextBox 
                value={textBox2} 
                handleChange={textBoxWrite2} 
                handleChangeButton={submit2}
            />
        </div>
        
    )

}