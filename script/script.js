const lotteryNumber = document.querySelector('#lottery-number');
const cardContentRight = document.querySelector('.win-card-content');
const updateNumber = 5000;
const speed = 300;

function randomNumber(){
    const target = Math.floor((Math.random() * 10000) + 80000);
    let countStart = 0;
    lotteryNumber.innerText = countStart;
    console.log(lotteryNumber)
    const myInterval = setInterval(() => {
    if (countStart <= target - 4) {
        countStart  += 104;
        lotteryNumber.innerText = `$${countStart.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}`;
    } else {
        countStart = target;
        lotteryNumber.innerText = `$${countStart.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}`;
    clearInterval(myInterval);
    }
    console.log(myInterval);
    }, 1/1000);

}

window.addEventListener("load", randomNumber);

const h2Million = document.querySelectorAll('.million > h2');
const bgMillion = document.querySelector('.million-container');
const millionCard = document.querySelectorAll('.million-card');
const h2MillionCard = document.querySelectorAll('.text-description > h2:first-child');
const obliqueLine = document.querySelector('.million-oblique-line');
const winContainer = document.querySelector('.win-container');
const win = document.querySelector('.win');
const winH2 = document.querySelector('.win > h2:first-child');
const winButton = document.querySelectorAll('.win-button');
const svgButton = document.querySelectorAll('.win-button > svg');


function darkMode(){
    h2Million.forEach((item) => {
        item.classList.toggle('text-white');
    })

    bgMillion.classList.toggle('dark-million-container');

    millionCard.forEach((item) => {
        item.classList.toggle('dark-million-card');
    })

    h2MillionCard.forEach((item) => {
        item.classList.toggle('text-white');
    });

    obliqueLine.classList.toggle('dark-million-oblique-line');

    winContainer.classList.toggle('background-win-millions');

    win.classList.toggle('dark-win');

    winH2.classList.toggle('text-white');

    winButton.forEach((item) => {
        item.classList.toggle('dark-win-button');
    });

    svgButton.forEach((item) => {
        item.classList.toggle('dark-svg-win');
    })
}
