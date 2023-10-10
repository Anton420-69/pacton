scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.gameOver(true)
})
let mySprite = sprites.create(img`
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 f f 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 . . . . 
    5 5 5 5 5 5 5 5 5 5 5 5 . . . . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass2)
scene.cameraFollowSprite(mySprite)
