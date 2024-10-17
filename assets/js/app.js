const inputEl = document.querySelector(".input");
const btnEl = document.querySelector(".btn");
const h2El = document.querySelector("h2");
const alertEl = alert("0 dan 10 gacha xoxlagan soningizni kiriting!");


btnEl.addEventListener("click", (e) => {
    e.preventDefault();
    


    if (inputEl.value == Math.round(Math.random() * 10)) {

        document.body.style.backgroundColor = "rgb(16, 235, 16)";
        h2El.style.display = "block";
        inputEl.style.display = "none";
        btnEl.style.display = "none";


    }
    else {
        document.body.style.backgroundColor = "red";
    }


    inputEl.value = "";
})