let count = 0
let isRunning = true
basic.forever(function () {
    if (isRunning == true) {
        count += 1
        basic.showNumber(count)
        basic.pause(1000)
    }
})
