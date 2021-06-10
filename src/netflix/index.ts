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

export function groupTitles(strs: string[]): string[][] {
  const res = {};
  for (const str of strs) {
    const freqArr = new Array(26).fill(0);
    for (const c of str) {
      const index = c.charCodeAt(0) - "a".charCodeAt(0);
      freqArr[index] += 1;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const key: any = freqArr;
    if (key in res) {
      res[key].push(str);
    } else {
      res[key] = [str];
    }
  }
  const result = [];
  for (const key in res) {
    result.push(res[key]);
  }
  return result;
}

const titles = ["duel", "dule", "speed", "spede", "deul", "cars"];
const gt = groupTitles(titles);
console.log(gt);

const query = "spede";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
for (const [_, g] of Object.entries(gt)) {
  if (g.includes(query)) {
    console.log(g);
  }
}
