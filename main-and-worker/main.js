const { Worker, isMainThread, parentPort } = require('worker_threads')

// true false true

if (isMainThread) {
    var keepGoing = true

    const worker = new Worker(__filename)

    worker.on('message', (msg) => {
        keepGoing = msg
        console.log(keepGoing)
    })

    console.log(keepGoing)

} else {
    setTimeout(() => {
        parentPort.postMessage(true)
    }, 5000)

    parentPort.postMessage(false)

}
