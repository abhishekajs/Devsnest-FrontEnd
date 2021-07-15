// Answer 1
function is_array(inp) {
    return Array.isArray(inp);
}
console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));

// Answer 2
function array_clone(arr) {
    return arr.slice();
}
console.log(array_clone([1,2,4,0]));
console.log(array_clone([1,2,[4,0]]));

// Answer 3
function first(res, n=0) {
    if(n < 0) {
        return [];
    }
    if (n === 0) {
        return res[0];
    }
    else {
        return res.slice(0, n);
    }
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// Answer 4
function new_string(arr, sign) {
    return arr.join(sign);
}
console.log(new_string(["Red", "Green", "White", "Black"], ","));
console.log(new_string(["Red", "Green", "White", "Black"], "+"));

// Answer 5
function freq(inp) {
    let keyCounts = {};
    let topCount = 0;
    let topKey = {};
    inp.forEach(function (item) {
        keyCounts[item] = keyCounts[item] + 1 || 1;
        if (keyCounts[item] > topCount) {
            topKey = item;
            topCount = keyCounts[item];
        }
    });
    return topKey;
}
console.log(freq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))