System.register([], function (_export) {
	"use strict";

	_export("d6", d6);

	_export("d6Explode", d6Explode);

	_export("roll", roll);

	function d6() {
		return Math.floor(6 * Math.random()) + 1;
	}

	function d6Explode() {
		var res = d6();
		while (res % 6 == 0) {
			res += d6();
		}
		return res;
	}

	function roll(actionValue) {
		var pos = d6Explode();
		var neg = d6Explode();
		var res = pos - neg;
		if (actionValue != undefined) {
			res += actionValue;
		}
		return res;
	}

	return {
		setters: [],
		execute: function () {}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpY2VMaWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2VBQWdCLEVBQUU7O3NCQUdGLFNBQVM7O2lCQU9ULElBQUk7O0FBVmIsVUFBUyxFQUFFLEdBQUc7QUFDakIsU0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBQyxDQUFDLENBQUM7RUFDeEM7O0FBQ00sVUFBUyxTQUFTLEdBQUU7QUFDMUIsTUFBSSxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUM7QUFDZixTQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDO0FBQ2xCLE1BQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQztHQUNaO0FBQ0QsU0FBTyxHQUFHLENBQUM7RUFDWDs7QUFDTSxVQUFTLElBQUksQ0FBQyxXQUFXLEVBQUM7QUFDaEMsTUFBSSxHQUFHLEdBQUcsU0FBUyxFQUFFLENBQUM7QUFDdEIsTUFBSSxHQUFHLEdBQUcsU0FBUyxFQUFFLENBQUM7QUFDdEIsTUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwQixNQUFHLFdBQVcsSUFBRSxTQUFTLEVBQUM7QUFDekIsTUFBRyxJQUFJLFdBQVcsQ0FBQztHQUNuQjtBQUNELFNBQU8sR0FBRyxDQUFDO0VBQ1giLCJmaWxlIjoiZGljZUxpYi5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=