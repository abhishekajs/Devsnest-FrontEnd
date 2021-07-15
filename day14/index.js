let one = document.getElementById("one");
let two = document.getElementById("two");

one.onclick = () => {
    console.log("Inner is clicked");
    one.style.backgroundColor = "blue";
}

two.addEventListener("mouseover", () =>{
    two.style.backgroundColor = "black";
})