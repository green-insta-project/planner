const Planner = document.querySelector('.planner');
const Userbox = document.querySelectorAll('.userbox ul li');
const User = document.querySelectorAll('.user');


const timer = () => {
    const clock = document.querySelector('.clock');
    const today = new Date();
    let hour = today.getHours();
    if(hour == 0) {
        hour = 12;
    }(hour > 12) ? hour = 'PM' + (hour-12) : hour = 'AM'+ hour;
    
    clock.innerHTML = `${addZero(hour)} : ${addZero(today.getMinutes())}`;
}

const addZero = (num) =>{
    (num < 10) ? num = '0' + num : num ;
    return num;
}




const start = () => {
    timer();
    setInterval(timer, 1000);
    setTimeout( () => {
        Planner.classList.add('active')
    }, 500)
    for(let i = 0; i < User.length; i++){
        User[i].addEventListener('mouseenter', () => Userbox[i].classList.add('active') )
        User[i].addEventListener('mouseleave', () => Userbox[i].classList.remove('active') )
    }
}

window.onload = start();