//# javascript-map_foreach_cw
//
// ### Problem 1
// Ask the user to enter a word. Keep asking them to enter a word until they enter the letter 'q'.


var askWord = prompt("Enter a word or press q to quit");

while (askWord !=='q')
{
    askWord = prompt("Enter a word or press q to quit");

}

// ### Problem 2
// Make any string array all lower case strings. If you don't remember how to use that Google it.

let StringArray =["Hello"," HI"," HOW" ,"ARE", " YOU"];
// let NewLowerCaseString=[]; //you don't have to define an empty array

let NewLowerCaseString = StringArray.map(function(eachElement){
     // console.log(NewLowerCaseString.toLowerCase); // toLowercase is an existing JavaScript Function NO but toLowerCase() is though 
     return (eachElement.toLowerCase()); // you have to call toLowerCase on each element NOT on the function as a whole
 	}
 );
console.log(StringArray)
console.log(NewLowerCaseString)