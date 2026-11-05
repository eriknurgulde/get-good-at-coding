function isLeapYear(year) {
  if(year % 400 != 0 && year % 100 === 0) return false;
else if(year % 4 === 0) return true;
else return false;
}

function daysInMonth(month, year) { 
  if( month < 1 || month > 12) return null;
  if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) return 31;
  else if(isLeapYear(year) === true && month === 2) return 29;
  else if(isLeapYear(year) === false && month === 2) return 28;
  else return 30;
}

console.log(daysInMonth(1, 2026));
console.log(daysInMonth(4, 2026));
console.log(daysInMonth(2, 2024));
console.log(daysInMonth(2, 2023));
console.log(daysInMonth(2, 1900));
console.log(daysInMonth(2, 2000));
console.log(daysInMonth(12, 2026));
console.log(daysInMonth(13, 2026));
console.log(daysInMonth(0, 2026));