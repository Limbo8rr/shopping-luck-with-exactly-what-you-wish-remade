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
    } else if (listChecked < 1) {
        game.showLongText(shortText, DialogLayout.Full)
        listChecked += 1
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
    } else if (listChecked < 1) {
        game.showLongText(shortText, DialogLayout.Full)
        listChecked += 1
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
    listChecked = 0
    premelemetors_CodingArrow = 0
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
    shortText = "Ronnie go get one " + text_list[0] + ", get one " + text_list[1] + ", get one " + text_list[2] + ", and get one " + text_list[3] + ". Now remember this. You can get this message repeted once if you press the a or b butten. Make sure to pick them up in the order listed and if you pick up the wrong thing you get hurt."
    longText = "Ronnie go get one " + text_list[0] + ", get one " + text_list[1] + ", get one " + text_list[2] + ", and get one " + text_list[3] + ". Now remember this. It won't be repeated. Make sure to pick them up in the order listed and if you pick up the wrong thing you get hurt.now never forget this." + "play as many times as you like, there is random your store item combination."
    if (showLongIntroText == true) {
        game.showLongText(longText, DialogLayout.Full)
    } else {
        game.showLongText(shortText, DialogLayout.Full)
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
function sendSearchProjectile () {
    nextTarget = listOfTiles[premelemetors_CodingArrow]
    closEst = tiles.getTilesByType(nextTarget)[0]
    closEst_DistinCe = Math.sqrt((ronnie_the_shopper.x - closEst.x) ** 2 + (ronnie_the_shopper.y - closEst.y) ** 2)
    for (let value of tiles.getTilesByType(nextTarget)) {
        if (Math.sqrt((ronnie_the_shopper.x - value.x) ** 2 + (ronnie_the_shopper.y - value.y) ** 2) < closEst_DistinCe) {
            closEst_DistinCe = Math.sqrt((ronnie_the_shopper.x - value.x) ** 2 + (ronnie_the_shopper.y - value.y) ** 2)
            closEst = value
        }
    }
    projectile = sprites.createProjectileFromSprite(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 4 4 4 4 4 4 4 4 4 2 2 2 
        2 2 2 2 4 4 4 4 4 4 4 4 4 2 2 2 
        2 2 2 2 4 4 4 4 4 4 4 4 4 2 2 2 
        2 2 2 2 4 4 4 5 5 5 4 4 4 2 2 2 
        2 2 2 2 4 4 4 5 5 5 4 4 4 2 2 2 
        2 2 2 2 4 4 4 5 5 5 4 4 4 2 2 2 
        2 2 2 2 4 4 4 4 4 4 4 4 4 2 2 2 
        2 2 2 2 4 4 4 4 4 4 4 4 4 2 2 2 
        2 2 2 2 4 4 4 4 4 4 4 4 4 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, ronnie_the_shopper, (closEst.x - ronnie_the_shopper.x) / 1, (closEst.y - ronnie_the_shopper.y) / 1)
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
    projectile.setFlag(SpriteFlag.Ghost, true)
}
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
        restart = game.ask("         You Win!", "       Play Again?")
    } else {
        restart = game.ask("  Not a Winner. So Sad!", "       Play Again?")
    }
    if (restart == true) {
        showLongIntroText = false
        restartGame = true
    } else {
        tiles.setTilemap(tilemap`level10`)
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff22fffffff22ffffffffffffffff2fffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffff2fffffffffffffff2ffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffff2fffffffffffffff2fffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2ffffffffffffff2fff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffff222fffffffffffffffffffffffffffffffffffffff2fffffffffffff2ffffffffffffff2f22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff22222ffffffffffffffffffffffffffffffffffffff2fffffffffffff2ffffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff222222fffffffffffffffffffffffffffffffffffff2fffffffffffff2ffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffff222222222fffffffffffffffffffffffffffffffffff2fffffffffffff2ffffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffff22222222222ffffffffffffffffffffffffffffffffff2fffffffffffff2ffffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffff222222222222fffffffffffffffffffffffffffffffff2fffffffffffff2ffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffff
            ffff222222222222ffffffffffffffffffffffffffffffffff2fffffffffff2fffffffffffffff2f22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222ffffffffffff
            ffff2222222222222f222222222222ffffffffffffffffffff2fffffffffff2ffffffffffffff2fff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222ffffffffffff
            ffff2222222222222fffffffff2fff2222fffff22ffffffffff22fffffff22fffffffffffffff2fff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222ffffffffffff
            fff22222222222222fffffffff2fffffffffffff2ffffffffffff2222222fffffffffffffffff2ffff22fff2ffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ffffffffffff
            fff222222222222222ffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffff2fffff2fff2fffffffffffffffffffffffffffffffffffffffffffffffff22222222222ffffffffffff
            fff222222222222222ffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffff22222222222ffffffffffff
            fff222222222222222ffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff2222222222222fffffffffff
            fff222222222222222ffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff2222222222222fffffffffff
            fff222222222222222ffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffff2fffffffffffffffffffffffffffffffffffff2222222222222fffffffffff
            fff222222222222222ffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffff22ffffffffffffffffffffffffffffffffffff22222222222222fffffffffff
            fff2222222222222222fffffff2fffffffffffff2fff222222222ffffffffffffffffffffffffffffffffff2ffffffff2ffffffffffffffffffffffffffffffffffffff22222222222222fffffffffff
            fff2222222222222222fffffff2fffffffffffff2222fffffffff2fffff2222ffffffffffffff222fffffff2ffffff22fffffffffffffffffffffffffffffffffffffff22222222222222fffffffffff
            fff2222222222222222ffffff2ffffffffffffff2ffffffffffff2ffff2fff2f22ffffff2ff22fff2ffffff2fffff2ffffffffffff22222ffffffffffffffffffffffff22222222222222fffffffffff
            ff22222222222222222ffffff2ffffffffffffff2ffffffffffff2ffff2ffffff22fffff2f2ffffff2ffffff2fff22fffffffffff2ffff22ffffffffffffffffffffff2222222222222222ffffffffff
            ff22222222222222222ffffff2ffffffffffffff2ffffffffffff2fff2fffffff22fffff22fffffff2ffffff2ff2ff2fffffffffff2ffff2ffffffffffffffffffffff2222222222222222ffffffffff
            ff22222222222222222ffffff2fffffffffffff2fffffffffffff2ff2ffffffff2ffffff2ffffffff2ffffff2f2ffff2ffffffffff2fffffffffffffffffffffffffff22222222222222222fffffffff
            ff22222222222222222ffffff2fffffffffffff2fffffffffffff2fff2ffffff22ffffff2ffffffff2ffffff22ffffff2fffffffff2fffffffffffffffffffffffffff22222222222222222fffffffff
            ff2222222222222222fffffff2fffffffffffff2ffffffffffff2ffff2ffff22ff2ffffff2fffffff2ffffff2fffffff2ffffffffff22fffffffffffffffffffffffff22222222222222222fffffffff
            ff2222222222222222fffffff2fffffffffffff2ffffffffffff2ffff2fff2ffff2ffffff2fffffff2ffffff2ffffffff2fffffffffff22fffffffffffffffffffffff22222222222222222fffffffff
            ff2222222222222222fffffff2fffffffffffff2fffffffffff2fffff2222ffffff2fffff2fffffff2ffffff2fffffffff2fffffffffff2fffffffffffffffffffffff22222222222222222fffffffff
            ff2222222222222222fffffff2ffffffffffffff2fffffffffffffffffffffffffff2ffff2fffffff2ffffff2fffffffff2ffffffffffff2ffffffffffffffffffffff222222222222222222ffffffff
            ff2222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff22fffff22fffffffff2f2fffffffff2ffffffffffffffffffffff222222222222222222ffffffff
            f22222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff22fffff22222fffffffffffffffffffff2222222222222222222ffffffff
            f22222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222ffffffff
            f22222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222ffffffff
            f2222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222ffffffff
            f2222222222222222222fffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222ffffffff
            f2222222222222222222fffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222ffffffff
            f222222222222222222ffffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222ffffffff
            f222222222222222222ffffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222ffffffff
            f222222222222222222ffffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222ffffffff
            f22222222222222222fffffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222ffffffff
            f22222222222222222fffffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222fffffff
            f22222222222222222fffffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222fffffff
            f22222222222222222ffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222fffffff
            f222222222222222222ffffffffffffffffffffffffffffffffffffffffff2fffffffffffffff2fffffff2ffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222ffffff
            ff22222222222222222ffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222ffffff
            ff22222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222ffffff
            ff22222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222fffff
            ff22222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222fffff
            ff222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222ffff
            ff222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222ffff
            ff222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222ffff
            ff222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222ffff
            fff222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222ffff
            fff222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222ffff
            fff2222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffff222222222222222222222222222fff
            fff2222222222222222222ffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffff222222222222222222222222222fff
            ffff222222222222222222ffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffff222222222222222222222222222fff
            ffff222222222222222222ffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffff222222222222222222222222222fff
            ffff222222222222222222ffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffff222222222222222222222222222fff
            ffff222222222222222222ffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffff222222222222222222222222222fff
            fffff22222222222222222fffffffffffff2222fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffff22222222222222222222222222fff
            fffff222222222222222222fffffffffff2ffff22fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffff22222222222222222222222222fff
            ffff2222222222222222222fffffffffff2ffffff22fffffff2fffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffff2fffffffffff22222222222222222222222222fff
            ffff2222222222222222222fffffffffff2ffffffff22ffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffff22222222222222222222222222fff
            ffff22222222222222222222ffffffffff2fffffffff2ffffff2fffffff2222ffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffff22222222222222222222222222fff
            ffff22222222222222222222ffffffffff2fffffffff2ffffff2fffffff2fff22fff2ffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffff22222222222222222222222222fff
            ffff22222222222222222222ffffffffff2fffffffff2ffffff2fffffff2ffff22ff2ffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffff222222222222222222222222222ff
            fff2222222222222222222222fffffffff2ff2ffffff2ffffff2fffffff2fff22fff2fffffffff2ffff2fffffffffffff2fffffffffffffffffffff2fffffffffff222222222222222222222222222ff
            fff2222222222222222222222fffffffff2fff222ff2ffffffff2ffffff2ff2f2ffff2fffffff22ffff2fffffff2ff2222fffffffff2222ffffffff2fffffffffff222222222222222222222222222ff
            fff2222222222222222222222fffffffff2ffffff22fffffffff2ffffff2ff2f2ffff2ffffff2f2fffff2ffffff2f2fff2fffffffff2ff2ffffffff2fffffffffff222222222222222222222222222ff
            fff2222222222222222222222fffffffff2fffffffffffffffffffffffff22ff2ffff2ffffff2f2fffff2ffffff22ffff2fffffffff2fff2fffffff2ffffffffffff22222222222222222222222222ff
            fff2222222222222222222222fffffffff2ffffffffffffffffffffffffffffffffff2fffff2ff2fffff2ffffff2ffffff2ffffffff2f222fffffff2ffffffffffff22222222222222222222222222ff
            fff2222222222222222222222fffffffff2fffffffffffffffffffffffffffffffffff2fff2fff2fffff2ffffff2ffffff2fffffff2f2f22ffffff2fffffffffffff22222222222222222222222222ff
            fff2222222222222222222222fffffffff2ffffffffffffffffffffffffffffffffffff2f2ffff2fffff2ffffff2ffffff2fffffff22ff2fffffff2fffffffffffff22222222222222222222222222ff
            fff22222222222222222222222ffffffff2fffffffffffffffffffffffffffffffffffff2ffff2ffffff2ffffff2ffffff2fffffffffff2fffffff2fffffffffffff22222222222222222222222222ff
            fff22222222222222222222222ffffffff2ffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2fffffff22ffffffffff2ffffff2ffffffffffffff2222222222222222222222222ff
            ff222222222222222222222222ffffffff2ffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2fffffff22ffffffffff2ffffff22fffffffffffff2222222222222222222222222ff
            ff222222222222222222222222ffffffff2fffffffffffffffffffffffffff22ffffffffffff2ffffffffffffff2fffffffffffffffffff2fffffffffffffffffffff2222222222222222222222222ff
            ff2222222222222222222222222fffffff2fffffffffffffffffffffffffffff22ffffffffff2ffffffffffffffffffffffffffffffffff2fffffffffffffffffffff222222222222222222222222fff
            ff2222222222222222222222222fffffff2fffffffffffffffffffffffffffffff22fffffff2ffffffffffffffffffffffffffffffffffff2ffffffffffffffffffff222222222222222222222222fff
            ff2222222222222222222222222fffffff2fffffffffffffffffffffffffffffffff22fff22fffffffffffffffffffffffffffffffffffff2ffffffffffffffffffff222222222222222222222222fff
            ff2222222222222222222222222fffffff2fffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffff2222222222222222222222ffff
            ff22222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffff2222222222222222222222ffff
            ff22222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffff2222222222222222222222ffff
            fff2222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222ffffffffff2ffffffffffffffffffffff2222222222222222222222ffff
            fff2222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffff22222fff22fffffff2fffffffffffffff222222222222222222222fffff
            fff222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffff222222222222222222222fffff
            fff222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222fffff
            fff222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222ffffff
            fff222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222ffffff
            fff22222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222fffffff
            ffff2222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222fffffff
            ffff2222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222ffffffff
            fff22222222222222222222222ffffffffffffffffffffff22222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffff22222222222222222ffffffff
            fff22222222222222222222222fffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffff2222222222222222ffffffff
            fff22222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffff222222222222222fffffffff
            ffff2222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffff22222222222222fffffffff
            ffff2222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222fffffffffffffffffffffffffffffffffffffff2222222222222ffffffffff
            ffff2222222222222222222222fffffffffffffffffffffffffffffffffffffffffff22222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222ffffffffff
            ffff2222222222222222222222fffffffffffffffffffffffffffffffffffffff2222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222ffffffffff
            fffff222222222222222222222fffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222fffffffffff
            ffffff22222222222222222222fffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222fffffffffff
            ffffff22222222222222222222ffffffffffffffffffffffffffffffffff222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ffffffffffff
            fffffff2222222222222222222ffffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222ffffffffffff
            ffffffff222222222222222222fffffffffffffffffffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fffffffffffff
            fffffffff2222222222222222fffffffffffffffffffffffffffffffffffffff222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffff
            ffffffffff22222222222222fffffffffffffffffffffffffffffffffffffffff2222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffff
            ffffffffffff2222222222ffffffffffffffffffffffffffffffffffffffff222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
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
        premelemetors_CodingArrow += 1
    } else if (tile_index == 1) {
        for (let tile1 of tiles.getTilesByType(listOfTiles[2])) {
            tiles.setWallAt(tile1, false)
        }
        for (let tile1 of tiles.getTilesByType(listOfTiles[1])) {
            tiles.setTileAt(tile1, assets.tile`transparency16`)
        }
        info.changeLifeBy(1)
        info.changeScoreBy(-1)
        premelemetors_CodingArrow += 1
    } else if (tile_index == 2) {
        for (let tile1 of tiles.getTilesByType(listOfTiles[3])) {
            tiles.setWallAt(tile1, false)
        }
        for (let tile1 of tiles.getTilesByType(listOfTiles[2])) {
            tiles.setTileAt(tile1, assets.tile`transparency16`)
        }
        info.changeLifeBy(1)
        info.changeScoreBy(-1)
        premelemetors_CodingArrow += 1
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
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    sendSearchProjectile()
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
let restartGame = false
let projectile: Sprite = null
let ronnie_the_shopper: Sprite = null
let closEst_DistinCe = 0
let closEst: tiles.Location = null
let nextTarget: Image = null
let longText = ""
let list_index = 0
let master_text_list: string[] = []
let master_list: Image[] = []
let listOfTiles: Image[] = []
let text_list: string[] = []
let premelemetors_CodingArrow = 0
let shortText = ""
let listChecked = 0
let buttonToRestart = 0
let showLongIntroText = false
showLongIntroText = true
playGame()
game.onUpdate(function () {
    if (restartGame == true) {
        playGame()
    }
})
