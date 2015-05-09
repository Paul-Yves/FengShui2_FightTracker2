System.register(["jspm_packages/github/components/jquery@2.1.3/jquery.min", "jspm_packages/github/twbs/bootstrap@3.3.2/js/bootstrap.min", "dist/foesLib", "dist/diceLib"], function (_export) {
  var FeaturedFoe, Mook, d6, d6Explode, _createClass, _classCallCheck, Fight, Tracker;

  return {
    setters: [function (_jspm_packagesGithubComponentsJquery213JqueryMin) {}, function (_jspm_packagesGithubTwbsBootstrap332JsBootstrapMin) {}, function (_distFoesLib) {
      FeaturedFoe = _distFoesLib.FeaturedFoe;
      Mook = _distFoesLib.Mook;
    }, function (_distDiceLib) {
      d6 = _distDiceLib.d6;
      d6Explode = _distDiceLib.d6Explode;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Fight = (function () {
        function Fight(tracker, name) {
          _classCallCheck(this, Fight);

          this.name = name;
          this.sequence = 0;
          this.shot = 0;
          this.foeList = [];
          this.mookList = [];

          this.tracker = tracker;
        }

        _createClass(Fight, {
          addFoe: {
            value: function addFoe() {
              var newFoe = new FeaturedFoe();
              this.foeList.push(newFoe);
            }
          },
          addMook: {
            value: function addMook() {
              var newMook = new Mook();
              this.mookList.push(newMook);
            }
          },
          deleteFoe: {
            value: function deleteFoe(foe) {
              var idx = this.foeList.indexOf(foe);
              if (idx >= 0) {
                this.foeList.splice(idx, 1);
              }
              idx = this.mookList.indexOf(foe);
              if (idx >= 0) {
                this.mookList.splice(idx, 1);
              }
            }
          },
          rollInit: {
            value: function rollInit() {
              this.sequence = parseInt(this.sequence) + 1;
              var maxShot = 0;
              this.foeList.forEach(function (foe) {
                var init = foe.rollInit();
                if (init > maxShot) {
                  maxShot = init;
                }
              });
              this.mookList.forEach(function (foe) {
                var init = foe.rollInit();
                if (init > maxShot) {
                  maxShot = init;
                }
              });
              this.shot = maxShot;
            }
          },
          rollFoe: {
            value: function rollFoe(foe) {
              this.tracker.modalTitle = "Foe " + foe.name + " rolled:";
              this.tracker.rollResult = foe.roll();
              //case where we have multiple rolls
              if (this.tracker.rollResult.length >= 2) {
                //generating array of sorted result
                this.tracker.sortedResults = this.tracker.rollResult.slice();
                this.tracker.sortedResults.sort(function (a, b) {
                  return parseInt(b) - parseInt(a);
                });
                //generating array of sorted result aggregated by value
                while (this.tracker.catResults.length > 0) {
                  //we empty the array this way so that data-binding erase the array properly in view
                  this.tracker.catResults.splice(0, this.tracker.catResults.length);
                }
                var countedVal = this.tracker.sortedResults[0];
                var occurence = 0;
                for (var i = 0; i < this.tracker.sortedResults.length; i++) {
                  if (countedVal !== this.tracker.sortedResults[i]) {
                    this.tracker.catResults.push({ value: countedVal, occurence: occurence });
                    countedVal = this.tracker.sortedResults[i];
                    occurence = 1;
                  } else {
                    occurence += 1;
                  }
                }
                this.tracker.catResults.push({ value: countedVal, occurence: occurence });
              }
              //displaying the modal
              $("#myModal").modal("show");
            }
          }
        });

        return Fight;
      })();

      Tracker = _export("Tracker", (function () {
        function Tracker() {
          _classCallCheck(this, Tracker);

          this.heading = "Welcome to the FengShui 2 Fight Tracker App!";
          this.fightList = [];
          this.fightList.push(new Fight(this, "First Fight"));
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

        _createClass(Tracker, {
          addFight: {
            value: function addFight() {
              this.fightList.push(new Fight(this, "newFight"));
            }
          },
          selectFight: {
            value: function selectFight(fight) {
              this.currentFight = fight;
            }
          },
          addFoe: {
            value: function addFoe() {
              var newFoe = new FeaturedFoe();
              this.foeList.push(newFoe);
            }
          },
          addMook: {
            value: function addMook() {
              var newMook = new Mook();
              this.mookList.push(newMook);
            }
          },
          deleteFoe: {
            value: function deleteFoe(foe) {
              var idx = this.foeList.indexOf(foe);
              if (idx >= 0) {
                this.foeList.splice(idx, 1);
              }
              idx = this.mookList.indexOf(foe);
              if (idx >= 0) {
                this.mookList.splice(idx, 1);
              }
            }
          },
          rollInit: {
            value: function rollInit() {
              this.sequence = parseInt(this.sequence) + 1;
              var maxShot = 0;
              this.foeList.forEach(function (foe) {
                var init = foe.rollInit();
                if (init > maxShot) {
                  maxShot = init;
                }
              });
              this.mookList.forEach(function (foe) {
                var init = foe.rollInit();
                if (init > maxShot) {
                  maxShot = init;
                }
              });
              this.shot = maxShot;
            }
          },
          rollFoe: {
            value: function rollFoe(foe) {
              this.modalTitle = "Foe " + foe.name + " rolled:";
              this.rollResult = foe.roll();
              //case where we have multiple rolls
              if (this.rollResult.length >= 2) {
                //generating array of sorted result
                this.sortedResults = this.rollResult.slice();
                this.sortedResults.sort(function (a, b) {
                  return parseInt(b) - parseInt(a);
                });
                //generating array of sorted result aggregated by value
                while (this.catResults.length > 0) {
                  //we empty the array this way so that data-binding erase the array properly in view
                  this.catResults.splice(0, this.catResults.length);
                }
                var countedVal = this.sortedResults[0];
                var occurence = 0;
                for (var i = 0; i < this.sortedResults.length; i++) {
                  if (countedVal !== this.sortedResults[i]) {
                    this.catResults.push({ value: countedVal, occurence: occurence });
                    countedVal = this.sortedResults[i];
                    occurence = 1;
                  } else {
                    occurence += 1;
                  }
                }
                this.catResults.push({ value: countedVal, occurence: occurence });
              }
              //displaying the modal
              $("#myModal").modal("show");
            }
          }
        });

        return Tracker;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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