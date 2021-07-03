function delay() {
    for (var i=0; i<1000; i++) {
        // do nothing
    }
}

const aloop = [1,2,3,4,5]
console.log("start time:", new Date)

aloop.forEach(item => {
    console.log("processing sync", item)
    delay()
})

console.log("end time:", new Date)
