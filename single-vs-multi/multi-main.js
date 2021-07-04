const { Worker, isMainThread, parentPort } = require('worker_threads')

if (isMainThread) {
    const start = new Date

    const worker = new Worker(__filename)

    worker.on('message', (msg) => {
        console.log(msg)

        const end = new Date

        console.log("start time:", start)
        console.log("end time:", end)
    })

    for (var i=0; i<100000; i++) {
        console.log('inside main thread')
    }

} else {
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

}

// start time: 2021-07-04T15:22:00.701Z
// end time: 2021-07-04T15:23:05.028Z
