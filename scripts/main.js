// let myHeadeing = document.querySelector('h1');
// myHeadeing.textContent = 'Hello Seven!';

var myImg = document.querySelector('img');
myImg.onclick = function () {
    var mySrc = myImg.getAttribute('src');
    if (mySrc === 'images/cute-lion.jfif') {
        myImg.setAttribute('src', 'images/fire-fox.jfif')
    } else {
        myImg.setAttribute('src', 'images/cute-lion.jfif')
    }
}

let myButton = document.querySelector('button');
let myHeadeing = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeadeing.textContent = 'Mozilla 超酷的' + myName;
    }
}


if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeadeing.textContent = 'Mozilla 超酷的' + storeName;
}

myButton.onclick = function () {
    setUserName();
}