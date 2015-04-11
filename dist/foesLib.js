System.register(["aurelia-framework", "dist/diceLib"], function (_export) {
  var Behavior, d6, roll, _get, _inherits, _createClass, _classCallCheck, Character, FeaturedFoe, Mook;

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_distDiceLib) {
      d6 = _distDiceLib.d6;
      roll = _distDiceLib.roll;
    }],
    execute: function () {
      "use strict";

      _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Character = (function () {
        function Character() {
          _classCallCheck(this, Character);

          this.shot = 0;
          this.speed = 5;
          this.defense = 13;
        }

        _createClass(Character, {
          rollInit: {
            value: function rollInit() {
              this.shot = d6() + this.speed;
              return this.shot;
            }
          }
        });

        return Character;
      })();

      FeaturedFoe = _export("FeaturedFoe", (function (_Character) {
        function FeaturedFoe() {
          _classCallCheck(this, FeaturedFoe);

          _get(Object.getPrototypeOf(FeaturedFoe.prototype), "constructor", this).call(this);
          this.name = "New featured foe";
          this.actionValue = 13;
          this.wounds = 0;
          this.speed = 7;
          this.toughness = 7;
        }

        _inherits(FeaturedFoe, _Character);

        _createClass(FeaturedFoe, {
          roll: {
            value: (function (_roll) {
              var _rollWrapper = function roll() {
                return _roll.apply(this, arguments);
              };

              _rollWrapper.toString = function () {
                return _roll.toString();
              };

              return _rollWrapper;
            })(function () {
              this.shot -= 3;
              if (this.shot < 0) {
                this.shot = 0;
              }
              return [roll(parseInt(this.actionValue))];
            })
          }
        });

        return FeaturedFoe;
      })(Character));
      Mook = _export("Mook", (function (_Character2) {
        function Mook() {
          _classCallCheck(this, Mook);

          _get(Object.getPrototypeOf(Mook.prototype), "constructor", this).call(this);
          this.name = "New mooks";
          this.actionValue = 8;
          this.number = 5;
          this.grouped = false;
        }

        _inherits(Mook, _Character2);

        _createClass(Mook, {
          roll: {
            value: (function (_roll2) {
              var _rollWrapper2 = function roll() {
                return _roll2.apply(this, arguments);
              };

              _rollWrapper2.toString = function () {
                return _roll2.toString();
              };

              return _rollWrapper2;
            })(function () {
              this.shot -= 3;
              if (this.shot < 0) {
                this.shot = 0;
              }
              if (this.grouped) {
                var totalValue = parseInt(this.actionValue) + parseInt(this.number) - 1;
                return [roll(totalValue)];
              } else {
                var list = [];
                if (this.number > 0) {
                  for (var i = 0; i < this.number; i++) {
                    list.push(roll(parseInt(this.actionValue)));
                  }
                } else {
                  list = [0];
                }
                return list;
              }
            })
          }
        });

        return Mook;
      })(Character));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvZXNMaWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFFBQVEsRUFDUixFQUFFLEVBQUUsSUFBSSxrREFFVixTQUFTLEVBYUYsV0FBVyxFQW9CWCxJQUFJOzs7O0FBcENULGNBQVEscUJBQVIsUUFBUTs7QUFDUixRQUFFLGdCQUFGLEVBQUU7QUFBRSxVQUFJLGdCQUFKLElBQUk7Ozs7Ozs7Ozs7Ozs7QUFFVixlQUFTO0FBQ0YsaUJBRFAsU0FBUyxHQUNBO2dDQURULFNBQVM7O0FBRVgsY0FBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7QUFDZCxjQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNmLGNBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQ25COztxQkFMRyxTQUFTO0FBT2Isa0JBQVE7bUJBQUEsb0JBQUU7QUFDUixrQkFBSSxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQzlCLHFCQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEI7Ozs7ZUFWRyxTQUFTOzs7QUFhRixpQkFBVztBQUNYLGlCQURBLFdBQVcsR0FDVDtnQ0FERixXQUFXOztBQUVwQixxQ0FGUyxXQUFXLDZDQUVaO0FBQ1IsY0FBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztBQUMvQixjQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUN0QixjQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNoQixjQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNmLGNBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCOztrQkFSVSxXQUFXOztxQkFBWCxXQUFXO0FBVXRCLGNBQUk7Ozs7Ozs7Ozs7O2VBQUEsWUFBRTtBQUNKLGtCQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztBQUNmLGtCQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFDO0FBQ2Ysb0JBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2VBQ2Y7QUFDRCxxQkFBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzQzs7OztlQWhCVSxXQUFXO1NBQVMsU0FBUztBQW9CN0IsVUFBSTtBQUNKLGlCQURBLElBQUksR0FDRjtnQ0FERixJQUFJOztBQUViLHFDQUZTLElBQUksNkNBRUw7QUFDUixjQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztBQUN4QixjQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztBQUNyQixjQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNoQixjQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN0Qjs7a0JBUFUsSUFBSTs7cUJBQUosSUFBSTtBQVNmLGNBQUk7Ozs7Ozs7Ozs7O2VBQUEsWUFBRTtBQUNKLGtCQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztBQUNmLGtCQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFDO0FBQ2Ysb0JBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2VBQ2Y7QUFDRCxrQkFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO0FBQ2Qsb0JBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEUsdUJBQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztlQUMzQixNQUFJO0FBQ0gsb0JBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLG9CQUFHLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDO0FBQ2YsdUJBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO0FBQzVCLHdCQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzttQkFDN0M7aUJBQ0YsTUFBTTtBQUNMLHNCQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDWjtBQUNELHVCQUFPLElBQUksQ0FBQztlQUNiO2FBQ0Y7Ozs7ZUE1QlUsSUFBSTtTQUFTLFNBQVMiLCJmaWxlIjoiZm9lc0xpYi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9