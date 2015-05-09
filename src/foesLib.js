import {Behavior} from 'aurelia-framework';
import {d6, roll} from 'dist/diceLib'

class Character {
  constructor(){
    this.shot = 0;
    this.speed = 5;
    this.defense = 13;
  }

  rollInit(){
    this.shot = d6() + parseInt(this.speed);
    return this.shot;
  }

  //second argument ensure proper refresh when doing roll()
  compareShot(toComp, myShot){
    console.log('comparing shots');
    var myShot = parseInt(this.shot);
    var globalShot = parseInt(toComp);
    if(myShot == globalShot){
      return 'green';
    }
    if(myShot > globalShot){
      return 'red';
    }
    return 'normal';
  }
}

export class FeaturedFoe extends Character{
  constructor(){
    super();
    this.name = 'New featured foe';
    this.actionValue = 13;
    this.wounds = 0;
    this.speed = 7;
    this.toughness = 7;
  }

  roll(){
    this.shot -= 3;
    if(this.shot < 0){
      this.shot = 0;
    }
    return [roll(parseInt(this.actionValue))];
  }

}

export class Mook extends Character{
  constructor(){
    super();
    this.name = 'New mooks';
    this.actionValue = 8;
    this.number = 5;
    this.grouped = false;
  }

  roll(){
    this.shot -= 3;
    if(this.shot < 0){
      this.shot = 0;
    }
    if(this.grouped){
      var totalValue = parseInt(this.actionValue) + parseInt(this.number) - 1;
      return [roll(totalValue)];
    }else{
      var list = [];
      if(this.number>0){
        for(var i=0;i<this.number;i++){
          list.push(roll(parseInt(this.actionValue)));
        }
      } else {
        list = [0];
      }
      return list;
    }
  }


}