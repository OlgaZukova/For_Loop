const list =document.querySelectorAll("li");

function changeColor(){
    for( let i = 0; i< list.length; i++){
        if(i%2 === 0)
            list[i].classList.add("red");
        else{
            list[i].classList.add("blue")
        }       
    }        
}
changeColor();

let age = 10;

while (age <15){
    console.log("Hello!");
    age++;
} 
console.log("Buy!")

// for(let i=10; i<15; i++){
//  console.log("Hello!")
//}
//  console.log("Buy!");

let apples = 5;

console.log("Hello!");
while(apples < 15){
    console.log("Apples");
    apples++;
}
console.log("Buy!");