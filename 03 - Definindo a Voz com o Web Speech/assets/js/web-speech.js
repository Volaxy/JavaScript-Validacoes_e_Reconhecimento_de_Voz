const $kick = document.getElementById("kick");

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(event) {
    kick = event.results[0][0].transcript;

    showKickOnWindow(kick);
}

function showKickOnWindow(kick) {
    $kick.innerHTML = `
        <div>You said</div>
        <span class="box">${kick}</span>
    `;
}