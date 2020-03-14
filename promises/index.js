//Example 1
let promiseToStudyJavaScript = new Promise(function (resolve, reject) {

    //Studying JavaScript

    let isStudyCompleted = false;

    if (isStudyCompleted) {
        resolve('completed');
    } else {
        reject('not completed');
    }
});

promiseToStudyJavaScript.then(function (fromResolve) {
    console.log('JavaScript studying is ' + fromResolve);
}).catch(function (fromReject) {
    console.log('JavaScript studying is ' + fromReject);
});

//Example 2

let cleanRoom = function () {
    return new Promise(function (resolve, reject) {
        resolve(' Cleaned the Room');
    });
};

let removeGarbage = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + ' remove Garbage');
    });
};

let winIcecream = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + ' won Icecream');
    });
};

cleanRoom().then(function (result) {
    return removeGarbage(result);
}).then(function (result) {
    return winIcecream(result);
}).then(function (result) {
    console.log(result + ' finished');
});

/* 
execute the promises all at once without waiting for
each one of them to resolve one by one and do something once all them finish
*/
Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function () {
    console.log('All tasks finished!');
});


/* Do something as soon as one of the promise is finished */
Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function () {
    console.log('One task is finished!');
});