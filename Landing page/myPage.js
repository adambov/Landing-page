//DOM Elements select
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

//show time
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);

}

//Add zero
function addZero(n) {
    return (parseInt(n,10) < 10 ? '0' : '') + n;
}

// background and greeting
function setBackAndGreeting() {
    // let today = new Date(),
    let today = new Date(2022, 06, 10, 20, 33, 30),
    hour = today.getHours();

    if (hour < 12) {
        //morning
        document.body.style.backgroundImage = "url(./images/morning.jpg)";
        greeting.textContent = "Good Morning";
    } else if (hour < 18){
        //afternoon
        document.body.style.backgroundImage = "url(./images/something.jpg)";
        greeting.textContent = "Good Afternoon";
    } else{
        //evening
        document.body.style.backgroundImage = "url(./images/warsaw.jpg)";
        greeting.textContent = "Good Evening";
        document.body.style.color = "white";
    }
}

//Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]'
    }else{
        name.textContent = localStorage.getItem('name');
    }
    
}
function setName(e) {
    if (e.type === "keypress") {
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        //blur
        localStorage.setItem('name', e.target.innerText);
    }
}

//get focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    }else{
        focus.textContent = localStorage.getItem('focus');
    }
    
}

// set focus
function setFocus(e) {
    if (e.type === "keypress") {
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        //blur
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBackAndGreeting();
getName();
getFocus();