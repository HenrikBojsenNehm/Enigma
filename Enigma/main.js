const lights = document.querySelectorAll('.lightLetters');
var finalOut = '';
var iPressed = 0;
var rot1 = 0;
var rot2 = 0;
var rot3 = 0;
var wheelChosen1 = 2; 
var wheelChosen2 = 5; 
var wheelChosen3 = 1;
var wheel1;
var wheel2;
var wheel3;
var plugging = false;
var currentLetter = '';

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    plugging = false;
};

//--------Change wheels--------
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');

input1.value = wheelChosen1;
input2.value = wheelChosen2;
input3.value = wheelChosen3;
//------------------------------

//------Move up and down------
const scrollUp = document.getElementById('btnUp');
const scrollDown = document.getElementById('btnDown');

scrollUp.addEventListener('click', () => {
    plugging = false;
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

scrollDown.addEventListener('click', () => {
    plugging = true;
    window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: "smooth"
    });
});
//----------------------------

//--------Show code wheels--------
const arrowUp1 = document.getElementById('arrowUp1');
const wheelDisplay1 = document.getElementById('wheelDisplay1');
wheelDisplay1.textContent = (rot1 + 1).toString();
const arrowDown1 = document.getElementById('arrowDown1');

const arrowUp2 = document.getElementById('arrowUp2');
const wheelDisplay2 = document.getElementById('wheelDisplay2');
wheelDisplay2.textContent = (rot2 + 1).toString();
const arrowDown2 = document.getElementById('arrowDown2');

const arrowUp3 = document.getElementById('arrowUp3');
const wheelDisplay3 = document.getElementById('wheelDisplay3');
wheelDisplay3.textContent = (rot3 + 1).toString();
const arrowDown3 = document.getElementById('arrowDown3');
//--------------------------------

//---------Code wheels---------
var preWheel = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var wheels = [
    [['A', 'P'], ['B', 'E'], ['C', 'Z'], ['D', 'U'], ['E', 'O'], ['F', 'H'], ['G', 'X'], ['H', 'S'], ['I', 'C'], ['J', 'V'], ['K', 'F'], ['L', 'M'], ['M', 'T'], ['N', 'B'], ['O', 'G'], ['P', 'L'], ['Q', 'R'], ['R', 'I'], ['S', 'N'], ['T', 'Q'], ['U', 'J'], ['V', 'W'], ['W', 'A'], ['X', 'Y'], ['Y', 'D'], ['Z', 'K']],
    [['A', 'Z'], ['B', 'O'], ['C', 'U'], ['D', 'E'], ['E', 'S'], ['F', 'Y'], ['G', 'D'], ['H', 'K'], ['I', 'F'], ['J', 'W'], ['K', 'P'], ['L', 'C'], ['M', 'I'], ['N', 'Q'], ['O', 'X'], ['P', 'H'], ['Q', 'M'], ['R', 'V'], ['S', 'B'], ['T', 'L'], ['U', 'G'], ['V', 'N'], ['W', 'J'], ['X', 'R'], ['Y', 'A'], ['Z', 'T']],
    [['A', 'E'], ['B', 'H'], ['C', 'R'], ['D', 'V'], ['E', 'X'], ['F', 'G'], ['G', 'A'], ['H', 'O'], ['I', 'B'], ['J', 'Q'], ['K', 'U'], ['L', 'S'], ['M', 'I'], ['N', 'M'], ['O', 'Z'], ['P', 'F'], ['Q', 'L'], ['R', 'Y'], ['S', 'N'], ['T', 'W'], ['U', 'K'], ['V', 'T'], ['W', 'P'], ['X', 'D'], ['Y', 'J'], ['Z', 'C']],
    [['A', 'I'], ['B', 'M'], ['C', 'E'], ['D', 'T'], ['E', 'C'], ['F', 'G'], ['G', 'F'], ['H', 'R'], ['I', 'A'], ['J', 'Y'], ['K', 'S'], ['L', 'Q'], ['M', 'B'], ['N', 'Z'], ['O', 'X'], ['P', 'W'], ['Q', 'L'], ['R', 'H'], ['S', 'K'], ['T', 'D'], ['U', 'V'], ['V', 'U'], ['W', 'P'], ['X', 'O'], ['Y', 'J'], ['Z', 'N']],
    [['A', 'Q'], ['B', 'W'], ['C', 'E'], ['D', 'R'], ['E', 'T'], ['F', 'Z'], ['G', 'U'], ['H', 'I'], ['I', 'O'], ['J', 'A'], ['K', 'S'], ['L', 'D'], ['M', 'F'], ['N', 'G'], ['O', 'H'], ['P', 'J'], ['Q', 'K'], ['R', 'P'], ['S', 'Y'], ['T', 'X'], ['U', 'C'], ['V', 'V'], ['W', 'B'], ['X', 'N'], ['Y', 'M'], ['Z', 'L']]
];
//-----------------------------

wheel1 = wheels[wheelChosen1 - 1];
wheel2 = wheels[wheelChosen2 - 1];
wheel3 = wheels[wheelChosen3 - 1];

//------Select wheel rotation------
arrowUp1.addEventListener('click', () => {
    if (rot1 <= 24) {
        rot1 += 1;
        wheelDisplay1.textContent = (rot1 + 1).toString();
        wheelRotArray = [];
        wheel1.forEach(element => {
            wheelRotArray.push(element[1])
        });
        wheelRotArray.push(wheelRotArray[0]);
        wheelRotArray.shift();
        for (let i = 0; i < wheel1.length; i++) {
            wheel1[i].splice(1, 1, wheelRotArray[i]);
        }
    }
    else {
        rot1 = 0;
        wheelDisplay1.textContent = (rot1 + 1).toString();
        wheelRotArray = [];
        wheel1.forEach(element => {
            wheelRotArray.push(element[1])
        });
        wheelRotArray.push(wheelRotArray[0]);
        wheelRotArray.shift();
        for (let i = 0; i < wheel1.length; i++) {
            wheel1[i].splice(1, 1, wheelRotArray[i]);
        }
    }
});
            
arrowDown1.addEventListener('click', () => {
    if (rot1 >= 1) {
        rot1 -= 1;
        wheelDisplay1.textContent = (rot1 + 1).toString();
        wheelRotArray = [];
        wheel1.forEach(element => {
            wheelRotArray.push(element[1])
        });
        wheelRotArray.unshift(wheelRotArray[wheelRotArray.length - 1]);
        wheelRotArray.pop();
        for (let i = 0; i < wheel1.length; i++) {
            wheel1[i].splice(1, 1, wheelRotArray[i]);
        }
    }
    else {
        rot1 = 25;
        wheelDisplay1.textContent = (rot1 + 1).toString();
        wheel1.forEach(element => {
            wheelRotArray.push(element[1])
        });
        wheelRotArray.unshift(wheelRotArray[wheelRotArray.length - 1]);
        wheelRotArray.pop();
        for (let i = 0; i < wheel1.length; i++) {
            wheel1[i].splice(1, 1, wheelRotArray[i]);
        }
    }
});

arrowUp2.addEventListener('click', () => {
    if (rot2 <= 24) {
        rot2 += 1;
        wheelDisplay2.textContent = (rot2 + 1).toString();
        wheelRotArray = [];
        wheel2.forEach(element => {
            wheelRotArray.push(element[1])
        });
        wheelRotArray.push(wheelRotArray[0]);
        wheelRotArray.shift();
        for (let i = 0; i < wheel2.length; i++) {
            wheel2[i].splice(1, 1, wheelRotArray[i]);
        }
    }
    else {
        rot2 = 0;
        wheelDisplay2.textContent = (rot2 + 1).toString();
        wheelRotArray = [];
        wheel2.forEach(element => {
            wheelRotArray.push(element[1])
        });
        wheelRotArray.push(wheelRotArray[0]);
        wheelRotArray.shift();
        for (let i = 0; i < wheel2.length; i++) {
            wheel2[i].splice(1, 1, wheelRotArray[i]);
        }
    }
});

arrowDown2.addEventListener('click', () => {
    if (rot2 >= 1) {
        rot2 -= 1;
        wheelDisplay2.textContent = (rot2 + 1).toString();
        wheel2.forEach(element => {
            wheelRotArray.push(element[1])
        });
        wheelRotArray.unshift(wheelRotArray[wheelRotArray.length - 1]);
        wheelRotArray.pop();
        for (let i = 0; i < wheel2.length; i++) {
            wheel2[i].splice(1, 1, wheelRotArray[i]);
        }
    }
    else {
        rot2 = 25;
        wheelDisplay2.textContent = (rot2 + 1).toString();
        wheel2.forEach(element => {
            wheelRotArray.push(element[1])
        });
        wheelRotArray.unshift(wheelRotArray[wheelRotArray.length - 1]);
        wheelRotArray.pop();
        for (let i = 0; i < wheel2.length; i++) {
            wheel2[i].splice(1, 1, wheelRotArray[i]);
        }
    }
});

arrowUp3.addEventListener('click', () => {
    if (rot3 <= 24) {
        rot3 += 1;
        wheelDisplay3.textContent = (rot3 + 1).toString();
        wheelRotArray = [];
        wheel3.forEach(element => {
            wheelRotArray.push(element[1])
        });
        wheelRotArray.push(wheelRotArray[0]);
        wheelRotArray.shift();
        for (let i = 0; i < wheel3.length; i++) {
            wheel3[i].splice(1, 1, wheelRotArray[i]);
        }
    }
    else {
        rot3 = 0;
        wheelDisplay3.textContent = (rot3 + 1).toString();
        wheelRotArray = [];
        wheel3.forEach(element => {
            wheelRotArray.push(element[1])
        });
        wheelRotArray.push(wheelRotArray[0]);
        wheelRotArray.shift();
        for (let i = 0; i < wheel3.length; i++) {
            wheel3[i].splice(1, 1, wheelRotArray[i]);
        }
    }
});

arrowDown3.addEventListener('click', () => {
    if (rot3 >= 1) {
        rot3 -= 1;
        wheelDisplay3.textContent = (rot3 + 1).toString();
        wheel3.forEach(element => {
            wheelRotArray.push(element[1])
        });
        wheelRotArray.unshift(wheelRotArray[wheelRotArray.length - 1]);
        wheelRotArray.pop();
        for (let i = 0; i < wheel3.length; i++) {
            wheel3[i].splice(1, 1, wheelRotArray[i]);
        }
    }
    else {
        rot3 = 25;
        wheelDisplay3.textContent = (rot3 + 1).toString();
        wheel3.forEach(element => {
            wheelRotArray.push(element[1])
        });
        wheelRotArray.unshift(wheelRotArray[wheelRotArray.length - 1]);
        wheelRotArray.pop();
        for (let i = 0; i < wheel3.length; i++) {
            wheel3[i].splice(1, 1, wheelRotArray[i]);
        }
    }
});
//---------------------------------

//------Check keyboard press------
lights.forEach(press);

function press(light) {
    document.addEventListener('keydown', pressed => {
        if (!plugging) {
            if (iPressed < 1) {
                iPressed++;
                currentLetter = pressed.key.toUpperCase();
                plugSetup(1)
            }            
        }
    });
    document.addEventListener('keyup', () => {
        finalOut = '';
        iPressed = 0;
        light.style.color = "rgba(255, 255, 200, 1)";
    });
}
//--------------------------------

//------Make the plug board work------
const plugs = document.querySelectorAll('.plugInput');

function IsolateNumbers(str) {
    let strValue = "", strArray;
    strArray = str.split("");
    strArray.forEach(v => {
        if (!isNaN(parseInt(v))) {
            strValue = strValue + v;
        }
    })
    return strValue;
}

function plugSetup(inOut) {
    var plugVal1 = '';
    var plugVal2 = '';
    var plugValLast = '';
    var plugLookNum = 0;
    var pairANum = 0;
    var pairBNum = 0;
    var pairArray = [];
    var plugAdd1 = '';
    var plugAdd2 = '';

    plugs.forEach(plug => {
        if (plug.classList.contains('plugInput1')) {
            if (plug.value != '') {
                plugVal1 = plug.value;
                if (plugVal1 == plugValLast) {
                    plugVal1 = '';
                    plug.value = '';
                }
                else if (preWheel.indexOf(plugVal1.toUpperCase()) < 0) {
                    plugVal1 = '';
                    plug.value = ''; 
                }
                else {
                    plugValLast = plugVal1;
                    pairANum = IsolateNumbers(plug.classList.item(plug.classList.length - 1));
                }
            }
        }
        if (plug.classList.contains('plugInput2')) {
            if (plug.value != '') {
                plugVal2 = plug.value;
                if (plugVal2 == plugValLast) {
                    plugVal2 = '';
                    plug.value = '';
                }
                else if (preWheel.indexOf(plugVal2.toUpperCase()) < 0) {
                    plugVal2 = '';
                    plug.value = ''; 
                }
                else {
                    plugValLast = plugVal2;
                    pairBNum = IsolateNumbers(plug.classList.item(plug.classList.length - 1));
                }
            }
        }
        
        if (pairANum == pairBNum && pairANum > 0) {
            if (plugVal1 != plugAdd1 && plugVal2 != plugAdd2) {
                pairArray.push([plugVal1.toUpperCase(), plugVal2.toUpperCase()]);
                plugAdd1 = plugVal1;
                plugAdd2 = plugVal2;
            }
        }
        
        plugLookNum++;
        if (plugLookNum >= 26) {
            console.log(`${currentLetter} (currentLetter)`)
            if (pairArray.length <= 0) {
                console.log(`There is no plugs`)
                if (inOut == 1) {
                    currentLetter = preWheel.indexOf(currentLetter);
                    wheelSetup();
                }
                else if (inOut == 2) {
                    lightUp();
                }
            }
            else if (pairArray.length > 0) {
                if (inOut == 1) {
                    for (let iPair = 0; iPair < pairArray.length; iPair++) {
                        if (preWheel.indexOf(currentLetter) === preWheel.indexOf(pairArray[iPair][0])) {
                            currentLetter = preWheel.indexOf(pairArray[iPair][1]);
                            console.log(`${preWheel[currentLetter]} pluged in at pair ${iPair + 1}`);
                            wheelSetup();
                        }
                        else if (preWheel.indexOf(currentLetter) === preWheel.indexOf(pairArray[iPair][1])) {
                            currentLetter = preWheel.indexOf(pairArray[iPair][0]);
                            console.log(`${preWheel[currentLetter]} pluged in at pair ${iPair + 1}`);
                            wheelSetup();
                        }
                        else if (iPair >= pairArray.length - 1) {
                            currentLetter = currentLetter;
                            console.log(`${preWheel[currentLetter]} There is no plug on this letter`);
                            wheelSetup();
                        }
                    }
                }
                else if (inOut == 2) {
                    for (let iPair = 0; iPair < pairArray.length; iPair++) {
                        if (preWheel.indexOf(currentLetter) === preWheel.indexOf(pairArray[iPair][0])) {
                            currentLetter = preWheel.indexOf(pairArray[iPair][1]);
                            currentLetter = preWheel[currentLetter];
                            console.log(`${currentLetter} pluged in at pair ${iPair + 1}`);
                            lightUp();
                        }
                        else if (preWheel.indexOf(currentLetter) === preWheel.indexOf(pairArray[iPair][1])) {
                            currentLetter = preWheel.indexOf(pairArray[iPair][0]);
                            currentLetter = preWheel[currentLetter];
                            console.log(`${currentLetter} pluged in at pair ${iPair + 1}`);
                            lightUp();
                        }
                        else if (iPair >= pairArray.length -1) {
                            currentLetter = preWheel[currentLetter];
                            console.log(`${currentLetter} There is no plug on this letter`);
                            lightUp();
                        }
                    }
                }
            }
            plugLookNum = 0;
        }    
    });
}
//------------------------------------

//------Make the code wheels work------
var wheelCheckArray = [];
var wheelRotArray = [];
var wheelCheckWas = [];

function wheelSetup () {
    if (input1.value == input2.value || input1.value == input3.value || input2.value == input3.value) {
        input1.value = 2;
        input2.value = 5;
        input3.value = 1;
    }

    if (wheelChosen1 != input1.value || wheelChosen2 != input2.value || wheelChosen3 != input3.value) {
        wheelChosen1 = input1.value; 
        wheelChosen2 = input2.value; 
        wheelChosen3 = input3.value;
        rot1 = 0;
        wheelDisplay1.textContent = (rot1 + 1).toString();
        rot2 = 0;
        wheelDisplay2.textContent = (rot2 + 1).toString();
        rot3 = 0;
        wheelDisplay3.textContent = (rot3 + 1).toString();
    }

    if (wheelChosen1 <= wheels.length && wheelChosen1 >= 1 || wheelChosen2 <= wheels.length && wheelChosen2 >= 1 || wheelChosen3 <= wheels.length && wheelChosen3 >= 1) {
        wheel1 = wheels[wheelChosen1 - 1];
        wheelCheckArray.push(wheel1);
        wheel2 = wheels[wheelChosen2 - 1];
        wheelCheckArray.push(wheel2);
        wheel3 = wheels[wheelChosen3 - 1];
        wheelCheckArray.push(wheel3);

        if (wheelCheckArray.length > 3) {
            wheelCheckArray.splice(3);
        }
        
        if (currentLetter >= 0) {
            wheelCheckWas = [];
            var numOfWheel = 0;

            rotateWheels();

            wheelCheckArray.forEach(wheel => {
                numOfWheel++;
                for (let i = 0; i < wheel.length; i++) {
                    if (!isNaN(currentLetter) && preWheel[currentLetter] != wheel[i][0]) {
                        currentLetter = preWheel[currentLetter];
                    }
                    else if (!isNaN(currentLetter) && (preWheel[currentLetter] == wheel[i][0] && (wheel != wheelCheckWas))) {
                        currentLetter = preWheel[currentLetter];
                        console.log(`${wheel[i][0]} = ${wheel[i][1]} at wheel ${numOfWheel}`);
                        currentLetter = wheel[i][1];
                        wheelCheckWas = wheel;
                        console.log(currentLetter);
                        console.log(i);
                    }
                    else if (currentLetter == wheel[i][0] && (wheel != wheelCheckWas)) {
                        console.log(`${wheel[i][0]} = ${wheel[i][1]} at wheel ${numOfWheel}`);
                        currentLetter = wheel[i][1];
                        wheelCheckWas = wheel;
                        console.log(currentLetter);
                        console.log(i);
                    }
                    
                }
            });
            wheelCheckWas = [];
            for (let n = wheelCheckArray.length; n > 0; n--) {
                for (let i = 0; i < wheelCheckArray[n - 1].length; i++) {
                    if (!isNaN(currentLetter) && preWheel[currentLetter] != wheelCheckArray[n - 1][i][0]) {
                        currentLetter = preWheel[currentLetter];
                    }
                    else if (!isNaN(currentLetter) && (preWheel[currentLetter] == wheelCheckArray[n - 1][i][0] && (wheelCheckArray[n - 1] != wheelCheckWas))) {
                        currentLetter = preWheel[currentLetter];
                        console.log(`${wheelCheckArray[n - 1][i][0]} = ${wheelCheckArray[n - 1][i][1]} at wheel ${n}`);
                        currentLetter = wheelCheckArray[n - 1][i][1];
                        wheelCheckWas = wheelCheckArray[n - 1];
                        console.log(currentLetter);
                    }
                    else if (currentLetter == wheelCheckArray[n - 1][i][0] && (wheelCheckArray[n - 1] != wheelCheckWas)) {
                        console.log(`${wheelCheckArray[n - 1][i][0]} = ${wheelCheckArray[n - 1][i][1]} at wheel ${n}`);
                        currentLetter = wheelCheckArray[n - 1][i][1];
                        wheelCheckWas = wheelCheckArray[n - 1];
                        console.log(currentLetter);
                    }
                }
            }

            plugSetup(2);
        }
    }
    else {
        wheelChosen1 = 2; 
        wheelChosen2 = 5; 
        wheelChosen3 = 1; 
        wheelSetup();
    }
}

function rotateWheels () {
    if (rot1 <= 24) {
        rot1 += 1;
        wheelDisplay1.textContent = (rot1 + 1).toString();
        wheelRotArray = [];
        wheel1.forEach(element => {
            wheelRotArray.push(element[1])
        });
        wheelRotArray.push(wheelRotArray[0]);
        wheelRotArray.shift();
        for (let i = 0; i < wheel1.length; i++) {
            wheel1[i].splice(1, 1, wheelRotArray[i]);
        }
    }
    else {
        rot1 = 0;
        wheelDisplay1.textContent = (rot1 + 1).toString();
        wheelRotArray = [];
        wheel1.forEach(element => {
            wheelRotArray.push(element[1])
        });
        wheelRotArray.push(wheelRotArray[0]);
        wheelRotArray.shift();
        for (let i = 0; i < wheel1.length; i++) {
            wheel1[i].splice(1, 1, wheelRotArray[i]);
        }
        if (rot2 <= 24) {
            rot2 += 1;
            wheelDisplay2.textContent = (rot2 + 1).toString();
            wheelRotArray = [];
            wheel2.forEach(element => {
                wheelRotArray.push(element[1])
            });
            wheelRotArray.push(wheelRotArray[0]);
            wheelRotArray.shift();
            for (let i = 0; i < wheel2.length; i++) {
                wheel2[i].splice(1, 1, wheelRotArray[i]);
            }
        } else {
            rot2 = 0;
            wheelDisplay2.textContent = (rot2 + 1).toString();
            wheelRotArray = [];
            wheel2.forEach(element => {
                wheelRotArray.push(element[1])
            });
            wheelRotArray.push(wheelRotArray[0]);
            wheelRotArray.shift();
            for (let i = 0; i < wheel2.length; i++) {
                wheel2[i].splice(1, 1, wheelRotArray[i]);
            }
            if (rot3 <= 24) {
                rot3 += 1;
                wheelDisplay3.textContent = (rot3 + 1).toString();
                wheelRotArray = [];
                wheel3.forEach(element => {
                    wheelRotArray.push(element[1])
                });
                wheelRotArray.push(wheelRotArray[0]);
                wheelRotArray.shift();
                for (let i = 0; i < wheel3.length; i++) {
                    wheel3[i].splice(1, 1, wheelRotArray[i]);
                }
            } else {
                rot3 = 0;
                wheelDisplay3.textContent = (rot3 + 1).toString();
                wheelRotArray = [];
                wheel3.forEach(element => {
                    wheelRotArray.push(element[1])
                });
                wheelRotArray.push(wheelRotArray[0]);
                wheelRotArray.shift();
                for (let i = 0; i < wheel3.length; i++) {
                    wheel3[i].splice(1, 1, wheelRotArray[i]);
                }
            }
        }
    }
}
//-------------------------------------

//------Light up the letters------
function lightUp () {
    console.log(currentLetter);
    console.log(`${rot3} ${rot2} ${rot1}`);
    finalOut = 'light' + currentLetter;
    lights.forEach(light => {
        if (light.classList.contains(finalOut)) {
            light.style.color = "rgba(255, 215, 60, 1)";
        }
    });
}
//--------------------------------

