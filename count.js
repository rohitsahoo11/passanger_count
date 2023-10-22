//document.querySelector('#count').innerHTML = 5;

// let first = 6;
// let second = 7

// let count = first + second;

// console.log(count);

// let myAge = 20;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// let bonusPoint = 50;
// console.log(bonusPoint);

// bonusPoint = bonusPoint + 50;
// console.log(bonusPoint);

// bonusPoint = bonusPoint - 75;
// console.log(bonusPoint);

// bonusPoint = bonusPoint + 45;
// console.log(bonusPoint);
let saveEl = document.getElementById('save-el');
let countEl = document.getElementById('count-el');
let count = 0;


console.log(saveEl);

function increment() {
    count += 1;
    countEl.textContent = count;
}


function save(){
    let countStr = count + ' - ';

    saveEl.textContent += countStr;
    console.log(count)

    countEl.textContent = 0;
    count = 0;

}
