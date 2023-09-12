function numberDoubler(num) {
    // Your code here
    while(num < 100){
        num *= 2;
    }
    return num;
}

function stringRepeater(str) {
    let result = '';
    // Your code here
    while(result.length < 10){
        result = str + result
    }
    return result;
}

function makeDivisible(x, y) {
    while(x % y !== 0){
        x += 1;
    }
    return x;
    // Your code here
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};