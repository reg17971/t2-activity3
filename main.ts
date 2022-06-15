function led2 () {
    if (turn_flag) {
        basic.showLeds(`
            . . # # #
            . . # # .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # #
            . . . # #
            . . . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # . .
            # # # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . . . .
            # # . . .
            # # # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
    }
}
let turn_flag = false
turn_flag = false
let increase_speed_flag = 0
