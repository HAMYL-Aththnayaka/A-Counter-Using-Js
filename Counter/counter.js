
const decreaseBTN= document.getElementById("decrease");
const resetBTN= document.getElementById("reset");
const increaseBTN= document.getElementById("increase");
const countLabel=document.getElementById("countlable");
let count = 0;

increaseBTN.onclick=function(){
    count++;
    countLabel.textContent=count;
}
decreaseBTN.onclick=function(){
    count--;
   
    //if(count<0){
        countLabel.textContent=count;
    }
 //  // else{
   //     countLabel.textContent=count;
  //  }
//}
resetBTN.onclick=function(){
    count=0;
    countLabel.textContent=count;
}
