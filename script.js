//METHOD-1 (for loop)
const nums=[3,2,4]; // given array
const target=6; // given target number

const diff1 = function(arr){ //function expression
    let indexArray=[]; // an empty array for push the result
    console.time('for'); //start timer
    for(let k=0; k<arr.length; k++){ //outer loop for keep one index to compare rest
        for(let i=k+1; i<arr.length; i++){//for loop to reach each element on array
            //push condition and push indexes
            if((arr[k]+arr[i])==target){
                indexArray.push([k,i]);
            }
        }
    }
    console.timeEnd('for')//end timer result= 0.007080078125 ms
    return indexArray; //return result array
}
console.log(diff1(nums)); //run and log the function

//--------------------------------------------------------------------------

//METHOD-2 (foreach function)
const diff2 = function(arr){//function expression

    const indexes=[]; //empty array for result indexes
    console.time('forEach'); //timer start for foreach loop
    arr.forEach((element,index) => { //foreach function
        for(let i=index+1;i<arr.length;i++){
            //push condition and push indexes
            if((arr[index]+arr[i])==target){
                indexes.push([index,i]);
            }
        }
    });
    console.timeEnd('forEach'); //timer end result: 0.042724609375 ms
    return indexes;//return result to log the result
}
console.log(diff2(nums)); //run and log the function

//--------------------------------------------------------------------------

//METHOD-3 (while loop)
const diff3 = function(arr){
    const indexArray=[]; //empty array for result
    let k=0;
    console.time('while'); //start timer for while loop
    while(k<arr.length){ //outer loop for keep one index to compare rest
        let i=k+1; //starting index
        while(i<arr.length){ //continue if current index is less then array.length
            //push condition and push indexes
            if((arr[k]+arr[i])==target){
                indexArray.push([k,i]);
            }
        i++
    }
    k++
    }
    console.timeEnd('while'); //result 0.007080078125 ms
    return indexArray;
}
console.log(diff3(nums));

//--------------------------------------------------------------------------

//METHOD-4 (do-while loop)
const diff4 = function(arr){
    const indexArray=[];
    let k=0; //outer loop starter
    console.time('do-while');
    do{
        let i=k+1; //inner loop starter
        do{ //code block which will execute
            if((arr[k]+arr[i])==target){
                indexArray.push([k,i]);
            }
        i++
        }while(i<arr.length) //condition of loop
        k++
    }while(k<arr.length)

    console.timeEnd('do-while'); //result 0.008056640625 ms
    return indexArray;
}
console.log(diff4(nums));

//--------------------------------------------------------------------------

// METHOD-5 (map function)
const diff5 = function(arr){
    const indexes=[]; //empty array for result indexes
    console.time('map'); //timer start for foreach loop
    arr.map((element,index) => { //map function
        for(let i=index+1;i<arr.length;i++){
            //push condition and push indexes
            if((arr[index]+arr[i])==target){
                indexes.push([index,i]);
            }
        }
    });
    console.timeEnd('map'); //timer end result: 0.042724609375 ms
    return indexes;//return result to log the result
}
console.log(diff5(nums));

//--------------------------------------------------------------------------

//METHOD-6 (for of)
const diff6 = function(arr){
    const indexes=[]; //empty array for result indexes
    console.time('for-of'); //timer start for for-of loop
    for([index,element] of arr.entries()){ //for-of loop
        for(let i=index+1;i<arr.length;i++){
            //push condition and push indexes
            if((arr[index]+arr[i])==target){
                indexes.push([index,i]);
            }
        }
    }
    console.timeEnd('for-of'); //timer end result: 0.031982421875 ms
    return indexes;//return result to log the result
}
console.log(diff6(nums));

//--------------------------------------------------------------------------

//METHOD-7 (for in loop)
const diff7 = function(arr){ //function expression
    let indexArray=[]; // an empty array for push the result
    console.time('for-in'); //start timer
    for(index in arr){
        let k=Number(index);
       for(let i=k+1;i<arr.length;i++){
            if((arr[k]+arr[i])==target){
                indexArray.push([k,i]);
            }
        }
    }
    console.timeEnd('for-in')//end timer result= 0.01220703125 ms
    return indexArray; //return result array
}
console.log(diff7(nums)); //run and log the function
