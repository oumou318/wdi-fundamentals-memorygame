console.log("JS file is connected to HTML! Woo!")
//var cardOne = "Queen";
//var cardTwo = "Queen";
//var cardThree = "King";
//var cardFour = "King";
// console.log(cardFour); you can type in th console cardFour === cardOne n test it
//  if(cardOne === cardTwo) ||(cardFour === cardThree){
// 	window.alert("You found a match!");
// } else if( cardOne === cardThree) {
// 	window.alert("Sorry try again!");
// } else if(cardOne === cardFour) {
// 	window.alert("Sorry try again!");
// }

// if (cardThree === cardFour) {
// 	window.alert ("You found a match!");
// } else if(cardThree === cardTwo) {
// 	window.alert ("Sorry try again!");
// }
// if (cardFour === cardTwo) {
// 	window.alert("Sorry try again!");
// }
// console.log("Sorry try again");
// console.log("You found a match!"); 

 
/* document.createElement('div')
document.querySelector(.or#, or tag name ex. 'li')
document.getElementsByClassName(have two things  html have the same classname)
document.getElementsByTagName('li')[] */
//document.getElementById('important').classname = 'highlight';
// for(var i= 0; i<x; i++)['King', 'Queen', 'King']

var gameBoard = document.getElementById("game-board");

function createCards (){
	for (var i = 0; i < cards.length; i++) { 
		var cardEl=document.createElement('div');
		cardEl.className = 'card';
		gameBoard.appendChild(cardEl);
		cardEl.setAttribute('data-card', cards[i]);
		cardEl.addEventListener('click', isTwoCards);
		// cardEl.innerHTML = '<img src="images/diamondsKing.png" alt="King of diamonds">'
	}
}
var cards = ['King', 'Queen', 'King', 'Queen'];
var cardsInPlay = [];
// createCards.setAttributes();

function isTwoCards(){
	cardsInPlay.push(this.getAttribute('data-card'));
	//console.log(this.getAttribute('data-card'));
	 if (this.getAttribute('data-card')==='King') {
	 	this.innerHTML = '<img src="images/diamondsKing.png" alt="King of diamonds">';
	} 
	if (this.getAttribute('data-card')==='Queen') {
		this.innerHTML = '<img src="images/diamondsQueen.png" alt="Queen of diamonds">';
	}
	 if (cardsInPlay.length === 2) {
	 	 isMatch(cardsInPlay);
	 	  cardsInPlay = [];
	}
}


function isMatch() {
	if (cards[0] === cards[2]) {
		alert("You found a match!");
	  } else { 
	 	alert("Sorry try again!");}
isMatch(cardsInPlay);
console.log(cardsInPlay);

}
//if (this.getAttribute('data-card') === 'Queen') {
//cardEl.innerHTML = '<img src="images/diamondsQueen.png" alt="Queen of diamonds">'
 
createCards();
// isMatch();
// isTwoCards();







