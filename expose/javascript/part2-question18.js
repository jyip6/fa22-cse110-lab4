function doSomthing()
{
let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
}

setInterval(doSomthing,1000);
