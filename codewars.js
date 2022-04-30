/*
MY LANGUAGES

You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

SOLUTION

function myLanguages(results) {
  const arr = [];
  const resultArr = []
  
  for(let prop in results) {
    arr.push({
      'lang': prop,
      'score': results[prop],
    });
  }
  
  arr.sort((a, b) => a.score > b.score ? -1 : a.score < b.score ? 1 : 0);
  
  arr.forEach((result) => {
    if(result.score >= 60) {
       resultArr.push(result.lang);
    }
  })
  
  return resultArr;
}


*/

/* MY HEAD IS AT THE WRONG END

  function fixTheMeerkat(arr) {

    var end = arr.shift();
var begin = arr.pop();

arr.push(end);
arr.unshift(begin);

return arr;



*/