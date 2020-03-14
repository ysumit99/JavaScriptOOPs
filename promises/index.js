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