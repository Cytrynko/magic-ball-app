function shake() {
    document.getElementById('text').textContent = "";
    var circle = document.querySelector('#circle');
    circle.classList.remove('main-circle-shake');
    void circle.offsetWidth; 
    circle.classList.add('main-circle-shake');
    
    document.getElementById('sound').play();
    
    function predictionResult() {
    predictions = [
    "It is certain",
    "It is decidedly so",
    "Reply hazy, try again",
    "Cannot predict now",
    "As I see it, yes",
    "Don't count on it",
    "My sources say no",
    "You may rely on it",
    "Signs point to yes",
    "My reply is no",
    "Outlook not so good",
    "Most likely",
    "Concentrate and ask again",
    "Without a doubt",
    "Ask again later",
    "Outlook good",
    "Better not tell you now",
    "Yes",
    "Very doubtful",
    "Yes definitely",
]
var prediction = predictions[Math.floor(Math.random() * predictions.length)];
document.getElementById('text').textContent = prediction;
}
setTimeout(predictionResult,1000);
}