System.register(['aurelia-framework', 'diceLib'], function (_export) {
  'use strict';

  var Behavior, d6, _roll, Character, FeaturedFoe, Mook;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_diceLib) {
      d6 = _diceLib.d6;
      _roll = _diceLib.roll;
    }],
    execute: function () {
      Character = (function () {
        function Character() {
          _classCallCheck(this, Character);

          this.shot = 0;
          this.speed = 5;
          this.defense = 13;
        }

        _createClass(Character, [{
          key: 'rollInit',
          value: function rollInit() {
            this.shot = d6() + parseInt(this.speed);
            return this.shot;
          }
        }, {
          key: 'compareShot',
          value: function compareShot(toComp, myShot) {
            var myShot = parseInt(this.shot);
            var globalShot = parseInt(toComp);
            if (myShot == globalShot) {
              return 'green';
            }
            if (myShot > globalShot) {
              return 'red';
            }
            return 'normal';
          }
        }]);

        return Character;
      })();

      FeaturedFoe = (function (_Character) {
        function FeaturedFoe() {
          _classCallCheck(this, FeaturedFoe);

          _get(Object.getPrototypeOf(FeaturedFoe.prototype), 'constructor', this).call(this);
          this.name = 'New featured foe';
          this.actionValue = 13;
          this.wounds = 0;
          this.speed = 7;
          this.toughness = 7;
        }

        _inherits(FeaturedFoe, _Character);

        _createClass(FeaturedFoe, [{
          key: 'roll',
          value: function roll() {
            this.shot -= 3;
            if (this.shot < 0) {
              this.shot = 0;
            }
            return [_roll(parseInt(this.actionValue))];
          }
        }]);

        return FeaturedFoe;
      })(Character);

      _export('FeaturedFoe', FeaturedFoe);

      Mook = (function (_Character2) {
        function Mook() {
          _classCallCheck(this, Mook);

          _get(Object.getPrototypeOf(Mook.prototype), 'constructor', this).call(this);
          this.name = 'New mooks';
          this.actionValue = 8;
          this.number = 5;
          this.grouped = false;
        }

        _inherits(Mook, _Character2);

        _createClass(Mook, [{
          key: 'roll',
          value: function roll() {
            this.shot -= 3;
            if (this.shot < 0) {
              this.shot = 0;
            }
            if (this.grouped) {
              var totalValue = parseInt(this.actionValue) + parseInt(this.number) - 1;
              return [_roll(totalValue)];
            } else {
              var list = [];
              if (this.number > 0) {
                for (var i = 0; i < this.number; i++) {
                  list.push(_roll(parseInt(this.actionValue)));
                }
              } else {
                list = [0];
              }
              return list;
            }
          }
        }]);

        return Mook;
      })(Character);

      _export('Mook', Mook);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvZXNMaWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzJCQUdNLFNBQVMsRUEwQkYsV0FBVyxFQW9CWCxJQUFJOzs7Ozs7Ozs7Ozs7bUNBakRULFFBQVE7O29CQUNSLEVBQUU7dUJBQUUsSUFBSTs7O0FBRVYsZUFBUztBQUNGLGlCQURQLFNBQVMsR0FDQTtnQ0FEVCxTQUFTOztBQUVYLGNBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsY0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZixjQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUNuQjs7cUJBTEcsU0FBUzs7aUJBT0wsb0JBQUU7QUFDUixnQkFBSSxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7V0FDbEI7OztpQkFHVSxxQkFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDO0FBQ3pCLGdCQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pDLGdCQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbEMsZ0JBQUcsTUFBTSxJQUFJLFVBQVUsRUFBQztBQUN0QixxQkFBTyxPQUFPLENBQUM7YUFDaEI7QUFDRCxnQkFBRyxNQUFNLEdBQUcsVUFBVSxFQUFDO0FBQ3JCLHFCQUFPLEtBQUssQ0FBQzthQUNkO0FBQ0QsbUJBQU8sUUFBUSxDQUFDO1dBQ2pCOzs7ZUF2QkcsU0FBUzs7O0FBMEJGLGlCQUFXO0FBQ1gsaUJBREEsV0FBVyxHQUNUO2dDQURGLFdBQVc7O0FBRXBCLHFDQUZTLFdBQVcsNkNBRVo7QUFDUixjQUFJLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO0FBQy9CLGNBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLGNBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLGNBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsY0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7U0FDcEI7O2tCQVJVLFdBQVc7O3FCQUFYLFdBQVc7O2lCQVVsQixnQkFBRTtBQUNKLGdCQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztBQUNmLGdCQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFDO0FBQ2Ysa0JBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2FBQ2Y7QUFDRCxtQkFBTyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztXQUMzQzs7O2VBaEJVLFdBQVc7U0FBUyxTQUFTOzs2QkFBN0IsV0FBVzs7QUFvQlgsVUFBSTtBQUNKLGlCQURBLElBQUksR0FDRjtnQ0FERixJQUFJOztBQUViLHFDQUZTLElBQUksNkNBRUw7QUFDUixjQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztBQUN4QixjQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztBQUNyQixjQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNoQixjQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN0Qjs7a0JBUFUsSUFBSTs7cUJBQUosSUFBSTs7aUJBU1gsZ0JBQUU7QUFDSixnQkFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7QUFDZixnQkFBRyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBQztBQUNmLGtCQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQzthQUNmO0FBQ0QsZ0JBQUcsSUFBSSxDQUFDLE9BQU8sRUFBQztBQUNkLGtCQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hFLHFCQUFPLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDM0IsTUFBSTtBQUNILGtCQUFJLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZCxrQkFBRyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQztBQUNmLHFCQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQztBQUM1QixzQkFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzdDO2VBQ0YsTUFBTTtBQUNMLG9CQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztlQUNaO0FBQ0QscUJBQU8sSUFBSSxDQUFDO2FBQ2I7V0FDRjs7O2VBNUJVLElBQUk7U0FBUyxTQUFTOztzQkFBdEIsSUFBSSIsImZpbGUiOiJmb2VzTGliLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==