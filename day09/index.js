let booked_seat = "0";
let remaining_seat = "30";
const booked = document.querySelector(".book");
const remaining = document.querySelector(".unbook");
remaining.innerHTML = remaining_seat;
booked.innerHTML = booked_seat;


const main = document.querySelector(".main");
main.addEventListener("click",(e)=>{
    let cls = e.target.className;

    if(cls == "undo"){
        e.target.classList = "click";
        book_seat = parseInt(book_seat) + 1;
        remaining_seat = parseInt(remaining_seat) - 1;

    }if(cls == "click"){
        e.target.classList = "undo";
        book_seat = parseInt(book_seat) - 1;
        remaining_seat = parseInt(remaining_seat) + 1;

    }
    remaining.innerHTML = remaining_seat;
    booked.innerHTML = booked_seat;
});