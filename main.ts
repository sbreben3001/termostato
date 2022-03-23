let calculo = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("C")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    calculo = input.temperature() * (1.8 + 32)
    basic.showString("F")
    basic.pause(100)
    basic.clearScreen()
})
basic.forever(function () {
    basic.pause(1000)
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    if (input.temperature() > 30) {
        basic.showLeds(`
            . . # # #
            # . # # #
            . . . # #
            . # . . .
            # . . # .
            `)
    }
})
basic.forever(function () {
    if (input.temperature() < 5) {
        music.playMelody("B C5 F A G C5 E A ", 120)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # . # #
            . # # # .
            # . # . #
            `)
    }
})
