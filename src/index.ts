import Phaser from "phaser";

// import iceBackgroundImage from '../assets/ice-background.png';
// import cloudImage from '../assets/cloud.png';

class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.image('cloud', cloudImage);
        // this.load.image('ice-background', iceBackgroundImage);
    }
    create ()
    {
        // this.add.image(400, 300, 'ice-background');
        // this.add.image(200, 300, 'cloud');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: Example,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x:0, y: 200 }
        }
    }
};

const game = new Phaser.Game(config);