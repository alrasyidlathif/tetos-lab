const { parentPort } = require('worker_threads')

let res = 0
for (var i=0; i<10; i++) {
    console.log('inside worker 1 thread')
    res+=1
}
    
parentPort.postMessage('worker 1 finish: ' + res)
