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

function darkMode(){
    let element = document.body;
    element.classList.toggle("dark-mode");
}
