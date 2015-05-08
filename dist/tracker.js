System.register(["jspm_packages/github/components/jquery@2.1.3/jquery.min", "jspm_packages/github/twbs/bootstrap@3.3.2/js/bootstrap.min", "dist/foesLib", "dist/diceLib"], function (_export) {
  var FeaturedFoe, Mook, d6, d6Explode, _createClass, _classCallCheck, Tracker;

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

      Tracker = _export("Tracker", (function () {
        function Tracker() {
          _classCallCheck(this, Tracker);

          this.heading = "Welcome to the FengShui 2 Fight Tracker App!";
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

        _createClass(Tracker, {
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
//# sourceMappingURL=data:application/json;base64,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R0FBQyxHQUFHLENBQUMsSUFBSSxHQUFDLFVBQVUsQ0FBQTtBQUM1QyxrQkFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7O0FBRTdCLGtCQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBQzs7QUFFN0Isb0JBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM3QyxvQkFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RDLHlCQUFRLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUU7aUJBQ3BDLENBQUMsQ0FBQzs7QUFFSCx1QkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUM7O0FBRTdCLHNCQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDbEQ7QUFDRCxvQkFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QyxvQkFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLHFCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDbEQsc0JBQUcsVUFBVSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUM7QUFDdEMsd0JBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBUSxVQUFVLEVBQUUsV0FBWSxTQUFTLEVBQUMsQ0FBQyxDQUFDO0FBQ2xFLDhCQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQyw2QkFBUyxHQUFHLENBQUMsQ0FBQzttQkFDZixNQUFNO0FBQ0wsNkJBQVMsSUFBSSxDQUFDLENBQUM7bUJBQ2hCO2lCQUNGO0FBQ0Qsb0JBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBUSxVQUFVLEVBQUUsV0FBWSxTQUFTLEVBQUMsQ0FBQyxDQUFDO2VBQ25FOztBQUVELGVBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7YUFDNUI7Ozs7ZUFuRlUsT0FBTyIsImZpbGUiOiJ0cmFja2VyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=