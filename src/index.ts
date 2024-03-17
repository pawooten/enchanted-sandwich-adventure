import Phaser from "phaser";
import columnImage from '../assets/column.png';
import platterImage from '../assets/platter.png';

class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('column', columnImage);
        this.load.image('platter', platterImage);
    }
    create ()
    {
        const columnCenters = [60, 196, 332, 468, 604, 740];

        for (const columnCenter of columnCenters) {
            this.add.image(columnCenter, 300, 'column');
            this.add.image(columnCenter, 580, 'platter');
        }
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