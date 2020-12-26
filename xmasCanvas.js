function doFirst(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    /*==========star========= */
    context.beginPath();
    context.strokeStyle = 'gold';
    context.fillStyle='gold';
    context.lineWidth = 5;

    //star right
    context.moveTo(500, 20);
    context.lineTo(530, 50);
    context.lineTo(570, 55);
    context.lineTo(530, 80);
    context.lineTo(550, 120);
    context.lineTo(500, 90);
    
    //star left
    context.moveTo(500, 20);
    context.lineTo(470, 50);
    context.lineTo(430, 55);
    context.lineTo(470, 80);
    context.lineTo(450, 120);
    context.lineTo(500, 90);
    
    context.stroke();
    context.fill();
    context.closePath(500, 70);

    /*==========tree========= */
    context.beginPath();
    context.strokeStyle = 'green';
    context.fillStyle='green';
    context.lineWidth = 5;

    //1
    context.moveTo(500, 100);
    context.lineTo(600, 300);
    context.lineTo(400, 300);
    //2
    context.moveTo(500, 150);
    context.lineTo(700, 500);
    context.lineTo(300, 500);
    //3
    context.moveTo(500, 200);
    context.lineTo(800, 700);
    context.lineTo(200, 700);
    
    context.stroke();
    context.fill(); 
    context.closePath(); 
    
    /**============circle=============== */
    context.beginPath();
    context.fillStyle='red';

    context.arc(500, 500, 20, 0, Math.PI*2, true); 
    context.arc(600, 600, 20, 0, Math.PI*2, true);
    context.arc(400, 400, 20, 0, Math.PI*2, true);
    context.fill(); 
    context.closePath();
    
    context.beginPath();
    context.fillStyle='yellow';

    context.arc(500, 300, 20, 0, Math.PI*2, true);
    context.arc(400, 600, 20, 0, Math.PI*2, true);
    context.fill(); 
    context.closePath();

    /**============trunk=============== */
    context.beginPath();
    context.fillStyle='rgb(101,67,33)';

    context.fillRect(400, 700, 200, 200);
    
    context.fill(); 
    context.closePath();
    
    /**============text=============== */
    context.beginPath();
    context.fillStyle='blue';
    context.font = 'bold 30px Tahoma';
    context.fillText('Merry Xmas', 20, 100);
    context.fillText('and', 80, 150);
    context.fillText('Happy New Year', 20, 200);
    context.lineTo(0, 300);
    context.stroke();
}

window.addEventListener('load', doFirst);
//window.addEventListener('load', doSecond);