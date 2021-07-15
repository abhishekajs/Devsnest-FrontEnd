let arr = ["RED", "RED", "BLUE", "BLUE", "GREEN", "GREEN","BLACK", "BLACK", "WHITE", "WHITE", "ORANGE", "ORANGE", "PINK", "PINK", "CYAN", "CYAN"]
for(let i=0; i<16; i++) {
    let rand_number = Math.floor(Math.random()*arr.length);
    document.querySelector(`#c${i+1}`).innerHTML = arr[rand_number];
    arr.splice(rand_number, 1);
}

let storeArray = [];
let idArray = [];
let attempts = 0;
let success = 0;

main.addEventListener('click', (e) =>{
    let eTarget = e.target;
    if (eTarget.classList.contains('cards')&&(idArray.length===0 || idArray[0]!==eTarget)){
        attempts += 1;
        if (attempts>30) {
            alert("You Lost, Try Again!!!");
            document.location = document.location.href;
        }
        else{
            lifeLeft.innerHTML = `Remaining Moves : ${30-attempts}`
            eTarget.style.cssText = "transform: rotateY(0deg); color: white";
            let val = eTarget.innerHTML;
            storeArray.push(val);
            idArray.push(eTarget);
            if (storeArray.length === 2) {
                setTimeout(decide, 500) ;
            }
        }
    }
});

function decide () {
    if(storeArray[0] === storeArray[1]) {
        idArray[0].style.visibility = 'hidden';
        idArray[1].style.visibility = 'hidden';
        success += 2;
    }
    else {
        idArray[0].style.cssText = "transform: rotateY(180deg); color: transparent";
        idArray[1].style.cssText = "transform: rotateY(180deg); color: transparent";
    }
    if (success === 16) {
        alert("You won, Try again and continue the winning streak!!!");
        document.location = document.location.href;
    }
    storeArray = [];
    idArray = [];
}