// // [5, 3, 9, 8, 12]

// // [5] [3] [9] [8] [12]  // sorted arrays

// // [5,3] [9, 8] [12]

// // [3, 5, 8, 9]  [12]

// //     [3, 5, 8, 9, 12]



// // [3,4,5]       [1,6,9,10]

// //     [1, 3, 4, 5, 6, 9, 10]    //2 iterators for each array

// // I want to set an iterator that compares two arrays
// // then joins them into one array starting with the lowest 
// // number and ending with the highest

// const combine = (arr1, arr2) => {
//     var i = 0;
//     var j = 0;
//     var results = [];
//     while(i < arr1.length && j < arr2.length){
//         if(arr1[i] > arr2[j]) {
//             results.push(arr2[j])
//             j++
//         }else {
//             results.push(arr1[i])
//             i++
//         }        
//     }
//     //figure out which array  we have not yet completely gone through the length of
//     while(i<arr1.length){
//         result.push(arr1[i])
//         i++
//     }
    
//     while(j < arr2.length){
//         results.push(arr2[j])
//         j++
//     }

//     console.log(results)
//     return results
// }

// combine([4,6,7], [1,3,6,9])



function mergeSort(arr) {
    if(arr.length <= 1){
        console.log(arr)
        return arr
    }else{
        let mid = Math.floor(arr.length/2)
    

    // let leftHalf = arr.slice(0,mid);
    // mergeSort(leftHalf)
    
    let rightHalf = arr.slice(mid, arr.length);
    mergeSort(rightHalf)
    
    // console.log("Left half is this: ", leftHalf);
    // console.log("Right half is this: ", rightHalf);
    }
    
}

mergeSort([7,5,9,0,1,3,2,19,-2,10,12])