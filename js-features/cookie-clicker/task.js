const clicker = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter')
clicker.onclick = () => {
    if (Number(counter.textContent)%2 == 0 ) {
    clicker.width += 50;
    counter.textContent = Number(counter.textContent) + 1}
    else {
        clicker.width -= 50;
        counter.textContent = Number(counter.textContent) + 1
    }
}
