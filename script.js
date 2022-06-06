let btn1 = document.getElementById('btn-1')
let btn2 = document.getElementById('btn-2')
let btn3 = document.getElementById('btn-3')
let btn4 = document.getElementById('btn-4')
let btn5 = document.getElementById('btn-5')
let btn_submit = document.getElementById('submit-btn')

let rating = document.getElementById('rating')

let container = document.querySelector('.container')
let container_ty = document.querySelector('.container-ty')

let choose_number

btn1.addEventListener('click', () => {
    choose_number = 1;
    btn1.style.backgroundColor = "var(--orange)";
    btn1.style.color = "var(--white)";
    btn2.style.backgroundColor = "var(--dark-blue)";
    btn2.style.color = "var(--medium-grey)";
    btn3.style.backgroundColor = "var(--dark-blue)";
    btn3.style.color = "var(--medium-grey)";
    btn4.style.backgroundColor = "var(--dark-blue)";
    btn4.style.color = "var(--medium-grey)";
    btn5.style.backgroundColor = "var(--dark-blue)";
    btn5.style.color = "var(--medium-grey)";
})

btn2.addEventListener('click', () => {
    choose_number = 2;
    btn2.style.backgroundColor = "var(--orange)";
    btn2.style.color = "var(--white)";
    btn1.style.backgroundColor = "var(--dark-blue)";
    btn1.style.color = "var(--medium-grey)";
    btn3.style.backgroundColor = "var(--dark-blue)";
    btn3.style.color = "var(--medium-grey)";
    btn4.style.backgroundColor = "var(--dark-blue)";
    btn4.style.color = "var(--medium-grey)";
    btn5.style.backgroundColor = "var(--dark-blue)";
    btn5.style.color = "var(--medium-grey)";
})

btn3.addEventListener('click', () => {
    choose_number = 3;
    btn3.style.backgroundColor = "var(--orange)";
    btn3.style.color = "var(--white)";
    btn2.style.backgroundColor = "var(--dark-blue)";
    btn2.style.color = "var(--medium-grey)";
    btn1.style.backgroundColor = "var(--dark-blue)";
    btn1.style.color = "var(--medium-grey)";
    btn4.style.backgroundColor = "var(--dark-blue)";
    btn4.style.color = "var(--medium-grey)";
    btn5.style.backgroundColor = "var(--dark-blue)";
    btn5.style.color = "var(--medium-grey)";
})

btn4.addEventListener('click', () => {
    choose_number = 4;
    btn4.style.backgroundColor = "var(--orange)";
    btn4.style.color = "var(--white)";
    btn2.style.backgroundColor = "var(--dark-blue)";
    btn2.style.color = "var(--medium-grey)";
    btn3.style.backgroundColor = "var(--dark-blue)";
    btn3.style.color = "var(--medium-grey)";
    btn1.style.backgroundColor = "var(--dark-blue)";
    btn1.style.color = "var(--medium-grey)";
    btn5.style.backgroundColor = "var(--dark-blue)";
    btn5.style.color = "var(--medium-grey)";
})

btn5.addEventListener('click', () => {
    choose_number = 5;
    btn5.style.backgroundColor = "var(--orange)";
    btn5.style.color = "var(--white)";
    btn2.style.backgroundColor = "var(--dark-blue)";
    btn2.style.color = "var(--medium-grey)";
    btn3.style.backgroundColor = "var(--dark-blue)";
    btn3.style.color = "var(--medium-grey)";
    btn4.style.backgroundColor = "var(--dark-blue)";
    btn4.style.color = "var(--medium-grey)";
    btn1.style.backgroundColor = "var(--dark-blue)";
    btn1.style.color = "var(--medium-grey)";
})

btn_submit.addEventListener('click', () => {
    container.style.display = "none"
    container_ty.style.display = "block"
    rating.innerText = choose_number
})