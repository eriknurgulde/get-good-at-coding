function countVowels(text) {
let count = 0;
for(const ch of text) {
if(ch.toLowerCase() === "a") count++;
else if(ch.toLowerCase() === "e") count++;
else if(ch.toLowerCase() === "i") count++;
else if(ch.toLowerCase() === "o") count++;
else if(ch.toLowerCase() === "u") count++;
}
return(count);
}

console.log(countVowels("Python"));
console.log(countVowels("oujhefoujh"));
console.log(countVowels("AaAaUhHIO"));