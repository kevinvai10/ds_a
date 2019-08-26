function flattenArray(arr){
    if(!arr) return 'undefined';

    //create new array to return
    let newArr = [];
    //loop through array
    for(let i = 0; i < arr.length; i++){
        //if element is not an array push it to the new array
        //if element is an array call this function again and concat the new result array to the array in the previous stack
        if(Array.isArray(arr[i])){
            newArr = newArr.concat(flattenArray(arr[i]));
        } else{
            newArr.push(arr[i]);
        }
    }
    //return new array
    return newArr;
}

module.exports = flattenArray;