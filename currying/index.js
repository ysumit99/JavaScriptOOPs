var avg = function (...n) {
    let tot = 0;
    for (let i = 0; i < n.length; i++) {
        tot += n[i];
    }

    return tot / n.length;
};


console.log(avg(1, 2, 3));

var spiceUp = function (fn, ...n) {
    return function (...m) {

        return fn.apply(this, n.concat(m));
    }
};

var doAvg = spiceUp(avg, 1, 2, 3);// <=== argument 'n'
console.log(doAvg(4, 5, 6, 7)) // <=== argument 'm'