System.register(["jspm_packages/github/components/jquery@2.1.3/jquery.min", "aurelia-framework", "dist/foesLib", "dist/diceLib"], function (_export) {
  var customElement, bindable, FeaturedFoe, Mook, d6, d6Explode, _createClass, _classCallCheck, Fight;

  return {
    setters: [function (_jspm_packagesGithubComponentsJquery213JqueryMin) {}, function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
    }, function (_distFoesLib) {
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

      Fight = _export("Fight", (function () {
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
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUksR0FBQyxVQUFVLENBQUE7QUFDcEQsa0JBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7QUFFckMsa0JBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBQzs7QUFFckMsb0JBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzdELG9CQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzlDLHlCQUFRLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUU7aUJBQ3BDLENBQUMsQ0FBQzs7QUFFSCx1QkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDOztBQUVyQyxzQkFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDbEU7QUFDRCxvQkFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0Msb0JBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNsQixxQkFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMxRCxzQkFBRyxVQUFVLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUM7QUFDOUMsd0JBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQVEsVUFBVSxFQUFFLFdBQVksU0FBUyxFQUFDLENBQUMsQ0FBQztBQUMxRSw4QkFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNDLDZCQUFTLEdBQUcsQ0FBQyxDQUFDO21CQUNmLE1BQU07QUFDTCw2QkFBUyxJQUFJLENBQUMsQ0FBQzttQkFDaEI7aUJBQ0Y7QUFDRCxvQkFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBUSxVQUFVLEVBQUUsV0FBWSxTQUFTLEVBQUMsQ0FBQyxDQUFDO2VBQzNFOztBQUVELGVBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7YUFDNUI7Ozs7ZUFqRlUsS0FBSyIsImZpbGUiOiJmaWdodC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9