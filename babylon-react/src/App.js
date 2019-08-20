import React, { useState } from "react";
import "./App.css";

import Welcome from './pages/Welcome';
import Chatbot from './pages/Chatbot';

const App = () => {
  let [initialMessage, setInitialMessage] = useState(false);
  function handleForm(event) {
    event.preventDefault();
    let message = event.target[0].value;
    setInitialMessage(message);
  }

  return (
    <div>
      <a href="#chatbot" id="skip-to-content" title="Skip to content">
        Skip to content
      </a>
      <main>
        {!initialMessage && (
          <Welcome>
            <form onSubmit={handleForm} action="#chatbot">
              <label htmlFor="initial">Hi Laurie, how can I help you?</label>
              <input
                autoFocus
                placeholder="e.g. I have a headache"
                type="text"
                name="initial"
              />
            </form>
          </Welcome>
        )}
        {initialMessage && <Chatbot initialMessage={initialMessage}  />}
      </main>
    </div>
  )
}

export default App