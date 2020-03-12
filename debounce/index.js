const debounce = (fn, delay) => {

    let timeoutID;
    return ((...args) => {

        if (timeoutID)
            clearTimeout(timeoutID);
        timeoutID = setTimeout(() => { fn(...args); }, delay);
    });

}

//'click', debounce((e) => { console.log('clicked') }, 2000));
document.getElementById('myButton').addEventListener('click', debounce((e) => { console.log('clicked'); }, 2000));