document.getElementById('generate-button').addEventListener('click', generateRandomNumber);
document.getElementById('copy-button').addEventListener('click', copyGeneratedNumber);

function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 10000000000000000);
    document.getElementById('generated-number').textContent = randomNumber;
}

function copyGeneratedNumber() {
    var randomNumber = document.getElementById('generated-number').textContent;
    var tempInput = document.createElement('input');
    tempInput.value = randomNumber;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    //alert('Copied: ' + randomNumber);
}
