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
            console.log('comparing shots');
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
//# sourceMappingURL=data:application/json;base64,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LENBQUM7QUFDeEUscUJBQU8sQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUMzQixNQUFJO0FBQ0gsa0JBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLGtCQUFHLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDO0FBQ2YscUJBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO0FBQzVCLHNCQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0M7ZUFDRixNQUFNO0FBQ0wsb0JBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2VBQ1o7QUFDRCxxQkFBTyxJQUFJLENBQUM7YUFDYjtXQUNGOzs7ZUE1QlUsSUFBSTtTQUFTLFNBQVM7O3NCQUF0QixJQUFJIiwiZmlsZSI6ImZvZXNMaWIuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9