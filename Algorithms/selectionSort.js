// find the biggest number in the array 
// then swap it with anything smaller
// 


// function selectionSort (arr) {
//     for(let i = 0; i < arr.length; i++){
//         let min = 1
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[j] < arr[min]){
//                 min = j
//             }
//         }
//         if(min != i) {
//             [arr[i], arr[min]] = [arr[min], arr[i]]
//         }
//     }
//     return arr
// }

// console.log(selectionSort([6,8,4,5,3,9,1]))


const selectionSort = (arr)=>{
    for(let i = 0; i < arr.length; i++){
        let big = arr[0];
        let bigidx = 0;
        for(let j = 0; j < arr.length-i; j++) {
            if(arr[j] > big){
                big = arr[j];
                bigidx = j;
            }
        }
        let temp = arr[bigidx]
        arr[bigidx] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    return arr
}



console.log(selectionSort([6,8,4,5,3,9,1]))
