class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playercountRef = await database.ref('playercount').once("value");
                if (playercountRef.exists()) {
                    playercount = playercountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }

        
    player1 = createSprite(200,500);
    player1.addImage("player1",spaceshipimg1);
    player1.scale=0.3

    player2 = createSprite(800,500);
    player2.addImage("player2", spaceshipimg1);
    player2.scale=0.3
    players=[player1,player2];

    spaceship=createSprite(10,10,10,10)
asteroid=createSprite(10,10,10,10)
laser=createSprite(10,10,10,10)

    }
    play(){
        
        form.hide();

        Player.getPlayerInfo();
         image(backgroundimg, 0, 0, 1000, 800);
         var x =100;
         var y=200;
        
         drawSprites();
         for(var plr in allPlayers){
            var index =0;
             index = index+1;
             x = 500-allPlayers[plr].distance;
             y=500;

            
             
             players[index-1].x =World.mouseX;
             players[index- 1].y = y;
               players[index].visible=false;

            
                 textSize(25);
                 fill("white");
                 text(allPlayers.player1.name + "'s Score:"+allPlayers.player1.score ,50,50);
                text(allPlayers.player2.name + "'s Score:" + allPlayers.player2.score , 50, 100);

          

         }
        
        
         

         
    
         if (frameCount % 20 === 0) {
             asteroid = createSprite(random(500, 2000), 0, 100, 100);
             asteroid.velocityY = 6;
             asteroid.scale=random(0.4,0.5);
             var rand = Math.round(random(1,5));
             switch(rand){
                 case 1:asteroid.addImage("fruit1", asteroids1img);
                 break;
                 case 2: asteroid.addImage("fruit1", asteroids2img );
                 break;
                 case 3: asteroid.addImage("fruit1", asteroids3img );
                 break;
                 case 4: asteroid.addImage("fruit1", asteroids1img);
                 break;
                 case 5:asteroid.addImage("fruit1",  asteroids2img);
                 break;
             }
             asteroidGroup.add(asteroid);
             
         }
         
      
         if(asteroidGroup.isTouching(player2) || asteroidGroup.isTouching(player1)) {
            asteroidGroup.destroyEach();
            player1.destroy()
            player2.destroy();
            gameState =2;
          }
          
}

 


end(){
console.log("Game Ended");

fill("white")
textSize(100)
text("GAME ENDED",200,300)


}
}
