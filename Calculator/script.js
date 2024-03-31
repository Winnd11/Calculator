function insert(num) {
    document.getElementById('result').innerText += num;
}

function clean() {
    document.getElementById('result').innerText = '';
}

function remove() {
    let screen = document.getElementById('result').innerText;
    document.getElementById('result').innerText = screen.substring(0, screen.length - 1);
}

function result() {
    let screen = document.getElementById('result').innerText;
    document.getElementById('result').innerText = eval(screen);
}
