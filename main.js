let input = document.querySelector(".int");
let btn = document.querySelector(".btn");



let txt  = document.querySelector(".txt");

let noj = document.querySelectorAll(".n");
let styl = document.querySelector(".styl");

let jor = document.querySelector(".jorik");

let step = 1;
let stepM = 0;

let score = document.querySelector(".score");

let vopr = document.querySelector(".vopr");

let heps = ["Как меня зовут?","как зовут моего брата?","где я живу?"];
let otvet = ["Юнона", "Никита", "В Ростове-на-Дону"];

let stepMat = 0;
let SM = 0;

btn.addEventListener("click", () => {
    if(input.value == otvet[stepM]){
        alert("Win");
        stepM++;
        step++;
        score.innerHTML = step;
        vopr.innerHTML = heps[stepM];
    }
    else{
        alert("Вы ошиблись");
        noj[stepMat].style.opacity = "0";
        stepMat++;
        SM++;
        if(SM == 3){
            input.style.display = "none";
            btn.style.display = "none";
            txt.style.display = "none";
            vopr.innerHTML = "Вы проиграли, перезагрузите страницуу чтобы начать сначала";
            styl.style.display = "none";
            jor.classList.add("p_active");

        }
    }

    if(step > 3){
            input.style.display = "none";
            btn.style.display = "none";
            txt.style.display = "none";
            vopr.innerHTML = "Вы выйграли, перезагрузите страницуу чтобы начать сначала";
            styl.style.display = "none";
    }
})















