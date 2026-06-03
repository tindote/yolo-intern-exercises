function mergeArrayByOperation(array1, array2, operationFn) {

    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new TypeError("Inputs must be arrays");
    }

    if (typeof operationFn !== "function") {
        throw new TypeError("operationFn must be a function");
    }

    if (array1.length !== array2.length) {
        throw new Error("Arrays must have the same length");
    }

    if (array1.length === 0) {
        return [];
    }

    const result = new Array(array1.length);

    for (let i = 0; i < array1.length; i++) {
        result[i] = operationFn(array1[i], array2[i]);
    }

    return result;
}

module.exports = mergeArrayByOperation;