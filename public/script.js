async function send() {
    const text = document.getElementById('input');
    const result = await fetch('/uwu?text=' + encodeURIComponent(text));
    console.log(result);
}

document.getElementById('submit').addEventListener(send);
