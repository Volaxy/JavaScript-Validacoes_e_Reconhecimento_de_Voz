const $kick = document.getElementById("kick");

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(event) {
    kick = Number.parseInt(event.results[0][0].transcript);

    showKickOnWindow(kick);

    isValidKick(kick);
}

function showKickOnWindow(kick) {
    $kick.innerHTML = `
        <div>You said</div>
        <span class="box">${kick}</span>
    `;
}

function isValidKick(kick) {
    if(Number.isNaN(kick)) {
        $kick.innerHTML += "<div>Invalid value</div>";
        return;
    }

    if(kick < minValue || kick > maxValue) {
        $kick.innerHTML += `<div>Invalid value: The secret number must be between ${minValue} and ${maxValue}</div>`;
        return;
    }

    if(kick === secretNumber) {
        document.body.innerHTML = `
            <h2>You're right</h2>
            <h3>The secret number is ${secretNumber}</h3>
        `;
    } else {
        if(kick > secretNumber) {
            $kick.innerHTML += "<div>The secret number is less &#x2B07;</div>";
        } else {
            $kick.innerHTML += "<div>The secret number is greater &#x2B06;</div>";
        }

    }
}

recognition.addEventListener("end", () => recognition.start());