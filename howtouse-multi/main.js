const { Worker } = require('worker_threads')

console.log("start time:", new Date)

const worker1 = new Worker('./howtouse-multi/worker-1.js')
const worker2 = new Worker('./howtouse-multi/worker-2.js')

worker1.on('message', (msg) => {
    console.log(msg)

    console.log("end time worker 1:", new Date)
})

worker2.on('message', (msg) => {
    console.log(msg)

    console.log("end time worker 2:", new Date)
})

console.log('inside main thread')

// result
// start time: 2021-07-04T16:27:42.383Z
// inside main thread
// inside worker 1 thread
// inside worker 2 thread
// worker 1 finish: 10
// end time worker 1: 2021-07-04T16:27:42.507Z
// worker 2 finish: 10
// end time worker 2: 2021-07-04T16:27:42.508Z
// inside worker 1 thread
// inside worker 1 thread
// inside worker 1 thread
// inside worker 1 thread
// inside worker 1 thread
// inside worker 1 thread
// inside worker 1 thread
// inside worker 1 thread
// inside worker 1 thread
// inside worker 2 thread
// inside worker 2 thread
// inside worker 2 thread
// inside worker 2 thread
// inside worker 2 thread
// inside worker 2 thread
// inside worker 2 thread
// inside worker 2 thread
// inside worker 2 thread
