let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    basic.showNumber(degrees)
})
