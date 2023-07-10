var array=['banana','apples','oranges','blueberry'];
var remove=array.shift();
//console.log("After removing the array: "+ array);
//console.log(array.sort());
array.push("kiwi");
console.log("original array: "+ array);
array.splice(1,1);  
array.reverse(); //this return a new array
console.log(array);

