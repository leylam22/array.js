// *****first task:*****
let numbers = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8
numbers.sort(function(a,b){return a-b})
console.log(numbers);



// *****second task:*****
// var myArray1=[1,2,3]
// var myArray2=[100,2,1,10]
// function union(){
//     var res=[]
//     var obj={}
//     for (let i = 0; i < myArray1.length; i++) {
//         obj[myArray1[i]]=true
//     }
//     for (let j = 0; j < myArray2.length; j++) {
//         obj[myArray2[j]]=true
//     }
//     for(const x in obj){res.push(x)}
//     return res
// }
// console.log(union());



// *****thirds task:*****
// function rmv(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//       if (!arr[i]) {   // || Number.isNaN(arr[i]) 
//         arr.splice(i, 1);
//       }
//     }
//     return arr;
//   }
  
// const myArray= [NaN, 0, 15, false, -22, '',undefined, 47, null]
// console.log(rmv(myArray)); 



// *****fourth task:*****
// let library = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} 
//     ];

    // Sort array by title:
    // library.sort(function(a, b){
    //     let x = a.title.toLowerCase();
    //     let y = b.title.toLowerCase();
    //     if (x < y) {return -1;}
    //     if (x > y) {return 1;}
    //     return 0;
    //   });
    // console.log(library);

    // Sort array by ID
    // const lbr= library.sort(function(a,b){return a.libraryID - b.libraryID})
    // console.log(lbr);



    // *****fifth task:*****
    // function Chain(nums) { 
    //     for (var i = 0; i < nums.length - 1; i++) 
    //     {
    //       if (nums[i+1] % nums[i] != 0) {
    //         return false;            
    //       }
    //     }
    //     return true;
    //   }
    //   var arr1=[2,4,8,16,32]
    //   var arr2=[2,4,16,32,64]
    //   var arr3=[2,4,16,32,68]
    //   console.log(Chain(arr1));
    //   console.log(Chain(arr2));
    //   console.log(Chain(arr3));