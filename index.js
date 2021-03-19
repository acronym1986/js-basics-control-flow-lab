function scuberGreetingForFeet(numFeet){
  let fee;
  
  if (numFeet <= 400){
    fee = 'This one is on me!';
    return fee;
  }
    else if ( numFeet > 2000 && numFeet < 2500 ) {  
    fee = 'I will gladly take your thirty bucks.';
    return fee;
  }  
   else if (numFeet > 2500) {  
    fee = 'No can do.';
    return fee;
  }  
}
 




function ternaryCheckCity(cityName){
  // Write your code here!
   const destination = (cityName == 'NYC')? 'Ok, sounds good.': 
                       (cityName == 'Pittsburgh')? 'No go.' :
                       'more name';
   return destination;
}



function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;
   switch (tip){
     case 'generous':
           message = 'Thank you so much.';
           return message;
           break;

     case 'not as generous':
           message = 'Thank you.';
           return message;
           break;

     case 'thanks for everything':
           message = 'Bye.'
           return message;
           break;

    default:
           message = 'Sorry, I could not tell';
           return message;

   }
}