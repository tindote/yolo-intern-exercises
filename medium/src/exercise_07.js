/**
 * Returns a subarray of the given array from the start index to the end index.
 * 1. Validate the input parameters to ensure they are within the bounds of the array.
 * 2. If the array is empty, return an empty array.
 * 3. Create a new array to hold the subarray elements.
 * 4. Iterate from the start index to the end index and push the corresponding elements into the new array.
 * 5. Return the new array containing the subarray elements.
 * 
 * @param {Array} arr - The input array.
 * @param {number} start - The starting index of the subarray.
 * @param {number} end - The ending index of the subarray.
 * @returns {Array} A new array containing the elements from the specified range.
 */
function getSubArray(arr,start,end) {
    // Validate the input parameters to ensure they are within the bounds of the array
    if(start < 0 || end >= arr.length || start > end){
        throw new Error("Invalid start or end index");
    }

    // If the array is empty, return an empty array
    if(arr.length === 0){
        return [];
    }

    // Create a new array to hold the subarray elements
    let result = new Array(end - start + 1);

    // Iterate from the start index to the end index and push the corresponding elements into the new array
    for(let i = start; i<=end;i++){
        result[i - start] = arr[i];
    }  
    return result;
}