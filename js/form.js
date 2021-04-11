class Form{
    constructor(){
        this.input=createInput("name")
        this.button=createButton("play")
        this.greeting=createElement("h2")
        this.title=createElement("h1")
        this.reset=createButton('Reset')
    }
    hide(){
      this.input.hide()
      this.button.hide()
      this.greeting.hide()
      this.title.hide()
   
    }
    
display(){
    this.title.html("SPACE SHOOTER")
    this.title.position(200,40)
    this.title.style('font-size','80px')
    this.title.style('color','blue')
    this.input.position(400,300)
    this.input.style('width','200px')
    this.input.style('height','20px')
    this.input.style('color','black')
    this.button.position(400,400)
    this.button.style('width','200px')
    this.button.style('height','70px')
    this.button.style('color','orange')
    this.reset.position(900, 660);
    this.reset.style('width', '100px');
    this.reset.style('height', '30px');
    this.reset.style('background', 'lightpink');

       this.button.mousePressed(() =>{
          this.input.hide()
          this.button.hide()
          this.title.hide()
          player.name = this.input.value();
          playercount += 1;
          player.index = playercount;
          player.update();
          player.updateCount(playercount);
         this.greeting.html("Hello"+player.name)
         this.greeting.position(100,150)
         this.greeting.style('font-size','200px')
         this.greeting.style('color','white')

       })
       this.reset.mousePressed(() => {
        player.updateCount(0);
        game.update(0);
    });


}

}