const button = document.getElementById("button1");

if (button) {
    button.addEventListener('click', loadText);
}

function loadText() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'Models/sample.txt', true);

    xhr.onload = function() {
        if (this.status == 200) {
            console.log(this.responseText);
        }
        else {
            console.log("Something went wrong: ");
        }
    }

    xhr.send();
}
