package main;

import java.awt.*;
import javax.swing.*;

import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;
import java.io.IOException;

import entity.*;

public class GamePanel extends JPanel implements Runnable {

    // screentile
    public final int originalTileSize = 16;
    public final int scale = 3;
    public final int tileSize = originalTileSize * scale;
    public final int screenWidth = 400;
    public final int screenHeight = 533;

    // FPS
    int FPS = 60;

    // SYSTEM
    public KeyHandler keyH = new KeyHandler(this);
    public Thread gameThread;
    public Sound music = new Sound();
    public Sound se = new Sound();
    public UI ui = new UI(this);
    public BufferedImage bg, menu;

    // ENTITY AND OBJECT
    public Player player = new Player(this, keyH);
    public Platforms platforms = new Platforms(this, player);

    // GAME STATE
    public int gameState;
    public final int titleState = 0;
    public final int playState = 1;
    public final int pauseState = 2;
    public final int gameoverState = 3;
    public final int optionState = 4;
    public final int tutorialState = 5;

    private int score = 0;

    public GamePanel() {
        this.setPreferredSize(new Dimension(screenWidth, screenHeight));
        this.setDoubleBuffered(true);
        this.addKeyListener(keyH);
        this.setFocusable(true);
        this.getBGImage();
    }

    public void getBGImage() {
        try {
            bg = ImageIO.read(getClass().getResourceAsStream("/object/bg1.png"));
            menu = ImageIO.read(getClass().getResourceAsStream("/object/menu.png"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void setupGame() {
        gameState = titleState;

    }

    public void startGameThread() {
        gameThread = new Thread(this);
        gameThread.start();
        platforms.start();
    }

    @Override
    public void run() {
        double drawInterval = 1000000000 / FPS;
        double delta = 0;
        long lastTime = System.nanoTime();
        long currentTime;
        long timer = 0;
        int drawCount = 0;

        while (gameThread != null) {
            currentTime = System.nanoTime();
            delta += (currentTime - lastTime) / drawInterval;
            timer += (currentTime - lastTime);
            lastTime = currentTime;
            if (delta >= 1) {
                update();
                repaint();
                delta--;
                drawCount++;
            }
            if (timer >= 1000000000) {
                System.out.println("FPS:" + drawCount);
                drawCount = 0;
                timer = 0;
            }
        }
    }

    public void update() {
        if (gameState == playState) {
            player.update();
            platforms.update();
        }
        if (gameState == pauseState) {
            //
        }
    }

    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2 = (Graphics2D) g;
        // title
        if (gameState == titleState) {
            ui.draw(g2);
        }
        // other
        else {
            // GameDraw
            g.drawImage(bg, 0, 0, 400, 533, null);
            player.draw(g2);
            platforms.draw(g2);

            // UI
            ui.draw(g2);
            g2.dispose();
        }
    }

    public void playMusic(int i) {
        music.setFile(i);
        music.play();
        music.loop();
    }

    public void stopMusic() {
        music.stop();
    }

    public void playSE(int i) {
        se.setFile(i);
        se.play();
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getScore() {
        return score;
    }
}