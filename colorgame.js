var numsquares = 6;
var colors = generateColors(numsquares);
var pickedcolor = pickColor();

var squares = document.querySelectorAll(".square");
var colordisplay = document.querySelector("#colordisplay");
var  messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modebuttons = document.querySelectorAll(".mode");

init();

function init(){
	setupmodebuttons();
	setupsquares();
	reset();

}


function setupsquares(){

		//Function to check for the color being clicked on	
	for(var i = 0; i < squares.length; i++)
	{

	squares[i].addEventListener("click", function(){
	var clickedcolor = this.style.backgroundColor;	
		if(clickedcolor === pickedcolor)
		{
			h1.style.backgroundColor = this.style.backgroundColor;  
			messagedisplay.textContent = "Correct!";
			resetbutton.textContent = "Play Again?";
			changeColors(clickedcolor);
		}
		else
		{
			this.style.backgroundColor = "#232323";
			messagedisplay.textContent = "Try Again";		}

		});

	}
}

	function setupmodebuttons(){
		for(var i = 0; i<modebuttons.length; i++){
			modebuttons[i].addEventListener("click", function(){
				modebuttons[0].classList.remove("selected");
				modebuttons[1].classList.remove("selected");
					this.classList.add("selected");
					this.textContent === "Easy" ? numsquares =3: numsquares =6;
					reset();
				for(var i=0; i<squares.length; i++){
					if(colors[i])
					{
						squares[i].style.display = "block";
						squares[i].style.backgroundColor = colors[i];
					}
					else{
						squares[i].style.display = "none";
					}	

				}	
			
			});
		}
	}



function reset(){

	colors = generateColors(numsquares);
	//pick random color from the array
	pickedcolor = pickColor();
	//color display change
	colordisplay.textContent = pickedcolor;
	//change colors of squares
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
	resetbutton.textContent = "New Colors";
	messagedisplay.textContent = "";

	
}

resetbutton.addEventListener("click", function(){
	//generate all new color
	reset();
});
	


function changeColors(color)
{
	//loop through all squares
	for(var i =0; i<squares.length; i++){
		//change color for each color
		squares[i].style.backgroundColor = color;  

	}
		
}

function pickColor(){
var random = Math.floor(Math.random()*colors.length);		//Math.random give a random number between 0 and 1
return colors[random];
}

function generateColors(num){
	//make an array
	var arr = [];
	// repeat num times
	for( var i=0; i<num; i++)
	{
		arr.push(randomColor());
		//get random color and push into array

	}
	//return the array
	return arr;
}

function randomColor(){
	//pick a "red " from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a "green " from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a "blue " from 0-255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g +", " + b + ")";
}
