/**
 * License down below.
 * Don't ask me why I made a license for a school project UwU. 
 * I will describe every line of code to get a 8 on this.
 * By the way, these things are called comments. They help
 * the programmer and other people who see the code.
 */


/**
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation files
 * (the "Software"), to deal in the Software without restriction, including 
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject
 * to the following conditions:

 * The above copyright notice and this permission notice shall be 
 * included in all copies or substantial portions of the Software.
 */




























/**
 * Ticks is the variable for the lines to come.
 * Do not change this. If you want to change the difficulty, change the tickamount variable.obstacle.
 */
let ticks = 0
/**
 * Tickamount is the separation for the obstacles. By default it is 5.
 * Obstacles arrive every n seconds.
 */
let tickamount = 5
/**
 * emptyObstacleY is the exception for the obstacle that you have to go through.
 * Do not change this.
 */
let emptyObstacleY = 0
/**
 * Obstacles arrray. This is the array for the obstacles.
 * Do not change this.
 */
let obstacles: game.LedSprite[] = []
/**
 * Why did I make a useless variable...
 */
let index = 0
/**
 * You have to have a bird for a game, right?
 * Initialises the bird to a null sprite.
 */
let bird: game.LedSprite = null
/**
 * When the button a is pressed, move the bird down.
 */
input.onButtonPressed(Button.A, () => {
    bird.change(LedSpriteProperty.Y, -1)
})
/**
 * When the button B is pressed, move the bird up.
 * simple as that folks...
 */
input.onButtonPressed(Button.B, () => {
    bird.change(LedSpriteProperty.Y, 1)
})
/**
 * When you shake it, show the score.
 * Might have to revamp this later™
 */
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(game.score())
})
/**
 * I already initialised it to 0 but why not? 😏
 * imagine using it though...
 */
index = 0
/**
 * Being really efficient here, am I right?
 * Redeclaring an empty array? what am i doing?
 */
obstacles = []
/**
 * Made the null sprite into a bird. pog
 * Set a location ofc.
 */
bird = game.createSprite(0, 2)
/**
 * Made the property blink every 500 seconds.
 */
bird.set(LedSpriteProperty.Blink, 500)
/**
 * The real stuff, 
 * the forever loop!
 * So basically, heres what happens.
 * A forever function.
 * It basically is the game and repeats *forever* as you may have guessed.
 */
basic.forever(() => {
    /**
     * The first while loop deletes the obstacles after they go past the screen
     * This is so the mirobit doesn't break after infinity times and also to keep a clean array.
     */
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    /**
     * The for loop changes the obstacles to come closer.
     * It moves each of the obstacles toward the left side.
     */
    for (let obstacle2 of obstacles) {
        obstacle2.change(LedSpriteProperty.X, -1)
    }
    /**
     * The if statement checks if it is time for more obstacles to come.
     * If it is time, it randomly generates the obstacles and leaves 1 out of 5.
     * If the place is filled, it tries again. Brute force.
     */
    if (ticks % tickamount == 0) {
        emptyObstacleY = randint(0, 4)
        for (let index2 = 0; index2 <= 4; index2++) {
            if (index2 != emptyObstacleY) {
                obstacles.push(game.createSprite(4, index2))
            }
        }
    }
    /**
     * If the bird's position is equal to any of the obstacles, game goes boom.
     * RIP Bird.
     */
    for (let obstacle3 of obstacles) {
        if (obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    /**
     * Makes the ticks increase by 1 therefore making the bird 1 step closer to their doom.
     * Lol.
     */
    ticks += 1
    /**
     * Increases the score by 1. Big brain.
     */
    game.addScore(1)
    /**
     * Pauses for 1000 seconds to give the bird some peace.
     */
    basic.pause(1000)
})
