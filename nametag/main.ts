let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "x"]
let current = 0
const name = ["N", "A", "M", "E", ":"]
basic.showString(letters[0])

input.onGesture(Gesture.Shake, function () {
    for(let i = 0; i < name.length; i++){
        basic.showString(name[i])
    }
})

input.onButtonPressed(Button.A, function () {
    if(current != 0){
        current = current - 1;
        basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
        basic.showString(letters[current])
        
    }
})
input.onButtonPressed(Button.B, function () {
    if(current != 25){
        current = current + 1;;
        basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
        basic.showString(letters[current])
    }
})
input.onButtonPressed(Button.AB, function () {
    name.push(letters[current])
    basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
    basic.showString(letters[current])
})
input.onGesture(Gesture.Shake, function () {
    console.log("shook")
})
