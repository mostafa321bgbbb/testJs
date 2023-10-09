function SwapTest(first, second) {
    first = second;
    console.log(first, second);
}
function compare(first, second) {
    if(first > second) {
        return first;
    }
    else if(second > first) {
        return second
    }
    else {
        return -1;
    }
}
function myfunction(number) {
    switch(number) {
        case 2:
            console.log('the number is 2');
            break;
        case 4:
            console.log('the number is 4');
            break;
        case 6:
            console.log('the number is 6');
            break;
        case 8:
            console.log('the number is 8');
            break;
        default:
            console.log('the number is 10');
            break;
    }
}
function SumArray(arr) {
    let sum = 0;
    let i = 0;
    while(i < arr.length) {
        sum += 1;
        i += 1;
    }
    return sum;
}
function CountArray(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        count = i;
    }
    return count + 1;
}
function MaxNumber(arr) {
    let max = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
function MinNumber(arr) {
    let min = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
function SearchArray(arr, target) {
    if(arr === null || arr === undefined) {
        return -1;
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }
    return -1;
}
function CountPatterns(arr, pattern) {
}