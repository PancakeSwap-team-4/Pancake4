const lotteryNumber = document.querySelector('#lottery-number');
const updateNumber = 10000;

function randomNumber(){
    const target = Math.floor(Math.random() * 100000);
    const numberComma = target.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
    const dataVal = lotteryNumber.setAttribute("data-val", target);
    return lotteryNumber.innerHTML = `$${numberComma}`;
}

setInterval(randomNumber, updateNumber);
