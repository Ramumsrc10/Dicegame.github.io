var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomimage1 = "images/dice" + randomnumber1 + ".png";

 var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimage1);


 var randomnumber2 = Math.floor(Math.random() * 6) + 1;
 var randomimage2 = "images/dice" + randomnumber2 + ".png";
 
  document.querySelectorAll("img")[1].setAttribute("src", randomimage2);
 
  
  
if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "🚩PLAYER1 WINS!!"
}
else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML = "PLAYER2 WINS!!🚩"
}
else{
   document.querySelector("h1").innerHTML = "🚩DRAW!!!🚩" 
}