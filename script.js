let map = document.getElementById("map")
let hintsTitle = document.getElementById("hintsTitle")
let TreasureX = Math.random()*500
let TreasureY = Math.random()*500
console.log(TreasureX,TreasureY);
let pirate = document.getElementById("pirate")
map.onclick = function (event){
    hintsTitle.innerHTML = "hot"
    console.log("map", event.offsetX,event.offsetY)
    // if(){

    // }
    let pirateX = event.offsetX-25
    let pirateY = event.offsetY-50
    pirate.style.left=pirateX+"px"
    pirate.style.top=pirateY+"px"
    let X = pirateX-TreasureX
    let Y = pirateY-TreasureY
    let distance = Math.sqrt(X**2+Y**2)
    console.log(distance)
    if (distance<10){hintsTitle.innerHTML = "congratulations you won."
   }
   if (distance>50){hintsTitle.innerHTML = 
    hintsTitle.innerHTML="cold"
 }
 
//    else if (distance<50){
//     hintsTitle.innerHTML="boiling lava"
//    }
} 
hintsTitle.onclick = function (){
    hintsTitle.innerHTML = "7800"
}
document.getElementById("reset").onclick=function(){
    pirate.style.top="100px"
    pirate.style.left="100px"
    hintsTitle.innerHTML = "Good Luck!"
    TreasureX = Math.random()*500
    TreasureY = Math.random()*500
    console.log(TreasureX,TreasureY)
}