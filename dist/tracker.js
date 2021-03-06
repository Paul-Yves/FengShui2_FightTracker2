System.register(['jquery', 'foesLib', 'diceLib'], function (_export) {
  'use strict';

  var FeaturedFoe, Mook, Car, MookCar, d6, d6Explode, Fight, Tracker;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_jquery) {}, function (_foesLib) {
      FeaturedFoe = _foesLib.FeaturedFoe;
      Mook = _foesLib.Mook;
      Car = _foesLib.Car;
      MookCar = _foesLib.MookCar;
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
          this.carList = [];
          this.mookCarList = [];

          this.tracker = tracker;

          this.hasChase = false;
        }

        _createClass(Fight, [{
          key: 'toggleChase',
          value: function toggleChase() {
            this.hasChase = !this.hasChase;
            console.log(this.hasChase);
          }
        }, {
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
          key: 'addCar',
          value: function addCar() {
            var newCar = new Car();
            this.carList.push(newCar);
          }
        }, {
          key: 'addMookCar',
          value: function addMookCar() {
            var newCar = new MookCar();
            this.mookCarList.push(newCar);
          }
        }, {
          key: 'deleteFoe',
          value: function deleteFoe(foe) {
            var idx = this.foeList.indexOf(foe);
            if (idx >= 0) {
              this.foeList.splice(idx, 1);
            }
            idx = this.carList.indexOf(foe);
            if (idx >= 0) {
              this.carList.splice(idx, 1);
            }
            idx = this.mookList.indexOf(foe);
            if (idx >= 0) {
              this.mookList.splice(idx, 1);
            }
            idx = this.mookCarList.indexOf(foe);
            if (idx >= 0) {
              this.mookCarList.splice(idx, 1);
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
            this.carList.forEach(function (foe) {
              var init = foe.rollInit();
              if (init > maxShot) {
                maxShot = init;
              }
            });
            this.mookCarList.forEach(function (foe) {
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

      Tracker = (function () {
        function Tracker() {
          _classCallCheck(this, Tracker);

          this.heading = 'Welcome to the FengShui 2 Fight Tracker App!';
          this.fightList = [];
          this.fightList.push(new Fight(this, 'First Fight'));
          this.currentFight = this.fightList[0];

          this.modalTitle = 'Roll';
          this.rollResult = 0;
          this.sortedResults = [];
          this.catResults = [];

          console.log(this.fightList);
        }

        _createClass(Tracker, [{
          key: 'addFight',
          value: function addFight() {
            this.fightList.push(new Fight(this, 'newFight'));
          }
        }, {
          key: 'delFight',
          value: function delFight() {
            var fightIdx = this.fightList.indexOf(this.currentFight);
            if (fightIdx > -1 && this.fightList.length > 1) {
              this.fightList.splice(fightIdx, 1);
              fightIdx = fightIdx > 0 ? fightIdx - 1 : 0;
              this.currentFight = this.fightList[fightIdx];
            }
          }
        }, {
          key: 'renameFightDialog',
          value: function renameFightDialog() {
            $('#renameDialogModal').modal('show');
          }
        }, {
          key: 'renameFight',
          value: function renameFight(newName) {
            console.log(newName);
            if (newName != '') {
              this.currentFight.name = newName;
            }
            $('#renameDialogModal').modal('hide');
          }
        }, {
          key: 'selectFight',
          value: function selectFight(fight) {
            this.currentFight = fight;
          }
        }]);

        return Tracker;
      })();

      _export('Tracker', Tracker);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3NEQUtNLEtBQUssRUEySEUsT0FBTzs7Ozs7Ozs7NkJBL0haLFdBQVc7c0JBQUUsSUFBSTtxQkFBRSxHQUFHO3lCQUFFLE9BQU87O29CQUMvQixFQUFFOzJCQUFFLFNBQVM7OztBQUdmLFdBQUs7QUFDRSxpQkFEUCxLQUFLLENBQ0csT0FBTyxFQUFFLElBQUksRUFBQztnQ0FEdEIsS0FBSzs7QUFFUCxjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNsQixjQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNkLGNBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ25CLGNBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDOztBQUV0QixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7QUFFdkIsY0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7O3FCQWJHLEtBQUs7O2lCQWVFLHVCQUFFO0FBQ1gsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQy9CLG1CQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztXQUM1Qjs7O2lCQUVLLGtCQUFFO0FBQ04sZ0JBQUksTUFBTSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7QUFDL0IsZ0JBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1dBQzNCOzs7aUJBRU0sbUJBQUU7QUFDUCxnQkFBSSxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUN6QixnQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7V0FDN0I7OztpQkFFSyxrQkFBRTtBQUNOLGdCQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLGdCQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztXQUMzQjs7O2lCQUVTLHNCQUFFO0FBQ1YsZ0JBQUksTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFDM0IsZ0JBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1dBQy9COzs7aUJBRVEsbUJBQUMsR0FBRyxFQUFDO0FBQ1osZ0JBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLGdCQUFHLEdBQUcsSUFBRSxDQUFDLEVBQUM7QUFDUixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzVCO0FBQ0QsZUFBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hDLGdCQUFHLEdBQUcsSUFBRSxDQUFDLEVBQUM7QUFDUixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzVCO0FBQ0QsZUFBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLGdCQUFHLEdBQUcsSUFBRSxDQUFDLEVBQUM7QUFDUixrQkFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdCO0FBQ0QsZUFBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLGdCQUFHLEdBQUcsSUFBRSxDQUFDLEVBQUM7QUFDUixrQkFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hDO1dBQ0Y7OztpQkFFTyxvQkFBRTtBQUNSLGdCQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzVDLGdCQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDaEIsZ0JBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVMsR0FBRyxFQUFDO0FBQ2hDLGtCQUFJLElBQUksR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDMUIsa0JBQUcsSUFBSSxHQUFDLE9BQU8sRUFBQztBQUNkLHVCQUFPLEdBQUcsSUFBSSxDQUFDO2VBQ2hCO2FBQ0YsQ0FBQyxDQUFDO0FBQ0gsZ0JBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVMsR0FBRyxFQUFDO0FBQ2pDLGtCQUFJLElBQUksR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDMUIsa0JBQUcsSUFBSSxHQUFDLE9BQU8sRUFBQztBQUNkLHVCQUFPLEdBQUcsSUFBSSxDQUFDO2VBQ2hCO2FBQ0YsQ0FBQyxDQUFDO0FBQ0gsZ0JBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVMsR0FBRyxFQUFDO0FBQ2hDLGtCQUFJLElBQUksR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDMUIsa0JBQUcsSUFBSSxHQUFDLE9BQU8sRUFBQztBQUNkLHVCQUFPLEdBQUcsSUFBSSxDQUFDO2VBQ2hCO2FBQ0YsQ0FBQyxDQUFDO0FBQ0gsZ0JBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVMsR0FBRyxFQUFDO0FBQ3BDLGtCQUFJLElBQUksR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDMUIsa0JBQUcsSUFBSSxHQUFDLE9BQU8sRUFBQztBQUNkLHVCQUFPLEdBQUcsSUFBSSxDQUFDO2VBQ2hCO2FBQ0YsQ0FBQyxDQUFDO0FBQ0gsZ0JBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1dBQ3JCOzs7aUJBRU0saUJBQUMsR0FBRyxFQUFDO0FBQ1YsZ0JBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLE1BQU0sR0FBQyxHQUFHLENBQUMsSUFBSSxHQUFDLFVBQVUsQ0FBQTtBQUNwRCxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDOztBQUVyQyxnQkFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDO0FBRXJDLGtCQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM3RCxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUM5Qyx1QkFBUSxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFFO2VBQ3BDLENBQUMsQ0FBQzs7QUFFSCxxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDO0FBRXJDLG9CQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2VBQ2xFO0FBQ0Qsa0JBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9DLGtCQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDbEIsbUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDMUQsb0JBQUcsVUFBVSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFDO0FBQzlDLHNCQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO0FBQzFFLDRCQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0MsMkJBQVMsR0FBRyxDQUFDLENBQUM7aUJBQ2YsTUFBTTtBQUNMLDJCQUFTLElBQUksQ0FBQyxDQUFDO2lCQUNoQjtlQUNGO0FBQ0Qsa0JBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7YUFDM0U7O0FBRUQsYUFBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztXQUM3Qjs7O2VBdkhHLEtBQUs7OztBQTJIRSxhQUFPO0FBQ1AsaUJBREEsT0FBTyxHQUNMO2dDQURGLE9BQU87O0FBRWhCLGNBQUksQ0FBQyxPQUFPLEdBQUcsOENBQThDLENBQUM7QUFDOUQsY0FBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDcEIsY0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDcEQsY0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUd0QyxjQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztBQUN6QixjQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNwQixjQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUN4QixjQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzs7QUFFckIsaUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdCOztxQkFkVSxPQUFPOztpQkFnQlYsb0JBQUU7QUFDUixnQkFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7V0FDbEQ7OztpQkFFTyxvQkFBRTtBQUNSLGdCQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekQsZ0JBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztBQUM1QyxrQkFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25DLHNCQUFRLEdBQUcsQUFBQyxRQUFRLEdBQUcsQ0FBQyxHQUFLLFFBQVEsR0FBRyxDQUFDLEdBQUksQ0FBQyxDQUFDO0FBQy9DLGtCQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUM7V0FDRjs7O2lCQUVnQiw2QkFBRTtBQUNqQixhQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7V0FDdkM7OztpQkFFVSxxQkFBQyxPQUFPLEVBQUM7QUFDbEIsbUJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckIsZ0JBQUcsT0FBTyxJQUFJLEVBQUUsRUFBQztBQUNmLGtCQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7YUFDbEM7QUFDRCxhQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7V0FDdkM7OztpQkFFVSxxQkFBQyxLQUFLLEVBQUM7QUFDaEIsZ0JBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1dBQzNCOzs7ZUEzQ1UsT0FBTzs7O3lCQUFQLE9BQU8iLCJmaWxlIjoidHJhY2tlci5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=