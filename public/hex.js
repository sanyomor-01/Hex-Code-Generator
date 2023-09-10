const hex =[0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector(".color"); 
const btn =document.getElementById('btn');

//adding event listerner

btn.addEventListener("click", function(){
  let colorOfHex = "#"
  for (var x = 0; x<6 ; x++){

    colorOfHex += hex[randomNumber()]
  }

  color.textContent = colorOfHex;
  document.body.style.backgroundColor =colorOfHex
})

function randomNumber(){
    return Math.floor(Math.random() * hex.length)
}