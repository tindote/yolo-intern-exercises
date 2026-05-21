let countPass = 0;
let countFail = 0;
let countTest = 0;
let failArray = [];

function increasePass(){
    countPass ++;
}

function increaseFail(){
    countFail ++;
}

function increaseTest(){
    countTest ++;
}

function pushFail(fail){
    failArray.push(fail);
}

function getSumary(){
    return {countTest, countPass, countFail, failArray};
}

module.exports = {increaseTest, increasePass, increaseFail, getSumary, pushFail};