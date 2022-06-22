import {useEffect, useRef, useState} from "react";
import Player from "./object/Player";
import Obstacle from "./object/Obstacle";


function Game() {
    const panelRef = useRef(null);
    const player = new Player(panelRef);
    
    let animation;
    let timer = 0;
    let obstacles = [];
    let jumpTimer = 0;
    let jump = false;

    // 문제 : 장애물이 나오는 속도가 컴퓨터의 프레임에 따라 달라짐. 그래서 DeltaTime을 보통 사용하는데 리액트엔 그런 거 없는 거 같네 ㅜ.
    const update = () => {
        const panel = panelRef.current.getContext('2d');
        animation = requestAnimationFrame(update);
        panel.beginPath();
        panel.moveTo(0, 40);
        panel.lineTo(0, 400);
        panel.strokeStyle = "#e0e0e0";
        panel.stroke();
        timer++;
        panel.clearRect(0, 0, panel.width, panel.height);
        if(Math.random() < 0.02){
            let obstacle
            if (Math.random() > 0.5)
                obstacle = new Obstacle(panelRef, 40);
            else
                obstacle = new Obstacle(panelRef, 0);
            obstacles.push(obstacle);
        }
        obstacles.forEach((obs, i, obsArr) => {
            if(obs.x < 10) obsArr.splice(i, 1);
            onCollisionEnter(player, obs);
            obs.x -= 2;
            obs.draw()
            
        })
        if(jump){
            player.y -= 1 ;
            jumpTimer += 2;
        }else{
            player.y += 1;
            if(player.y > player.bottom)
                player.y -= 2;
        }
        
        if(jumpTimer > 100){
            jump = false;
            jumpTimer = 0;
        }
        player.draw(panelRef);

    }


    const onCollisionEnter = (player, obstacle) => {
        const panel = panelRef.current.getContext('2d');
        // 플레이어에서 장애물과 가까운 선 찾기.
        let nearX = player.x;
        let nearY = player.y;
        if (player.x < obstacle.x)
            nearX = obstacle.x;
        else nearX = obstacle.x + obstacle.width;

        if (player.y < obstacle.y)
            nearY = obstacle.y;
        else nearY = obstacle.y + obstacle.height;
        // 거리 계산
        const distanceX = player.x - nearX;
        const distanceY = player.y - nearY;
        // 문제 -> 플레이어가 정사각형이어야 함. player.width거나 player.height이거나 무관.
        if(Math.sqrt((distanceX**2)+(distanceY**2)) < player.height){
            panel.clearRect(0 , 0, panel.width, panel.height);
            cancelAnimationFrame(animation);
        }
        
    }

    
    //canvas 설정
    useEffect(() => {
        const gamePanel = panelRef.current.getContext('2d');
        gamePanel.width = 400;
        gamePanel.height = 50;
        update();
    }, []);
    //space가 눌린 정도로 점프의 정도를 조절할 방법은 없나?
    const spaceInput = (e) => {
        if(e.keyCode === 32 && !jump){
            jump = true;
        }
    }
    document.addEventListener('keydown', spaceInput);


    return (
        
        <canvas ref={panelRef} width="400" height="50"></canvas>
        
    )
}


export default Game;