const { parentPort } = require('worker_threads')

// setTimeout(() => {
//     for (var i=0; i<1000; i++) {
//         console.log('inside worker thread')
//     }
    
//     parentPort.postMessage('worker finish')
// }, 0)

for (var i=0; i<1000; i++) {
    console.log('inside worker thread')
}
    
parentPort.postMessage('worker finish')
