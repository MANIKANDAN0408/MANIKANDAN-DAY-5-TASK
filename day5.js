//1.Do the below programes in anonymous function and IIFE function

//a.print odd numbers in an array

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 != 0) {
 console.log(arr[i]);
 }}
})();


//b.convert all the strings to title caps in a string array

//IIFE function

(function(str1)
{
    let arr=[];
   str1=str1.toLowerCase().split(" ");
   
   for(i=0;i<str1.length;i++)
   {
      arr.push(str1[i].charAt(0).toUpperCase() + str1[i].slice(1));
   }
    return console.log(...arr);
})("manikandan is a graduate");

//Anonymous function

function titleCase() {
    let str=("hello world".toLowerCase().split(" "));
 
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
}
titleCase()


//c.sum of all numbers in an array

//anonymous function

var array = [9,8,7,6,5,4,3,2,1];
let sum = function(num){
    let total = 0;
    for(let i=0;i<num.length;i++){
    total+=num[i];
    }return total;
};
console.log(sum(array));


//IIFE function

let array = [9,8,7,6,5,4,3,2,1];
(function(num){
    let total=0;
    for(let i=0;i<num.length;i++){
        total+=num[i];
    }console.log(total);
})(array);



//d.return all prime numbers in an array

//IIFE function
(function (l,r)

{
    let arr = [];
    for (i=l;i<r;i++)
    {
        arr.push(i)
    }
arr = arr.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
})
    console.log(arr);
})(3,5,7,11,13,17,19)

 
//anonymous function
let a = function (l,r)

{
    let arr = [];
    for (i=l;i<r;i++)
    {
        arr.push(i)
    }
arr = arr.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
})
    console.log(arr);
}

a(1,100);



//e.return all the palindrome in an array

//IIFE function

(function(){
    var string =("car","racecar");
    var len=string.length;
    for(var i=0;i<len/2;i++){
        if(string[i] !=string[len-1-i]){
            return  "It is not a palindrome";
        }
    }
    console.log([string + " " +"is a palindrome"]);
})();



//g..remove duplicates from an array

//IIFE function

( function(){
    var maniArray = [98,54,69,98,32,69,55]
    
    var maniArrayWithoutDuplicates = [...new Set(amarArray)]
    
    let duplicates = [...amarArray]
    maniArrayWithoutDuplicates.forEach((item) => {
      const i = duplicates.indexOf(item)
      duplicates = duplicates
        .slice(0, i)
        .concat(duplicates.slice(i + 1, duplicates.length))
    })
    
    console.log(duplicates);
    }) () ;


    
//h.rotate an array by k times

//IIFE function

(function(arr,k){
    var i =0;
    while(k>0){
        var temp = arr[arr.length - 1];
        for(var j = arr.length-1 ; j>0 ; j--){
            arr[j] = arr[j-1];
        }
        arr[j]=temp;
        k--;
    }
    console.log(arr);
}([4,5,6,7,8,9],3));


//anonymous function

var rotate = function() {
    let nums=[1,2,3,6];
     let k=2;
   for (let i = 0; i < k; i++) {
       nums.unshift(nums.pop()) ;
   }
  console.log(nums);
};rotate();







//3.Do the below programs in arrow function

//a. print odd number in an array

var oddArrow = (arr) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2!=0){
            console.log([arr[i]] )
        }
    }
}
oddArrow([9,8,7,6,5,4,3,2,1])



//b.convert all strings to title caps in a string array

function titleCase(str){
    return str.toLowerCase().replace(/\b(\w)/g,
    s=>s.toUpperCase());
}
  
console.log([titleCase("manikandan  is brilliant!")]);
console.log([titleCase("manikandan is kind hearted")]);




//c.sum of all numbers in an array

var sumOf=(arr)=>{
    var total=0;
    for(var key in arr){
        total = total+arr[key]
    }
    console.log([total])
}
sumOf([9,8,7,6,5,4,3,2,1]);



//d.Return all prime numbers in an array

const newArray = [17, 41, 1, 83, 97]
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) 
    return false
  }
  return num !== 1
};


const myPrimeArray = newArray.filter(element => isPrime(element))
console.log(myPrimeArray);



//e.Return all the pallindromes in an array


const arr = ['car', 13431, 12321, 'van', 'jeep'];
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));




