package entity;

import main.GamePanel;
import java.awt.Graphics2D;

public class Platforms extends Entity {
    GamePanel gp;
    Player player;
    public Platforms[] platformsPosition;

    public Platforms() {
        super(100, 100, 150, "/object/platform.png", "/object/spike.png", "/object/superjump.png");
    }

    public Platforms(GamePanel gp, Player player) {
        super(100, 100, 150, "/object/platform.png", "/object/spike.png", "/object/superjump.png");
        this.gp = gp;
        this.player = player;
        getPlatformImage();
    }

    public void start() {
        platformsPosition = new Platforms[20];

        for (int i = 0; i < 8; i++) {
            if (i < 6) {
                platformsPosition[i] = new Platforms();
                platformsPosition[i].setX((int) (Math.random() * (400 - platform.getWidth())));
                platformsPosition[i].setY(((int) (Math.random() * 50) + 50) * i);
            } else if (i >= 6 && i < 7) {
                platformsPosition[i] = new Platforms();
                platformsPosition[i].setX((int) (Math.random() * (400 - platform.getWidth())));
                platformsPosition[i].setY(((int) (Math.random() * 50) + 50) * i);
            } else {
                platformsPosition[i] = new Platforms();
                platformsPosition[i].setX((int) (Math.random() * (400 - platform.getWidth())));
                platformsPosition[i].setY(((int) (Math.random() * 50) + 50) * i);
            }
        }
    }

    public void update() {
        this.isOnPlatform();
        this.genNextScreen();
    }

    public void draw(Graphics2D g2) {
        for (int i = 0; i < 8; i++) {
            if (i < 6) {
                g2.drawImage(
                        platform,
                        (int) platformsPosition[i].getX(),
                        (int) platformsPosition[i].getY(),
                        platform.getWidth(),
                        platform.getHeight(),
                        null);
            } else if (i >= 6 && i < 7) {
                g2.drawImage(
                        spike,
                        (int) platformsPosition[i].getX(),
                        (int) platformsPosition[i].getY(),
                        platform.getWidth(),
                        platform.getHeight(),
                        null);
            } else {
                if (gp.getScore() >= 100) {
                    g2.drawImage(
                            superjump,
                            (int) platformsPosition[i].getX(),
                            (int) platformsPosition[i].getY(),
                            platform.getWidth(),
                            platform.getHeight(),
                            null);
                }
            }
        }
    }

    public void hitBoxPlatforms(int i) {
        if ((player.getX() + 60 > platformsPosition[i].getX()) &&
                (player.getX() + 10 < platformsPosition[i].getX() + 60) &&
                (player.getY() + 46 > platformsPosition[i].getY()) &&
                (player.getY() + 46 < platformsPosition[i].getY() + 16) &&
                (player.getY() > 0) && player.getFallSpeed() >= 0) {
            player.setFallSpeed(player.getJumpHeight());
            gp.playSE(5);
        }
    }

    public void hitBoxSpikePlatforms(int i) {
        if ((player.getX() + 60 > platformsPosition[i].getX()) &&
                (player.getX() + 10 < platformsPosition[i].getX() + 60) &&
                (player.getY() + 46 > platformsPosition[i].getY()) &&
                (player.getY() + 46 < platformsPosition[i].getY() + 16) &&
                (player.getY() > 0) && player.getFallSpeed() >= 0) {
            player.setFallSpeed(player.getJumpHeight());
            gp.gameState = gp.gameoverState;
            gp.stopMusic();
            gp.playSE(3);
        }
    }

    public void hitBoxSuperJumpPlatforms(int i) {
        if (gp.getScore() >= 100) {
            if ((player.getX() + 60 > platformsPosition[i].getX()) &&
                    (player.getX() + 10 < platformsPosition[i].getX() + 60) &&
                    (player.getY() + 46 > platformsPosition[i].getY()) &&
                    (player.getY() + 46 < platformsPosition[i].getY() + 16) &&
                    (player.getY() > 0) && player.getFallSpeed() >= 0) {
                player.setFallSpeed(player.getJumpHeight() - 5);
                gp.playSE(4);
            }
        }
    }

    public void isOnPlatform() {
        for (int i = 0; i < 8; i++) {
            if (i < 6) {
                this.hitBoxPlatforms(i);
            } else if (i >= 6 && i < 7) {
                this.hitBoxSpikePlatforms(i);
            } else {
                this.hitBoxSuperJumpPlatforms(i);
            }
        }
    }

    public void genNextScreen() {
        if (player.getY() < this.getH()) {
            for (int i = 0; i < 8; i++) {
                player.setY(this.getH());
                platformsPosition[i].setY(platformsPosition[i].getY() - (int) player.getFallSpeed());
                if (i < 7) {
                    if (platformsPosition[i].getY() > 533) {
                        platformsPosition[i].setY(((int) (Math.random() * 50) - 50));
                        platformsPosition[i].setX((int) (Math.random() * (400 - platform.getWidth())));
                        gp.setScore(gp.getScore() + 5);
                    }
                } else {
                    if (gp.getScore() % 100 == 0) {
                        platformsPosition[i].setY(((int) (Math.random() * 50) - 50));
                        platformsPosition[i].setX((int) (Math.random() * (400 - platform.getWidth())));
                        gp.setScore(gp.getScore() + 5);
                    }
                }
            }
        }
    }
}