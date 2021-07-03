function delay() {
    for (var i=0; i<1000000; i++) {
        // do nothing
    }
}

// async
function asyncForEach(array, cb) {
    array.forEach((item) => {
        setTimeout(cb.bind(null, item), 0)
    })
}

const aloop = [1,2,3,4,5]
console.log("start time:", new Date)

asyncForEach(aloop, (item) => {
    console.log("processing async", item)
    delay()
})

console.log("end time:", new Date)
