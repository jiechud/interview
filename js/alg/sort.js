
function checkArray(array) {
    if (!array) return
}

function swap(array, left, right) {
    let rightValue = array[right]
    array[right] = array[left]
    array[left] = rightValue
}


const testData = [1, 10, 3, 8, 5];

// 冒泡排序
function bubble(array) {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}


// const result = bubble(testData);
// console.log('result', result);

// 插入排序

function insertion(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i - 1; j > 0; j--) {
            if (array[j] > array[j+1]) {
                swap(array, j, j + 1);
            }
        }
    }
}

const result = insertion(testData);
console.log('result', result);