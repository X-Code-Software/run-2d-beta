scene.onOverlapTile(SpriteKind.Player, myTiles.tile22, function (sprite, location) {
    Runner_blue.setPosition(16, 120)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile16, function (sprite, location) {
    Level += 1
    if (Level == 1) {
        tiles.setTilemap(tiles.createTilemap(hex`140010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004010101030000000000000000000000000900000000000000000000050101010101070005010e0e0e0e0e0e0e0e0e0e0a06060606060b0e0a06`, img`
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . 2 2 2 2 2 . . . . . . . . . . . . . 
            . . . . . . . . . . 2 2 2 2 2 2 2 . 2 2 
            . . . . . . . . . . 2 2 2 2 2 2 2 . 2 2 
            `, [myTiles.transparency16,myTiles.tile4,myTiles.tile1,myTiles.tile2,myTiles.tile8,myTiles.tile3,myTiles.tile6,myTiles.tile9,myTiles.tile15,myTiles.tile16,myTiles.tile5,myTiles.tile7,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14], TileScale.Sixteen))
        scene.cameraShake(4, 500)
        Runner_blue.setPosition(35, 79)
        info.startCountdown(300)
    }
    if (Level == 2) {
        tiles.setTilemap(tiles.createTilemap(hex`280010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040101010300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0b0c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040101010300000000000000000000040101030000000000000000000000000c0c0c0c0c00000000000000000000000000000000000000000000000000000000000000000000040505050505030000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000004010101030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010106000000000000000000000000000000000000000000000000000000000705050505050505050505090a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a080505050505`, img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 
            `, [myTiles.transparency16,myTiles.tile4,myTiles.tile1,myTiles.tile2,myTiles.tile8,myTiles.tile6,myTiles.tile9,myTiles.tile16,myTiles.tile5,myTiles.tile7,myTiles.tile12,myTiles.tile17,myTiles.tile18,myTiles.tile3,myTiles.tile10,myTiles.tile11,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24], TileScale.Sixteen))
        scene.cameraShake(4, 500)
        Runner_blue.setPosition(35, 79)
        info.startCountdown(300)
    }
    if (Level == 3) {
        tiles.setTilemap(tiles.createTilemap(hex`2800100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010202020202020202020202020202020202020202020202020202020202020202020202020202020203030303030303030303050503030303030303030303030303030303050505050503030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030404040303030404030303040303040303040303030303030303030303030601010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,myTiles.tile4,myTiles.tile6,myTiles.tile19,myTiles.tile21,myTiles.tile22,myTiles.tile24], TileScale.Sixteen))
        scene.cameraShake(4, 500)
        Runner_blue.setPosition(16, 120)
        info.startCountdown(300)
    }
    if (Level == 4) {
        Runner_blue.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        tiles.setTilemap(tiles.createTilemap(hex`2800100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,myTiles.tile4,myTiles.tile6,myTiles.tile19,myTiles.tile21,myTiles.tile22,myTiles.tile24,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile5,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile20,myTiles.tile23], TileScale.Sixteen))
        scene.cameraShake(4, 500)
        Runner_blue.setPosition(16, 120)
        info.startCountdown(300)
        game.over(true, color.FadeToBlack)
    }
})
info.onCountdownEnd(function () {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile12, function (sprite, location) {
    Runner_blue.setPosition(16, 120)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile17, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`280010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040101010300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b0b0b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040101010300000000000000000000040101030000000000000000000000000b0b0b0b0b00000000000000000000000000000000000000000000000000000000000000000000040505050505030000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000004010101030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010106000000000000000000000000000000000000000000000000000000000705050505050505050505090a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a080505050505`, img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 . . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 
        `, [myTiles.transparency16,myTiles.tile4,myTiles.tile1,myTiles.tile2,myTiles.tile8,myTiles.tile6,myTiles.tile9,myTiles.tile16,myTiles.tile5,myTiles.tile7,myTiles.tile12,myTiles.tile18], TileScale.Sixteen))
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    let enemy_1: Sprite = null
    enemy_1.setPosition(84, 95)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile21, function (sprite, location) {
    Runner_blue.setPosition(16, 120)
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.over(false, effects.melt)
})
let Skin = 0
let jump_limit = 0
let Level = 0
let Runner_blue: Sprite = null
game.showLongText("Welcome to the Run 2D Beta v 0.1.2", DialogLayout.Full)
info.setLife(5)
info.startCountdown(300)
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(hex`140010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000401010300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000040101010103000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000020000000002000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000401010103000000000800000000000000000000000000000000000005060700000000000000000000000000000000050606060700000000090101010101010101010106060606060101010101`, img`
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
    `, [myTiles.transparency16,myTiles.tile4,myTiles.tile1,myTiles.tile2,myTiles.tile8,myTiles.tile3,myTiles.tile6,myTiles.tile9,myTiles.tile15,myTiles.tile16], TileScale.Sixteen))
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
game.onUpdateInterval(1000, function () {
    if (controller.B.isPressed()) {
        Skin += 1
        console.log("Skin changed")
        if (Skin > 2 && controller.B.isPressed()) {
            Skin = 0
        }
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
        }
        if (Skin == 1) {
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
        if (Skin == 2) {
            Runner_blue.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f f f . . . . . 
                . . . . . . f 1 1 1 1 f . . . . 
                . . . . . . f 1 f 1 f f . . . . 
                . . . . . . f 1 f 1 f f . . . . 
                . . . . . . f 1 1 1 1 f . . . . 
                . . . . . . . f f f f . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . . f . . . . . . . 
                `)
        }
        if (Skin == 3) {
            Runner_blue.setImage(img`
                . . 2 2 2 2 2 . . . . . 
                . 2 2 2 2 2 2 2 2 2 . . 
                . . e e e d f d . . . . 
                . e d e d d f d d d . . 
                . e d e e d d d f d d . 
                . e e d d d f f f f . . 
                . . . d d d d d d . . . 
                . . 2 2 8 2 2 2 . . . . 
                . 2 2 2 8 2 2 8 2 2 2 . 
                2 2 2 2 8 8 8 8 2 2 2 2 
                d d 2 8 5 8 8 5 8 2 d d 
                d d d 8 8 8 8 8 8 d d d 
                d d 8 8 8 8 8 8 8 8 d d 
                . . 8 8 8 . . 8 8 8 . . 
                . e e e . . . . e e e . 
                e e e e . . . . e e e e 
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
        }
        if (Skin == 1) {
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
        if (Skin == 2) {
            Runner_blue.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . f 1 1 1 1 f . . . . . 
                . . . . . f f 1 f 1 f . . . . . 
                . . . . . f f 1 f 1 f . . . . . 
                . . . . . f 1 1 1 1 f . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . . f . . . . . . . 
                `)
        }
        if (Skin == 3) {
            Runner_blue.setImage(img`
                . . . . 2 2 2 2 2 . . . 
                . 2 2 2 2 2 2 2 2 2 . . 
                . . . d f d d e e e . . 
                . d d d f d d d e d e . 
                d d d f d d d e e d e . 
                . f f f f d d d d e e . 
                . . d d d d d d d . . . 
                . . . . 2 2 2 8 2 2 . . 
                . 2 2 2 8 2 2 8 2 2 2 . 
                2 2 2 2 8 8 8 8 2 2 2 2 
                d d 2 8 5 8 8 5 8 2 d d 
                d d d 8 8 8 8 8 8 d d d 
                d d 8 8 8 8 8 8 8 8 d d 
                . . 8 8 8 . . 8 8 8 . . 
                . e e e . . . . e e e . 
                e e e e . . . . e e e e 
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
        }
        if (Skin == 1) {
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
        if (Skin == 2) {
            Runner_blue.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f f f . . . 
                . . . f 1 1 1 1 1 1 1 1 1 f . . 
                . . . f 1 f 1 1 1 1 1 f 1 f . . 
                . . . f 1 f 1 1 1 1 1 f 1 f . . 
                . . . f 1 1 1 1 1 1 1 1 1 f . . 
                . . . . f f f f f f f f f . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . . . f . f . f . . . . . 
                . . . . . f . . f . . f . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . f . f . . . . . . 
                . . . . . . f . . . f . . . . . 
                . . . . . . f . . . f . . . . . 
                . . . . . f f . . . f f . . . . 
                `)
        }
    }
})
game.onUpdateInterval(60, function () {
    if (controller.A.isPressed()) {
        jump_limit = 1
    }
})
