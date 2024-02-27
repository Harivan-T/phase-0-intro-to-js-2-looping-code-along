// Code your solutions in this file
function writeCards(names) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push("Thank you, " + names[i] +", for the wonderful surprise gift!");
    }
    return messages;
  }
  
  const names = [" Guadalupe", "Ollie", "Aki"];
  const thankYouMessages = writeCards(names);
  console.log(thankYouMessages);
  

  function countDown(num=4){
    for(let i=num; i>=0;i--){
        console.log(i);
    };
}
