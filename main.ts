input.onButtonPressed(Button.A, function () {
    isRunning = false
    music.playTone(262, music.beat(BeatFraction.Half))
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