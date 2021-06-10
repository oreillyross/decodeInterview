"use strict";
/*
  Technical communication on the problem of grouping
  similar titles. A version of the anagram challenge

  1. declare a function called groupTitles  and pass in an array of strings
  2. declare an empty object to be used as a kv store
  3. loop through the array of strings
  4. for each string declare a array with a size of 26 numbers all intialised to 0
  5. second loop inside the first loop to loop through each char in the string.
  6. obtain an index value by getting the charcode from the char being looped over and subtract that from the charcode represented by the char 'a'
  7. use this index as the index position in the 26
  digit count array and += 1 for repeat chars
  8. exit the first loop
  9. check if the count array is in the res kv store
  10. if it is then push the string  otherwise
  start the kv store for this string off
  by res[count] = [s]
  11. exit the first loop
  12. create an empty array called result
  13. loop through the res kv store with in to
  get the index
  and result.push([count])
  14. return result from function
*/
exports.__esModule = true;
exports.groupTitles = void 0;
function groupTitles(strs) {
    var res = {};
    for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
        var str = strs_1[_i];
        var freqArr = new Array(26).fill(0);
        for (var _a = 0, str_1 = str; _a < str_1.length; _a++) {
            var c = str_1[_a];
            var index = c.charCodeAt(0) - "a".charCodeAt(0);
            freqArr[index] += 1;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var key = freqArr;
        if (key in res) {
            res[key].push(str);
        }
        else {
            res[key] = [str];
        }
    }
    var result = [];
    for (var key in res) {
        result.push(res[key]);
    }
    return result;
}
exports.groupTitles = groupTitles;
var titles = ["duel", "dule", "speed", "spede", "deul", "cars"];
var gt = groupTitles(titles);
console.log(gt);
var query = "spede";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
for (var _i = 0, _a = Object.entries(gt); _i < _a.length; _i++) {
    var _b = _a[_i], _ = _b[0], g = _b[1];
    if (g.includes(query)) {
        console.log(g);
    }
}
