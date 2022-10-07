window.onload = function() {

    var stage = document.getElementById('stage');
    var context = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);

    setInterval(game, 80);

    const vel = 1;

    var vx = vy = 0;
    var px = 10;
    var py = 15;
    var tamanhoPeca = 30;
    var qtdPeca = 20;
    var ax = ay = 15;

    var trail = [];
    tail = 5;


    function game() 
    {
        px += vx;
        py += vy;

        if (px < 0) {
            px = qtdPeca-1;
        }
        if (px > qtdPeca-1) {
            px = 0;
        }
        if (py < 0) {
            py = qtdPeca-1;
        }
        if (py > qtdPeca-1) {
            py = 0;
        }



        context.fillStyle = "black";
        context.fillRect(0,0, stage.width, stage.height);

        context.fillStyle = "Red";
        context.fillRect(ax*tamanhoPeca,ay*tamanhoPeca, tamanhoPeca, tamanhoPeca);

        context.fillStyle = "gray";
        for (var i = 0; i< trail.length; i++) {
            context.fillRect(trail[i].x*tamanhoPeca, trail[i].y*tamanhoPeca, tamanhoPeca-1, tamanhoPeca-1);

            if (trail[i].x == px && trail[i].y == py)
            {
                vx = vy = 0;
                tail = 5;
            }
        }

        trail.push({x:px,y:py})
        while (trail.length > tail) {
            trail.shift();
        }

        if (ax==px && ay==py) {
            tail++;
            ax = Math.floor(Math.random()*qtdPeca);
            ay = Math.floor(Math.random()*qtdPeca);
        }
    }

    function keyPush (event) {
        switch (event.keyCode) {
            case 37: //left
                vx = -vel;
                vy = 0;
                break;
            case 38: //up
                vx = 0;
                vy = -vel;
                break;
            case 39: //right
                vx = vel;
                vy = 0;
                break;
            case 40: //down
                vx = 0;
                vy = vel;
                break;
        }
    }





}