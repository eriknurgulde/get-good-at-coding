function cleanText(messy) {
const clean = messy.toLowerCase().replace(/[^a-z0-9]/g, "");
return(clean);
}

function isPalindrome(text) {
let reversed = "";
let input = cleanText(text);
for(ch of input) {
reversed = ch + reversed;
}
if(input === reversed) return true;
else return false;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
