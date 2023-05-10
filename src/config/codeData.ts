export interface ICodeData {
  type: string;
  code: string;
}
export const codeData: ICodeData[] = [
  {
    type: "javascript",
    code: `function countConsonants(str) {
    return new Set(str
        .toLowerCase()
        .split('')
        .filter((el) => el.match(/(?=[a-z])[^aeiou]/))).size;
}`,
  },
  {
    type: "javascript",
    code: `function findUniq(arr) {
  arr.sort((a, b) => a - b)
	return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0]
}`,
  },
  {
    type: "javascript",
    code: `function countConsonants(str) {
    return new Set(str
        .toLowerCase()
        .split('')
        .filter((el) => el.match(/(?=[a-z])[^aeiou]/))).size;
}`,
  },
  {
    type: "javascript",
    code: `const arrayDiff = (a, b) => {
   return a.filter( element => {
      if (!(b.some( el => el === element))) return true
   })
}`,
  },
  {
    type: "javascript",
    code: `const comp = (a ,b) => {
   if (!a || !b || (a.length !== b.length)) return false
   const resA = a.map( el => el ** 2).sort((a, b) => a - b).join('')
   const resB = b.sort((a, b) => a - b).join('')
   return resA === resB
}`,
  },
  {
    type: "javascript",
    code: `const sumPairs = function(arr, n){
   let obj = {}
   for (let i = 0; i < arr.length; i++) {
      if (obj[n - arr[i]]) return [n - arr[i], arr[i]]
      obj[arr[i]] = true
   }
}`,
  },
];
