input.onButtonPressed(Button.A, function () {
    isRunning = false
})
let isRunning = false
let count = 0
isRunning = true
basic.forever(function () {
    if (isRunning == true) {
        count += 1
        basic.showNumber(count)
        basic.pause(1000)
    }
})
