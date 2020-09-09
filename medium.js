// Matrix multiplication function
// given a 2 - 2D arrays, the function returns a new two-dimensional array containing their matrix sum

// Matrix Check function notes:
    // for two dimesional matrices, if we do array.length it will give us number of the rows in the array,
    // but if we know the number of rows, we can figure out the number of columns as well by doing, array[0].length \
    // which will return the number of columns in the first row of that array.
function matrixCheck(first){
    let columnNumb;
    for (let index = 0; index < first.length; index++){
        if (index == 0){
            columnNumb = first[index].length;
        } else if (first[index].length != columnNumb){
            console.log('The columns in this array are not equal')
        } else {
            return columnNumb;
        }
    }
}
// checks the height of the two matrices and then calls our first matrixCheck function to get the columns for both of the matrices
// and checks to make sure those match as well.
function twoMatricesCheck(first, second, type){
    let firstLength = matrixCheck(first);
    let secondLength = matrixCheck(second);
    if (type === 'add'){
        if (first.length != second.length || firstLength != secondLength){
            console.log('These matrices are not the same size');
            return false;
        } else {
            return true;
        }
    } else {
        if (first.length != secondLength || second.length != firstLength){
            console.log('These matrices are not the same size');
            return false;
        } else {
            return true;
        }
    }

}

// only intended to be run after the matrixCheck and twoMatricesCheck have been run
// returns an empty matrix that is the same number of rows and columns that the two 
// matrices given as arguments are...it checks if they are the same size or not.
function initiateEmptyArray(first, second, type){
    let emptyArray = [];
    if (twoMatricesCheck(first, second, type)){
        for(let row = 0; row < first.length; row++){
            emptyArray.push(['\,'.repeat(first[0].length)])
        }
        return emptyArray;
    }else{
        return false;
    }
}


function matrixAdd(first, second){
    // runs our matrices checks, first to make sure the columns within each matrix are the same length,
    // then it makes sure the columns and rows are the same length between the two matrices.
    if (initiateEmptyArray(first, second)){
        let addMatrix = initiateEmptyArray(first, second);
        for (let row = 0; row < first.length; row++){
            for (let col = 0; col < first[0].length; col++){
                addMatrix[row][col] = first[row][col] + second[row][col]
            }
        }
        return addMatrix;
    }
}


function matrixMult(firstArray, secondArray){
    let multMatrix = initiateEmptyArray(firstArray, secondArray);
    for (let rm = 0; rm < firstArray.length; rm++){
        // for each rm we need to reinitiate our rowMult array
        // in the rowMult, the first index is consistent, the second is the one we loop through to grab the numbers from the first array
        rowMult = [];
        for (let col = 0; col < firstArray[0].length; col++){
            rowMult.push(firstArray[rm][col]);
        }
        for (let cm = 0; cm < firstArray.length; cm++){
            // for each cm we need to reinitiate our colMult array
                // in the colMult, the first index is the one we loop through to grab all the value, while the second is the one that is staying consistent
                // to the cm value.
            colMult = [];
            for (let row = 0; row < secondArray.length; row++){
                colMult.push(secondArray[row][cm]);
            }
            // then we need to loop through all of our values in the colMult and rowMult...they should be the same length
            // we then add the multiplication of the two arrays at the same index to the newNumb variable
            let newNumb = 0;
            for (let index = 0; index < rowMult.length; index++){
                newNumb += rowMult[index] * colMult[index]
            }
            // once we are done looping through the two multiplaction arrays
            // we save that number to multMatrix at the rm and cm indeces.
            multMatrix[rm][cm] = newNumb;
        }
    }
    return multMatrix;
}





const secondArray = [
    [2, -2],
    [5, 3],
    [3, 2],
];
const firstArray = [
    [-1, 4, 1],
    [7, -6, 2],
];
console.log(matrixMult(firstArray, secondArray, 'mult'));