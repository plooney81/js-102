const matrixCheck = (matrix)=>{
    let columnNumb;
    for (let index = 0; index < matrix.length; index++){
        if (index == 0){
            columnNumb = matrix[index].length;
        } else if (matrix[index].length != columnNumb){
            console.log('The columns in this array are not equal')
        } else {
            return columnNumb;
        }
    }
}

const twoMatricesCheck = (first, second)=>{
    const [firstRowLength, secondRowLength, firstColLength, secondColLength] = [first.length, second.length, matrixCheck(first), matrixCheck(second)];
        if (firstRowLength != secondColLength || secondRowLength != firstColLength){
            console.log('These matrices do not have a common side');
            return false;
        } else {
            return true;
        }
}

const initiateEmptyArray = (first, second)=>{
    if (twoMatricesCheck(first, second)){
        const emptyArray = first.map(()=>{
            return [''];
        })
        return emptyArray;
    }else{
        return false;
    }
}

const matrixMult = (firstArray, secondArray)=>{
    let multMatrix = initiateEmptyArray(firstArray, secondArray);
    for (let rm = 0; rm < firstArray.length; rm++){
        rowMult = [];
        for (let col = 0; col < firstArray[0].length; col++){
            rowMult.push(firstArray[rm][col]);
        }
        for (let cm = 0; cm < firstArray.length; cm++){
            colMult = [];
            for (let row = 0; row < secondArray.length; row++){
                colMult.push(secondArray[row][cm]);
            }
            let newNumb = 0;
            for (let index = 0; index < rowMult.length; index++){
                newNumb += rowMult[index] * colMult[index];
            }
            multMatrix[rm][cm] = newNumb;
        }
    }
    return multMatrix;
}

const firstMatrix = [
    [1, 2],
    [3, 4]
];

const secondMatrix = [
    [5, 6],
    [7, 8]
];

console.log(matrixMult(firstMatrix, secondMatrix)); // [ [ 19, 22 ], [ 43, 50 ] ]

const thirdMatrix = [
    [-1, 4, 1],
    [7, -6, 2],
];
const fourthMatrix = [
    [2, -2],
    [5, 3],
    [3, 2],
];

console.log(matrixMult(thirdMatrix, fourthMatrix)); // [ [ 21, 16 ], [ -10, -28 ] ]