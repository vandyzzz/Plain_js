var counter = querySelector(".counter");
var followers = querySelector(".followers");

let count = 1;
setInterval(() => {
    count++;
    counter.innerText = count;
},10);