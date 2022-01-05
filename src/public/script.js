async function send() {
    const text = document.getElementById('input').value;
    const result = await fetch('/uwu?text=' + encodeURIComponent(text));
    const resultText = await result.text();
    document.getElementById('result').innerText = resultText;
}

document.getElementById('submit').addEventListener("click", send);