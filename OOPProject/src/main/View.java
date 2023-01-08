package main;

import javax.swing.*;

public class View {
    private JFrame window;
    private GamePanel gamePanel;

    public View() {
        window = new JFrame("PoringJump");
        gamePanel = new GamePanel();

        gamePanel.setupGame();
        gamePanel.startGameThread();

        window.add(gamePanel);
        window.pack();
        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        window.setResizable(false);
        window.setLocationRelativeTo(null);
        window.setVisible(true);
    }
}
