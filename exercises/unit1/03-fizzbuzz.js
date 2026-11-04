function fizzbuzz(n) {
if(n%15===0) return("FizzBuzz")
else if(n%5===0) return("Buzz")
else if(n%3===0) return("Fizz")
else return(String(n))
}

console.log(fizzbuzz(1))
console.log(fizzbuzz(3))
console.log(fizzbuzz(5))
console.log(fizzbuzz(15))
console.log(fizzbuzz(30))
console.log(fizzbuzz(98))