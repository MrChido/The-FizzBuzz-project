/*prompt user for a reasonable number
then parse the number as integer.
test the range between 1 and the chosen number
for the folowing and apply the changes
divisible by 3= text change to fizz
divisible by 5 text change to buzz
both 3 and 5 become fizzbuzz.*/

//var fizzy= ("Fizz");
var req = prompt("Please select a reasonable number for our test");
var selected = parseInt(req);

for(var i=1; i <=selected; i +=1){
    if(i % 15 == 0){
      document.write("Fizz, Buzz ");
    }else if(i % 5 == 0 ) {
      document.write("Buzz ");   
    }else if(i % 3 == 0 ) {
      document.write("Fizz ");
     }else{
        document.write(i + ' ');
    }
}