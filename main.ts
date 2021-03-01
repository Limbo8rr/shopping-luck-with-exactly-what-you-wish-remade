scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (tileOverlapped(assets.tile`myTile0`) == 0) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (tileOverlapped(assets.tile`myTile1`) == 0) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (buttonToRestart == 1) {
        game.reset()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (tileOverlapped(assets.tile`myTile`) == 0) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (buttonToRestart == 1) {
        game.reset()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    if (tileOverlapped(assets.tile`myTile7`) == 0) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (tileOverlapped(assets.tile`myTile4`) == 0) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
function intializeArrays () {
    text_list = []
    listOfTiles = []
    master_list = [
    assets.tile`myTile0`,
    assets.tile`myTile8`,
    assets.tile`myTile2`,
    assets.tile`myTile1`,
    assets.tile`myTile4`,
    assets.tile`myTile3`,
    assets.tile`myTile`,
    assets.tile`myTile7`,
    assets.tile`myTile9`
    ]
    master_text_list = [
    "p(pineapple)",
    "sp(sugar pouch)",
    "q(quesadilla)",
    "mb(milk box)",
    "C(sugar candy)",
    "t(tomato)",
    "oj(orange juice)",
    "sob(sack of beans)",
    "rsob(rotten sack of beans)"
    ]
    randomizeTilemap()
    for (let index = 0; index <= 3; index++) {
        list_index = randint(0, master_list.length - 1)
        listOfTiles[index] = master_list[list_index]
        master_list.removeAt(list_index)
        text_list[index] = master_text_list[list_index]
        master_text_list.removeAt(list_index)
    }
    if (showLongIntroText == true) {
        game.showLongText("Ronnie go get one " + text_list[0] + ", get one " + text_list[1] + ", get one " + text_list[2] + ", and get one " + text_list[3] + ". Now remember this. It won't be repeated. Make sure to pick them up in the order listed and if you pick up the wrong thing you get hurt.now never forget this." + "play as many times as you like, there is random your store item combination.", DialogLayout.Full)
    } else {
        game.showLongText("Ronnie go get one " + text_list[0] + ", get one " + text_list[1] + ", get one " + text_list[2] + ", and get one " + text_list[3] + ". Now remember this. It won't be repeated. Make sure to pick them up in the order listed and if you pick up the wrong thing you get hurt.", DialogLayout.Full)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (tileOverlapped(assets.tile`myTile9`) == 0) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (tileOverlapped(assets.tile`myTile3`) == 0) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
function playGame () {
    restartGame = false
    intializeArrays()
    ronnie_the_shopper = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f d d d d d f . . . . . . 
        . . . f d 9 d 9 d f . . . . . . 
        . . . f d d d d d f . . . . . . 
        . . . f f d d d f f . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . d 2 2 2 d . . . . . . . 
        . . . . . 8 8 8 . . . . . . . . 
        . . . . . 8 8 8 . . . . . . . . 
        . . . . . 8 . 8 . . . . . . . . 
        . . . . . b . b . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(ronnie_the_shopper)
    info.setLife(1)
    scene.cameraFollowSprite(ronnie_the_shopper)
    tiles.placeOnTile(ronnie_the_shopper, tiles.getTileLocation(1, 0))
    scene.setBackgroundColor(13)
    info.setScore(10)
    for (let value of listOfTiles) {
        if (listOfTiles.indexOf(value) == 0) {
        	
        } else {
            for (let dumb of tiles.getTilesByType(value)) {
                tiles.setWallAt(dumb, true)
            }
        }
    }
}
function gameOver (trueForWin: boolean) {
    ronnie_the_shopper.destroy()
    if (trueForWin == true) {
        restart = game.ask("You Win!", "Play Again?")
    } else {
        restart = game.ask("Game Over. So Sad!", "Play Again?")
    }
    if (restart == true) {
        showLongIntroText = false
        restartGame = true
    } else {
        tiles.setTilemap(tilemap`level10`)
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffff2fff2222fffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffff2fffffffffffff2fff222222222ffffffffffffffffffffffffffffffffff2ffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffff2fffffffffffff2222fffffffff2fffff2222ffffffffffffff222fffffff2ffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffff2ffffffffffffff2ffffffffffff2ffff2fff2f22ffffff2ff22fff2ffffff2fffff2ffffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffff2ffffffffffffff2ffffffffffff2ffff2ffffff22fffff2f2ffffff2ffffff2fff22fffffffffff2ffff22ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffff2ffffffffffffff2ffffffffffff2fff2fffffff22fffff22fffffff2ffffff2ff2ff2fffffffffff2ffff2ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffff2fffffffffffff2fffffffffffff2ff2ffffffff2ffffff2ffffffff2ffffff2f2ffff2ffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffff2fffffffffffff2fffffffffffff2fff2ffffff22ffffff2ffffffff2ffffff22ffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffff2fffffffffffff2ffffffffffff2ffff2ffff22ff2ffffff2fffffff2ffffff2fffffff2ffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffff2fffffffffffff2ffffffffffff2ffff2fff2ffff2ffffff2fffffff2ffffff2ffffffff2fffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffff2fffffffffffff2fffffffffff2fffff2222ffffff2fffff2fffffff2ffffff2fffffffff2fffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffff2ffffffffffffff2fffffffffffffffffffffffffff2ffff2fffffff2ffffff2fffffffff2ffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff22fffff22fffffffff2f2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff22fffff22222ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffff2fffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffff2222fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2ffff22fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2ffffff22fffffff2fffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2ffffffff22ffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2fffffffff2ffffff2fffffff2222ffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2fffffffff2ffffff2fffffff2fff22fff2ffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2fffffffff2ffffff2fffffff2ffff22ff2ffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2ff2ffffff2ffffff2fffffff2fff22fff2fffffffff2ffff2fffffffffffff2fffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2fff222ff2ffffffff2ffffff2ff2f2ffff2fffffff22ffff2fffffff2ff2222fffffffff2222ffffffff2ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2ffffff22fffffffff2ffffff2ff2f2ffff2ffffff2f2fffff2ffffff2f2fff2fffffffff2ff2ffffffff2ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffff22ff2ffff2ffffff2f2fffff2ffffff22ffff2fffffffff2fff2fffffff2ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffff2fffff2ff2fffff2ffffff2ffffff2ffffffff2f222fffffff2ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffff2fff2fff2fffff2ffffff2ffffff2fffffff2f2f22ffffff2fffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffff2f2ffff2fffff2ffffff2ffffff2fffffff22ff2fffffff2fffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffff2ffff2ffffff2ffffff2ffffff2fffffffffff2fffffff2fffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2fffffff22ffffffffff2ffffff2fffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2fffffff22ffffffffff2ffffff22ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffff22ffffffffffff2ffffffffffffff2fffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffff22ffffffffff2ffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffff22fffffff2ffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffff22fff22fffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222ffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffff22222fff22fffffff2fffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        buttonToRestart = 1
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    if (tileOverlapped(assets.tile`myTile8`) == 0) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
function tileOverlapped (tile: Image) {
    tile_index = listOfTiles.indexOf(tile)
    if (tile_index == 0) {
        for (let tile1 of tiles.getTilesByType(listOfTiles[1])) {
            tiles.setWallAt(tile1, false)
        }
        for (let tile1 of tiles.getTilesByType(listOfTiles[0])) {
            tiles.setTileAt(tile1, assets.tile`transparency16`)
        }
        info.changeLifeBy(1)
        info.changeScoreBy(-1)
    } else if (tile_index == 1) {
        for (let tile1 of tiles.getTilesByType(listOfTiles[2])) {
            tiles.setWallAt(tile1, false)
        }
        for (let tile1 of tiles.getTilesByType(listOfTiles[1])) {
            tiles.setTileAt(tile1, assets.tile`transparency16`)
        }
        info.changeLifeBy(1)
        info.changeScoreBy(-1)
    } else if (tile_index == 2) {
        for (let tile1 of tiles.getTilesByType(listOfTiles[3])) {
            tiles.setWallAt(tile1, false)
        }
        for (let tile1 of tiles.getTilesByType(listOfTiles[2])) {
            tiles.setTileAt(tile1, assets.tile`transparency16`)
        }
        info.changeLifeBy(1)
        info.changeScoreBy(-1)
    } else if (tile_index == 3) {
        gameOver(true)
    } else {
        info.changeLifeBy(-1)
        return 0
    }
    return 1
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (tileOverlapped(assets.tile`myTile2`) == 0) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
info.onLifeZero(function () {
    gameOver(false)
})
function randomizeTilemap () {
    tiles.setTilemap(tilemap`level5`)
    number_of_empty_tiles = tiles.getTilesByType(sprites.castle.tilePath5).length
    number_each_tile_type = Math.floor(number_of_empty_tiles / master_list.length)
    for (let value of master_list) {
        for (let index = 0; index <= number_each_tile_type - 1; index++) {
            tiles.setTileAt(tiles.getTilesByType(sprites.castle.tilePath5)[randint(0, tiles.getTilesByType(sprites.castle.tilePath5).length - 1)], value)
        }
    }
    for (let value of tiles.getTilesByType(sprites.castle.tilePath5)) {
        tiles.setTileAt(value, master_list[randint(0, master_list.length - 1)])
    }
}
let number_each_tile_type = 0
let number_of_empty_tiles = 0
let tile_index = 0
let restart = false
let ronnie_the_shopper: Sprite = null
let restartGame = false
let list_index = 0
let master_text_list: string[] = []
let master_list: Image[] = []
let listOfTiles: Image[] = []
let text_list: string[] = []
let buttonToRestart = 0
let showLongIntroText = false
showLongIntroText = true
playGame()
game.onUpdate(function () {
    if (restartGame == true) {
        playGame()
    }
})
