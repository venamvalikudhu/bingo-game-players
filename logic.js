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
	return;
}
else if (document.getElementById(text1).style.backgroundColor === "" && retryTime<3)
{
document.getElementById(text1).style.backgroundColor='lightgreen'
document.getElementById(text1).style.color='black'
document.getElementById("last-number").innerHTML= document.getElementById(text1).innerText;
}
else if(retryTime>=3 && document.getElementById(text1).style.backgroundColor === "")
{
document.getElementById(text1).style.backgroundColor='lightgreen'
document.getElementById(text1).style.color='black'
document.getElementById("last-number").innerHTML= document.getElementById(text1).innerText;
}
else
{
return;
}
}

