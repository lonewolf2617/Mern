// 1.  

// console.log(hello);                                   
// var hello = 'world';                                 

// var hello will be hoisted above the console.log

// Result:  undefined

// 2. 

// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// print out haystack then function test will be above test() 

// Result: magnet prints out

// 3.

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);


// super cool will print out

// Result: super cool


// 4.

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// chicken will print out

// Result: chicken  and half-chicken

// 5.

// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// mean();
// console.log(food);
// console.log(food);

// mean();  will be pushed to the bottom, chicken, fish

// Result: throws errors


// 6.

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// need to rearrange otherwise errors are given

// Results: undefined, rock, r&b, disco