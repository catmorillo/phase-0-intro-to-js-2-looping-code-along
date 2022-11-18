//for (let age = 30; age < 40; age++) {
  //  console.log(`I'm ${age} years old. Happy birthday to me!`);
  //  debugger;
//}


//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
   // for (let i = 0; i < gifts.length; i++) {
   // console.log(`Wrapped ${gifts[i]} and added a bow!`);
   // debugger;
   // }
   // return gifts;
//}
//wrapGifts(gifts); 


function writeCards(peopleArray, events)  { 
    const arrayOfThankYou = [] 
    //console.log(peopleArray[0])
    for (let c = 0; c < peopleArray.length; c++) {
       // from within loop Put thankyou message into array 
    arrayOfThankYou.push (`Thank you, ${peopleArray[c]}, for the wonderful ${events} gift!`);
    debugger; 
    }
    return arrayOfThankYou
}

//writeCards(["john", "jack", "jill"], "surprise")
//["surprise john", "surprise jack", "surprise jill"]

//function countDown(countDown10)
 function countDown(startingNumber) {
    while (startingNumber >= 0 ) {
 console.log(startingNumber)
 startingNumber--
    }  
//for (let countDown = 0; countDown > 10; countDown++) {
     
}