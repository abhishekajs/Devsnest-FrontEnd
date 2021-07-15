const dog = document.getElementById("dog");

const dogBtn = document.getElementById("dog-btn");

dogBtn.addEventListener('click',getDog);

function getDog(){
    fetch(`https://random.dog/woof.json`)
        .then(res => res.json())
        .then(data => {
            dog.innerHTML = `<img src="${data.url}" alt="dog image"/>`
        })
}
