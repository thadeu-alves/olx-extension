function init(){
    const divSec = document.querySelector(".sc-67f3da08-0, .hDJPTR");
    const secs = divSec.querySelectorAll("section");
    const lista = document.createElement("ul");
    lista.classList.add("thz-ul");
    secs.forEach(sec => {
        let li = document.createElement("li");
        li.innerText = sec.querySelector("h3").innerText;
        lista.appendChild(li);
    });
    divSec.insertAdjacentElement("beforebegin", lista);
}

init();