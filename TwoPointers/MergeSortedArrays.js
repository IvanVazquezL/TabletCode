function MergeSortedArrays(arr1, arr2) {
    let index1 = 0;
    let index2 = 0;
    const newArray = [];

    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] < arr2[index2]) {
            newArray.push(arr1[index1]);
            index1++;
        } else {
            newArray.push(arr2[index2]);
            index2++;
        }
    }

    while (index1 < arr1.length) {
        newArray.push(arr1[index1]);
        index1++;
    }

    while (index2 < arr2.length) {
        newArray.push(arr2[index2]);
        index2++;
    }

    return newArray;
}

console.log(MergeSortedArrays([1, 4, 7, 20], [3, 5, 6]));