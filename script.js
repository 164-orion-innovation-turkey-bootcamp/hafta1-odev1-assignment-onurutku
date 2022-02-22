//METHOD-1 (for loop)
const nums=[3,2,4]; // given array
const target=6; // given target number

const diff1 = function(arr){ //function expression
    let indexArray=[]; // an empty array for push the result
    console.time('for'); //start timer
    for(let i=0; i<arr.length; i++){//for loop to reach each element on array
        if(arr[i+1]!=undefined){//a stopper for last element of array
            //add each index with another one and if result ==target push them to empty array
            if((arr[i]+arr[i+1])==target){
                indexArray.push(arr.indexOf(arr[i]),arr.indexOf(arr[i+1]));
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

    let arrayForAddTogether=[]; //empty array for push two index for compare
    const indexes=[]; //empty array for result indexes
    console.time('forEach'); //timer start for foreach loop
    arr.forEach(element => { //foreach function
        if(arrayForAddTogether.length==0){ //if it is the first one
            arrayForAddTogether.push(element);
        }else{ //if array has an index
            arrayForAddTogether.push(element); // push second index to compare
            const total = arrayForAddTogether[0]+arrayForAddTogether[1] //add two index with each other for compare
            if(total==target){ // the question condition
                indexes.push(arr.indexOf(arrayForAddTogether[0]),arr.indexOf(arrayForAddTogether[1])); //push indexes to empty array for result
            }
            arrayForAddTogether.shift(); //delete first index for next loop. otherwise you will add 3 index together.
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
    let i=0; //starting index
    console.time('while'); //start timer for while loop
    while(i<arr.length){ //continue if current index is less then array.length
            if(arr[i+1]!=undefined){ //a stopper for last element of array
                //add each index with another one and if result ==target push them to empty array
            if(arr[i]+arr[i+1]==target){
                indexArray.push(arr.indexOf(arr[i]),arr.indexOf(arr[i+1]));
            }
        }
        i++
    }
    console.timeEnd('while'); //result 0.007080078125 ms
    return indexArray;
}
console.log(diff3(nums));

//--------------------------------------------------------------------------

//METHOD-4 (do-while loop)
const diff4 = function(arr){
    const indexArray=[];
    let i=0; //starting index
    console.time('do-while');
    do{ //code block which will execute
        if(arr[i+1]!=undefined){
            if(arr[i]+arr[i+1]==target){
                indexArray.push(arr.indexOf(arr[i]),arr.indexOf(arr[i+1]));
            }
        }
        i++
    }while(i<3) //condition of loop
    console.timeEnd('do-while'); //result 0.008056640625 ms
    return indexArray;
}
console.log(diff4(nums));

//--------------------------------------------------------------------------

// METHOD-5 (map function)
const diff5 = function(arr){
    let arrayForAddTogether=[]; //empty array for push two index for compare
    const indexes=[]; //empty array for result indexes
    console.time('map'); //timer start for map loop
    arr.map(element => { //map function
        if(arrayForAddTogether.length==0){ //if it is the first one
            arrayForAddTogether.push(element);
        }else{ //if array has an index
            arrayForAddTogether.push(element); // push second index to compare
            const total = arrayForAddTogether[0]+arrayForAddTogether[1] //add two index with each other for compare
            if(total==target){ // the question condition
                indexes.push(arr.indexOf(arrayForAddTogether[0]),arr.indexOf(arrayForAddTogether[1])); //push indexes to empty array for result
            }
            arrayForAddTogether.shift(); //delete first index for next loop. otherwise you will add 3 index together.
        }
    });
    console.timeEnd('map'); //timer end result: 0.041015625 ms
    return indexes;//return result to log the result
}
console.log(diff5(nums));

//--------------------------------------------------------------------------

//METHOD-6 (for of)
const diff6 = function(arr){
    let arrayForAddTogether=[]; //empty array for push two index for compare
    const indexes=[]; //empty array for result indexes
    console.time('for-of'); //timer start for for-of loop
    for(element of arr){
        if(arrayForAddTogether.length==0){ //if it is the first one
            arrayForAddTogether.push(element);
        }else{ //if array has an index
            arrayForAddTogether.push(element); // push second index to compare
            const total = arrayForAddTogether[0]+arrayForAddTogether[1] //add two index with each other for compare
            if(total==target){ // the question condition
                indexes.push(arr.indexOf(arrayForAddTogether[0]),arr.indexOf(arrayForAddTogether[1])); //push indexes to empty array for result
            }
            arrayForAddTogether.shift(); //delete first index for next loop. otherwise you will add 3 index together.
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
    for(let i in arr){//for loop to reach each element on array
        let a = Number(i); //string to number
        if(arr[a+1]!=undefined){//a stopper for last element of array
            //add each index with another one and if result ==target push them to empty array
            if((arr[a]+arr[a+1])==target){
                indexArray.push(arr.indexOf(arr[a]),arr.indexOf(arr[a+1]));
            }
        }
    }
    console.timeEnd('for-in')//end timer result= 0.01220703125 ms
    return indexArray; //return result array
}
console.log(diff7(nums)); //run and log the function
