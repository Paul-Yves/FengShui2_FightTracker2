import 'jquery'
import {FeaturedFoe, Mook} from 'foesLib'
import {d6, d6Explode} from 'diceLib'


class Fight{
  constructor(tracker, name){
    this.name = name;
    this.sequence = 0;
    this.shot = 0;
    this.foeList = [];
    this.mookList = [];

    this.tracker = tracker;
  }

  addFoe(){
    var newFoe = new FeaturedFoe();
    this.foeList.push(newFoe);
  }

  addMook(){
    var newMook = new Mook();
    this.mookList.push(newMook);
  }

  deleteFoe(foe){
    var idx = this.foeList.indexOf(foe);
    if(idx>=0){
      this.foeList.splice(idx,1);
    }
    idx = this.mookList.indexOf(foe);
    if(idx>=0){
      this.mookList.splice(idx,1);
    }    
  }

  rollInit(){
    this.sequence = parseInt(this.sequence) + 1;
    var maxShot = 0;
    this.foeList.forEach(function(foe){
      var init = foe.rollInit();
      if(init>maxShot){
        maxShot = init;
      }
    });
    this.mookList.forEach(function(foe){
      var init = foe.rollInit();
      if(init>maxShot){
        maxShot = init;
      }
    });
    this.shot = maxShot;
  }

  rollFoe(foe){
    this.tracker.modalTitle = "Foe "+foe.name+" rolled:"
    this.tracker.rollResult = foe.roll();
    //case where we have multiple rolls
    if(this.tracker.rollResult.length >= 2){
      //generating array of sorted result
      this.tracker.sortedResults = this.tracker.rollResult.slice();
      this.tracker.sortedResults.sort(function (a, b) {
        return (parseInt(b) - parseInt(a));
      });
      //generating array of sorted result aggregated by value
      while(this.tracker.catResults.length>0){
        //we empty the array this way so that data-binding erase the array properly in view
        this.tracker.catResults.splice(0,this.tracker.catResults.length);
      }
      var countedVal = this.tracker.sortedResults[0];
      var occurence = 0;
      for (var i = 0; i < this.tracker.sortedResults.length; i++) {
        if(countedVal !== this.tracker.sortedResults[i]){
          this.tracker.catResults.push({"value":countedVal, "occurence":occurence});
          countedVal = this.tracker.sortedResults[i];
          occurence = 1;
        } else {
          occurence += 1;   
        }
      }
      this.tracker.catResults.push({"value":countedVal, "occurence":occurence});
    }
    //displaying the modal
    $('#myModal').modal('show')
  }
}


export class Tracker{
  constructor(){
    this.heading = 'Welcome to the FengShui 2 Fight Tracker App!';
    this.fightList = [];
    this.fightList.push(new Fight(this, 'First Fight'));
    this.currentFight = this.fightList[0];

    this.sequence = 0;
    this.shot = 0;
    this.foeList = [];
    this.mookList = [];
    //modal data
    this.modalTitle = "Roll";
    this.rollResult = 0;
    this.sortedResults = [];
    this.catResults = [];

    console.log(this.fightList);
  }

  addFight(){
    this.fightList.push(new Fight(this, 'newFight'));
  }

  selectFight(fight){
    this.currentFight = fight;
  }

  addFoe(){
    var newFoe = new FeaturedFoe();
    this.foeList.push(newFoe);
  }

  addMook(){
    var newMook = new Mook();
    this.mookList.push(newMook);
  }

  deleteFoe(foe){
    var idx = this.foeList.indexOf(foe);
    if(idx>=0){
      this.foeList.splice(idx,1);
    }
    idx = this.mookList.indexOf(foe);
    if(idx>=0){
      this.mookList.splice(idx,1);
    }    
  }

  rollInit(){
    this.sequence = parseInt(this.sequence) + 1;
    var maxShot = 0;
    this.foeList.forEach(function(foe){
      var init = foe.rollInit();
      if(init>maxShot){
        maxShot = init;
      }
    });
    this.mookList.forEach(function(foe){
      var init = foe.rollInit();
      if(init>maxShot){
        maxShot = init;
      }
    });
    this.shot = maxShot;
  }

  rollFoe(foe){
    this.modalTitle = "Foe "+foe.name+" rolled:"
    this.rollResult = foe.roll();
    //case where we have multiple rolls
    if(this.rollResult.length >= 2){
      //generating array of sorted result
      this.sortedResults = this.rollResult.slice();
      this.sortedResults.sort(function (a, b) {
        return (parseInt(b) - parseInt(a));
      });
      //generating array of sorted result aggregated by value
      while(this.catResults.length>0){
        //we empty the array this way so that data-binding erase the array properly in view
        this.catResults.splice(0,this.catResults.length);
      }
      var countedVal = this.sortedResults[0];
      var occurence = 0;
      for (var i = 0; i < this.sortedResults.length; i++) {
        if(countedVal !== this.sortedResults[i]){
          this.catResults.push({"value":countedVal, "occurence":occurence});
          countedVal = this.sortedResults[i];
          occurence = 1;
        } else {
          occurence += 1;   
        }
      }
      this.catResults.push({"value":countedVal, "occurence":occurence});
    }
    //displaying the modal
    $('#myModal').modal('show')
  }
}