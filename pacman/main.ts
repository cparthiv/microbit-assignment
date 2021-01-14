/**
 * This is a game.
 * Based on pac-man.
 * Credits: Parthiv
 */
/**
 * sprites.
 * "Parthiv" is the "protagonist"
 * "codingTvAndGaming" is the food.
 * "homework" is the monster that follows you.
 */
let parthiv = game.createSprite(2, 2);
let codingTvAndGaming = game.createSprite(4, 4);
let homework = game.createSprite(0, 0);
/**
 * Sprite properties. 
 */
homework.change(LedSpriteProperty.Blink, 100);
codingTvAndGaming.set(LedSpriteProperty.Brightness, 100);
/**
 * While (true)
 * is a javascript forever loop
 */
while (true) {
    basic.pause(400);
    /**
     * Make the homework follow parthiv.
     */
    if (homework.get(LedSpriteProperty.X) < parthiv.get(LedSpriteProperty.X)) {
        homework.change(LedSpriteProperty.X, 1);
    }
    else if (homework.get(LedSpriteProperty.X) < parthiv.get(LedSpriteProperty.X)) {
        homework.change(LedSpriteProperty.X,  -1 );
    }
    else if (homework.get(LedSpriteProperty.Y) < parthiv.get(LedSpriteProperty.Y)) {
        homework.change(LedSpriteProperty.Y, 1);
    }
    else if (homework.get(LedSpriteProperty.Y) > parthiv.get(LedSpriteProperty.Y)) {
        homework.change(LedSpriteProperty.Y,  -1 );
    }
    /**
     * Moving - Using the tilts.
     * Tilting it moves it in that direction.
     */
    if (input.acceleration(Dimension.X) > 200) {
        parthiv.change(LedSpriteProperty.X, 1);
    }
    else if (input.acceleration(Dimension.X) <  -200 ) {
        parthiv.change(LedSpriteProperty.X,  -1 );
    }
    if (input.acceleration(Dimension.Y) > 200) {
        parthiv.change(LedSpriteProperty.Y, 1);
    }
    else if (input.acceleration(Dimension.Y) >  -200 ) {
        parthiv.change(LedSpriteProperty.Y,  -1 );
    }
    /**
     * If i'm touching the objective, I add score.
     */
    if (parthiv.isTouching(codingTvAndGaming)) {
        game.addScore(1);
        /**
         * Move the food randomly.
         */
        codingTvAndGaming.set(LedSpriteProperty.X, randint(0, 5));
        codingTvAndGaming.set(LedSpriteProperty.Y, randint(0, 5));
        /**
         * Makes sure the homework and the objective are seperate.
         */
        if (codingTvAndGaming.get(LedSpriteProperty.X) < 2 && codingTvAndGaming.get(LedSpriteProperty.Y) < 2) {
            homework.set(LedSpriteProperty.X, 4);
            homework.set(LedSpriteProperty.Y, 4);
        }
        else if (codingTvAndGaming.get(LedSpriteProperty.X) > 2 && codingTvAndGaming.get(LedSpriteProperty.Y) < 2) {
            homework.set(LedSpriteProperty.X, 0);
            homework.set(LedSpriteProperty.Y, 4);
        }
        else if (codingTvAndGaming.get(LedSpriteProperty.X) < 2 && codingTvAndGaming.get(LedSpriteProperty.Y) > 2) {
            homework.set(LedSpriteProperty.X, 4);
            homework.set(LedSpriteProperty.Y, 0);
        }
        else {
            homework.set(LedSpriteProperty.X, 0);
            homework.set(LedSpriteProperty.Y, 0);
        }
    }
    /**
     * If i have to do homework, game over.
     */
    if (parthiv.isTouching(homework)) {
        game.gameOver();
    }

}
/**
 * Original homework location lol.
 */
homework.set(LedSpriteProperty.X, 4);
