/**
 * 游戏UI类
 */
class GameInfo extends ui.GameInfoUI {
    constructor() {
        super();
        //注册按钮点击事件，点击后暂停游戏
        this.pauseBtn.on("click", this, this.onPauseBtnClick);
        //初始化UI显示
        this.reset();
    }
     
    public reset():void{
        // this.infoLabel.text = "";
        this.title.visible = true;
        this.startBtn.visible = true;
        this.restartBtn.visible = false;
        this.continueBtn.visible = false;
        this.hpLabel.visible = false;
        this.levelLabel.visible = false;
        this.scoreLabel.visible = false;
        this.pauseBtn.visible = false;
        this.hp(5);
        this.level(0);
        this.score(0);
    }
  
    onPauseBtnClick(e: Laya.Event): void {
        //阻止事件冒泡
        e.stopPropagation();
        //暂停游戏
        // this.infoLabel.text = "暂停";
        this.continueBtn.visible = true;
        gameInstance.pause();
        // Laya.stage.once("click", this.continueBtn, this.onStageClick);
        this.continueBtn.once("click", this, this.onStageClick);
    }
  
    onStageClick(e: Laya.Event): void {
        // this.restartBtn.label = "";
        this.continueBtn.visible = false;
        gameInstance.resume();
    }
  
    //显示血量
    public hp(value: number): void {
        this.hpLabel.text = "HP:   " + value;
    }
  
    //显示关卡级别
    public level(value: number): void {
        this.levelLabel.text = "Level:   " + value;
    }
  
    //显示积分
    public score(value: number): void {
        this.scoreLabel.text = "Score:   " + value;
    }
}