let second = 0;
const timeid = setInterval(() => {
    // ++second;
    console.log(++second);
    if (second > 15) {
        clearInterval(timeid);
    }

}, 1000)