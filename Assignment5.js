//Assignment 5

//Conditional Statements
//1. if...else
//Take 2 numbers and print the greatese one.

 let a = 4;
 let b = 5;
 
 let result = a>b? "a is the greatest. " : "b is the greatest. ";
  console.log(result);
  //output: b is the greatest.

  if(a == 2)
      console.log("a is 2");

      else if(a == 4)
       console.log("a is 4");

       else if(a == 5)
       console.log("a is 5");

       else
       console.log("a is not present");
      // Output: a is 4


  // 2. Switch statement
   switch(a){
       case 1:
           a = 'one';
           break;
        case 2:
            a = 'two';
            break;
        case 3:
            a = 'three';
            break;
        defalt: 
           a = 'not found';
           break;
   };
    console.log(`the value is ${a}`);
    //Output: the value is two 

