var spaceship
var asteroid,laser
var bg
var spaceshipimg1,asteroids1img,asteroids2img,asteroids3img,laserimg,backgroundimg;
var player,playercount;
var index;
var asteroidGroup;
var gameState=0;
var form;
var player1,player2
var players;
var allPlayers
var shoot
var laserGroup
var laser

function preload() {
    asteroids1img= loadImage("images/as1.png");
    asteroids2img=loadImage("images/as2.png")
    asteroids3img=loadImage("images/as3.png")
    backgroundimg= loadImage("images/background.jpg");
    laserimg= loadImage("images/laser.png");
    spaceshipimg1= loadImage("images/spaceship.png");
    asteroidGroup=new Group();
}

function setup(){
    createCanvas(1000,600)
  database = firebase.database();
    game = new Game();
    game.getState();
    game.start();


  //  bg=createSprite()
  }




function draw(){
background(backgroundimg)
if (playercount === 2) {
    game.update(1);
  }
  if (gameState === 1) {
    clear(); 
    game.play();
  }
  if (gameState === 2) {
   
    game.end();
  }

}
    
