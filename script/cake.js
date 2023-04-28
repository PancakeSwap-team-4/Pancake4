const dinamic = document.querySelectorAll('.dinamic');

dinamic.forEach(element => {
    function randomNumber(){
        const target = Math.floor((Math.random() * 100000)+ 10000000);
        let countStart = 0;
        element.innerText = countStart;
        const myInterval = setInterval(() => {
        if (countStart <= target - 4) {
            countStart  += 12345;
            element.innerText = `${countStart.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}`;
        } else {
            countStart = target;
            element.innerText = `${countStart.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}`;
        clearInterval(myInterval);
        }
        console.log(myInterval);
        }, 1/1000);
    
    }
    window.addEventListener("load", randomNumber);
});