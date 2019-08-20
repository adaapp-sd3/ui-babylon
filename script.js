(() => {

    var userForm = document.getElementById("user-input");
    var initialForm = document.getElementById("initial-message");
    var currentView = document.querySelector("section.current");

    initialForm.addEventListener("submit", e => {
        event.preventDefault();
        handleInitalFormSubmit(e);
        addUserMessage(e);
    });

    userForm.addEventListener("submit", e => {
        event.preventDefault();
        addUserMessage(e);
    });

    const handleInitalFormSubmit = e => {
        currentView.classList.remove("current");
        currentView = document.querySelector(e.target.attributes.action.value);
        currentView.classList.add("current");
    };

    const addUserMessage = e => {
        var msg = e.target[0].value;
        e.target[0].value = "";
        console.log(msg);

        var article = document.getElementById("conversation");

        var p = document.createElement("p");

        p.innerText = msg;

        p.classList.add("user");
        p.classList.add("bubble");

        article.appendChild(p);

        var pBot = document.createElement("p");

        pBot.classList.add("bubble");
        pBot.classList.add("bot");

        var dots = `<span>.<span>
                <span>.<span>
                <span>.<span>`;

        pBot.innerHTML = dots;

        article.appendChild(pBot);
    };

})();