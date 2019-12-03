var config = {
    type: Phaser.AUTO,
	width: 480,
	height: 640,
	parent: 'phaser-game',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
}

function create ()
{
}

function update ()
{
}