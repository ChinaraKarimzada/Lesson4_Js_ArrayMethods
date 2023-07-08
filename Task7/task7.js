//Write a JavaScript function to remove a specific element from an array
// let array=[2,5,9,6];
// let newArray=array.splice(1,1);
// console.log(newArray);

function remove_array_element(array, n)
 {
   var index = array.indexOf(n);
   if (index > -1) {
    array.splice(index, 1);
}
   return array;
 }

console.log(remove_array_element([2, 5, 9, 6], 5));