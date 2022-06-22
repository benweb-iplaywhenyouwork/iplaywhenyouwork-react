class Player {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = 10;
        this.y = 40; 
        this.width = 10;
        this.height = 10;
        this.bottom = 40;
    }

    draw(){
        const gamePanel = this.canvas.current.getContext('2d');
        // gamePanel.fillStyle = '#1f568d';
        // gamePanel.font = '50% Helvetica Neue';
        // gamePanel.fillText("공지사항", this.x, this.y);
        gamePanel.fillStyle = 'green';
        gamePanel.fillRect(this.x, this.y, this.width, this.height);
    }
}
export default Player;