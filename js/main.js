var config = {
    type: Phaser.AUTO,
	width: 300,
	height: 780,
	parent: 'phaser-game',
	physics: {
		default: 'arcade',

	},
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config)
// create game height/width variables
var gameH = game.config.height
var gameW = game.config.width


function preload ()
{
//Load Assets
this.load.image('road', 'assets/img/dirt_road.png')
this.load.image('tractor', 'assets/img/Tractor_orange_topview.png') //size: 84x150
this.load.image('hay', 'assets/img/Hay.png') //size: 197x84
this.load.image('sack', 'assets/img/sack.png')
this.load.image('crate', 'assets/img/apple_crate.png')

this.load.spritesheet('bull1', 'assets/img/bull1.png', {frameWidth: 64, frameHeight: 64})
this.load.spritesheet('goat', 'assets/img/goat.png', {frameWidth: 128, frameHeight: 128} )



}

function create ()
{

//Display Background
this.background = this.add.tileSprite(gameW/2, gameH/2, gameW, gameH, 'road')


//Display Images


this.tractor = this.add.image(gameW/4, 680, 'tractor')
this.tractor.displayWidth = gameW * 0.30
this.tractor.scaleY = this.tractor.scaleX

this.hay = this.add.sprite(gameW/4, 0, 'hay')
this.hay.displayWidth = gameW * .40
this.hay.scaleY = this.hay.scaleX

this.sack = this.add.sprite(gameW*.75, 0, 'sack')
this.sack.displayWidth = gameW * .15
this.sack.scaleY = this.sack.scaleX

this.crate = this.add.sprite(gameW*.75, 50, 'crate')
this.crate.displayWidth = gameW * .15
this.crate.scaleY = this.crate.scaleX

this.bull1 = this.add.sprite(0, 30, 'bull1', 0)
this.bull1.displayWidth = gameW * .40
this.bull1.scaleY = this.bull1.scaleX

this.anims.create({
	key: 'walk',
	repeat: -1,
	frameRate: 5,
	frames: this.anims.generateFrameNames('bull1', {start: 0, end: 2})
})
this.bull1.play('walk')

this.goat = this.add.sprite(300, 50, 'goat', 7)
this.anims.create({
	key: 'goat_walk',
	repeat: -1,
	frameRate: 3,
	frames: this.anims.generateFrameNames('goat', {start: 7, end: 4})
})
this.goat.play('goat_walk')

}

function update ()
{
//scroll background
this.background.tilePositionY -= 5

this.hay.y += 5
if (this.hay.y > 780) {
	this.hay.y = 0
}

this.sack.y += 5
if (this.sack.y > 780) {
	this.sack.y = 0
}

this.crate.y += 5
if (this.crate.y > gameH) {
	this.crate.y = 0
}

this.bull1.x += 2
this.bull1.y += 2
if (this.bull1.x > gameW) {
	this.bull1.x = 30
	this.bull1.y = 0
}

}