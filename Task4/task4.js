//Write a JavaScript program to find the most frequent item of an array
let maxcount=0;
let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
for (let i=0; i<arr1.length; i++){
    let counter=0;
    for (let j=0; j<arr1.length; j++){
        if (arr1[i]==arr1[j]){
            counter++;
        }
    }
    if (counter>maxcount){
        maxcount=counter;
        maxCountElement=arr1[i]
    }
}
console.log(maxcount);
console.log(maxCountElement);