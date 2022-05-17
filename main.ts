input.onButtonPressed(Button.A, function () {
    basic.showNumber((finish - start) / 1000)
})
input.onGesture(Gesture.Shake, function () {
    score += 1
    if (score == max_shakes) {
        finish = control.millis()
        soundExpression.happy.playUntilDone()
    }
    led.plotBarGraph(
    score,
    max_shakes
    )
})
let max_shakes = 0
let finish = 0
let start = 0
let score = 0
basic.showString("shake")
score = 0
start = control.millis()
finish = 0
max_shakes = 40
