function wordFrequency(text) {
if (text === "") return {};
const tidy = text.toLowerCase().trim().replace(/[^a-z0-9 ]/g, "").split(/\s+/);
let frequencyList = {};
for (let i = 0; i < tidy.length; i++) {
let word = tidy[i];
let count = (frequencyList[word] || 0);
frequencyList[word] = count + 1;
}
return frequencyList;
}

console.log(wordFrequency("the cat and the hat"))
console.log(wordFrequency("Go go GO!"))
console.log(wordFrequency(" spaced out "))
console.log(wordFrequency("Hi, hi. HI?"))
console.log(wordFrequency(""))