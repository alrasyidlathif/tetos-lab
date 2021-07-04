const start = new Date

setTimeout(() => {
    for (var i=0; i<1000; i++) {
        console.log('inside call back')
    }
    
    const end = new Date

    console.log("start time:", start)
    console.log("end time:", end)
}, 0)

for (var i=0; i<100000; i++) {
    console.log('inside main thread')
}

// start time: 2021-07-04T15:22:00.701Z
// end time: 2021-07-04T15:23:05.028Z
