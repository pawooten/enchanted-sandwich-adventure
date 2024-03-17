import Phaser from "phaser";
import columnImage from '../assets/column.png';
import platterImage from '../assets/platter.png';
import indigoImage from '../assets/indigo.png';
import limeImage from '../assets/lime.png';
import turquoiseImage from '../assets/turquoise.png';

class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('column', columnImage);
        this.load.image('platter', platterImage);
        this.load.image('indigo', indigoImage);
        this.load.image('lime', limeImage);
        this.load.image('turquoise', turquoiseImage);
    }
    create ()
    {
        // Columns are 120px wide. There are six columns in the play field.
        // Columns are separated by 15px gaps.
        const columnCenters = [60, 196, 332, 468, 604, 740];

        for (const columnCenter of columnCenters) {
            this.add.image(columnCenter, 300, 'column');
            this.add.image(columnCenter, 580, 'platter');
        }

        // Fill column A (left most column) with lime blocks.
        for (let i = 0; i < 13; i++) {
            this.add.image(60, 60 + (40 * i), 'lime');
        }
        
        // Fill column B (second to the left) half full with indigo blocks.
        for (let i = 6; i < 13; i++) {
            this.add.image(196, 60 + (40 * i), 'indigo');
        }

        // Place one turquoise block in column F (right most column).
        this.add.image(740, 540, 'turquoise');
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