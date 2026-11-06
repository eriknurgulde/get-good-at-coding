function largest(nums) {
if(nums.length === 0) return null;
let max = nums[0];
for(let i = 1; i < nums.length; i++) {
if(nums[i] > max) max = nums[i];
}
return max;
}

console.log(largest([3,9,2,7]))
console.log(largest([-5,-2,-9]))
console.log(largest([42]))
console.log(largest([]))