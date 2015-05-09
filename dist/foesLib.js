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
              this.shot = d6() + parseInt(this.speed);
              return this.shot;
            }
          },
          compareShot: {

            //second argument ensure proper refresh when doing roll()

            value: function compareShot(toComp, myShot) {
              console.log("comparing shots");
              var myShot = parseInt(this.shot);
              var globalShot = parseInt(toComp);
              if (myShot == globalShot) {
                return "green";
              }
              if (myShot > globalShot) {
                return "red";
              }
              return "normal";
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
//# sourceMappingURL=data:application/json;base64,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