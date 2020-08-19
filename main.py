class ActionKind(Enum):
    Walking = 0
    Idle = 1
    Jumping = 2

def on_countdown_end():
    game.over(False, effects.splatter)
info.on_countdown_end(on_countdown_end)

info.start_countdown(300)
jump_limit = 0
scene.set_background_color(9)
tiles.set_tilemap(tiles.create_tilemap(hex("""
            140010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000401010300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000040101010103000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000020000000002000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000401010103000000000800000000000000000000000000000000000005060700000000000000000000000000000000050606060700000000000101010101010101010106060606060101010101
        """),
        img("""
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
        """),
        [myTiles.transparency16,
            myTiles.tile4,
            myTiles.tile1,
            myTiles.tile2,
            myTiles.tile8,
            myTiles.tile3,
            myTiles.tile6,
            myTiles.tile9,
            myTiles.tile15],
        TileScale.SIXTEEN))
Runner_blue = sprites.create(img("""
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
    """),
    SpriteKind.player)
Runner_blue.set_position(8, 95)
scene.camera_follow_sprite(Runner_blue)
Runner_blue.set_flag(SpriteFlag.STAY_IN_SCREEN, True)
controller.move_sprite(Runner_blue, 75, 0)

def on_on_update():
    global jump_limit
    if jump_limit == 1:
        if True:
            jump_limit = 0
game.on_update(on_on_update)

def on_update_interval():
    if controller.right.is_pressed():
        Runner_blue.set_image(img("""
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
        """))
    if controller.left.is_pressed():
        Runner_blue.set_image(img("""
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
        """))
    if controller.A.is_pressed() and jump_limit < 1:
        Runner_blue.set_velocity(0, -150)
    else:
        Runner_blue.set_velocity(0, 100)
    if not (controller.left.is_pressed() or controller.right.is_pressed()):
        Runner_blue.set_image(img("""
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
        """))
game.on_update_interval(100, on_update_interval)

def on_update_interval2():
    global jump_limit
    if controller.A.is_pressed():
        jump_limit = 1
game.on_update_interval(60, on_update_interval2)
