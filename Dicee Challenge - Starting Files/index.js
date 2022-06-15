
// first dice

var randomNumber1=Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

var randomImg="dice"+ randomNumber1+".png";
var randomImgSource="images/"+ randomImg;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImgSource)

// second dice

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImgSource2="images/dice"+randomNumber2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImgSource2)

// Title

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 is the winner 🤘🏻"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 is the winner 🤘🏻"
}
else{
    document.querySelector("h1").innerHTML="It's a tie 🤭"  
}