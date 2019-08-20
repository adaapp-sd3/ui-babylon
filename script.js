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
        removeClass(currentView,"current");
        currentView = document.querySelector(e.target.attributes.action.value);
        addClass(currentView,"current");
    };

    const addUserMessage = e => {
        var msg = e.target[0].value;
        e.target[0].value = "";
        console.log(msg);

        var article = document.getElementById("conversation");

        var p = document.createElement("p");

        p.innerText = msg;

        addClass(p,"bubble");
        addClass(p,"user");

        article.appendChild(p);

        var pBot = document.createElement("p");

        addClass(pBot,"bubble");
        addClass(pBot,"bot");

        var dots = `<span>.<span>
                <span>.<span>
                <span>.<span>`;

        pBot.innerHTML = dots;

        article.appendChild(pBot);
        
        window.scrollTo(0,10000000);
    };

    const addClass = (el,className) => {
        if(!el.classList.contains(className)) el.classList.add(className);
    };

    const removeClass = (el,className) => {
        if(el.classList.contains(className)) el.classList.remove(className);
    };

})();