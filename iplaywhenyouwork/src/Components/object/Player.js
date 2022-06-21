class Player {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = 50;
        this.y = 70; 
        this.width = 30;
        this.height = 10;
    }

    draw(){
        const gamePanel = this.canvas.current.getContext('2d');
        gamePanel.fillStyle = '#1f568d';
        gamePanel.font = '100% Helvetica Neue';
        gamePanel.fillText("공지사항", this.x, this.y);
    }
}
export default Player;