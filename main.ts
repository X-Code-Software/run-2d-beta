enum ActionKind {
    Walking,
    Idle,
    Jumping
}
let jump_limit = 0
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(hex`140010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000401010300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000040101010103000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000020000000002000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000401010103000000000800000000000000000000000000000000000005060700000000000000000000000000000000050606060700000000000101010101010101010106060606060101010101`, img`
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . 2 . . 2 2 2 2 2 2 . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . 2 . . . . . . . . . . . . 
    . . . . . 2 . . . . 2 . . . . . . . . . 
    . 2 . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 2 . . . . 2 . . . . . . . 
    . . . . . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . . . 2 2 2 2 2 . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile4,myTiles.tile1,myTiles.tile2,myTiles.tile8,myTiles.tile3,myTiles.tile6,myTiles.tile9,myTiles.tile15], TileScale.Sixteen))
let Runner_blue = sprites.create(img`
    . . . f f f f f . . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f . . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f . . 
    . f e 4 e 1 f 4 4 f . . . 
    . f f f e 4 4 4 4 f . . . 
    . . f e e e e e f f . . . 
    . . e 4 4 e 7 7 7 f . . . 
    . . e 4 4 e 7 7 7 f . . . 
    . . f e e f 6 6 6 f . . . 
    . . . f f f f f f . . . . 
    . . . . f f f . . . . . . 
    `, SpriteKind.Player)
Runner_blue.setPosition(8, 95)
scene.cameraFollowSprite(Runner_blue)
Runner_blue.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(Runner_blue, 75, 0)
game.onUpdateInterval(1000, function () {
    if (controller.A.isPressed()) {
        jump_limit += 1
    }
})
game.onUpdateInterval(100, function () {
    if (controller.right.isPressed()) {
        Runner_blue.setImage(img`
            . . . . . . . . . . . . . 
            . . . f f f f f f . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f f . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f b f e e f f f . 
            f f e 4 e 1 f 4 4 f f . . 
            . f f f e 4 4 4 4 f . . . 
            . 4 4 4 e e e e f f . . . 
            . e 4 4 e 7 7 7 7 f . . . 
            . f e e f 6 6 6 6 f f . . 
            . f f f f f f f f f f . . 
            . . f f . . . f f f . . . 
            `)
    }
    if (controller.left.isPressed()) {
        Runner_blue.setImage(img`
            . . . . . . . . . . . . . 
            . . . . f f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . f f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . f f f e e f b f e e f f 
            . . f f 4 4 f 1 e 4 e f f 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e 4 4 4 . 
            . . . f 7 7 7 7 e 4 4 e . 
            . . f f 6 6 6 6 f e e f . 
            . . f f f f f f f f f f . 
            . . . f f f . . . f f . . 
            `)
    }
    if (controller.A.isPressed() && jump_limit < 1) {
        Runner_blue.setVelocity(0, -150)
    } else {
        Runner_blue.setVelocity(0, 100)
    }
    if (!(controller.left.isPressed() || controller.right.isPressed())) {
        Runner_blue.setImage(img`
            . . . f f f f f . . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f . . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f b f e e f f . . 
            . f e 4 e 1 f 4 4 f . . . 
            . f f f e 4 4 4 4 f . . . 
            . . f e e e e e f f . . . 
            . . e 4 4 e 7 7 7 f . . . 
            . . e 4 4 e 7 7 7 f . . . 
            . . f e e f 6 6 6 f . . . 
            . . . f f f f f f . . . . 
            . . . . f f f . . . . . . 
            `)
    }
    if (jump_limit > 1) {
        jump_limit = 0
    }
})
