
/* function createStaticObs() {
	var obstacles = ['hay', 'sack', 'crate']
	var index = Math.floor(Math.random()*4)
	var key = obstacles[index]
	this.obstacle = this.add.sprite(gameW/4, 0, key)

	var position = [0.25, 0.50, 0.75]
	var posIndex = Math.floor(Math.random()*3)
	this.obstacle.x = gameW * position(posIndex)
} */


/* 
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

this.goat = this.add.sprite(500, 50, 'goat', 7)
this.anims.create({
	key: 'goat_walk',
	repeat: -1,
	frameRate: 3,
	frames: this.anims.generateFrameNames('goat', {start: 7, end: 4})
})
this.goat.play('goat_walk') */