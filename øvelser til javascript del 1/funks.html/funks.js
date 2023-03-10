function skiftfarve(farve) {
 
  document.querySelector(".skifterfarve").style.backgroundColor = farve; 
  document.querySelector(".skifterfarve").style.color = "white";

}

document.querySelector(".link1").addEventListener("click",function(){
  skiftfarve("red");
});
document.querySelector(".link2").addEventListener("click",function(){
  skiftfarve("blue");
});
document.querySelector(".link3").addEventListener("click",function(){
  skiftfarve("pink");
});
document.querySelector(".link4").addEventListener("click",function(){
  skiftfarve("purple");
});

//skiftfarve("green");
