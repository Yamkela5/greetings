var clickCount = Number(localStorage.getItem('currentGreets'));
document.getElementById('greetCount').innerHTML = clickCount;

var namesGreeted = {};

for (var i = 0; i < namesGreeted.length; i++) {
}


function myName() {
    'use strict';

    var Yash = document.getElementById('TextBox').value;
//function for the English radio buttons
    if (document.getElementById('English').checked === true && Yash.length > 0 && namesGreeted[Yash] === undefined) {
        namesGreeted[Yash] = 1;
        document.getElementById('output').innerHTML = 'Hello, ' + Yash;

        clickCount += 1;

  } else if (document.getElementById('TshiVenda').checked === true && Yash.length > 0 && namesGreeted[Yash] === undefined) {
        namesGreeted[Yash] = 1;
        document.getElementById('output').innerHTML = 'Ndaa, ' + Yash;

        clickCount += 1;

  } else if (document.getElementById('French').checked === true && Yash.length > 0 && namesGreeted[Yash] === undefined) {
        namesGreeted[Yash] = 1;
        document.getElementById('output').innerHTML = 'Bonjour, ' + Yash;

        clickCount += 1;
    } else if (document.getElementById('English').checked && Yash.length > 0 && namesGreeted[Yash] !== undefined) {
        document.getElementById('output').innerHTML = 'Hello, ' + Yash;

    } else if (document.getElementById('TshiVenda').checked && Yash.length > 0 && namesGreeted[Yash] !== undefined) {
        document.getElementById('output').innerHTML = 'Ndaa, ' + Yash;

    } else if (document.getElementById('French').checked && Yash.length > 0 && namesGreeted[Yash] !== undefined) {
        document.getElementById('output').innerHTML = 'Bonjour, ' + Yash;
    }

    document.getElementById('TextBox').value = "";

    document.getElementById('greetCount').innerHTML = clickCount;

    localStorage.setItem('currentGreets',  Number(clickCount));
}
//the reset button
function resetBtn() {
    'use strict';
    var rst = document.getElementById('clickCount');
    if (rst >= 0) {
    document.getElementById('greetCount').innerHTML = clickCount = 0;
    }
    localStorage.clear();
}
