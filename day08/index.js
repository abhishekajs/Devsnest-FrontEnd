const frame = document.getElementById('main');
frame.addEventListener("click", (e) => {
    let cls = e.target.className;
    if(cls === 'center primary') {
        e.target.className = 'center white';
    }
    if(cls === 'center white') {
        e.target.className = 'center primary';
    }
});