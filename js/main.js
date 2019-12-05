var config = {
    type: Phaser.AUTO,
	width: 500,
	height: 1000,
	parent: 'phaser-game',
	physics: {
		default: 'arcade',

	},
    scene: {
        preload: preload,
        create: create,
        update: update
	},
	
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



	//create listener
	cursors = this.input.keyboard.createCursorKeys()

	//create player sprite
	this.playerSprite = this.physics.add.sprite(gameW/4, 800, 'tractor')
	this.playerSprite.displayWidth = gameW * 0.25
	this.playerSprite.scaleY = this.playerSprite.scaleX
	this.playerSprite.setDrag(150, 200)
	this.playerSprite.setCollideWorldBounds(true)

	staticObs = this.physics.add.group()
	
	var hay = staticObs.create(gameW/4, 0, 'hay')
	var sack = staticObs.create(gameW/2, 0, 'sack')
	var crate = staticObs.create(gameW*0.75, 0, 'crate')



	console.log(staticObs)

/* 	var obstacles = ['hay', 'sack', 'crate']
	var index = Math.floor(Math.random()*3)
	var key = obstacles[index]
	this.obstacle = this.physics.add.sprite(gameW/2, 0, key)
	var position = [0.25, 0.50, 0.75]
	var posIndex = Math.floor(Math.random()*3)
	var posX = gameW * position[posIndex]
	this.obstacle.x = posX
	console.log(this.obstacle) */

	this.bull1 = this.add.sprite(0, 30, 'bull1', 0)
	this.bull1.displayWidth = gameW * .40
	this.bull1.scaleY = this.bull1.scaleX
	this.anims.create({
		key: 'walk',
		repeat: -1,
		frameRate: 5,
		frames: this.anims.generateFrameNames('bull1', {start: 0, end: 2}),
		hideOnComplete: true
	})
	this.bull1.play('walk')

	this.goat = this.add.sprite(500, 50, 'goat', 7)
	this.goat.displayWidth = gameW * .35
	this.goat.scaleY = this.goat.scaleX
	this.anims.create({
		key: 'goat_walk',
		repeat: -1,
		frameRate: 3,
		frames: this.anims.generateFrameNames('goat', {start: 7, end: 4}),
		hideOnComplete: true
	})
	this.goat.play('goat_walk')

}

function update ()
{
	//scroll background
	this.background.tilePositionY -= 5

	/* this.obstacle.y += 5 */

	staticObs.setVelocityY(300)
	
	//move player sprite
	if(cursors.up.isDown) {
		this.playerSprite.setVelocityY(-200)
	}
	else if (cursors.down.isDown) {
		this.playerSprite.setVelocityY(300)
	}
	else if (cursors.right.isDown) {
		this.playerSprite.setVelocityX(200)
	}
	else if (cursors.left.isDown) {
		this.playerSprite.setVelocityX(-200)
	}

	

/* 	this.hay.y += 5
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
	} */

	this.bull1.x += 2
	this.bull1.y += 2
	if (this.bull1.x > gameW) {
		this.bull1.x = 30
		this.bull1.y = 0
	}

	this.goat.x -= 2
	this.goat.y += 3

if (this.goat.x == 0) {
	this.goat.x = 500
	this.goat.y = 200
}

}