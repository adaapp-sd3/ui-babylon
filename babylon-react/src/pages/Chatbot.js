import React, { useState } from "react";
import BotResponse from "./BotResponse";
import ResponseForm from "./ResponseForm";

const Chatbot = props => {

  let caringMessages = [
    "Let me soothe your pain",
    "Aaaw, diddums",
    "Tell me more",
    "Uh huh?",
    "I truly care",
  ];

  const someMessage = () => {
    let rand = Math.floor (Math.random()*caringMessages.length);
    return caringMessages[rand];
  };

  let initialMessages = [
    { userType: "bot", content: "Hi Laurie, how can I help you?" },
    { userType: "user", content: props.initialMessage },
    {
      userType: "bot",
      content: <BotResponse newMessage= { someMessage() } />
    }
  ]

  let [messages, setMessages] = useState(initialMessages);

  const handleNewMessage = str => {
    let newMessage = str;
    console.log(newMessage);
    let newBotResponse =    {
          userType: "bot",
          content: <BotResponse newMessage= {someMessage()} />
        };
    let newMessageObj = { userType: "user", content: newMessage};
    let newMessages = messages.slice(0);
    newMessages.push(newMessageObj);
    newMessages.push(newBotResponse);
    setMessages(newMessages);
  };


  const handleTextInput = event => {
    event.preventDefault();
    console.log(event);
    let newMessage = event.target[0].value;
    console.log(newMessage);
    handleNewMessage (newMessage);
    event.target[0].value = '';
    setTimeout (()=>window.scrollTo(0, 100000), 50);
  };

  const handleButtonInput = {
    yes: (event) => {
    handleNewMessage ("Yes");
    },
    no: (event) => {
    handleNewMessage ("No");
    }
  };

  return (
    <section id="chatbot" className="page">
      <header>
        <img class="logo" alt="Babylon" src="img/babylon-logo.png" />
      </header>
      <article class="clearfix">
        { messages.map(m => (
          <p className={`bubble ${m.userType} fadein`}>
            {m.content}
          </p>
        )) }
      </article>
      <footer>
        <ResponseForm
          inputType="text"
          handleTextInput={ handleTextInput }
          handleButtonInput={ handleButtonInput }
        />
      </footer>
    </section>
  )
}

export default Chatbot