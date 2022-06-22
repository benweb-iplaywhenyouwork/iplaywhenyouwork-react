class Obstacle {
    constructor(canvas, y){
        this.canvas = canvas;
        this.x = 500;
        this.y = y;
        this.width = 10;
        this.height = 10; 
        
    }
    draw(){
        const gamePanel = this.canvas.current.getContext('2d');
        // const image = new Image();
        // image.src = "https://www.decenter.kr/NewsView/1S3KPOJSVH"
        // image.onload = function(){
        //     gamePanel.drawImage(image, this.x, this.y, 10, 10);
        //     console.log("load");
        // };
        // image.onerror = function(){
        //     console.log("error");
        // };
        gamePanel.fillStyle = '#1f568d';
        gamePanel.fillRect(this.x, this.y, this.width, this.height);

    }
}


export default Obstacle;