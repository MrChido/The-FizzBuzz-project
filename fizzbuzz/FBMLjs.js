
var Buzz =prompt("For this to work, we need a Verb");
var Fizz =prompt("For this to work, we need another Verb");
var req = prompt("Please select a reasonable number for our test");
var selected = parseInt(req);

for(var i=1; i <=selected; i +=1){
    if(i % 15 == 0){
      document.write(Fizz + ", "+ Buzz +" ");
    }else if(i % 5 == 0 ) {
      document.write(Buzz+ " ");   
    }else if(i % 3 == 0 ) {
       document.write(Fizz+" ");
     }else{
        document.write(i + ' ');
    }
}
