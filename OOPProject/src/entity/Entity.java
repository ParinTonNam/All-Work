package entity;

import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;
import java.io.IOException;

public class Entity {

    private double x, y, h;
    private double speed;
    private double fallspeed;
    private double jumpheight;
    public BufferedImage play1, play2, play3, icon, dead, right1, right2;
    private String direction;

    protected int spriteCounter = 0;
    protected int spriteNum = 1;

    protected BufferedImage platform;
    protected BufferedImage spike;
    protected BufferedImage superjump;

    public Entity(double x, double y, double h, String platform, String spike, String superjump) {
        this.x = x;
        this.y = y;
        this.h = h;
        try {
            this.platform = ImageIO.read(getClass().getResourceAsStream(platform));
            this.spike = ImageIO.read(getClass().getResourceAsStream(spike));
            this.superjump = ImageIO.read(getClass().getResourceAsStream(superjump));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public Entity(double x, double y, double speed, double fallspeed, double jumpheight, String direction) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.fallspeed = fallspeed;
        this.jumpheight = jumpheight;
        this.direction = direction;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getX() {
        return x;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getY() {
        return y;
    }

    public void setH(double h) {
        this.h = h;
    }

    public double getH() {
        return h;
    }

    public void setSpeed(double speed) {
        this.speed = speed;
    }

    public double getSpeed() {
        return speed;
    }

    public void setFallSpeed(double fallspeed) {
        this.fallspeed = fallspeed;
    }

    public double getFallSpeed() {
        return fallspeed;
    }

    public void setJumpHeight(double jumpheight) {
        this.jumpheight = jumpheight;
    }

    public double getJumpHeight() {
        return jumpheight;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }

    public String getDirection() {
        return direction;
    }

    public void setPlatformImage(String platform) {
        try {
            this.platform = ImageIO.read(getClass().getResourceAsStream(platform));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public BufferedImage getPlatformImage() {
        return platform;
    }

    public void setSpikeImage(String spike) {
        try {
            this.spike = ImageIO.read(getClass().getResourceAsStream(spike));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public BufferedImage getSpikeImage() {
        return spike;
    }
}