var startTime, endTime;
var gameActive = false;

function startGame() 
{
    if (!gameActive) 
    {
        document.getElementById('startBtn').disabled = true;
        document.getElementById('target').disabled = false;
        document.getElementById('result').innerHTML = '';
        setTimeout(setTarget, Math.random() * 2000);
        gameActive = true;
    }
}

function setTarget() 
{
    startTime = new Date();
    document.getElementById('target').style.backgroundColor = 'red';
    document.getElementById('target').innerHTML = 'Click!';
}

function hitTarget() 
{
    if (gameActive) 
    {
        endTime = new Date();
        var reactionTime = (endTime - startTime) / 1000;
        document.getElementById('result').innerHTML = `Your reaction time: ${reactionTime.toFixed(3)} sec.`;
        document.getElementById('target').style.backgroundColor = 'lightgreen';
        document.getElementById('target').innerHTML = 'Game over. Start again';
        document.getElementById('target').disabled = true;
        document.getElementById('startBtn').disabled = false;
        gameActive = false;
    }
}
