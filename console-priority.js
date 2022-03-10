const anything = () => console.log('hellow there');
console.log('first');
// anything();
//showed up after 5 seceond.settimeout 
setTimeout(anything, 5000);
console.log('second');
console.log('third');