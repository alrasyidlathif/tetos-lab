const { Worker } = require('worker_threads')

const start = new Date

const worker = new Worker('./single-vs-multi/this-worker.js')

worker.on('message', (msg) => {
    console.log(msg)

    const end = new Date

    console.log("start time:", start)
    console.log("end time:", end)
})

for (var i=0; i<100000; i++) {
    console.log('inside main thread')
}

// start time: 2021-07-04T15:29:24.181Z
// end time: 2021-07-04T15:30:27.437Z
