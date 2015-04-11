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
              this.sequence += 1;
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
//# sourceMappingURL=data:application/json;base64,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QUFDNUMsa0JBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDOztBQUU3QixrQkFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUM7O0FBRTdCLG9CQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDN0Msb0JBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0Qyx5QkFBUSxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFFO2lCQUNwQyxDQUFDLENBQUM7O0FBRUgsdUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDOztBQUU3QixzQkFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2xEO0FBQ0Qsb0JBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkMsb0JBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNsQixxQkFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2xELHNCQUFHLFVBQVUsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFDO0FBQ3RDLHdCQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQVEsVUFBVSxFQUFFLFdBQVksU0FBUyxFQUFDLENBQUMsQ0FBQztBQUNsRSw4QkFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsNkJBQVMsR0FBRyxDQUFDLENBQUM7bUJBQ2YsTUFBTTtBQUNMLDZCQUFTLElBQUksQ0FBQyxDQUFDO21CQUNoQjtpQkFDRjtBQUNELG9CQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQVEsVUFBVSxFQUFFLFdBQVksU0FBUyxFQUFDLENBQUMsQ0FBQztlQUNuRTs7QUFFRCxlQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQzVCOzs7O2VBbkZVLE9BQU8iLCJmaWxlIjoidHJhY2tlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9