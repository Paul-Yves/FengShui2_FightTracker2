import 'jspm_packages/github/components/jquery@2.1.3/jquery.min'
import 'jspm_packages/github/twbs/bootstrap@3.3.2/js/bootstrap.min'

import {FeaturedFoe, Mook} from 'dist/foesLib'
import {d6, d6Explode} from 'dist/diceLib'

export class Tracker{
  constructor(){
    this.heading = 'Welcome to the FengShui 2 Fight Tracker App!';
    this.sequence = 0;
    this.shot = 0;
    this.foeList = [];
    this.mookList = [];
    //modal data
    this.modalTitle = "Roll";
    this.rollResult = 0;
    this.sortedResults = [];
    this.catResults = [];
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
    this.sequence += 1;
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