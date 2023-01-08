package main;

import java.awt.*;
import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;
import java.io.*;

public class UI {

    GamePanel gp;
    Font maruMonica;
    Graphics2D g2;
    BufferedImage menu, over, how2play;
    public boolean gameFinished = false;
    public int commandNum = 0;
    int subState = 0;

    public UI(GamePanel gp) {
        this.gp = gp;

        try {
            InputStream is = getClass().getResourceAsStream("/font/x12y16pxMaruMonica.ttf");
            maruMonica = Font.createFont(Font.TRUETYPE_FONT, is);
        } catch (FontFormatException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        this.getBGImage();
    }

    public void getBGImage() {
        try {
            menu = ImageIO.read(getClass().getResourceAsStream("/object/menu.png"));
            over = ImageIO.read(getClass().getResourceAsStream("/object/over.png"));
            how2play = ImageIO.read(getClass().getResourceAsStream("/object/how2play.png"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void draw(Graphics2D g2) {

        this.g2 = g2;
        g2.setFont(maruMonica);
        g2.setColor(Color.white);

        if (gp.gameState == gp.titleState) {
            drawTitleScreen();
        }
        if (gp.gameState == gp.playState) {
            drawPlayScreen();
        }
        if (gp.gameState == gp.pauseState) {
            drawPauseScreen();
        }
        if (gp.gameState == gp.optionState) {
            drawOptionScreen();
        }
        if (gp.gameState == gp.gameoverState) {
            drawGameOverScreen();
        }
        if (gp.gameState == gp.tutorialState) {
            drawTutorialScreen();
        }

    }

    public void drawTitleScreen() {
        // BG TitleUI
        g2.drawImage(menu, 0, 0, 400, 533, null);

        // TitleName
        g2.setFont(g2.getFont().deriveFont(Font.BOLD, 50F));
        String text = "Poring SuperJump ;)";
        int x = getXforCenteredText(text);
        int y = 100;

        // ShadowColor
        g2.setColor(Color.black);
        g2.drawString(text, x + 5, y + 5);

        // MainColor
        g2.setColor(Color.white);
        g2.drawString(text, x, y);

        // CharactImage
        x = gp.screenWidth / 2 - (75 * 2) / 2;
        y += gp.tileSize * 2;
        g2.drawImage(gp.player.icon, x, y - 40, 150, 150, null);

        // Menu
        g2.setFont(g2.getFont().deriveFont(Font.BOLD, 32F));

        text = "START GAME";
        x = getXforCenteredText(text);
        y += gp.tileSize * 4;
        g2.drawString(text, x, y);
        if (commandNum == 0) {
            g2.drawString(">", x - gp.tileSize, y);
        }

        text = "HOW TO PLAY";
        x = getXforCenteredText(text);
        y += gp.tileSize;
        g2.drawString(text, x, y);
        if (commandNum == 1) {
            g2.drawString(">", x - gp.tileSize, y);
        }

        text = "QUIT";
        x = getXforCenteredText(text);
        y += gp.tileSize;
        g2.drawString(text, x, y);
        if (commandNum == 2) {
            g2.drawString(">", x - gp.tileSize, y);
        }
    }

    public void drawPlayScreen() {
        g2.setFont(g2.getFont().deriveFont(Font.BOLD, 30F));
        g2.setColor(Color.white);
        g2.drawString("SCORE :" + gp.getScore(), 20, 40);
    }

    public void drawPauseScreen() {
        g2.setFont(g2.getFont().deriveFont(Font.BOLD, 80F));
        g2.setColor(Color.white);
        g2.drawString("PAUSE", getXforCenteredText("PAUSE"), gp.screenHeight / 2);
    }

    public void drawOptionScreen() {
        g2.setColor(Color.white);
        g2.getFont().deriveFont(Font.BOLD, 32F);
        // SubWindow
        int frameX = gp.tileSize / 2;
        int frameY = gp.tileSize;
        int frameWidth = gp.tileSize * 7;
        int frameHeight = gp.tileSize * 10;
        drawSubWindow(frameX, frameY, frameWidth, frameHeight);

        switch (subState) {
            case 0:
                options_top(frameX, frameY);
                break;
        }
    }

    public void drawTutorialScreen() {
        g2.drawImage(how2play, 0, 0, 400, 533, null);
        g2.setFont(g2.getFont().deriveFont(Font.BOLD, 32F));
        String text = "> BACK";
        int x = getXforCenteredText(text);
        int y = gp.screenHeight - 33;
        g2.drawString(text, x, y);
    }

    public void drawGameOverScreen() {
        // BG TitleUI
        g2.drawImage(over, 0, 0, 400, 533, null);

        // TitleName
        g2.setFont(g2.getFont().deriveFont(Font.BOLD, 60F));
        String text = "Game Over";
        int x = getXforCenteredText(text);

        int y = 100;
        // ShadowColor
        g2.setColor(Color.black);
        g2.drawString(text, x + 5, y + 5);

        // MainColor
        g2.setColor(Color.white);
        g2.drawString(text, x, y);

        g2.setFont(g2.getFont().deriveFont(Font.BOLD, 40F));
        text = "Your Score :" + gp.getScore();
        x = getXforCenteredText(text);
        y += gp.tileSize;
        g2.setColor(Color.white);
        g2.drawString(text, x, y);

        // CharactImage
        x = gp.screenWidth / 2 - (120 * 2) / 2;
        y += gp.tileSize * 2;
        g2.drawImage(gp.player.dead, x, y - 40, 250, 150, null);
        // Menu
        g2.setFont(g2.getFont().deriveFont(Font.BOLD, 35F));

        text = "TryAgain";
        x = getXforCenteredText(text);
        y += gp.tileSize * 4;
        g2.drawString(text, x, y);
        if (commandNum == 0) {
            g2.drawString(">>", x - gp.tileSize, y);
        }

        text = "MainMenu";
        x = getXforCenteredText(text);
        y += gp.tileSize;
        g2.drawString(text, x, y);
        if (commandNum == 1) {
            g2.drawString(">>", x - gp.tileSize, y);
        }

    }

    public void options_top(int frameX, int frameY) {
        int textX;
        int textY;

        g2.setFont(g2.getFont().deriveFont(Font.BOLD, 40F));
        // TITLE
        String text = "Option";
        textX = getXforCenteredText(text);
        textY = frameY + gp.tileSize;
        g2.drawString(text, textX, textY);

        // MUSIC
        textY += gp.tileSize;
        g2.drawString("Music", textX - 60, textY);
        if (commandNum == 0) {
            g2.drawString(">", textX - 85, textY);
        }

        // SE
        textY += gp.tileSize;
        g2.drawString("SFX", textX - 60, textY);
        if (commandNum == 1) {
            g2.drawString(">", textX - 85, textY);
        }

        // CONTROL
        textY += gp.tileSize;
        g2.drawString("Main Menu", textX - 60, textY);
        if (commandNum == 2) {
            g2.drawString(">", textX - 85, textY);
            if (gp.keyH.enteredPressed == true) {
                gp.gameState = gp.titleState;
                gp.stopMusic();
            }
        }

        textY += gp.tileSize * 2;
        g2.drawString("Back", textX - 60, textY);
        if (commandNum == 3) {
            g2.drawString(">", textX - 85, textY);
            if (gp.keyH.enteredPressed == true) {
                gp.gameState = gp.playState;
            }
        }

        // Music Volumn
        textX = frameX + (int) (gp.tileSize * 4);
        textY = frameY + gp.tileSize / 2;
        textY += gp.tileSize;
        g2.drawRect(textX, textY, 120, 24);
        int volumeWidth = 24 * gp.music.volumeScale;
        g2.fillRect(textX, textY, volumeWidth, 24);

        textY += gp.tileSize;
        g2.drawRect(textX, textY, 120, 24);
        volumeWidth = 24 * gp.se.volumeScale;
        g2.fillRect(textX, textY, volumeWidth, 24);
    }

    public void drawSubWindow(int x, int y, int width, int height) {
        Color c = new Color(0, 0, 0, 210);
        g2.setColor(c);
        g2.fillRoundRect(x, y, width, height, 35, 35);
        c = new Color(255, 255, 255);
        g2.setColor(c);
        g2.setStroke(new BasicStroke(5));
        g2.drawRoundRect(x + 5, y + 5, width - 10, height - 10, 25, 25);
    }

    public int getXforCenteredText(String text) {
        int length = (int) g2.getFontMetrics().getStringBounds(text, g2).getWidth();
        int x = gp.screenWidth / 2 - length / 2;
        return x;
    }
}
