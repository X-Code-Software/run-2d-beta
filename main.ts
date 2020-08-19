enum ActionKind {
    Walking,
    Idle,
    Jumping
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    Runner_blue.y += -1
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    Runner_blue.y += -1
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    Runner_blue.y += -1
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    Runner_blue.y += -1
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile7, function (sprite, location) {
    Runner_blue.y += 1
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    Runner_blue.y += 1
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    Runner_blue.y += -1
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    Runner_blue.y += 1
})
let Runner_blue: Sprite = null
let jump_limit = 0
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000500000000080207000005080207000006000000050006000000000000000500000804010101030705000000060606060600050000000000000000000501010101010101010101`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile4,myTiles.tile1,myTiles.tile2,myTiles.tile8,myTiles.tile10,myTiles.tile12,myTiles.tile13,myTiles.tile14], TileScale.Sixteen))
Runner_blue = sprites.create(img`
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
Runner_blue.setPosition(16, 95)
scene.cameraFollowSprite(Runner_blue)
Runner_blue.setFlag(SpriteFlag.StayInScreen, false)
controller.moveSprite(Runner_blue, 75, 0)
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
    if (controller.A.isPressed()) {
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
    if (jump_limit <= 1) {
    	
    }
})
