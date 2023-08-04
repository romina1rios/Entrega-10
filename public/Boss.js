

class Boss extends Opponent{
    /**
     * @param game {Game} La instancia del juego al que pertenece el oponente
     */
    constructor(game){
        super(game);
        this.speed*=2;
        this.myImage = BOSS_PICTURE,
        this.myImageDead = BOSS_PICTURE_DEAD;
        this.image.src = this.myImage;
    }

    collide(){
        super.collide();
        this.game.endGame();
    }
} 