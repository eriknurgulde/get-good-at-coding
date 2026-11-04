function formatTime(seconds) {
minutes = Math.floor(seconds/60);
secs = Math.floor((seconds % 60)/1);
return(minutes + ":" + String(secs).padStart(2,"0"))
}

console.log(formatTime(865))
console.log(formatTime(67))
console.log(formatTime(8324.5))