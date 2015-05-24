System.register(['jspm_packages/github/components/jquery@2.1.3/jquery.min', 'aurelia-framework', 'foesLib', 'diceLib'], function (_export) {
  'use strict';

  var customElement, bindable, FeaturedFoe, Mook, d6, d6Explode, Fight;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_jspm_packagesGithubComponentsJquery213JqueryMin) {}, function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
    }, function (_foesLib) {
      FeaturedFoe = _foesLib.FeaturedFoe;
      Mook = _foesLib.Mook;
    }, function (_diceLib) {
      d6 = _diceLib.d6;
      d6Explode = _diceLib.d6Explode;
    }],
    execute: function () {
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

        _createClass(Fight, [{
          key: 'addFoe',
          value: function addFoe() {
            var newFoe = new FeaturedFoe();
            this.foeList.push(newFoe);
          }
        }, {
          key: 'addMook',
          value: function addMook() {
            var newMook = new Mook();
            this.mookList.push(newMook);
          }
        }, {
          key: 'deleteFoe',
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
        }, {
          key: 'rollInit',
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
        }, {
          key: 'rollFoe',
          value: function rollFoe(foe) {
            this.tracker.modalTitle = 'Foe ' + foe.name + ' rolled:';
            this.tracker.rollResult = foe.roll();

            if (this.tracker.rollResult.length >= 2) {
              this.tracker.sortedResults = this.tracker.rollResult.slice();
              this.tracker.sortedResults.sort(function (a, b) {
                return parseInt(b) - parseInt(a);
              });

              while (this.tracker.catResults.length > 0) {
                this.tracker.catResults.splice(0, this.tracker.catResults.length);
              }
              var countedVal = this.tracker.sortedResults[0];
              var occurence = 0;
              for (var i = 0; i < this.tracker.sortedResults.length; i++) {
                if (countedVal !== this.tracker.sortedResults[i]) {
                  this.tracker.catResults.push({ 'value': countedVal, 'occurence': occurence });
                  countedVal = this.tracker.sortedResults[i];
                  occurence = 1;
                } else {
                  occurence += 1;
                }
              }
              this.tracker.catResults.push({ 'value': countedVal, 'occurence': occurence });
            }

            $('#myModal').modal('show');
          }
        }]);

        return Fight;
      })();

      _export('Fight', Fight);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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RyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM3RCxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUM5Qyx1QkFBUSxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFFO2VBQ3BDLENBQUMsQ0FBQzs7QUFFSCxxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDO0FBRXJDLG9CQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2VBQ2xFO0FBQ0Qsa0JBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9DLGtCQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDbEIsbUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDMUQsb0JBQUcsVUFBVSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFDO0FBQzlDLHNCQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO0FBQzFFLDRCQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0MsMkJBQVMsR0FBRyxDQUFDLENBQUM7aUJBQ2YsTUFBTTtBQUNMLDJCQUFTLElBQUksQ0FBQyxDQUFDO2lCQUNoQjtlQUNGO0FBQ0Qsa0JBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7YUFDM0U7O0FBRUQsYUFBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtXQUM1Qjs7O2VBakZVLEtBQUs7Ozt1QkFBTCxLQUFLIiwiZmlsZSI6ImZpZ2h0LmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==