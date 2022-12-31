const minValue = 1;
const maxValue = 1000;
const secretNumber = generateRandomNumber();

function generateRandomNumber() {
    return parseInt(Math.random() * ((maxValue + 1) - minValue) + minValue);
}


const $minValue = document.getElementById("min-value");
const $maxValue = document.getElementById("max-value");

$minValue.innerHTML = minValue;
$maxValue.innerHTML = maxValue;