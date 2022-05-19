var p1, ball;
var START = 1;
var PLAY = 0;
var END = 2;
var gameState = START
var bot1, bot2, wp, bg , rede;
var colision1, colision2
var score, pontos;
var gramaImg, ballImg, p1Img,
bot1Img, bot2Img, redeImg;
var chuteSound, golSound;



function preload(){
    gramaImg = loadImage("bg2.jpg");
    ballImg = loadImage("bola.png");
    p1Img = loadImage ( "p1.png");
    bot1Img = loadImage("bot1.png");
    bot2Img = loadImage("bot2.png");
    redeImg = loadImage("rede.png");
    chuteSound = loadSound("chute.mp3");
    golSound = loadSound("goal.mp3")

}

function setup(){
    createCanvas(windowWidth, windowHeight);

    bg = createSprite(width/2, height/2 , 30,30)
    bg.addImage(gramaImg);
    bg.scale = 5;

   // colision1 = createSprite(width/2 - 400, height - 200, 80, 80);
    //colision1.visible = true;

    //colision2 = createSprite(width/2 + 400, height - 200, 80, 80);
    //colision2.visible = true;


    rede = createSprite(width/2 , height - 50, 10, 10)
    rede.addImage(redeImg);
    rede.scale = 12

    p1 = createSprite(width/2, height - 100, 40, 40);
    p1.addImage(p1Img);
    p1.scale = 3
    p1.setCollider("rectangle", 0, 0 , 20, 20);
    

    bot1 = createSprite(width/2 -400, height/2 - 165, 40, 40);
    bot1.addImage(bot1Img);
    bot1.scale = 3;
    bot1.setCollider("rectangle", 0, 0 , 20, 20);
    

    bot2 = createSprite(width/2 + 400, height/2 - 165, 40, 40)
    bot2.addImage(bot2Img);
    bot2.scale = 3;
    bot2.setCollider("rectangle", 0, 0 , 20, 20);

    ball = createSprite( width/2, height/2, 10, 10);
    ball.addImage(ballImg)
    ball.scale = 0.15
    
    pontos = 0;
    
    

    
}

function draw(){
    background('white');

    drawSprites();

    
    

    if(gameState === START){

        ball.visible = true
        
            p1.x = width/2
            bot1.x = width/2 -400
            bot1.y = height/2 - 165
            bot2.y = height/2 - 165
            bot2.x = width/2 + 400;
            ball.x = width/2
            ball.y = height/2
            ball.velocityY = 0

        fill(0);
        textFont("Rubik");
        textSize(30)
        text("Você é um goleiro de uma equipe prestigiada da Europa\nseus companheiros decidem te treinar para a\npartida de amanhã.\n                 Aperte Space para começar!! ", 
        width/2 - 300, 100)
        

        if(keyDown('space')){
            gameState = PLAY;
            ball.velocityY = 10
        }
        
    }

    if(gameState === PLAY){
        
        wp = Math.round(random(1,2))
        score = random(1, 10);

        textSize(20)
        textFont("Fantasy")
        fill(0)
        text("Score: "+ pontos, width/2 - 60 , 40);

        bot1pass();

        bot2pass();
        bot1.y = ball.y
        bot2.y = bot1.y
        ballPass();
    
        

        controls();

    }

    if(ball.y > height - 51 && gameState === PLAY){
        gameState = END;
        ball.y = height/2
        ball.visible = false;
        bot1.y = ball.y
        bot2.y = ball.y
        golSound.play();
    }

    if(gameState === END){
        fill(0);
        textFont("Rubik");
        textSize(30)
        text("AI NÃO... VOCÊ DEIXOU A BOLA ESCAPAR\nCLIQUE R PARA REINICIAR", 
        width/2 - 300, 100);


        if(keyDown('r')){
            gameState = START;
            ball.velocityX = 0
            ball.velocityY = 10
            pontos = 0;
        }
    }
    

    

}

function controls(){

    if(keyDown('d')){
        p1.x = p1.x + 15;
    }

    if(keyDown('a')){
        p1.x = p1.x - 15;
    }
}

function ballPass(){
    if(keyDown('LEFT_ARROW') && ball.collide(p1)){
        pontos = pontos + 100
        ball.velocityY = -10-score;
        ball.velocityX = -10-score;
        chuteSound.play();
    }

    if(keyDown('RIGHT_ARROW') && ball.collide(p1)){
        pontos = pontos + 100
        ball.velocityY = -10-score;
        ball.velocityX = 10+score;
        chuteSound.play();
    }

}

function bot1pass(){
    if((wp === 1) && ball.collide(bot1)){
        ball.velocityX = 10+score+pontos/150
        ball.velocityY = 0
        chuteSound.play();
    }
     if(wp === 2 && ball.collide(bot1)){
         ball.velocityX = 10+score+pontos/150
         ball.velocityY = 10+score+pontos/150
         chuteSound.play();
     }
}

function bot2pass(){
    if((wp === 1) && ball.collide(bot2)){
        ball.velocityX = -10-score-pontos/150
        ball.velocityY = 10+score+pontos/150
        chuteSound.play();
    }
     if(wp === 2 && ball.collide(bot2)){
         ball.velocityX = - 10-score-pontos/150
         ball.velocityY = 0
         chuteSound.play();
         
     }
}

function hide(){
    
}
