package entity;

import main.GamePanel;
import main.KeyHandler;
import java.awt.Graphics2D;

import java.io.IOException;
import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;

public class Player extends Entity {
    GamePanel gp;
    KeyHandler keyH;

    public Player() {
        super(150, 50, 4, 0, -12, "play");
    }

    public Player(GamePanel gp, KeyHandler keyH) {
        super(150, 50, 4, 0, -12, "play");
        this.gp = gp;
        this.keyH = keyH;

        getPlayerImage();
    }

    public void getPlayerImage() {
        try {
            play1 = ImageIO.read(getClass().getResourceAsStream("/player/angel1.png"));
            play2 = ImageIO.read(getClass().getResourceAsStream("/player/angel2.png"));
            play3 = ImageIO.read(getClass().getResourceAsStream("/player/angel3.png"));
            icon = ImageIO.read(getClass().getResourceAsStream("/player/icon.png"));
            dead = ImageIO.read(getClass().getResourceAsStream("/player/dead.png"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void update() {
        this.falling();
        this.dead();

        if (keyH.leftPressed == true) {
            this.goleft();

        } else if (keyH.rightPressed == true) {
            this.goright();

        }
        this.characterMovement();
        
    }
    public void characterMovement(){
        if (spriteCounter > 12) {
            if (spriteNum == 1) {
                spriteNum = 2;
            } else if (spriteNum == 2) {
                spriteNum = 3;
            } else if (spriteNum == 3) {
                spriteNum = 1;
            }
            spriteCounter = 0;
        }
        spriteCounter++;
    }

    public void goleft() {
        this.setDirection("play");
        this.setX(this.getX() - this.getSpeed());
    }

    public void goright() {
        this.setDirection("play");
        this.setX(this.getX() + this.getSpeed());
    }

    public void falling() {
        // fall
        this.setFallSpeed(this.getFallSpeed() + 0.2);
        this.setY(this.getY() + this.getFallSpeed());
        if (this.getY() > 500) {
            this.setFallSpeed(-10);
        }
    }

    public void dead() {
        if (this.getY() >= 502) {
            this.setX(200);
            this.setY(50);
            gp.gameState = gp.gameoverState;
            gp.playSE(3);
            gp.stopMusic();
        }
    }

    public void draw(Graphics2D g2) {
        BufferedImage image = null;

        switch (this.getDirection()) {
            case "play":
                if (spriteNum == 1) {
                    image = play1;
                }
                if (spriteNum == 2) {
                    image = play2;
                }
                if (spriteNum == 3) {
                    image = play3;
                }
                break;
        }
        g2.drawImage(image, (int) this.getX(), (int) this.getY(), 100, 50, null);
    }
}
