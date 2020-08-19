info.onCountdownEnd(function () {
    game.over(false, effects.splatter)
})
let Skin = 0
let jump_limit = 0
info.startCountdown(300)
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
console.log("Startup successful ")
game.onUpdate(function () {
    if (jump_limit == 1) {
        if (true) {
            jump_limit = 0
        }
    }
})
game.onUpdateInterval(500, function () {
    if (Skin == 1 && controller.down.isPressed()) {
        Skin = 0
        console.log("Skin changed")
    }
    if (Skin == 0 && controller.down.isPressed()) {
        Skin = 1
        console.log("Skin changed")
    }
    if (controller.up.isPressed()) {
        Skin += 1
    }
    if (controller.down.isPressed()) {
        Skin += -1
    }
})
game.onUpdateInterval(100, function () {
    console.log("Animation cycle")
    if (controller.right.isPressed()) {
        if (Skin == 0) {
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
        } else {
            Runner_blue.setImage(img`
                . . . . . . f f f f 4 4 f . . . 
                . . . . f f b f 5 4 5 5 4 f . . 
                . . . f b 3 3 e 4 5 5 5 5 f . . 
                . . f b 3 3 3 3 e 4 4 4 e f . . 
                . . f 3 3 3 3 3 3 3 3 3 3 f . . 
                . . f 3 3 3 3 e b 3 e e 3 3 f . 
                . . f 3 3 3 3 f f e e e 3 3 f . 
                . . f b b b b f b f e e e 3 f . 
                . . f b b b b e 1 f 4 4 e f . . 
                . f f b b b b f 4 4 4 4 f . . . 
                . f b b b b f f f e e e f . . . 
                . . f b b f 4 4 e d d d f . . . 
                . . . f f e 4 4 e d d d f . . . 
                . . . . f b e e b d b d b f . . 
                . . . . f f d 1 d 1 d 1 f f . . 
                . . . . . . f f b b f f . . . . 
                `)
        }
    }
    if (controller.left.isPressed()) {
        if (Skin == 0) {
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
        } else {
            Runner_blue.setImage(img`
                . . . f 4 4 f f f f . . . . . . 
                . . f 4 5 5 4 5 f b f f . . . . 
                . . f 5 5 5 5 4 e 3 3 b f . . . 
                . . f e 4 4 4 e 3 3 3 3 b f . . 
                . . f 3 3 3 3 3 3 3 3 3 3 f . . 
                . f 3 3 e e 3 b e 3 3 3 3 f . . 
                . f 3 3 e e e f f 3 3 3 3 f . . 
                . f 3 e e e f b f b b b b f . . 
                . . f e 4 4 f 1 e b b b b f . . 
                . . . f 4 4 4 4 f b b b b f f . 
                . . . f e e e f f f b b b b f . 
                . . . f d d d e 4 4 f b b f . . 
                . . . f d d d e 4 4 e f f . . . 
                . . f b d b d b e e b f . . . . 
                . . f f 1 d 1 d 1 d f f . . . . 
                . . . . f f b b f f . . . . . . 
                `)
        }
    }
    if (controller.A.isPressed() && jump_limit < 1) {
        Runner_blue.setVelocity(0, -150)
    } else {
        Runner_blue.setVelocity(0, 100)
    }
    if (!(controller.left.isPressed() || controller.right.isPressed())) {
        if (Skin == 0) {
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
        } else {
            Runner_blue.setImage(img`
                . . . . . f f 4 4 f f . . . . . 
                . . . . f 5 4 5 5 4 5 f . . . . 
                . . . f e 4 5 5 5 5 4 e f . . . 
                . . f b 3 e 4 4 4 4 e 3 b f . . 
                . . f 3 3 3 3 3 3 3 3 3 3 f . . 
                . f 3 3 e b 3 e e 3 b e 3 3 f . 
                . f 3 3 f f e e e e f f 3 3 f . 
                . f b b f b f e e f b f b b f . 
                . f b b e 1 f 4 4 f 1 e b b f . 
                f f b b f 4 4 4 4 4 4 f b b f f 
                f b b f f f e e e e f f f b b f 
                . f e e f b d d d d b f e e f . 
                . . e 4 c d d d d d d c 4 e . . 
                . . e f b d b d b d b b f e . . 
                . . . f f 1 d 1 d 1 d f f . . . 
                . . . . . f f b b f f . . . . . 
                `)
        }
    }
})
game.onUpdateInterval(60, function () {
    if (controller.A.isPressed()) {
        jump_limit = 1
    }
})
