const anything = () => console.log('hellow there');
console.log('first');
// anything();
//showed up after 5 seceond.settimeout 
setTimeout(anything, 5000);
// console.timeEnd(anything)
// setInterval(function () {
//     console.log('ami interval')
// })
console.log('second');
console.log('third');