// LOADING
const loading = document.getElementById("loading");
let loaded = false;
let time = 0;
const loadingTime = 1;
document.body.style.overflow = "hidden";

const int = setInterval(() => {
    if (time >= loadingTime && loaded) {
        loading.style.animation = "loaded 0.5s ease";
        setTimeout(() => {
            loading.style.display = "none";
            document.body.style.overflow = "auto";
        }, 480)
    } else {
        time += 0.5;
    }
}, 500)

window.onload = () => loaded = true;

// COPY IP
const ipText = document.getElementById("ip-text");

function copy(text) {
    const temp = document.createElement('textarea');
    temp.value = text;

    document.body.appendChild(temp);

    temp.select();
    document.execCommand('copy');

    document.body.removeChild(temp);

    const startText = ipText.innerText;
    ipText.innerText = "IP Copiato";

    setTimeout(() => {
        ipText.innerText = startText;
    }, 3000)
}