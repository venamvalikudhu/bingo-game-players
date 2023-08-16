const plane_loader = {
	duration: 3000,
	iterations: 1,
};

const plane_loader_anim = [
{		
transform: "translateX(300px)"
},
];

var timerInterval = '';
let numbergenerated = [];
var retryTime = 0;


function shuffleForNextNumber()
{
clearInterval(timerInterval);

document.getElementById("loader-display").style.display = 'flex'
generateRandomNumbers();

timerInterval = setInterval(() => {
for(var i=0;i<numbergenerated.length;i++)
{
var text = "count"+i;
document.getElementById(text).innerText = numbergenerated[i];
}
document.getElementById("shuffle").disabled= true;
document.getElementById("shuffle").style.display='none'
document.getElementById("loader-display").style.display = 'none'
document.getElementById("generated-block-text").style.display='flex'
},3000);
}

function generateRandomNumbers()
{
	 while (numbergenerated.length <= 24) {
		const random = Math.floor(Math.random() * 100);
        if (!numbergenerated.includes(random) && random != 0) {
            numbergenerated.push(random)
        }
    }
}

function disableElement(index)
{
var text1 = "count"+index;
if((document.getElementById(text1).style.backgroundColor) === "lightgreen" && retryTime<3)
{
	document.getElementById(text1).style.backgroundColor=''
	document.getElementById(text1).style.color='white'
	retryTime++;
	document.getElementById("retry-count").innerHTML=retryTime;
	return;
}
else if (document.getElementById(text1).style.backgroundColor === "" && retryTime<3)
{
document.getElementById(text1).style.backgroundColor='lightgreen'
document.getElementById(text1).style.color='black'
document.getElementById("last-number").innerHTML= document.getElementById(text1).innerText;
if(checkForCompletion() === 0)
{
	    document.getElementById('score-modal').style.display = "flex"	
}
}
else if(retryTime>=3 && document.getElementById(text1).style.backgroundColor === "")
{
document.getElementById(text1).style.backgroundColor='lightgreen'
document.getElementById(text1).style.color='black'
document.getElementById("last-number").innerHTML= document.getElementById(text1).innerText;
if(checkForCompletion() === 0)
{
	    document.getElementById('score-modal').style.display = "flex"
}
}
else
{
return;
}
}

function checkForCompletion()
{
	var items = [];
	for(var i=0;i<document.getElementsByClassName('count').length;i++)
	{
		items.push(document.getElementsByClassName('count')[i].style.backgroundColor);
	}
	return items.filter(x => x === "").length;
}

function CloseMessage()
{
	document.getElementById('score-modal').style.display = "none";
}


