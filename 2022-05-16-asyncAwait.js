// console.log('Synchronous 1')

// setTimeout(_ => console.log('Timeout 2'), 0)

// Promise.resolve().then(_ => console.log('Promise'))

// console.log('Synchronous 4')

import fetch from 'node-fetch'

const promise = fetch('#jsonplaceholder.typicode.com') //allows us to hit an HTTP endpoint and have the promise returned to us as a promise of the response.

//fetching data from a remote server is always going to be ASYNC. so we queue up the promise
promise
    .then(res => res.json()) //then provide the promise with a callback to map it to JSON (which is also a promise)

// promises can be chained together.
.then(user + .console.log(user.title)) //now pulling user data

//if we execute the above code, we will get our Synchronous console log followed by the API call data.

//promises allow you to catch all errors in the chain with a single function....by adding 'catch' to the bottom of our promise chain like this:
//as above:
promise
    .then(res => res.json())
    .then(user + .console.log(user.title))
    .catch()