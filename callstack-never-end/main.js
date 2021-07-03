// never end code

var keepGoing = true

setTimeout(() => {
    keepGoing = false
}, 100)

while(keepGoing) {
    console.log('keep going!')
}
